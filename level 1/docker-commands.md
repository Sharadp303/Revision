# Docker Commands Cheat Sheet

## Installation & System

| Command | Description |
|---------|-------------|
| `docker version` | Show Docker version info |
| `docker info` | Display system-wide information |
| `docker --help` | Show help for Docker CLI |
| `docker login` | Log in to a Docker registry |
| `docker logout` | Log out from a Docker registry |

---

## Image Commands

| Command | Description |
|---------|-------------|
| `docker images` / `docker image ls` | List all local images |
| `docker pull <image>` | Pull an image from a registry |
| `docker push <image>` | Push an image to a registry |
| `docker build -t <name>:<tag> .` | Build an image from a Dockerfile |
| `docker build -f <Dockerfile> -t <name> .` | Build with a custom Dockerfile name |
| `docker rmi <image>` | Remove an image |
| `docker rmi $(docker images -q)` | Remove all images |
| `docker image prune` | Remove unused images |
| `docker image prune -a` | Remove all unused images (not just dangling) |
| `docker tag <image> <new-image>:<tag>` | Tag an image |
| `docker save -o <file>.tar <image>` | Save an image to a tar archive |
| `docker load -i <file>.tar` | Load an image from a tar archive |
| `docker import <file>.tar <name>:<tag>` | Import a filesystem as an image |
| `docker export <container> -o <file>.tar` | Export a container's filesystem |
| `docker history <image>` | Show image layer history |
| `docker inspect <image>` | Return low-level info about an image |
| `docker image ls --filter "dangling=true"` | List dangling images |

---

## Container Commands

### Lifecycle

| Command | Description |
|---------|-------------|
| `docker run <image>` | Create and start a container |
| `docker run --name <name> <image>` | Run with a custom name |
| `docker run -d <image>` | Run in detached (background) mode |
| `docker run -it <image> /bin/bash` | Run interactively with a TTY |
| `docker run --rm <image>` | Auto-remove container after it exits |
| `docker run -p <host>:<container> <image>` | Map a port to the container |
| `docker run -P <image>` | Map all exposed ports to random host ports |
| `docker run -v <host-path>:<container-path> <image>` | Mount a volume |
| `docker run --env KEY=value <image>` | Set environment variables |
| `docker run --env-file <file> <image>` | Set env vars from a file |
| `docker run --network <network> <image>` | Attach to a specific network |
| `docker run --restart unless-stopped <image>` | Set restart policy |
| `docker run --entrypoint <cmd> <image>` | Override the entrypoint |
| `docker run -w <path> <image>` | Set working directory |
| `docker run --user <user> <image>` | Run as a specific user |
| `docker run --memory="512m" <image>` | Set memory limit |
| `docker run --cpus="1.5" <image>` | Set CPU limit |
| `docker create <image>` | Create a container without starting it |

### Management

| Command | Description |
|---------|-------------|
| `docker ps` | List running containers |
| `docker ps -a` | List all containers (running + stopped) |
| `docker ps -q` | List only container IDs |
| `docker start <container>` | Start a stopped container |
| `docker stop <container>` | Stop a running container |
| `docker stop $(docker ps -q)` | Stop all running containers |
| `docker restart <container>` | Restart a container |
| `docker pause <container>` | Pause a running container |
| `docker unpause <container>` | Unpause a paused container |
| `docker kill <container>` | Force kill a container |
| `docker rm <container>` | Remove a stopped container |
| `docker rm -f <container>` | Force remove a running container |
| `docker rm $(docker ps -aq)` | Remove all containers |
| `docker container prune` | Remove all stopped containers |
| `docker rename <old> <new>` | Rename a container |
| `docker update <container> --memory="1g"` | Update container resource limits |

### Inspection & Interaction

| Command | Description |
|---------|-------------|
| `docker logs <container>` | View container logs |
| `docker logs -f <container>` | Follow container logs |
| `docker logs --tail 100 <container>` | Show last 100 log lines |
| `docker logs -t <container>` | Show timestamps in logs |
| `docker inspect <container>` | Return low-level container info |
| `docker stats` | Show live resource usage for all containers |
| `docker stats <container>` | Show resource usage for a specific container |
| `docker top <container>` | Show running processes in a container |
| `docker exec -it <container> /bin/bash` | Execute a command in a running container |
| `docker exec -it <container> /bin/sh` | Execute sh in a running container (Alpine) |
| `docker attach <container>` | Attach to a running container |
| `docker wait <container>` | Block until container stops, then print exit code |
| `docker port <container>` | Show port mappings |
| `docker diff <container>` | Show changes to filesystem in a container |
| `docker cp <container>:<path> <host-path>` | Copy file from container to host |
| `docker cp <host-path> <container>:<path>` | Copy file from host to container |
| `docker commit <container> <new-image>:<tag>` | Create an image from a container's changes |

---

## Docker Compose

