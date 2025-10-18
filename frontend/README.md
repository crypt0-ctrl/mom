# Frontend Application

A modern, responsive React application built with TypeScript, Tailwind CSS, and Vite. This frontend is designed to be easily integrated with any backend API.

## 🚀 Features

- **Modern Tech Stack**: React 18, TypeScript, Vite, Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful UI/UX
- **Type Safety**: Full TypeScript support for better development experience
- **API Ready**: Pre-configured API service layer for backend integration
- **Component Library**: Reusable components built with Headless UI
- **Fast Development**: Hot reload and fast build times
- **Routing**: React Router for client-side navigation
- **State Management**: Custom hooks for API calls and state management

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout.tsx      # Main layout wrapper
│   ├── Header.tsx      # Navigation header
│   ├── Footer.tsx      # Footer component
│   ├── Button.tsx      # Button component
│   └── Card.tsx        # Card component
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact page
│   └── Dashboard.tsx   # Dashboard page
├── services/           # API services
│   ├── api.ts          # Base API configuration
│   ├── authService.ts  # Authentication service
│   └── dashboardService.ts # Dashboard API service
├── hooks/              # Custom React hooks
│   └── useApi.ts       # API hook for data fetching
├── types/              # TypeScript type definitions
│   └── index.ts        # Common types
├── utils/              # Utility functions
│   └── index.ts        # Helper functions
└── App.tsx             # Main application component
```

## 🛠️ Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Set up environment variables**:
   ```bash
   cp .env.example .env
   ```
   Update the `.env` file with your backend API URL.

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# API Configuration
REACT_APP_API_BASE_URL=http://localhost:3001/api

# App Configuration
REACT_APP_NAME=YourApp
REACT_APP_VERSION=1.0.0

# Environment
NODE_ENV=development
```

### API Integration

The application is pre-configured with API services ready for backend integration:

1. **Base API Configuration** (`src/services/api.ts`):
   - Axios instance with interceptors
   - Automatic token handling
   - Error handling
   - Request/response logging

2. **Service Layer**:
   - `authService.ts` - Authentication endpoints
   - `dashboardService.ts` - Dashboard data endpoints
   - Easy to extend with new services

3. **Custom Hooks**:
   - `useApi` - Generic hook for API calls
   - Loading states and error handling
   - Automatic refetching

## 🎨 Styling

This project uses **Tailwind CSS** for styling:

- **Utility-first CSS framework**
- **Custom color palette** with primary colors
- **Responsive design** with mobile-first approach
- **Dark mode ready** (can be easily implemented)
- **Component-based styling** with reusable classes

### Custom Colors

The project includes a custom color palette:

```css
primary: {
  50: '#eff6ff',
  100: '#dbeafe',
  200: '#bfdbfe',
  300: '#93c5fd',
  400: '#60a5fa',
  500: '#3b82f6',
  600: '#2563eb',
  700: '#1d4ed8',
  800: '#1e40af',
  900: '#1e3a8a',
}
```

## 📱 Pages

### Home Page
- Hero section with call-to-action
- Features showcase
- Modern, responsive design

### About Page
- Company information
- Technology stack
- Team section

### Contact Page
- Contact form (ready for backend integration)
- Contact information
- Integration guidance

### Dashboard Page
- Statistics cards
- Recent activity feed
- Chart placeholders
- Backend integration notice

## 🔌 Backend Integration

This frontend is designed to work with any backend API. Here's how to integrate:

### 1. Update API Base URL

Update the `REACT_APP_API_BASE_URL` in your `.env` file:

```env
REACT_APP_API_BASE_URL=https://your-api-domain.com/api
```

### 2. Configure Endpoints

Update the service files in `src/services/` to match your API endpoints:

```typescript
// Example: src/services/authService.ts
export const authService = {
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    return apiService.post<AuthResponse>('/auth/login', credentials)
  },
  // ... other methods
}
```

### 3. Update Types

Update TypeScript interfaces in `src/types/` to match your API responses:

```typescript
export interface User {
  id: string
  email: string
  name: string
  // ... other fields
}
```

### 4. Authentication

The app includes authentication handling:

- Token storage in localStorage
- Automatic token attachment to requests
- Token refresh handling
- Logout functionality

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to Static Hosting

The built files can be deployed to any static hosting service:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **AWS S3**: Upload the `dist` folder contents
- **GitHub Pages**: Use GitHub Actions for deployment

### Environment Variables for Production

Make sure to set the correct environment variables in your hosting platform:

- `REACT_APP_API_BASE_URL` - Your production API URL
- `NODE_ENV` - Set to `production`

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Structure

- **Components**: Reusable UI components
- **Pages**: Route components
- **Services**: API integration layer
- **Hooks**: Custom React hooks
- **Types**: TypeScript definitions
- **Utils**: Helper functions

## 📦 Dependencies

### Core Dependencies
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing

### UI Dependencies
- **Tailwind CSS** - Utility-first CSS
- **Headless UI** - Accessible components
- **Heroicons** - Icon library

### Development Dependencies
- **ESLint** - Code linting
- **TypeScript** - Type checking

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support or questions about backend integration, please:

1. Check the documentation in the `src/services/` directory
2. Review the API configuration in `src/services/api.ts`
3. Contact the development team

---

**Ready for Backend Integration!** 🚀

This frontend is fully prepared for backend integration. Simply update the API endpoints and start building your full-stack application.
