#!/usr/bin/env bash
set -euo pipefail

IMAGE_NAME="portfolio"
CONTAINER_NAME="portfolio"
PORT="${PORT:-3000}"

if docker ps -a --format '{{.Names}}' | grep -q "^${CONTAINER_NAME}$"; then
  docker rm -f "${CONTAINER_NAME}" >/dev/null
fi

if docker images --format '{{.Repository}}' | grep -q "^${IMAGE_NAME}$"; then
  docker rmi -f "${IMAGE_NAME}" >/dev/null || true
fi

docker build -t "${IMAGE_NAME}" .
docker run --name "${CONTAINER_NAME}" -p "${PORT}:3000" "${IMAGE_NAME}"
