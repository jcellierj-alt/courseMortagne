import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Accueil', href: '#home' },
    { label: 'À propos', href: '#about' },
    { label: 'Programme', href: '#schedule' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#home" className="text-xl md:text-2xl text-blue-600">
            Course Mortagne-au-Perche
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#register"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
            >
              Inscription
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={handleClick}
                  className="text-gray-700 hover:text-blue-600 transition-colors py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#register"
                onClick={handleClick}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors text-center"
              >
                Inscription
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
