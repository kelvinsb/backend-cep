#!/bin/sh

echo "Waitin for mysql to start..."

while ! nc -z database 3306; do
  sleep 0.1
done

echo "MySQL started"

npm run migration:latest
npm start
