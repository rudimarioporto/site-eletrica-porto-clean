import { Link } from 'react-router-dom';

const WA_HREF = 'https://wa.me/5573999933162?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20El%C3%A9trica%20Porto.%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20%5Btipo%20de%20servi%C3%A7o%5D.';

const Footer = () => {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const saveContact = () => {
    const vcf = `BEGIN:VCARD\nVERSION:3.0\nFN:Elétrica Porto\nTEL;TYPE=WORK,VOICE:+5573999933162\nEMAIL:contato@eletricaporto.com.br\nADR;TYPE=WORK:;;R. Vinte e Um, 10, Porto Seguro, BA;Porto Seguro;BA;00000-000;Brasil\nURL:https://eletricaporto.com.br\nEND:VCARD`;
    const blob = new Blob([vcf], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'eletrica-porto.vcf';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <footer style={{ background: 'rgb(10,20,35)' }} className="text-white pt-14 pb-6">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://i.ibb.co/5gcnBdzH/Logo-El-trica-Porto.png"
                alt="Elétrica Porto"
                className="h-24 w-auto object-contain"
              />
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-5 max-w-xs">
              Especialistas em manutenção de motores elétricos e bombas d&apos;água. Tradição e confiança desde 1998.
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
              <a
                href={WA_HREF} target="_blank" rel="nofollow noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#22c55e')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                title="WhatsApp"
              >
                <i className="ri-whatsapp-line"></i>
              </a>
              <a
                href="mailto:contato@eletricaporto.com.br" rel="nofollow"
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#1E4E8C')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                title="E-mail"
              >
                <i className="ri-mail-line"></i>
              </a>
              <a
                href="https://www.instagram.com/eletrica.porto.50/" target="_blank" rel="nofollow noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#e1306c')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                title="Instagram"
              >
                <i className="ri-instagram-line"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61570552127321" target="_blank" rel="nofollow noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg transition-colors cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.08)' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#1877f2')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                title="Facebook"
              >
                <i className="ri-facebook-line"></i>
              </a>
              <button
                onClick={saveContact}
                className="flex items-center gap-2 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors cursor-pointer whitespace-nowrap"
                style={{ background: 'linear-gradient(90deg, #1E4E8C, #38B6FF)' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.9')}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
              >
                <i className="ri-contacts-line"></i>
                Salvar Contato
              </button>
            </div>

            <Link
              to="/cartao"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest px-4 py-2.5 rounded-xl border border-white/20 text-white/80 hover:text-white hover:border-white/40 transition-all duration-200 cursor-pointer"
              style={{ background: 'rgba(56,182,255,0.08)' }}
            >
              <i className="ri-contacts-book-2-line" style={{ color: '#38B6FF' }}></i>
              Cartão Digital / Atendimento Rápido
            </Link>
          </div>

          {/* Links */}
          <div>
            <div className="font-bold text-sm mb-4 text-white/80 uppercase tracking-wide">Navegação</div>
            <ul className="flex flex-col gap-2">
              {[['#inicio','Início'],['#sobre','Sobre'],['#servicos','Serviços'],['#galeria','Galeria'],['#precos','Preços'],['#area-atendimento','Região'],['#depoimentos','Depoimentos'],['#dicas','Dicas'],['#faq','FAQ'],['#agendamento','Agendamento'],['#contato','Contato']].map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => { e.preventDefault(); handleNav(href); }}
                    className="text-white/60 text-sm transition-colors cursor-pointer"
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#38B6FF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '')}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="font-bold text-sm mb-4 text-white/80 uppercase tracking-wide">Contato</div>
            <ul className="flex flex-col gap-3">
              {[
                { icon: 'ri-phone-line', text: '(73) 99993-3162' },
                { icon: 'ri-whatsapp-line', text: '(73) 99993-3162' },
                { icon: 'ri-mail-line', text: 'contato@eletricaporto.com.br' },
                { icon: 'ri-map-pin-line', text: 'R. Vinte e Um, 10\nPorto Seguro, BA — 45810-000' },
                { icon: 'ri-time-line', text: 'Seg–Sex: 08h–18h\nSáb: 08h–12h' },
              ].map((item) => (
                <li key={item.icon} className="flex items-start gap-2 text-white/60 text-sm">
                  <i className={`${item.icon} mt-0.5 flex-shrink-0`} style={{ color: '#38B6FF' }}></i>
                  <span className="whitespace-pre-line">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-xs">
          <span>&copy; {new Date().getFullYear()} Elétrica Porto. Todos os direitos reservados.</span>
          <span>Desenvolvido com dedicação para nossos clientes</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
