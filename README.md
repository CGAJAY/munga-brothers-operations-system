# Munga & Brothers Supplies - Digital Operations & Logistics System

A modern web-based system designed to streamline construction material supply, transport logistics, and machinery hire operations for **Munga & Brothers Supplies**.

## 🚀 Project Overview

This system replaces manual processes with a digital platform that enables:
- Efficient order management
- Smart dispatch and delivery tracking
- Driver communication via SMS
- Performance monitoring and reporting

## ✨ Key Features

- **Public Marketing Website** - Professional landing page with quote request
- **Secure Admin & Manager Dashboard**
- **Order Management System**
- **Dispatch & Delivery Management**
- **Driver & Truck Fleet Management**
- **Automated SMS Notifications** (via Africa's Talking)
- **Proof of Delivery Upload**
- **Activity Logging & Basic Reports**

## 👤 User Roles

| Role      | Access Level |
|-----------|--------------|
| **Admin**   | Full system access + User management |
| **Manager** | Orders, Dispatch, Deliveries, Reports |
| **Driver**  | **No login** - Receives assignments via SMS only |

---

## 🛠 Tech Stack

### Backend
- Node.js + Express.js
- MongoDB + Mongoose
- JWT Authentication
- Africa's Talking SMS API

### Frontend
- React.js + Vite
- TailwindCSS
- Axios

### Others
- Cloudinary / AWS S3 (File uploads)
- bcryptjs (Password hashing)
- Winston / Morgan (Logging)

---

## 📁 Project Structure

```bash
munga-brothers-system/
├── server/
│   ├── src/
│   |   ├── config/
│   |   ├── controllers/
│   |   ├── middlewares/
│   |   ├── models/
│   |   ├── routes/
│   |   ├── utils/
│   |   └── server.ts
|   └── .env.example
├── client/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── context/
│   │   └── assets/
|   ├── .env.example
│   └── public/
├── docs/
│   ├── SYSTEM-DESIGN.md
│   ├── API-REFERENCE.md
│   ├── DATABASE-SCHEMA.md
│   ├── WORKFLOWS.md
│   └── SOW.md
└── README.md