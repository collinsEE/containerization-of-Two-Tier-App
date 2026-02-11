# containerization-of-Two-Tier-App
Containerization of a Two-Tier Application using Docker, Docker Compose, and Image Scanning with Docker Scout
Here is a comprehensive **README.md** template designed to meet your project’s functional and non-functional requirements. You can copy this directly into your project repository.

---

# Two-Tier Application Containerization & Security

This project demonstrates the containerization of a full-stack application using **Docker**, orchestration via **Docker Compose**, and proactive security scanning using **Docker Scout**.

## 🏗 Project Architecture

The application consists of two tiers:

1. **Web Tier:** A frontend/API service (e.g., Node.js or Python).
2. **Database Tier:** A persistent data store (e.g., PostgreSQL or MongoDB).

---

## 🚀 Getting Started

### Prerequisites

* Docker Desktop installed
* Docker Hub account (required for Docker Scout)
* Terminal/CLI access

### 1. Project Setup

Clone the repository and ensure your directory structure looks like this:

```text
.
├── webapp/
│   ├── Dockerfile
│   ├── app.js
│   └── package.json
├── docker-compose.yml
├── .dockerignore
└── README.md

```

### 2. Build and Run

Use Docker Compose to build the images and start the services in detached mode:

```bash
docker-compose up -d --build

```

*The `--build` flag ensures your Dockerfile optimizations are applied.*

### 3. Verify Connectivity

Check if the containers are running and communicating:

```bash
docker-compose ps
docker-compose logs webapp

```

---

## 🛡 Security Scanning (Docker Scout)

Security is integrated into the development lifecycle. We use **Docker Scout** to identify and remediate vulnerabilities.

### Scan the Web Application Image:

```bash
# 1. Login to Docker Hub
docker login

# 2. Get a quick overview of vulnerabilities
docker scout quickview <your-image-name>

# 3. Get specific remediation advice
docker scout recommendations <your-image-name>

```

**Addressing Vulnerabilities:**

* If vulnerabilities are found in the base image, switch to a more secure version (e.g., from `node:latest` to `node:20-alpine`).
* Re-run the scan to confirm the "Vulnerable Packages" count has decreased.

---

## ⚙️ Optimization & Best Practices

### Performance

* **Small Base Images:** We use **Alpine Linux** distributions to keep images under 100MB.
* **Layer Caching:** Dependency installation is placed before code copying in the `Dockerfile` to speed up subsequent builds.

### Security

* **Non-Root User:** The application runs under a dedicated `appuser` rather than `root`.
* **Secret Management:** Database credentials are passed via environment variables or Docker Secrets, never hardcoded.
* **Least Privilege:** Only necessary ports (e.g., 8080) are exposed to the host.

---

## 🛠 Troubleshooting

* **Database not ready?** The `webapp` service uses `depends_on` with a `condition: service_healthy` to ensure the DB is ready before the app starts.
* **Permission Denied?** Ensure your user has permissions to the Docker socket or run commands with `sudo` where applicable.

---

Would you like me to also provide the **specific code** for a sample `app.js` and `Dockerfile` to make this a fully functional "Hello World" two-tier app?
