import './Button.css';

export function Button({ 
  children, 
  onClick, 
  type = 'button', 
  className = '', 
  disabled = false,
  variant = 'orange' 
}) {
  const baseClass = variant === 'orange' ? 'btn-orange' : 'btn-secondary';
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClass} ${className}`}
    >
      {children}
    </button>
  );
}
