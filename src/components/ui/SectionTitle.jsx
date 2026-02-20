export function SectionTitle({ children, className = '', align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left' : 'text-center';
  return (
    <h2 className={`text-2xl md:text-3xl font-bold text-gray-800 ${alignClass} ${className}`}>
      {children}
    </h2>
  );
}