| Command | Description |
|---------|-------------|
| `docker compose up` | Build, (re)create, start all services |
| `docker compose up -d` | Start in detached mode |
| `docker compose up --build` | Rebuild images before starting |
| `docker compose up --scale <service>=<n>` | Scale a service to n instances |
| `docker compose down` | Stop and remove containers, networks |
| `docker compose down -v` | Also remove volumes |
| `docker compose down --rmi all` | Also remove all images |
| `docker compose start` | Start existing containers |
| `docker compose stop` | Stop running containers |
| `docker compose restart` | Restart containers |
| `docker compose pause` | Pause containers |
| `docker compose unpause` | Unpause containers |
| `docker compose ps` | List containers |
| `docker compose logs` | View logs for all services |
| `docker compose logs -f <service>` | Follow logs for a specific service |
| `docker compose exec <service> /bin/bash` | Execute a command in a running service |
| `docker compose run <service> <cmd>` | Run a one-off command in a service |
| `docker compose build` | Build or rebuild services |
| `docker compose build --no-cache` | Build without cache |
| `docker compose pull` | Pull service images |
| `docker compose push` | Push service images |
| `docker compose config` | Validate and view the compose file |
| `docker compose top` | Show running processes |
| `docker compose events` | Receive real-time events |
| `docker compose images` | List images used by services |

---

## Networking

| Command | Description |
|---------|-------------|
| `docker network ls` | List all networks |
| `docker network create <name>` | Create a new network |
| `docker network create --driver bridge <name>` | Create a bridge network |
| `docker network create --driver overlay <name>` | Create an overlay network (Swarm) |
| `docker network inspect <network>` | Inspect a network |
| `docker network connect <network> <container>` | Connect a container to a network |
| `docker network disconnect <network> <container>` | Disconnect a container from a network |
| `docker network rm <network>` | Remove a network |
| `docker network prune` | Remove all unused networks |

---

## Volumes

| Command | Description |
|---------|-------------|
| `docker volume ls` | List all volumes |
| `docker volume create <name>` | Create a named volume |
| `docker volume inspect <volume>` | Inspect a volume |
| `docker volume rm <volume>` | Remove a volume |
| `docker volume prune` | Remove all unused volumes |
| `docker volume rm $(docker volume ls -q)` | Remove all volumes |

---

## Docker Swarm

| Command | Description |
|---------|-------------|
| `docker swarm init` | Initialize a Swarm cluster |
| `docker swarm init --advertise-addr <ip>` | Initialize with a specific IP |
| `docker swarm join --token <token> <ip>:<port>` | Join a Swarm as a worker |
| `docker swarm join-token manager` | Get the token for joining as a manager |
| `docker swarm join-token worker` | Get the token for joining as a worker |
| `docker swarm leave` | Leave the Swarm (worker) |
| `docker swarm leave --force` | Force leave (manager) |
| `docker swarm update` | Update Swarm configuration |

### Swarm Services

| Command | Description |
|---------|-------------|
| `docker service ls` | List all services |
| `docker service create --name <name> <image>` | Create a new service |
| `docker service create --replicas <n> --name <name> <image>` | Create a service with n replicas |
| `docker service inspect <service>` | Inspect a service |
| `docker service ps <service>` | List tasks of a service |
| `docker service scale <service>=<n>` | Scale a service |
| `docker service update <service> --image <new-image>` | Update a service's image |
| `docker service update <service> --replicas <n>` | Update the number of replicas |
| `docker service rm <service>` | Remove a service |
| `docker service logs <service>` | View service logs |

### Swarm Nodes

| Command | Description |
|---------|-------------|
| `docker node ls` | List all nodes in the Swarm |
| `docker node inspect <node>` | Inspect a node |
| `docker node promote <node>` | Promote a worker to a manager |
| `docker node demote <node>` | Demote a manager to a worker |
| `docker node update --availability drain <node>` | Drain a node |
| `docker node update --availability active <node>` | Activate a node |
| `docker node rm <node>` | Remove a node from the Swarm |

### Swarm Configs & Secrets

| Command | Description |
|---------|-------------|
| `docker config create <name> <file>` | Create a config from a file |
| `docker config ls` | List all configs |
| `docker config inspect <config>` | Inspect a config |
| `docker config rm <config>` | Remove a config |
| `docker secret create <name> <file>` | Create a secret from a file |
| `docker secret ls` | List all secrets |
| `docker secret inspect <secret>` | Inspect a secret |
| `docker secret rm <secret>` | Remove a secret |

---

## Docker Stack

| Command | Description |
|---------|-------------|
| `docker stack deploy -c <compose-file> <stack-name>` | Deploy a stack |
| `docker stack ls` | List all stacks |
| `docker stack ps <stack>` | List tasks in a stack |
| `docker stack services <stack>` | List services in a stack |
| `docker stack rm <stack>` | Remove a stack |

---

## Docker System

