# Customer Data Management Project

This repository contains a full-stack AWS-powered solution for managing customer data and generating Excel reports. The system is divided into two main web applications:

---

## 📋 1. Customer Form Frontend (Hosted on EC2)

This React-based web app allows users to submit customer information, which is securely stored in DynamoDB.

**Features:**
- User-friendly form to collect customer data.
- Data is stored in DynamoDB.
- Hosted on an EC2 instance using Docker.

**How to Run:**
1. Navigate to the `customer-form-frontend/` folder:
   ```bash
   cd customer-form-frontend
   npm install
   npm start
   ```

---

## 📈 2. Sales Dashboard (Local App for Excel Reports)

This React-based dashboard allows the sales team to generate and download Excel reports from customer data stored in DynamoDB.

**Features:**
- Generate Excel reports via AWS Lambda.
- Download reports from S3.
- Run locally on your machine.

**How to Run:**
1. Navigate to the `sales-dashboard/` folder:
   ```bash
   cd sales-dashboard
   npm install
   npm start
   ```

---

## 🚀 AWS Lambda Excel Export Function

The `lambda-excel-export/` folder contains the Python code for generating Excel files from DynamoDB data.

**How to Deploy:**
1. Zip the contents of the `lambda-excel-export/` folder.
2. Upload the zip file to AWS Lambda.

---

## 📦 Technologies Used

- **Frontend:** React, Docker, AWS EC2
- **Backend:** AWS Lambda, API Gateway, DynamoDB, S3
- **Infrastructure:** Docker, (optional Terraform or CloudFormation)

---

## 📆 Project Structure

```
customer-data-management-project/
|
|-- customer-form-frontend/        # Customer form hosted on EC2
|   |-- public/                    # Static files (HTML, favicon, etc.)
|   |-- src/                       # Source code (React or HTML/JS/CSS)
|   |   |-- App.js                # Main React component (form)
|   |   |-- App.css               # Styles for form frontend
|   |   |-- index.js              # Entry point
|   |   \-- index.css              # Global styles
|   |-- Dockerfile                # Dockerfile for EC2 deployment
|   \-- package.json              # React dependencies
|
|-- sales-dashboard/               # Local app for generating Excel reports
|   |-- public/                    # Static files (HTML, favicon, etc.)
|   |-- src/                       # Source code (React or HTML/JS/CSS)
|   |   |-- App.js                # Main React component (dashboard)
|   |   |-- App.css               # Styles for dashboard
|   |   |-- index.js              # Entry point
|   |   \-- index.css              # Global styles
|   |-- Dockerfile                # Optional: Dockerfile for future deployment
|   \-- package.json               # React dependencies
|
|-- lambda-excel-export/           # AWS Lambda function for generating Excel
|   |-- lambda_function.py        # Python script for Excel generation
|   \-- requirements.txt           # Python dependencies
```

