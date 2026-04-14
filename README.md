# DevOps CI/CD Pipeline Simulation

## Overview
This project simulates a real-world CI/CD pipeline based on my experience working in a regulated AWS environment.

It demonstrates:
- Jenkins-based build and deployment workflow
- Multi-environment promotion (CAT → staging → production)
- Application deployment on EC2
- Troubleshooting scenarios and resolutions
- Infrastructure provisioning using Terraform

---

## Architecture

Developer (VS Code) → GitHub Repository → Jenkins Pipeline → Build & Validation (SonarQube) → Deploy to EC2 → CAT → STAGING → PROD

---

## CI/CD Workflow

1. Developer pushes code to GitHub
2. Jenkins pipeline is manually triggered
3. Build process runs (dependencies installed)
4. SonarQube quality checks are simulated
5. Application is deployed to CAT
6. After validation, build is promoted to staging
7. Final promotion to production occurs in a controlled manner

---

## Failure Scenarios Simulated

- Build failure (dependency issues)
- Application runtime failure
- Port conflicts
- Quality gate failure

Each issue is diagnosed using logs and resolved before re-running the pipeline.

---

## Infrastructure

- AWS EC2 (application hosting)
- Terraform (infrastructure provisioning)
- IAM principles (least privilege concept)

---

## Key Learnings

- Understanding of CI/CD pipeline flow
- Importance of controlled deployments
- Troubleshooting using logs and system tools
- Differences between manual and automated deployments

---

## Future Improvements

- Docker containerization
- Kubernetes (EKS) deployment
- Monitoring with Prometheus and Grafana