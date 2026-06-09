# Pokedex Pipeline

A React-based Pokedex application built with Vite, containerized using a multi-stage Docker build, and deployed securely behind an Nginx reverse proxy with SSL/TLS encryption.

---

## Project Features
* React 18 & Vite 5: Fast and dynamic frontend application.
* PokéAPI Integration: Dynamically fetches and displays data for the first 20 Pokémon.
* Multi-Stage Docker Build: Optimized production image using Node.js 20 Alpine (Builder) and Nginx Alpine (Runner).
* Nginx Reverse Proxy: Handles SSL termination and forwards traffic securely.
* Automated HTTPS Redirection: Automatically routes all HTTP traffic (Port 80) to HTTPS (Port 443).
* Docker Compose Orchestration: Single-command setup for both the application container and the reverse proxy.

---

## Environment & Tech Stack
* OS: Ubuntu 24.04 LTS
* Frontend: React 18, JavaScript, Vite 5
* Containerization: Docker & Docker Compose
* Web Server / Proxy: Nginx
* Security: OpenSSL Self-Signed Certificate

---

## How to Run the Application

Follow these quick steps to get the secure application up and running on your local machine:

### 1. Prerequisites
Make sure you have Docker and Docker Compose installed on your system.

### 2. Clone the Repository
```bash
git clone [https://github.com/sonujha78/pokedex-pipeline.git](https://github.com/sonujha78/pokedex-pipeline.git)
cd pokedex-pipeline

### 3. Build and Start the Containers
Run the deployment command using Docker Compose:
 docker compose up --build -d

### 4. 4. Access the Application
Open your browser and navigate to: https://localhost
(Note: Since this uses a self-signed certificate, your browser might show a security warning. Click "Advanced" and proceed to localhost).
If you attempt to access http://localhost, Nginx will automatically redirect you to the secure https://localhost address.


  Architecture Overview:

User Browser ──(HTTPS: 443)──> Nginx Reverse Proxy (SSL Termination)
                                         │
                                   (Docker Network)
                                         ▼
                             React Application Container
                                         │
                                         ▼
                                      PokéAPI


License:
This project was developed as part of a DevOps deployment pipeline assessment.
Prepared by: Sonu Kumar Jha

 ### What to do next:
1. **Paste** the code block above into the empty file space on GitHub.
2. Click the green **"Commit changes..."** button in the top right corner of your screen.
3. Click **"Commit"** again to save it to your `main` branch. 

Your repository will look flawless and fully complete!
