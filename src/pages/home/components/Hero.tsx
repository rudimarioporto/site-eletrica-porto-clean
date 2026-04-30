const Hero = () => {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image — foto real Rudivan */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.ibb.co/pk5syY1/Rudivan-jpg.png')",
          backgroundPosition: 'center center',
          filter: 'brightness(1.08) contrast(1.15) saturate(1.1)',
        }}
      />

      {/* Overlay escuro base — garante contraste do texto */}
      <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.50)' }} />
      {/* Overlay azul direcional — mantém identidade visual */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, rgba(10,37,64,0.55) 0%, rgba(10,37,64,0.30) 50%, rgba(10,37,64,0.55) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8 text-center flex flex-col items-center">

        {/* 1. Logo — identificação de marca, menor destaque */}
        <div className="mt-20 mb-6" style={{ opacity: 0.88 }}>
          <img
            src="https://public.readdy.ai/ai/img_res/134c6734-485a-4896-accf-bf5582935133.png"
            alt="Elétrica Porto — Motores e Bombas"
            className="w-auto object-contain"
            style={{
              height: '140px',
              maxWidth: '320px',
              filter: 'drop-shadow(0 0 14px rgba(56,182,255,0.35)) drop-shadow(0 4px 18px rgba(10,37,64,0.5))',
            }}
          />
        </div>

        {/* 2. H1 — elemento principal, maior destaque */}
        <h1
          className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-5"
          style={{ textShadow: '0px 2px 8px rgba(0,0,0,0.55)' }}
        >
          Especialistas em{' '}
          <span style={{ color: '#38B6FF', textShadow: '0px 2px 8px rgba(0,0,0,0.5)' }}>Motores Elétricos</span>
          <br />e{' '}
          <span style={{ color: '#38B6FF', textShadow: '0px 2px 8px rgba(0,0,0,0.5)' }}>Bombas d&apos;Água</span>
        </h1>

        {/* 3. Subheadline — explicação antes da ação */}
        <p className="text-white/90 text-lg max-w-md mx-auto mb-9 leading-relaxed" style={{ textShadow: '0px 1px 4px rgba(0,0,0,0.5)' }}>
          Mais de 28 anos oferecendo soluções confiáveis em Porto Seguro e região.
        </p>

        {/* 4. CTAs — após entender a proposta */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          {/* Principal */}
          <a
            href="#agendamento"
            onClick={(e) => { e.preventDefault(); handleScroll('#agendamento'); }}
            className="flex items-center justify-center gap-2 text-white font-extrabold px-10 py-4 rounded-full text-base transition-all hover:scale-105 hover:shadow-lg cursor-pointer whitespace-nowrap"
            style={{
              background: 'linear-gradient(90deg, #38B6FF 0%, #1E4E8C 60%, #0A2540 100%)',
              boxShadow: '0 4px 24px rgba(56,182,255,0.35)',
            }}
          >
            <i className="ri-calendar-check-line text-lg" />
            Agendar Atendimento
          </a>
          {/* Secundário */}
          <a
            href="https://wa.me/5573999933162?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20El%C3%A9trica%20Porto.%20Gostaria%20de%20falar%20com%20um%20especialista."
            target="_blank"
            rel="nofollow noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-[#0A2540] font-extrabold px-10 py-4 rounded-full text-base transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
            style={{ boxShadow: '0 4px 20px rgba(255,255,255,0.25)' }}
          >
            <i className="ri-whatsapp-line text-lg text-green-500" />
            Falar no WhatsApp
          </a>
        </div>

        {/* 5. Prova social — menor destaque, refinada */}
        <div
          className="flex items-center gap-8 md:gap-12"
          style={{ borderTop: '1px solid rgba(255,255,255,0.12)', paddingTop: '1.25rem', opacity: 0.85 }}
        >
          <div className="text-center">
            <div className="text-white font-bold text-xl md:text-2xl">+28 anos</div>
            <div className="text-white/50 text-xs mt-0.5">de experiência</div>
          </div>
          <div style={{ width: '1px', height: '30px', background: 'rgba(255,255,255,0.18)' }} />
          <div className="text-center">
            <div className="text-white font-bold text-xl md:text-2xl">+3.000</div>
            <div className="text-white/50 text-xs mt-0.5">clientes atendidos</div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll('#sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white cursor-pointer animate-bounce transition-colors"
        aria-label="Rolar para baixo"
      >
        <i className="ri-arrow-down-line text-2xl" />
      </button>
    </section>
  );
};

export default Hero;
