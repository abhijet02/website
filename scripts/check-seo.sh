#!/usr/bin/env bash
set -euo pipefail

CANONICAL_EXPECTED="https://abhijeetadhikary.com"
OUT_FILE="out/index.html"

if [[ ! -f "$OUT_FILE" ]]; then
  echo "ERROR: $OUT_FILE not found. Run: npm run build"
  exit 1
fi

echo "Checking canonical tag in $OUT_FILE..."
if rg -q "<link rel=\"canonical\" href=\"${CANONICAL_EXPECTED}\"" "$OUT_FILE"; then
  echo "OK: canonical is ${CANONICAL_EXPECTED}"
else
  echo "ERROR: canonical tag missing or incorrect in $OUT_FILE"
  exit 1
fi

if [[ $# -gt 0 ]]; then
  BASE_URL="$1"

  check_redirect() {
    local from_url="$1"
    local expected_to="$2"
    local headers
    headers="$(curl -sSI "$from_url" || true)"
    local status
    status="$(printf "%s\n" "$headers" | awk '/^HTTP/{print $2}' | tail -n1)"
    local location
    location="$(printf "%s\n" "$headers" | awk 'BEGIN{IGNORECASE=1}/^Location:/{print $2}' | tr -d '\r' | tail -n1)"

    if [[ "$status" =~ ^30[1278]$ ]] && [[ "$location" == "$expected_to" ]]; then
      echo "OK: $from_url -> $location ($status)"
    else
      echo "WARN: $from_url expected redirect to $expected_to, got status=$status location=${location:-none}"
    fi
  }

  echo "Checking host/protocol redirects for $BASE_URL..."
  check_redirect "http://abhijeetadhikary.com/" "${CANONICAL_EXPECTED}/"
  check_redirect "https://www.abhijeetadhikary.com/" "${CANONICAL_EXPECTED}/"
  check_redirect "http://www.abhijeetadhikary.com/" "${CANONICAL_EXPECTED}/"

  echo "Checking canonical URL response..."
  canonical_status="$(curl -sSI "${CANONICAL_EXPECTED}/" | awk '/^HTTP/{print $2}' | tail -n1 || true)"
  if [[ "$canonical_status" == "200" ]]; then
    echo "OK: ${CANONICAL_EXPECTED}/ returns 200"
  else
    echo "WARN: ${CANONICAL_EXPECTED}/ returned status ${canonical_status:-unknown}"
  fi
fi

echo "SEO checks completed."
