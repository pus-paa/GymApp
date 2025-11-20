# GymApp Client - Frontend Application

React-based frontend application for the GymApp gym management system. Built with Vite for fast development and optimized production builds.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion and AOS
- **User Authentication**: Secure login, registration, and password recovery
- **Exercise Library**: Browse and search exercises with video demonstrations
- **Plan Management**: View and subscribe to gym membership plans
- **Trainer Profiles**: Explore trainer information
- **Dashboard**: User and admin dashboards with role-based access
- **Real-time Notifications**: Toast notifications for user feedback

## 🛠️ Tech Stack

- **React 18.2.0** - UI library
- **Vite 5.1.4** - Build tool and dev server
- **React Router DOM 6.22.1** - Client-side routing
- **Tailwind CSS 3.4.1** - Utility-first CSS framework
- **Framer Motion 11.11.9** - Animation library
- **Axios 1.6.7** - HTTP client for API calls
- **React Hook Form 7.50.1** - Form state management
- **React Hot Toast 2.4.1** - Toast notifications
- **AOS 2.3.4** - Animate on scroll library
- **Swiper 11.0.7** - Touch slider component
- **React Icons 5.0.1** - Icon library

## 📁 Project Structure

```
client/
├── src/
│   ├── components/          # Reusable components
│   │   ├── admin/          # Admin-specific components
│   │   ├── Button.jsx      # Button components
│   │   ├── Header.jsx      # Navigation header
│   │   ├── Footer.jsx      # Footer component
│   │   ├── Hero.jsx        # Hero section
│   │   ├── Plans.jsx       # Plan display components
│   │   ├── Trainers.jsx    # Trainer components
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── Admin/          # Admin pages
│   │   ├── User/           # User dashboard pages
│   │   ├── Home.jsx        # Home page
│   │   ├── Login.jsx       # Login page
│   │   ├── Register.jsx    # Registration page
│   │   └── ...
│   ├── context/            # React Context providers
│   │   ├── auth.jsx        # Authentication context
│   │   ├── cart.jsx        # Cart context
│   │   └── search.jsx      # Search context
│   ├── utils/              # Utility functions
│   │   └── fetchData.jsx   # API fetch utilities
│   ├── images/             # Image assets
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── package.json            # Dependencies
├── vite.config.js          # Vite configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── postcss.config.js       # PostCSS configuration
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`

3. **Build for production**
   ```bash
   npm run build
   ```
   Production files will be in the `dist` directory.

4. **Preview production build**
   ```bash
   npm run preview
   ```

## 🎨 Styling

The project uses Tailwind CSS with a custom color palette defined in `tailwind.config.js`:

- **Gym Red**: Primary brand color
- **Gym Darker**: Dark background color
- **Gym Gray**: Secondary gray tones

### Custom Components

Reusable styled components are available:
- `Button` - Primary button component
- `ButtonOutline` - Outlined button variant
- `Input` - Form input component
- `TextArea` - Textarea component
- `Modal` - Modal dialog component

## 🔐 Authentication Flow

1. User registers or logs in
2. JWT token is stored in localStorage
3. Auth context provides user state throughout the app
4. Protected routes check authentication status
5. Admin routes verify admin role

## 📱 Responsive Design

The application is fully responsive with breakpoints:
- Mobile: Default styles
- Tablet: `sm:` and `md:` breakpoints
- Desktop: `lg:` and `xl:` breakpoints

## 🎯 Key Features Implementation

### Exercise Library
- Browse exercises by body part
- Search functionality
- Exercise details with video demonstrations
- Favorite exercises collection

### Plan Subscription
- View available plans
- Plan details and pricing
- Subscription management
- Plan history in user dashboard

### Admin Dashboard
- Plan CRUD operations
- User management
- Subscription tracking
- Contact form submissions
- Feedback management

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Structure

- **Components**: Reusable UI components
- **Pages**: Route-level page components
- **Context**: Global state management
- **Utils**: Helper functions and API utilities

## 🔌 API Integration

The frontend communicates with the backend API through:
- Axios for HTTP requests
- Centralized API utilities in `utils/fetchData.jsx`
- Error handling with toast notifications

## 📦 Build Output

Production build includes:
- Optimized JavaScript bundles
- Minified CSS
- Asset optimization
- Code splitting for better performance

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Change the port in `vite.config.js` or use a different port
2. **API connection errors**: Ensure the backend server is running
3. **Build errors**: Clear `node_modules` and reinstall dependencies

## 📄 License

This project is part of the GymApp application suite.