| Command | Description |
|---------|-------------|
| `docker system df` | Show Docker disk usage |
| `docker system df -v` | Show detailed disk usage |
| `docker system prune` | Remove unused data (containers, networks, dangling images) |
| `docker system prune -a` | Remove ALL unused data (including all unused images) |
| `docker system prune --volumes` | Also remove unused volumes |
| `docker system events` | Get real-time events from the server |
| `docker system info` | Display system-wide information |

---

## Docker Context

| Command | Description |
|---------|-------------|
| `docker context ls` | List all contexts |
| `docker context create <name> --docker host=<url>` | Create a new context |
| `docker context use <name>` | Switch to a context |
| `docker context inspect <name>` | Inspect a context |
| `docker context rm <name>` | Remove a context |

---

## Docker Trust (Content Trust)

| Command | Description |
|---------|-------------|
| `docker trust key generate <name>` | Generate and load a signing key |
| `docker trust sign <image>:<tag>` | Sign an image |
| `docker trust inspect <image>:<tag>` | Return trust info for an image |
| `docker trust revoke <image>:<tag>` | Remove trust data for an image |

---

## Docker Scout (Image Vulnerability Scanning)

| Command | Description |
|---------|-------------|
| `docker scout quickview <image>` | Quick view of vulnerabilities |
| `docker scout cves <image>` | List CVEs in an image |
| `docker scout recommendations <image>` | Get fix recommendations |
| `docker scout compare <image1> <image2>` | Compare two images |

---

## Docker Buildx (Advanced Builds)

| Command | Description |
|---------|-------------|
| `docker buildx ls` | List available builders |
| `docker buildx create --name <name>` | Create a new builder |
| `docker buildx use <name>` | Use a specific builder |
| `docker buildx build --platform linux/amd64,linux/arm64 -t <name> .` | Multi-platform build |
| `docker buildx build --push -t <registry>/<image>:<tag> .` | Build and push |
| `docker buildx prune` | Remove build cache |
| `docker buildx inspect <name>` | Inspect a builder |

---

## Docker Manifest

| Command | Description |
|---------|-------------|
| `docker manifest create <image> <image:arch1> <image:arch2>` | Create a manifest list |
| `docker manifest inspect <image>` | Inspect a manifest |
| `docker manifest push <image>` | Push a manifest list |
| `docker manifest annotate <image> <image:arch> --os <os> --arch <arch>` | Annotate a manifest |

---

## Docker Hub / Registry Search

| Command | Description |
|---------|-------------|
| `docker search <term>` | Search Docker Hub for images |
| `docker search --filter stars=3 <term>` | Filter by minimum stars |
| `docker search --filter is-official <term>` | Show only official images |

---

## Useful Dockerfile Instructions (Reference)

| Instruction | Description |
|-------------|-------------|
| `FROM <image>:<tag>` | Set the base image |
| `RUN <command>` | Execute a command during build |
| `COPY <src> <dest>` | Copy files from host into the image |
| `ADD <src> <dest>` | Copy files (supports URLs and tar extraction) |
| `WORKDIR <path>` | Set the working directory |
| `ENV KEY=value` | Set environment variables |
| `ARG <name>=<default>` | Define build-time variables |
| `EXPOSE <port>` | Document which ports the container listens on |
| `CMD ["executable", "param"]` | Set the default command to run |
| `ENTRYPOINT ["executable"]` | Set the entrypoint executable |
| `VOLUME <path>` | Create a mount point |
| `USER <user>` | Set the user to run as |
| `LABEL key=value` | Add metadata to the image |
| `HEALTHCHECK CMD <command>` | Define a health check |
| `STOPSIGNAL <signal>` | Set the stop signal |
| `SHELL ["executable", "param"]` | Set the default shell |

---

## Cleanup One-Liners

```bash
# Remove all stopped containers
docker container prune -f

# Remove all unused images
docker image prune -a -f

# Remove all unused volumes
docker volume prune -f

# Remove all unused networks
docker network prune -f

# Remove everything at once
docker system prune -a --volumes -f

# Stop and remove all containers
docker stop $(docker ps -q) && docker rm $(docker ps -aq)

# Remove dangling images only
docker rmi $(docker images -f "dangling=true" -q)

# Remove all images not used by containers
docker image prune -a
```

---

## Tips & Best Practices

- Use `.dockerignore` to exclude files from the build context (similar to `.gitignore`).
- Use multi-stage builds to reduce final image size.
- Use `docker build --no-cache` to force a clean build without cache.
- Pin image versions with specific tags instead of `latest` for reproducibility.
- Use `HEALTHCHECK` in Dockerfiles so Docker can monitor container health.
- Use named volumes over bind mounts for persistent data in production.
- Use `docker compose` for multi-container applications.
- Use `docker scan <image>` or `docker scout` to check for vulnerabilities.
- Use `--platform` flag with buildx for cross-platform builds.
- Use `docker system df` to monitor disk usage and clean up regularly.
