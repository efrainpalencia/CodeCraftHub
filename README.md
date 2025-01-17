# User Service - Microservice for User Management

## 📌 Overview
This is a **Node.js & MongoDB-based microservice** that handles user authentication and profile management. The service provides the following features:
- **User Registration & Login (JWT Authentication)**
- **User Profile Management**
- **Role-based Access Control (Student, Instructor, Admin)**
- **Dockerized for Easy Deployment**
- **MongoDB as the Database Backend**

## 🚀 Installation Guide

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/your-github-username/user-service.git
cd user-service
```

### **2️⃣ Install Dependencies**
```sh
npm install
```

### **3️⃣ Set Up Environment Variables**
Create a `.env` file in the root directory:
```ini
MONGO_URI=mongodb://admin:password@mongo:27017/userdb?authSource=admin
JWT_SECRET=your_secure_jwt_secret
PORT=5000
```

### **4️⃣ Run the Application Locally**
Start the server with:
```sh
npm start
```
The server will be running on `http://localhost:5000`.

---

## 🐳 Running with Docker

### **1️⃣ Build and Run with Docker Compose**
```sh
docker-compose up --build
```
This will start **MongoDB** and the **User Service**.

### **2️⃣ Run Tests in Postman**
Use the following endpoints to test the service.

---

## 📌 API Endpoints

### **1️⃣ Register a New User**
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/users/register`
- **Body (JSON):**
```json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "mypassword",
  "role": "student"
}
```

### **2️⃣ Login a User**
- **Method:** `POST`
- **URL:** `http://localhost:5000/api/users/login`
- **Body (JSON):**
```json
{
  "email": "john.doe@example.com",
  "password": "mypassword"
}
```

### **3️⃣ Get User Profile (Protected Route)**
- **Method:** `GET`
- **URL:** `http://localhost:5000/api/users/profile`
- **Headers:**
```json
{
  "Authorization": "Bearer YOUR_JWT_TOKEN"
}
```

---

## 📌 Deployment Guide

### **1️⃣ Push to GitHub**
```sh
git add .
git commit -m "Initial commit"
git push origin main
```

### **2️⃣ Running the Service from Docker Hub**
If the image is published on **Docker Hub**, users can pull and run it:
```sh
docker run -p 5000:5000 your-dockerhub-username/user-service:latest
```

---

## 📌 Contributing
Contributions are welcome! Feel free to **fork** this repository, create a new branch, and submit a **Pull Request**.

---

## 📌 License
This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

---

## 📌 Issues & Support
If you encounter any issues, please **open an issue** on GitHub.

