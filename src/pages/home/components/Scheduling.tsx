import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';

const serviceOptions = [
  'Manutenção de Bomba d\'Água',
  'Rebobinamento de Motor Elétrico',
  'Instalação de Equipamento',
  'Diagnóstico Elétrico',
  'Atendimento Residencial',
  'Atendimento Comercial',
  'Atendimento Rural',
  'Outro serviço',
];

const Scheduling = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', date: '', time: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const body = new URLSearchParams({
      name: form.name, phone: form.phone, email: form.email,
      service: form.service, date: form.date, time: form.time,
    });
    try {
      await fetch('https://readdy.ai/api/form/d7g30ifimhg6tri2vo80', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
    } catch (_) { /* ignore */ }
    setLoading(false);
    setSubmitted(true);
    const msg = encodeURIComponent(
      `Olá, gostaria de confirmar meu agendamento na Elétrica Porto para ${form.date} às ${form.time}, serviço: ${form.service}. Meu nome é ${form.name}.`
    );
    window.open(`https://wa.me/5573999933162?text=${msg}`, '_blank');
    setTimeout(() => {
      const params = new URLSearchParams({ name: form.name, service: form.service, date: form.date, time: form.time });
      navigate(`/agradecimento?${params.toString()}`);
    }, 600);
  };

  return (
    <section id="agendamento" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left info */}
          <div>
            <div
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#1E4E8C' }}
            >
              <i className="ri-calendar-line"></i>
              Agendamento
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Agende seu atendimento{' '}
              <span style={{ color: '#1E4E8C' }}>com facilidade</span>
            </h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Preencha o formulário ao lado e nossa equipe entrará em contato para confirmar. Após o envio, abriremos o WhatsApp automaticamente com sua mensagem pré-preenchida.
            </p>
            <div className="flex flex-col gap-5">
              {[
                { icon: 'ri-calendar-check-line', title: 'Confirmação rápida', desc: 'Retornamos em até 2 horas úteis para confirmar seu horário.' },
                { icon: 'ri-whatsapp-line', title: 'Via WhatsApp', desc: 'Após envio, abrimos o WhatsApp com os dados do seu agendamento.' },
                { icon: 'ri-shield-check-line', title: 'Sem compromisso', desc: 'Orçamento gratuito e sem obrigação de fechar.' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className="w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0"
                    style={{ background: 'rgba(30,78,140,0.1)', color: '#1E4E8C' }}
                  >
                    <i className={`${item.icon} text-xl`}></i>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm">{item.title}</div>
                    <div className="text-gray-500 text-xs">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6 md:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full"
                  style={{ background: 'rgba(30,78,140,0.1)', color: '#1E4E8C' }}
                >
                  <i className="ri-checkbox-circle-fill text-4xl"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Agendamento enviado!</h3>
                <p className="text-gray-500 text-sm">
                  Obrigado, <strong>{form.name}</strong>! Sua solicitação foi recebida. Abrimos o WhatsApp para você confirmar diretamente.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm font-semibold hover:underline cursor-pointer"
                  style={{ color: '#1E4E8C' }}
                >
                  Fazer novo agendamento
                </button>
              </div>
            ) : (
              <form data-readdy-form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="font-bold text-gray-900 text-lg mb-1">Solicitar Atendimento</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Nome completo *</label>
                    <input
                      type="text" name="name" required value={form.name} onChange={handleChange}
                      placeholder="Seu nome"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none transition-colors"
                      style={{ '--tw-ring-color': '#1E4E8C' } as React.CSSProperties}
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#1E4E8C')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '')}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Telefone / WhatsApp *</label>
                    <input
                      type="tel" name="phone" required value={form.phone} onChange={handleChange}
                      placeholder="(00) 00000-0000"
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none transition-colors"
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#1E4E8C')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '')}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">E-mail</label>
                  <input
                    type="email" name="email" value={form.email} onChange={handleChange}
                    placeholder="seuemail@exemplo.com"
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none transition-colors"
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#1E4E8C')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '')}
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">Tipo de serviço *</label>
                  <select
                    name="service" required value={form.service} onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none transition-colors cursor-pointer"
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#1E4E8C')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '')}
                  >
                    <option value="">Selecione o serviço...</option>
                    {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Data preferida *</label>
                    <input
                      type="date" name="date" required value={form.date} onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none transition-colors cursor-pointer"
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#1E4E8C')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '')}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Horário preferido *</label>
                    <select
                      name="time" required value={form.time} onChange={handleChange}
                      className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm bg-white focus:outline-none transition-colors cursor-pointer"
                      onFocus={(e) => (e.currentTarget.style.borderColor = '#1E4E8C')}
                      onBlur={(e) => (e.currentTarget.style.borderColor = '')}
                    >
                      <option value="">Selecione...</option>
                      {['08:00','09:00','10:00','11:00','13:00','14:00','15:00','16:00','17:00'].map((h) => (
                        <option key={h} value={h}>{h}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 flex items-center justify-center gap-2 text-white font-extrabold py-4 rounded-full transition-all cursor-pointer text-sm whitespace-nowrap disabled:opacity-60 hover:scale-[1.02]"
                  style={{ background: 'linear-gradient(90deg, #38B6FF 0%, #1E4E8C 55%, #0A2540 100%)', boxShadow: '0 4px 20px rgba(56,182,255,0.3)' }}
                >
                  {loading ? <i className="ri-loader-4-line animate-spin"></i> : <i className="ri-whatsapp-line text-base"></i>}
                  {loading ? 'Enviando...' : 'Confirmar pelo WhatsApp'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scheduling;
