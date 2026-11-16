import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import HomePage from './pages/HomePage';

/**
 * App Component
 * Application-level routing configuration using React Router DOM.
 * Defines public routes for the Landing Page, Authentication pages, and Home placeholder.
 */
function App() {
  return (
    <Routes>
      {/* Root Route: SocioFy Landing Page */}
      <Route path="/" element={<LandingPage />} />

      {/* Authentication Pages */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      {/* Authenticated Dashboard / Home Placeholder */}
      <Route path="/home" element={<HomePage />} />

      {/* Catch-all Route: Redirect unknown routes to Landing Page */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
