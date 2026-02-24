# Abhijeet Portfolio

Personal portfolio website built with Next.js.

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Docker (Build + Run)

Build the image:

```bash
docker build -t portfolio .
```

Run the container:

```bash
docker run --name portfolio -p 3000:3000 portfolio
```

Open `http://localhost:3000`.

## Docker (One-Command Script)

```bash
bash run-docker.sh
```

This script removes any existing `portfolio` container and image, rebuilds, and runs it.
