import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Preços', href: '#precos' },
    { label: 'Região', href: '#area-atendimento' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Dicas', href: '#dicas' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contato', href: '#contato' },
  ];

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNav('#inicio'); }}
            className="flex items-center gap-2 cursor-pointer"
          >
          </a>

          {/* Desktop Nav */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                  className={`text-sm font-medium transition-colors cursor-pointer ${
                    isScrolled ? 'text-gray-700 hover:text-[#1E4E8C]' : 'text-white/90 hover:text-[#38B6FF]'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side CTAs */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              to="/cartao"
              className={`flex items-center gap-1.5 text-sm font-semibold px-3 py-2 rounded-full border transition-all duration-200 cursor-pointer whitespace-nowrap ${
                isScrolled
                  ? 'border-[#1E4E8C] text-[#1E4E8C] hover:bg-[#1E4E8C] hover:text-white'
                  : 'border-white/60 text-white hover:bg-white/20'
              }`}
            >
              <i className="ri-contacts-book-2-line text-sm"></i>
              Cartão Digital
            </Link>
            <a
              href="#agendamento"
              onClick={(e) => { e.preventDefault(); handleNav('#agendamento'); }}
              className="flex items-center gap-2 text-white text-sm font-semibold px-4 py-2 rounded-full cursor-pointer transition-all hover:opacity-90 whitespace-nowrap"
              style={{ background: 'linear-gradient(90deg, #0A2540 0%, #1E4E8C 60%, #38B6FF 100%)' }}
            >
              <i className="ri-calendar-check-line"></i>
              Agendar
            </a>
          </div>

          {/* Hamburger */}
          <button
            className={`md:hidden text-2xl transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <i className={menuOpen ? 'ri-close-line' : 'ri-menu-3-line'}></i>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pb-4 pt-2">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNav(link.href); }}
                    className="block py-2 px-2 text-gray-700 font-medium rounded-lg hover:text-[#1E4E8C] cursor-pointer transition-colors text-sm"
                    style={{ '--tw-bg-opacity': '1' } as React.CSSProperties}
                    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(30,78,140,0.06)')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  to="/cartao"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 border border-[#1E4E8C] text-[#1E4E8C] font-semibold py-2 px-4 rounded-full cursor-pointer text-sm whitespace-nowrap justify-center"
                >
                  <i className="ri-contacts-book-2-line"></i>
                  Cartão Digital
                </Link>
              </li>
              <li className="pt-1">
                <a
                  href="#agendamento"
                  onClick={(e) => { e.preventDefault(); handleNav('#agendamento'); }}
                  className="flex items-center justify-center gap-2 text-white font-semibold py-2 rounded-full cursor-pointer text-sm whitespace-nowrap"
                  style={{ background: 'linear-gradient(90deg, #0A2540 0%, #1E4E8C 60%, #38B6FF 100%)' }}
                >
                  <i className="ri-calendar-check-line"></i>
                  Agendar Atendimento
                </a>
              </li>
            </ul>
          </div>
        )}
      </nav>


    </>
  );
};

export default Navbar;
