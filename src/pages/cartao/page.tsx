import { useState } from 'react';

const WA_NUMBER = '5573999933162';
const WA_ORCAMENTO = `https://wa.me/${WA_NUMBER}?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20El%C3%A9trica%20Porto.%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%20%5Btipo%20de%20servi%C3%A7o%5D.`;
const EMAIL = 'contato@eletricaporto.com.br';

const CardPage = () => {
  const [saved, setSaved] = useState(false);

  const saveContact = () => {
    const vCard = `BEGIN:VCARD\nVERSION:3.0\nFN:Elétrica Porto\nORG:Elétrica Porto\nTEL;TYPE=WORK,VOICE:+${WA_NUMBER}\nEMAIL:${EMAIL}\nADR;TYPE=WORK:;;R. Vinte e Um, 10;Porto Seguro;BA;45810-000;Brasil\nURL:https://eletricaporto.com.br\nNOTE:Motores Elétricos & Bombas d\'Água\nEND:VCARD`;
    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Eletrica_Porto.vcf';
    a.click();
    URL.revokeObjectURL(url);
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const actions = [
    {
      href: `https://wa.me/${WA_NUMBER}`,
      icon: 'ri-whatsapp-line',
      label: 'WhatsApp',
      color: 'text-green-500',
      bg: 'hover:bg-green-50',
      border: 'border-green-100',
      external: true,
    },
    {
      href: 'https://maps.app.goo.gl/ZXf3pgMM5vxAtRHF6',
      icon: 'ri-map-pin-line',
      label: 'Localização',
      color: 'text-red-500',
      bg: 'hover:bg-red-50',
      border: 'border-red-100',
      external: true,
    },
    {
      href: `mailto:${EMAIL}`,
      icon: 'ri-mail-line',
      label: 'E-mail',
      color: 'text-[#1E4E8C]',
      bg: 'hover:bg-blue-50',
      border: 'border-blue-100',
      external: false,
    },
    {
      href: '/',
      icon: 'ri-global-line',
      label: 'Website',
      color: 'text-[#0A2540]',
      bg: 'hover:bg-slate-50',
      border: 'border-slate-100',
      external: false,
    },
    {
      href: 'https://www.instagram.com/eletrica.porto.50/',
      icon: 'ri-instagram-line',
      label: 'Instagram',
      color: 'text-pink-500',
      bg: 'hover:bg-pink-50',
      border: 'border-pink-100',
      external: true,
    },
    {
      href: 'https://www.facebook.com/profile.php?id=61570552127321',
      icon: 'ri-facebook-line',
      label: 'Facebook',
      color: 'text-[#1877f2]',
      bg: 'hover:bg-sky-50',
      border: 'border-sky-100',
      external: true,
    },
  ];

  const services = [
    { icon: 'ri-tools-line', label: 'Manutenção de Bombas' },
    { icon: 'ri-flashlight-line', label: 'Rebobinamento de Motores' },
    { icon: 'ri-search-eye-line', label: 'Diagnóstico Técnico' },
    { icon: 'ri-settings-3-line', label: 'Instalação Elétrica' },
  ];

  const coverage = [
    { icon: 'ri-home-3-line', label: 'Residencial' },
    { icon: 'ri-building-line', label: 'Comercial' },
    { icon: 'ri-building-4-line', label: 'Industrial' },
    { icon: 'ri-seedling-line', label: 'Rural' },
  ];

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-start py-8 px-4"
      style={{ background: 'linear-gradient(135deg, #f0f4f8 0%, #e8eef5 50%, #f5f7fa 100%)' }}
    >
      {/* Decorative BG circles */}
      <div className="fixed top-0 right-0 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #38B6FF 0%, transparent 70%)', transform: 'translate(30%, -30%)' }} />
      <div className="fixed bottom-0 left-0 w-80 h-80 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1E4E8C 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }} />

      <div className="relative z-10 w-full max-w-sm flex flex-col gap-4">

        {/* Header Card */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden border border-white/60">
          <div className="h-1.5 w-full" style={{ background: 'linear-gradient(90deg, #0A2540, #1E4E8C, #38B6FF)' }} />
          <div className="p-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <img
                src="https://public.readdy.ai/ai/img_res/56df9296-ba00-4e9a-a11f-da6b5084a8f1.png"
                alt="Elétrica Porto"
                className="w-auto object-contain"
                style={{ height: '80px', maxWidth: '220px' }}
              />
            </div>

            <h1 className="text-2xl font-bold tracking-widest uppercase" style={{ color: '#0A2540' }}>
              ELÉTRICA PORTO
            </h1>
            <p className="text-xs uppercase tracking-wider mt-1 font-medium" style={{ color: '#1E4E8C' }}>
              Motores Elétricos &amp; Bombas d&apos;Água
            </p>
            <div className="mt-3 flex items-center justify-center gap-1.5">
              <i className="ri-map-pin-line text-xs" style={{ color: '#38B6FF' }}></i>
              <p className="text-xs text-gray-400 uppercase tracking-wide">R. Vinte e Um, 10 — Porto Seguro • BA</p>
            </div>
            <div
              className="mt-4 px-4 py-2.5 rounded-xl border"
              style={{ background: 'rgba(14,79,140,0.04)', borderColor: 'rgba(14,79,140,0.08)' }}
            >
              <p className="text-gray-500 text-xs italic leading-relaxed">
                "Energia, precisão e confiança em cada serviço."
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons Grid */}
        <div className="grid grid-cols-3 gap-3">
          {actions.map((action) => (
            <a
              key={action.label}
              href={action.href}
              target={action.external ? '_blank' : undefined}
              rel={action.external ? 'nofollow noreferrer' : undefined}
              className={`bg-white/80 backdrop-blur-md rounded-xl p-4 text-center border transition-all duration-200 cursor-pointer group ${action.bg} ${action.border}`}
            >
              <div className="w-10 h-10 flex items-center justify-center mx-auto mb-2 rounded-full transition-transform duration-200 group-hover:scale-110"
                style={{ background: 'rgba(255,255,255,0.9)' }}>
                <i className={`${action.icon} text-2xl ${action.color}`}></i>
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{action.label}</p>
            </a>
          ))}
        </div>

        {/* CTA — Solicitar Orçamento */}
        <a
          href={WA_ORCAMENTO}
          target="_blank"
          rel="nofollow noreferrer"
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold text-sm uppercase tracking-widest text-white transition-all duration-200 cursor-pointer hover:opacity-90 active:scale-95"
          style={{ background: 'linear-gradient(90deg, #0A2540 0%, #1E4E8C 50%, #38B6FF 100%)' }}
        >
          <i className="ri-price-tag-3-line text-base"></i>
          Solicitar Orçamento Rápido
        </a>

        {/* Nossos Serviços */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-white/60 p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-center mb-3" style={{ color: '#0A2540' }}>
            Nossos Serviços
          </p>
          <div className="grid grid-cols-2 gap-2">
            {services.map((s) => (
              <div key={s.label} className="flex items-center gap-2 px-3 py-2 rounded-lg"
                style={{ background: 'rgba(30,78,140,0.05)' }}>
                <i className={`${s.icon} text-sm`} style={{ color: '#1E4E8C' }}></i>
                <span className="text-xs text-gray-600 leading-tight">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Atendemos */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl border border-white/60 p-4">
          <p className="text-xs font-bold uppercase tracking-widest text-center mb-3" style={{ color: '#0A2540' }}>
            Atendemos
          </p>
          <div className="grid grid-cols-4 gap-2">
            {coverage.map((c) => (
              <div key={c.label} className="flex flex-col items-center gap-1.5 py-3 rounded-xl transition-colors"
                style={{ background: 'rgba(56,182,255,0.07)' }}>
                <div className="w-8 h-8 flex items-center justify-center rounded-full"
                  style={{ background: 'linear-gradient(135deg, #1E4E8C, #38B6FF)' }}>
                  <i className={`${c.icon} text-white text-sm`}></i>
                </div>
                <span className="text-xs text-gray-600 font-medium text-center leading-tight">{c.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Save Contact */}
        <button
          onClick={saveContact}
          className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm uppercase tracking-widest transition-all duration-200 cursor-pointer border-2 active:scale-95"
          style={{
            color: saved ? 'white' : '#1E4E8C',
            borderColor: saved ? '#22c55e' : '#1E4E8C',
            background: saved ? '#22c55e' : 'transparent',
          }}
        >
          <i className={`${saved ? 'ri-check-line' : 'ri-contacts-book-2-line'} text-base`}></i>
          {saved ? 'Contato Salvo!' : 'Salvar Contato'}
        </button>

        {/* Hours */}
        <div className="bg-white/70 backdrop-blur-md rounded-xl border border-white/60 p-4 flex items-center justify-center gap-6">
          <div className="flex items-center gap-2">
            <i className="ri-time-line text-sm" style={{ color: '#38B6FF' }}></i>
            <div>
              <p className="text-xs font-semibold" style={{ color: '#0A2540' }}>Seg–Sex</p>
              <p className="text-xs text-gray-400">08h – 18h</p>
            </div>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="flex items-center gap-2">
            <i className="ri-calendar-line text-sm" style={{ color: '#38B6FF' }}></i>
            <div>
              <p className="text-xs font-semibold" style={{ color: '#0A2540' }}>Sábado</p>
              <p className="text-xs text-gray-400">08h – 12h</p>
            </div>
          </div>
        </div>

        <footer className="text-center pt-2 pb-6">
          <p className="text-gray-400 text-xs uppercase tracking-widest">
            © Elétrica Porto — Porto Seguro • BA
          </p>
        </footer>
      </div>
    </div>
  );
};

export default CardPage;
