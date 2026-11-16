import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import AuthLayout from '../components/auth/AuthLayout';
import FormInput from '../components/auth/FormInput';
import PrimaryButton from '../components/common/PrimaryButton';

/**
 * ForgotPasswordPage Component
 * Provides a recovery form for students with controlled email input,
 * two-way binding, email format validation, and frontend confirmation state.
 */
const ForgotPasswordPage = () => {
  // 1. Controlled state for email
  const [formData, setFormData] = useState({
    email: '',
  });

  // 2. Validation errors state
  const [errors, setErrors] = useState({});

  // 3. Submission feedback state
  const [successMessage, setSuccessMessage] = useState('');

  /**
   * Generic input handler
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }

    if (successMessage) {
      setSuccessMessage('');
    }
  };

  /**
   * Form validation
   */
  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.email.trim()) {
      newErrors.email = 'College Email Address is required.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email format.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /**
   * Submit handler
   */
  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      // Frontend-only confirmation message as specified
      setSuccessMessage(
        'Password reset request submitted! Frontend confirmation only — email delivery will be connected with backend integration.'
      );
      setErrors({});
    }
  };

  return (
    <AuthLayout
      heading="Reset Your Password"
      subtitle="Enter your registered college email to receive recovery instructions."
      maxWidth="max-w-md"
    >
      {/* Success Notification */}
      {successMessage ? (
        <div className="space-y-5">
          <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-sm flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            <div className="flex-1 text-left">
              <p className="font-semibold">Request Received</p>
              <p className="mt-1 text-xs text-emerald-700 leading-relaxed">
                {successMessage}
              </p>
            </div>
          </div>

          <Link
            to="/login"
            className="inline-flex items-center justify-center gap-2 w-full py-2.5 text-sm font-semibold text-[#17233B] bg-[#F8F9FC] border border-[#E5E7EB] rounded-xl hover:bg-[#E8EDF7] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Log In</span>
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          {/* Email input */}
          <FormInput
            label="College Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. aarav.sharma@college.edu"
            error={errors.email}
            required
          />

          {/* Submit button */}
          <div className="pt-2">
            <PrimaryButton
              type="submit"
              variant="primary"
              size="lg"
              className="w-full shadow-md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Send Reset Link
            </PrimaryButton>
          </div>
        </form>
      )}

      {/* Back to Login link */}
      <div className="mt-6 pt-5 border-t border-[#E5E7EB] text-center text-xs text-[#667085]">
        Remember your password?{' '}
        <Link
          to="/login"
          className="font-bold text-[#5277D9] hover:text-[#4364BE] hover:underline inline-flex items-center gap-1"
        >
          <span>Log in</span>
        </Link>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;

