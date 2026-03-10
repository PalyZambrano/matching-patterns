default:
    @echo "No default task specified."
    just --list

# Run the development AI Container with Docker
claude:
  docker pull ghcr.io/leoborai/dkc:latest
  docker run -it --rm \
    -v $(pwd):/app \
    -w /app \
    ghcr.io/leoborai/dkc:latest
