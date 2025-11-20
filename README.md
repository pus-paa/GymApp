# GymApp - Gym Management System

A full-stack web application for managing gym memberships, exercise programs, trainers, and subscriptions. Built with React (Vite) for the frontend and Node.js/Express with MongoDB for the backend.

## 🚀 Features

### User Features
- **User Authentication**: Secure registration, login, and password recovery
- **Exercise Library**: Browse exercises with detailed information and video demonstrations
- **Plan Subscription**: View and subscribe to various gym membership plans
- **Trainer Profiles**: Explore trainer information and specialties
- **User Dashboard**: 
  - Profile management
  - View subscribed plans
  - Favorite exercises collection
  - Submit and view feedback
- **Contact Form**: Reach out to the gym administration

### Admin Features
- **Admin Dashboard**: Comprehensive management interface
- **Plan Management**: Create, update, and manage gym membership plans
- **User Management**: View and manage all registered users
- **Subscription Management**: Track and manage user subscriptions
- **Contact Management**: View and respond to user inquiries
- **Feedback Management**: Monitor and manage user feedback

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Axios** - HTTP client
- **React Hook Form** - Form handling
- **React Hot Toast** - Toast notifications
- **AOS** - Animate on scroll library
- **Swiper** - Touch slider

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - Authentication tokens
- **Bcrypt** - Password hashing
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📁 Project Structure

```
GymApp/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable React components
│   │   ├── pages/         # Page components
│   │   ├── context/       # React context providers
│   │   ├── utils/         # Utility functions
│   │   └── images/        # Image assets
│   ├── package.json
│   └── vite.config.js
└── server/                 # Backend Node.js application
    ├── app.js             # Express app entry point
    ├── routes/            # API route handlers
    ├── models/            # MongoDB models
    ├── controlllers/      # Route controllers
    ├── Middlewares/       # Custom middleware
    ├── helpers/           # Helper functions
    └── utils/             # Utility functions
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd GymApp
   ```

2. **Install backend dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../client
   npm install
   ```

4. **Environment Setup**

   Create a `.env` file in the `server` directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   ```

5. **Run the application**

   **Start the backend server:**
   ```bash
   cd server
   npm start
   ```
   The server will run on `http://localhost:5000`

   **Start the frontend development server:**
   ```bash
   cd client
   npm run dev
   ```
   The client will run on `http://localhost:5173` (or the next available port)

## 📝 API Endpoints

### Authentication (`/api/v1/auth`)
- `POST /register` - User registration
- `POST /login` - User login
- `POST /forgot-password` - Password recovery

### Plans (`/api/v1/plan`)
- `GET /` - Get all plans
- `GET /:id` - Get plan by ID
- `POST /` - Create plan (Admin only)
- `PUT /:id` - Update plan (Admin only)
- `DELETE /:id` - Delete plan (Admin only)

### Subscriptions (`/api/v1/subscription`)
- `GET /` - Get all subscriptions
- `POST /` - Create subscription
- `GET /:id` - Get subscription by ID

### Contact (`/api/v1/contact`)
- `POST /` - Submit contact form
- `GET /` - Get all contacts (Admin only)

### Feedback (`/api/v1/feedback`)
- `POST /` - Submit feedback
- `GET /` - Get all feedbacks (Admin only)

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication. Protected routes require a valid token in the request headers.

## 🎨 Styling

The frontend uses Tailwind CSS with custom color scheme:
- Primary colors: Gym-themed red, dark, and gray
- Responsive design for mobile, tablet, and desktop

## 📦 Build for Production

### Frontend
```bash
cd client
npm run build
```
The production build will be in the `client/dist` directory.

### Backend
The backend can be run directly with Node.js or using a process manager like PM2.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Exercise data and API integration
- UI/UX design inspiration
- Open source libraries and frameworks

