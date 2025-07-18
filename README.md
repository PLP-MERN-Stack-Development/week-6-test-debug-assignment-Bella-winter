# 🐞 Bug Tracker App

A full-stack MERN (MongoDB, Express.js, React, Node.js) application that allows users to report, view, update, and delete bugs. This project was built as part of the **Week 6 Test & Debug Assignment – Bella Winter**.

---

## 📌 Features

- ✅ User Authentication (Login/Register)
- 🐛 Report a bug with title, description, and priority
- 📋 View all submitted bugs
- ✏️ Edit and delete bugs
- 🚥 Real-time status updates
- 💬 Alert and Modal UI components
- ⚙️ Backend and frontend debugging
- ✅ Integration and unit tests using Jest & Supertest

---

## 🛠️ Tech Stack

### Frontend
- React
- React Router
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- dotenv

### Testing
- Jest
- Supertest
- React Testing Library (optional)

---

## 🗂️ Project Structure

📦 bug-tracker
├── client/ # Frontend
│ ├── components/ # UI Components (Modal, Alert, Loader)
│ ├── pages/ # Pages (Login, Register, Dashboard, BugList, NotFound)
│ ├── App.jsx # Main App Router
│ ├── main.jsx # Entry Point
│ ├── index.css # Tailwind Styles
│ └── index.html # HTML Template
│
├── server/ # Backend
│ ├── models/ # Mongoose Models
│ ├── routes/ # Express Routes
│ ├── controllers/ # Route Controllers
│ ├── tests/ # Jest/Supertest Files
│ └── server.js # Main Server File
│
├── .env # Environment Variables
├── README.md # This File
└── package.json # Dependencies and Scripts

---

## ⚙️ Installation & Setup

### Backend (Server)
```bash
cd server
pnpm install
cp .env.example .env  # Add your MongoDB URI
pnpm run dev          # Starts the server on port 5000
```
✅ API Endpoints
Method	Route	Description
POST	/api/auth/login	User login
POST	/api/auth/register	Register a new user
GET	/api/bugs	Fetch all bugs
POST	/api/bugs	Create a new bug
PUT	/api/bugs/:id	Update a bug
DELETE	/api/bugs/:id	Delete a bug

🧪 Testing
Backend Tests
bash
Copy code
cd server
pnpm test
📸 Screenshots
You can add screenshots of the login page, bug list page, and bug form here to enhance your README.

👩‍💻 Author
Pauline Mwangi – GitHub

📜 License
MIT License
✅ API Endpoints
Method	Route	Description
POST	/api/auth/login	User login
POST	/api/auth/register	Register a new user
GET	/api/bugs	Fetch all bugs
POST	/api/bugs	Create a new bug
PUT	/api/bugs/:id	Update a bug
DELETE	/api/bugs/:id	Delete a bug

🧪 Testing
Backend Tests
bash
Copy code
cd server
pnpm test
📸 Screenshots
You can add screenshots of the login page, bug list page, and bug form here to enhance your README.

👩‍💻 Author
Pauline Mwangi – GitHub

📜 License
MIT License

yaml
Copy code

