#!/bin/bash
set -e

echo "==> Pulling latest changes..."
git pull origin main

echo "==> Building and restarting containers..."
docker compose up -d --build

echo "==> Cleaning up old images..."
docker image prune -f

echo "==> Deploy complete."
docker compose ps
