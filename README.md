**🛒 Online Grocery Shopping App**

A full-stack MERN application with dedicated Client and Server folders.
Customers can browse groceries, add to cart, place orders, and make payments via COD or Stripe online payments.
Sellers can manage inventory, stock availability, and orders.

**🚀 Features**
🧑‍🤝‍🧑 Customer Features

🏠 Home page with featured & trending products

🛍️ View all products

🌟 Best seller section

🔐 Login / Signup (JWT + Cookies)

📦 My Orders (full order history)

🛒 Add to Cart / Remove from cart

💳 Payment Options

Cash on Delivery (COD)

Online Payment via Stripe

🔔 Toast notifications for feedback (success/error/warnings)

🛒 Seller / Admin Features

➕ Add Products (with Multer image upload)

☁️ Store product images in Cloudinary

📝 View all orders

📦 Mark product In Stock / Out of Stock

🗂️ Manage inventory directly from dashboard

**📂 Project Structure**
Online-GroceryShopping/
│
├── client/                 # React Frontend
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   ├── context/
│   │   └── App.js
│   └── package.json
│
├── server/                 # Node.js + Express Backend
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   │   ├── db.js
│   │   └── cloudinary.js
│   ├── uploads/ (temporary muler files)
│   ├── index.js
│   └── package.json
│
└── README.md

**🛠️ Technologies Used**
Frontend (Client)

React.js

React Router

Context API / Redux (if used)

CSS / Tailwind / Bootstrap

React Toastify for notifications

Backend (Server)

Node.js

Express.js

MongoDB + Mongoose

JWT Authentication

Multer (image upload)

Cloudinary (image cloud storage)

Cookie-Parser

CORS

Dotenv (environment variables)

Stripe (online payments)

**⚙️ Backend API Integrations**

🖼 Image Uploading

Upload product images using Multer

Store images securely using Cloudinary

Automatically delete local temporary uploads

**🍪 Authentication Cookies**

Login/Signup tokens stored using cookie-parser

Secure user sessions
**
🔐 Protected Routes**

Middleware for seller/admin authentication

JSON Web Tokens (JWT)

**💳 Stripe Payment Integration**

Online card/UPI payments

Create Stripe Payment Intent

Store payment status in database

**📦 Future Improvements**

Admin dashboard with charts

Coupon & discount system

Delivery tracking system

Multi-vendor marketplace support

Email notifications

**🧑‍💻 Developed By

Khushboo Gupta**
