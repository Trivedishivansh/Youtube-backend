# YouTube Backend

A backend API for a YouTube-like platform, built with **Node.js, Express, and MongoDB**.  
This project handles **user authentication, video uploads, comments, likes, and subscriptions**.  
Designed with **RESTful APIs** and **JWT-based authentication**.

---

## 🚀 Features
- **User Authentication** – Sign up, login, JWT tokens.
- **Video Management** – Upload, update, delete, and stream videos.
- **Likes & Comments** – Like videos and add comments.
- **Subscriptions** – Subscribe/unsubscribe to channels.
- **Search & Filters** – Search videos by title, tags, or user.
- **Secure API** – Password hashing with bcrypt, protected routes.

---

## 🛠 Tech Stack
- **Node.js** (JavaScript runtime)
- **Express.js** (Web framework)
- **MongoDB & Mongoose** (Database & ORM)
- **Multer** (File uploads)
- **Cloud Storage** (e.g., AWS S3 / Cloudinary – optional)
- **JWT (JSON Web Tokens)** for authentication
- **Bcrypt.js** for password hashing

---

## 📂 Project Structure
youtube-backend/
├── config/ # Database & environment configs
├── controllers/ # API controllers (users, videos, comments)
├── models/ # Mongoose models (User, Video, Comment)
├── routes/ # API routes
├── middleware/ # Auth middlewares
├── uploads/ # Temporary uploaded files
├── utils/ # Helper functions
├── server.js # Entry point
└── package.json

yaml
Copy
Edit
