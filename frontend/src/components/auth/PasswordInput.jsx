import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

/**
 * PasswordInput Component
 * Controlled password input with show/hide toggle.
 * The password value itself is strictly driven by the parent state via props.
 * Only the show/hide visibility boolean is maintained locally.
 *
 * @param {Object} props
 * @param {string} props.label - Accessible label
 * @param {string} props.name - Field identifier matching the parent state key
 * @param {string} props.value - Password value from parent state
 * @param {Function} props.onChange - Handler updating parent state
 * @param {string} [props.placeholder=''] - Hint text
 * @param {string} [props.error=''] - Validation error message
 * @param {boolean} [props.required=false] - Whether field is required
 * @param {string} [props.className=''] - Additional styling
 */
const PasswordInput = ({
  label,
  name,
  value,
  onChange,
  placeholder = '',
  error = '',
  required = false,
  className = '',
  ...rest
}) => {
  // Local state only controls visual visibility toggle (text vs password)
  const [showPassword, setShowPassword] = useState(false);
  const inputId = `form-password-${name}`;

  return (
    <div className={`flex flex-col text-left ${className}`}>
      {label && (
        <label
          htmlFor={inputId}
          className="text-xs font-semibold text-[#17233B] mb-1.5 flex items-center gap-1"
        >
          <span>{label}</span>
          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      <div className="relative">
        <input
          id={inputId}
          name={name}
          type={showPassword ? 'text' : 'password'}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full pl-3.5 pr-10 py-2.5 text-sm rounded-xl border bg-white text-[#17233B] placeholder-[#667085] transition-all duration-150 focus:outline-none focus:ring-2 ${
            error
              ? 'border-red-500 focus:border-red-500 focus:ring-red-400/20'
              : 'border-[#E5E7EB] hover:border-[#CBD5E1] focus:border-[#5277D9] focus:ring-[#5277D9]/20'
          }`}
          {...rest}
        />

        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#667085] hover:text-[#17233B] transition-colors focus:outline-none cursor-pointer"
          tabIndex={-1}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
        >
          {showPassword ? (
            <EyeOff className="w-4 h-4" />
          ) : (
            <Eye className="w-4 h-4" />
          )}
        </button>
      </div>

      {error && (
        <p className="mt-1 text-xs text-red-500 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

export default PasswordInput;

