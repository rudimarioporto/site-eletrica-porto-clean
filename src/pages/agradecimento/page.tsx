import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';

const WA_NUMBER = '5573999933162';

const ThankYouPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [countdown, setCountdown] = useState(10);

  const name = searchParams.get('name') || '';
  const service = searchParams.get('service') || '';
  const date = searchParams.get('date') || '';
  const time = searchParams.get('time') || '';

  const formatDate = (d: string) => {
    if (!d) return '';
    const [y, m, day] = d.split('-');
    return `${day}/${m}/${y}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [navigate]);

  const waMsg = encodeURIComponent(
    `Olá, gostaria de confirmar meu agendamento na Elétrica Porto para ${formatDate(date)} às ${time}, serviço: ${service}. Meu nome é ${name}.`
  );
  const waLink = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{ background: 'linear-gradient(135deg, #f0f4f8 0%, #e8eef5 60%, #f5f7fa 100%)' }}
    >
      {/* Decorative circles */}
      <div
        className="fixed top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #38B6FF 0%, transparent 70%)', transform: 'translate(30%, -30%)' }}
      />
      <div
        className="fixed bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none opacity-10"
        style={{ background: 'radial-gradient(circle, #1E4E8C 0%, transparent 70%)', transform: 'translate(-30%, 30%)' }}
      />

      <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-6">

        {/* Logo */}
        <div className="flex items-center justify-center">
          <img
            src="https://public.readdy.ai/ai/img_res/56df9296-ba00-4e9a-a11f-da6b5084a8f1.png"
            alt="Elétrica Porto"
            className="w-auto object-contain"
            style={{ height: '70px', maxWidth: '200px' }}
          />
        </div>

        {/* Success icon animated */}
        <div className="relative">
          <div
            className="w-24 h-24 rounded-full flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #0A2540 0%, #1E4E8C 50%, #38B6FF 100%)' }}
          >
            <i className="ri-checkbox-circle-fill text-white text-5xl"></i>
          </div>
          <div
            className="absolute inset-0 rounded-full animate-ping opacity-20"
            style={{ background: 'linear-gradient(135deg, #1E4E8C, #38B6FF)' }}
          />
        </div>

        {/* Main card */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/60 p-8 w-full text-center">
          {/* Gradient bar */}
          <div className="h-1 w-full rounded-full mb-6" style={{ background: 'linear-gradient(90deg, #0A2540, #1E4E8C, #38B6FF)' }} />

          <h1 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ color: '#0A2540' }}>
            Agendamento Confirmado!
          </h1>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            {name ? (
              <>Obrigado, <strong className="text-gray-700">{name}</strong>! Sua solicitação foi recebida com sucesso.</>
            ) : (
              <>Sua solicitação foi recebida com sucesso.</>
            )}{' '}
            Nossa equipe entrará em contato em breve para confirmar.
          </p>

          {/* Booking summary */}
          {(service || date || time) && (
            <div
              className="rounded-xl p-4 mb-6 text-left flex flex-col gap-3 border"
              style={{ background: 'rgba(30,78,140,0.04)', borderColor: 'rgba(30,78,140,0.1)' }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-center mb-1" style={{ color: '#0A2540' }}>
                Resumo do Agendamento
              </p>
              {name && (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0" style={{ background: 'rgba(56,182,255,0.1)' }}>
                    <i className="ri-user-line text-sm" style={{ color: '#1E4E8C' }}></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Nome</p>
                    <p className="text-sm font-semibold text-gray-800">{name}</p>
                  </div>
                </div>
              )}
              {service && (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0" style={{ background: 'rgba(56,182,255,0.1)' }}>
                    <i className="ri-tools-line text-sm" style={{ color: '#1E4E8C' }}></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Serviço</p>
                    <p className="text-sm font-semibold text-gray-800">{service}</p>
                  </div>
                </div>
              )}
              {date && (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0" style={{ background: 'rgba(56,182,255,0.1)' }}>
                    <i className="ri-calendar-check-line text-sm" style={{ color: '#1E4E8C' }}></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Data</p>
                    <p className="text-sm font-semibold text-gray-800">{formatDate(date)}</p>
                  </div>
                </div>
              )}
              {time && (
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0" style={{ background: 'rgba(56,182,255,0.1)' }}>
                    <i className="ri-time-line text-sm" style={{ color: '#1E4E8C' }}></i>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Horário</p>
                    <p className="text-sm font-semibold text-gray-800">{time}</p>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* WhatsApp CTA */}
          <a
            href={waLink}
            target="_blank"
            rel="nofollow noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest text-white transition-all duration-200 cursor-pointer hover:opacity-90 active:scale-95 mb-3"
            style={{ background: 'linear-gradient(90deg, #0A2540 0%, #1E4E8C 50%, #38B6FF 100%)' }}
          >
            <i className="ri-whatsapp-line text-base"></i>
            Confirmar pelo WhatsApp
          </a>

          <Link
            to="/"
            className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer border-2 hover:bg-gray-50 whitespace-nowrap"
            style={{ borderColor: '#1E4E8C', color: '#1E4E8C' }}
          >
            <i className="ri-arrow-left-line"></i>
            Voltar ao Site
          </Link>
        </div>

        {/* Countdown */}
        <p className="text-xs text-gray-400 text-center">
          Você será redirecionado automaticamente em <strong className="text-gray-600">{countdown}s</strong>
        </p>

        {/* Info row */}
        <div className="flex items-center gap-4 bg-white/70 backdrop-blur-md rounded-xl border border-white/60 px-5 py-3">
          <div className="flex items-center gap-2">
            <i className="ri-time-line text-sm" style={{ color: '#38B6FF' }}></i>
            <div>
              <p className="text-xs font-semibold" style={{ color: '#0A2540' }}>Retorno</p>
              <p className="text-xs text-gray-400">Em até 2h úteis</p>
            </div>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="flex items-center gap-2">
            <i className="ri-map-pin-line text-sm" style={{ color: '#38B6FF' }}></i>
            <div>
              <p className="text-xs font-semibold" style={{ color: '#0A2540' }}>Local</p>
              <p className="text-xs text-gray-400">Porto Seguro, BA</p>
            </div>
          </div>
          <div className="w-px h-8 bg-gray-200"></div>
          <div className="flex items-center gap-2">
            <i className="ri-shield-check-line text-sm" style={{ color: '#38B6FF' }}></i>
            <div>
              <p className="text-xs font-semibold" style={{ color: '#0A2540' }}>Grátis</p>
              <p className="text-xs text-gray-400">Sem compromisso</p>
            </div>
          </div>
        </div>

        <footer className="text-center pb-4">
          <p className="text-gray-400 text-xs uppercase tracking-widest">
            © Elétrica Porto — Porto Seguro • BA
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ThankYouPage;
