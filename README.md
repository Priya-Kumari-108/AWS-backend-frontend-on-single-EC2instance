# Flask Backend & Express Frontend Deployment on a Single EC2 Instance

## 📌 Project Overview
This project demonstrates the deployment of a **Flask backend** and an **Express (Node.js) frontend** on a **single AWS EC2 instance**.  
The frontend communicates with the backend through REST APIs, and the backend stores submitted data in a JSON file.

The goal of this assignment is to understand:
- Full-stack application deployment
- GitHub-based source control
- Running multiple services on a single EC2 instance
- Basic DevOps and cloud concepts

---

## 🛠️ Tech Stack
- **Backend:** Flask (Python)
- **Frontend:** Express.js (Node.js)
- **Cloud Platform:** AWS EC2 (Ubuntu)
- **Version Control:** Git & GitHub
- **Data Storage:** JSON file
- **Ports Used:**
  - Frontend → `3000`
  - Backend → `5000`

---

## 📂 Project Structure

AWS-backend-frontend-on-single-EC2instance/
│
├── backend/
│ ├── app.py
│ ├── requirements.txt
│ └── data.json (created at runtime)
│
├── frontend/
│ ├── server.js
│ ├── package.json
│ └── package-lock.json
│
└── README.md

## 🚀 What This Application Does
1. The **Express frontend** runs on port `3000`
2. The **Flask backend** runs on port `5000`
3. The frontend fetches backend status using an API
4. User submits data through the frontend form
5. Backend receives the data and stores it in a JSON file
6. Stored data can be viewed using a backend API

---

## 🔁 Complete Deployment Process

### Step 1: Code Development
- Flask backend created with REST APIs:
  - `/api/status` → checks backend health
  - `/api/store` → stores data in JSON
  - `/api/data` → returns stored data
- Express frontend created to:
  - Display backend status
  - Send user input to backend

---

### Step 2: GitHub Setup
- Source code pushed to a **public GitHub repository**
- Sensitive and environment-specific files excluded:
  - `venv/`
  - `node_modules/`
  - `*.pem`

---

### Step 3: EC2 Instance Setup
- Ubuntu EC2 instance created
- Connected via SSH using key pair
- Git installed and repository cloned

---

### Step 4: Backend Setup on EC2
```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python3 app.py


---

### Step 5: Frontend Setup on EC2
```bash
cd frontend
npm install
npm start



