const navLinks = [
  { label: 'Find your Branch', href: '#services' },
  { label: 'Services', href: '#services' },
  { label: 'Courses', href: '#services' },
  { label: 'Study Abroad', href: '#services' },
  { label: 'Contact', href: '#footer' },
];

export function Navigation({ onClose }) {
  return (
    <nav className="flex flex-col md:flex-row gap-4 md:gap-8">
      {navLinks.map((link) => (
        <a
          key={link.label}
          href={link.href}
          onClick={onClose}
          className="text-white hover:text-orange-200 transition-colors font-medium"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
