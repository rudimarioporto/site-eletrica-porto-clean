import { useState, useEffect } from 'react';


const EmergencyBanner = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div
      className="fixed bottom-20 left-4 z-40 max-w-56 w-full transition-all duration-500"
      style={{
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.96)',
        opacity: visible ? 0.82 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div
        className="rounded-xl overflow-hidden"
        style={{
          background: 'rgba(10,37,64,0.88)',
          border: '1px solid rgba(56,182,255,0.2)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="p-3">
          {/* Header row */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6 flex items-center justify-center flex-shrink-0">
                <span
                  className="absolute inline-flex w-full h-full rounded-full animate-ping opacity-25"
                  style={{ background: '#38B6FF' }}
                />
                <span
                  className="relative w-6 h-6 flex items-center justify-center rounded-full"
                  style={{ background: 'rgba(56,182,255,0.15)' }}
                >
                  <i className="ri-alarm-warning-fill text-xs" style={{ color: '#38B6FF' }}></i>
                </span>
              </div>
              <div className="text-white font-semibold text-xs leading-tight">Atendimento Emergencial</div>
            </div>
            <button
              onClick={handleDismiss}
              className="w-5 h-5 flex items-center justify-center rounded-full cursor-pointer transition-colors flex-shrink-0"
              style={{ background: 'rgba(255,255,255,0.08)', color: 'rgba(255,255,255,0.5)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.16)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
              aria-label="Fechar"
            >
              <i className="ri-close-line text-xs"></i>
            </button>
          </div>

          <a
            href="https://wa.me/5573999933162?text=Ol%C3%A1%2C%20preciso%20de%20atendimento%20emergencial."
            target="_blank"
            rel="nofollow noreferrer"
            className="flex items-center justify-center gap-1.5 text-white font-semibold text-xs py-2 rounded-lg cursor-pointer whitespace-nowrap hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(90deg, #25D366, #128C7E)' }}
          >
            <i className="ri-whatsapp-line text-xs"></i>
            Chamar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;
