export function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'px-6 py-3 rounded-xl font-medium transition-all duration-200 inline-flex items-center justify-center gap-2';
  const variants = {
    primary: 'bg-cta text-white hover:bg-cta-hover shadow-lg',
    secondary: 'bg-white text-hero-bg border-2 border-gray-300 hover:bg-gray-50',
    outline: 'bg-transparent text-white border-2 border-white hover:bg-white/10',
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
