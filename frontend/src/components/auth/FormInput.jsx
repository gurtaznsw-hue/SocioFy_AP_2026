/**
 * FormInput Component
 * Reusable controlled input component for authentication and forms.
 * Synchronizes with parent state via value and onChange props.
 *
 * @param {Object} props
 * @param {string} props.label - Accessible label displayed above the input
 * @param {string} props.name - Field identifier matching the state key
 * @param {string} [props.type='text'] - HTML input type (text, email, etc.)
 * @param {string} props.value - Controlled value driven by parent React state
 * @param {Function} props.onChange - Event handler updating parent state
 * @param {string} [props.placeholder=''] - Hint text
 * @param {string} [props.error=''] - Validation error message to display
 * @param {boolean} [props.required=false] - Whether to render a required indicator
 * @param {string} [props.className=''] - Additional container styling
 */
const FormInput = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  error = '',
  required = false,
  className = '',
  ...rest
}) => {
  const inputId = `form-input-${name}`;

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

      <input
        id={inputId}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`w-full px-3.5 py-2.5 text-sm rounded-xl border bg-white text-[#17233B] placeholder-[#667085] transition-all duration-150 focus:outline-none focus:ring-2 ${
          error
            ? 'border-red-500 focus:border-red-500 focus:ring-red-400/20'
            : 'border-[#E5E7EB] hover:border-[#CBD5E1] focus:border-[#5277D9] focus:ring-[#5277D9]/20'
        }`}
        {...rest}
      />

      {error && (
        <p className="mt-1 text-xs text-red-500 font-medium">
          {error}
        </p>
      )}
    </div>
  );
};

export default FormInput;

