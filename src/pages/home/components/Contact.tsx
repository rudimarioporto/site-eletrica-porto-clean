import { useState, FormEvent } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (form.message.length > 500) return;
    setLoading(true);
    const body = new URLSearchParams({ name: form.name, phone: form.phone, email: form.email, message: form.message });
    try {
      await fetch('https://readdy.ai/api/form/d7g30ifimhg6tri2vo8g', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
    } catch (err) { console.error(err); }
    setLoading(false);
    setSubmitted(true);
  };

  const focusStyle = { borderColor: '#1E4E8C' };
  const blurStyle = { borderColor: '' };

  const contactItems = [
    { icon: 'ri-phone-line', label: 'Telefone / WhatsApp', value: '(73) 99993-3162', href: 'tel:+5573999933162' },
    { icon: 'ri-mail-send-line', label: 'E-mail', value: 'contato@eletricaporto.com.br', href: 'mailto:contato@eletricaporto.com.br' },
    { icon: 'ri-map-pin-line', label: 'Endereço', value: 'R. Vinte e Um, 10 — Porto Seguro, BA, 45810-000', href: 'https://maps.google.com/?q=R.+Vinte+e+Um,+10,+Porto+Seguro,+BA,+45810-000' },
    { icon: 'ri-time-line', label: 'Horário de atendimento', value: 'Seg–Sex: 08h–18h | Sáb: 08h–12h', href: '#' },
  ];

  return (
    <section id="contato" className="py-20 md:py-28" style={{ background: 'rgb(248,248,250)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#1E4E8C' }}
          >
            <i className="ri-mail-line"></i>
            Contato
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Fale com a <span style={{ color: '#1E4E8C' }}>Elétrica Porto</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Precisa de manutenção ou diagnóstico? Entre em contato e receba um atendimento direto e eficiente.
          </p>
        </div>

        {/* Top row: info cards + form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-8">
          {/* Info Cards */}
          <div className="flex flex-col gap-4">
            {contactItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                rel="nofollow"
                target={item.href.startsWith('http') ? '_blank' : undefined}
                className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100 cursor-pointer group transition-all"
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(30,78,140,0.25)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0 transition-all"
                  style={{ background: 'rgba(30,78,140,0.1)', color: '#1E4E8C' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg,#1E4E8C,#38B6FF)';
                    e.currentTarget.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(30,78,140,0.1)';
                    e.currentTarget.style.color = '#1E4E8C';
                  }}
                >
                  <i className={`${item.icon} text-xl`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{item.label}</div>
                  <div className="text-gray-800 font-medium text-sm">{item.value}</div>
                </div>
                {item.href.startsWith('http') && (
                  <i className="ri-external-link-line text-gray-300 text-sm mt-0.5 flex-shrink-0"></i>
                )}
              </a>
            ))}
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center gap-3">
                <div className="w-14 h-14 flex items-center justify-center bg-green-100 text-green-500 rounded-full">
                  <i className="ri-checkbox-circle-fill text-3xl"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900">Mensagem enviada!</h3>
                <p className="text-gray-500 text-sm">Obrigado pelo contato. Responderemos em breve.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm font-semibold hover:underline cursor-pointer mt-1"
                  style={{ color: '#1E4E8C' }}
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form data-readdy-form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="font-bold text-gray-900 text-base mb-1">Envie sua mensagem</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Nome *</label>
                    <input
                      type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none transition-colors"
                      onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)}
                      onBlur={(e) => Object.assign(e.currentTarget.style, blurStyle)}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Telefone *</label>
                    <input
                      type="tel" name="phone" required value={form.phone} onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none transition-colors"
                      onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)}
                      onBlur={(e) => Object.assign(e.currentTarget.style, blurStyle)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">E-mail</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="seuemail@exemplo.com"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none transition-colors"
                    onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.currentTarget.style, blurStyle)}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Mensagem * <span className="text-gray-400 font-normal">({form.message.length}/500)</span>
                  </label>
                  <textarea
                    name="message" required maxLength={500} value={form.message}
                    onChange={handleChange as React.ChangeEventHandler<HTMLTextAreaElement>}
                    rows={4} placeholder="Descreva sua dúvida ou solicite um orçamento..."
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none transition-colors resize-none"
                    onFocus={(e) => Object.assign(e.currentTarget.style, focusStyle)}
                    onBlur={(e) => Object.assign(e.currentTarget.style, blurStyle)}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || form.message.length > 500}
                  className="flex items-center justify-center gap-2 text-white font-extrabold py-4 rounded-full transition-all cursor-pointer text-sm whitespace-nowrap disabled:opacity-60 hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(90deg, #38B6FF 0%, #1E4E8C 55%, #0A2540 100%)', boxShadow: '0 4px 20px rgba(56,182,255,0.3)' }}
                >
                  {loading ? <i className="ri-loader-4-line animate-spin"></i> : <i className="ri-send-plane-line"></i>}
                  {loading ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Maps — full width below */}
        <div className="rounded-2xl overflow-hidden border border-gray-100 bg-white" style={{ height: '400px' }}>
          {/* Map header bar */}
          <div
            className="flex items-center gap-3 px-5 py-3 border-b border-gray-100"
            style={{ background: 'white' }}
          >
            <div
              className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #1E4E8C, #38B6FF)', color: 'white' }}
            >
              <i className="ri-map-pin-2-fill text-sm"></i>
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-bold text-gray-900 text-sm">Elétrica Porto</div>
              <div className="text-gray-400 text-xs truncate">R. Vinte e Um, 10 — Porto Seguro, BA, 45810-000</div>
            </div>
            <a
              href="https://maps.google.com/?q=R.+Vinte+e+Um,+10,+Porto+Seguro,+BA,+45810-000"
              target="_blank"
              rel="nofollow noreferrer"
              className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all cursor-pointer whitespace-nowrap"
              style={{ borderColor: '#1E4E8C', color: '#1E4E8C' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#1E4E8C'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1E4E8C'; }}
            >
              <i className="ri-external-link-line"></i>
              Abrir no Maps
            </a>
          </div>
          {/* Iframe */}
          <iframe
            title="Localização Elétrica Porto — R. Vinte e Um, 10, Porto Seguro, BA"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.5!2d-39.06580!3d-16.44970!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x73f1a3b5c2d4e6f7%3A0x1a2b3c4d5e6f7a8b!2sR.+Vinte+e+Um%2C+10+-+Porto+Seguro%2C+BA%2C+45810-000!5e0!3m2!1spt-BR!2sbr!4v1714000000000!5m2!1spt-BR!2sbr"
            width="100%"
            height="352"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Contact;
