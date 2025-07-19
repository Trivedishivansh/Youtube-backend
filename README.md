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
📡 API Endpoints
Auth Routes
POST /api/auth/register – Register new user

POST /api/auth/login – Login user

Video Routes
POST /api/videos – Upload a video

GET /api/videos – Fetch all videos

GET /api/videos/:id – Fetch single video

PUT /api/videos/:id – Update video

DELETE /api/videos/:id – Delete video

Comments
POST /api/comments/:videoId – Add comment

GET /api/comments/:videoId – Fetch all comments for a video

Likes
POST /api/videos/like/:id – Like/Unlike a video

🧪 Testing
Use Postman or Thunder Client to test the APIs.
You can import the collection available in docs/postman_collection.json.

🤝 Contributing
Fork the project

Create a feature branch (git checkout -b feature-name)

Commit your changes (git commit -m 'Added new feature')

Push to your branch (git push origin feature-name)

Open a Pull Request


