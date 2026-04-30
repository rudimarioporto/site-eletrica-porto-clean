const services = [
  {
    icon: 'ri-search-eye-line',
    title: 'Diagnóstico Técnico',
    desc: 'Avaliação completa do equipamento com laudo técnico detalhado e identificação do defeito.',
    price: 'R$ 80',
    tag: 'Diagnóstico',
    highlight: false,
    features: ['Teste elétrico completo', 'Laudo técnico escrito', 'Orçamento sem compromisso', 'Atendimento em oficina'],
  },
  {
    icon: 'ri-settings-3-line',
    title: 'Manutenção de Motores',
    desc: 'Revisão, limpeza, troca de rolamentos e vedações em motores elétricos mono e trifásicos.',
    price: 'R$ 180',
    tag: 'Manutenção',
    highlight: false,
    features: ['Limpeza e inspeção geral', 'Troca de rolamentos', 'Teste de isolamento', 'Garantia de 90 dias'],
  },
  {
    icon: 'ri-flashlight-line',
    title: 'Rebobinamento de Motor',
    desc: 'Rebobinamento profissional de motores queimados com fio de cobre de alta qualidade.',
    price: 'R$ 350',
    tag: 'Mais Procurado',
    highlight: true,
    features: ['Fio de cobre de qualidade', 'Laudo técnico incluso', 'Teste de carga após serviço', 'Garantia de 6 meses'],
  },
  {
    icon: 'ri-water-flash-line',
    title: 'Conserto de Bombas',
    desc: 'Reparo completo de bombas centrífugas, submersas e periféricas com peças originais.',
    price: 'R$ 150',
    tag: 'Conserto',
    highlight: false,
    features: ['Troca de impelidor', 'Vedação e gaxetas', 'Teste de pressão', 'Garantia de 90 dias'],
  },
  {
    icon: 'ri-plug-line',
    title: 'Instalação Elétrica',
    desc: 'Instalação de motores, bombas e painéis de comando com cabeamento e configuração completa.',
    price: 'R$ 200',
    tag: 'Instalação',
    highlight: false,
    features: ['Cabeamento elétrico', 'Painel de comando', 'Teste de funcionamento', 'Garantia de 1 ano'],
  },
  {
    icon: 'ri-alarm-warning-line',
    title: 'Atendimento Emergencial',
    desc: 'Atendimento prioritário para situações urgentes — falta d\'água, parada de produção e emergências.',
    price: 'R$ 250',
    tag: 'Emergencial',
    highlight: false,
    features: ['Prioridade máxima', 'Deslocamento incluso', 'Diagnóstico no local', 'Atendimento imediato'],
  },
];

const Pricing = () => (
  <section id="precos" className="py-20 md:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-14">
        <div
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-4"
          style={{ color: '#1E4E8C' }}
        >
          <i className="ri-price-tag-3-line"></i>
          Tabela de Serviços
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Preços <span style={{ color: '#1E4E8C' }}>transparentes</span> e justos
        </h2>
        <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
          Trabalhamos com transparência total. Veja os valores estimados dos nossos principais serviços — o orçamento final é sempre apresentado antes de qualquer intervenção.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
        {services.map((svc) => (
          <div
            key={svc.title}
            className="relative rounded-2xl border overflow-hidden transition-all duration-200 hover:-translate-y-1 flex flex-col"
            style={{
              borderColor: svc.highlight ? '#1E4E8C' : 'rgba(0,0,0,0.08)',
              background: svc.highlight ? 'linear-gradient(160deg, #0A2540 0%, #1E4E8C 100%)' : 'white',
            }}
          >
            {/* Top accent bar */}
            {svc.highlight && (
              <div className="h-1 w-full" style={{ background: 'linear-gradient(90deg, #38B6FF, #1E4E8C)' }} />
            )}

            {/* Tag badge */}
            <div className="px-5 pt-5 pb-0 flex items-start justify-between gap-2">
              <div
                className="w-11 h-11 flex items-center justify-center rounded-xl flex-shrink-0"
                style={{
                  background: svc.highlight ? 'rgba(56,182,255,0.18)' : 'rgba(30,78,140,0.08)',
                  color: svc.highlight ? '#38B6FF' : '#1E4E8C',
                }}
              >
                <i className={`${svc.icon} text-xl`}></i>
              </div>
              <span
                className="text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap"
                style={
                  svc.highlight
                    ? { background: 'rgba(56,182,255,0.18)', color: '#38B6FF' }
                    : { background: 'rgba(30,78,140,0.07)', color: '#1E4E8C' }
                }
              >
                {svc.tag}
              </span>
            </div>

            {/* Content */}
            <div className="px-5 pt-4 pb-5 flex flex-col flex-1">
              <h3
                className="font-bold text-base mb-1.5 leading-snug"
                style={{ color: svc.highlight ? 'white' : '#0A2540' }}
              >
                {svc.title}
              </h3>
              <p
                className="text-xs leading-relaxed mb-5"
                style={{ color: svc.highlight ? 'rgba(255,255,255,0.65)' : '#6b7280' }}
              >
                {svc.desc}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2 mb-6 flex-1">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <div
                      className="w-4 h-4 flex items-center justify-center rounded-full flex-shrink-0"
                      style={{
                        background: svc.highlight ? 'rgba(56,182,255,0.2)' : 'rgba(30,78,140,0.08)',
                      }}
                    >
                      <i
                        className="ri-check-line text-xs"
                        style={{ color: svc.highlight ? '#38B6FF' : '#1E4E8C' }}
                      ></i>
                    </div>
                    <span
                      className="text-xs"
                      style={{ color: svc.highlight ? 'rgba(255,255,255,0.75)' : '#374151' }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Price + CTA */}
              <div
                className="pt-4 border-t flex items-center justify-between gap-3"
                style={{ borderColor: svc.highlight ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.07)' }}
              >
                <div>
                  <div
                    className="text-xs font-medium mb-0.5"
                    style={{ color: svc.highlight ? 'rgba(255,255,255,0.5)' : '#9ca3af' }}
                  >
                    A partir de
                  </div>
                  <div
                    className="text-2xl font-extrabold"
                    style={{ color: svc.highlight ? '#38B6FF' : '#0A2540' }}
                  >
                    {svc.price}
                  </div>
                </div>
                <a
                  href={`https://wa.me/5573999933162?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20para%3A%20${encodeURIComponent(svc.title)}`}
                  target="_blank"
                  rel="nofollow noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-full transition-all cursor-pointer whitespace-nowrap hover:scale-105"
                  style={
                    svc.highlight
                      ? { background: 'linear-gradient(90deg, #38B6FF, #1E4E8C)', color: 'white' }
                      : { background: 'linear-gradient(90deg, #1E4E8C, #38B6FF)', color: 'white' }
                  }
                >
                  <i className="ri-whatsapp-line"></i>
                  Orçar
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div
        className="flex items-start gap-3 max-w-2xl mx-auto px-5 py-4 rounded-xl border"
        style={{ background: 'rgba(30,78,140,0.04)', borderColor: 'rgba(30,78,140,0.12)' }}
      >
        <div className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0" style={{ color: '#1E4E8C' }}>
          <i className="ri-information-line text-lg"></i>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed">
          <strong className="text-gray-700">Valores estimados.</strong> Os preços podem variar conforme análise técnica, tipo de equipamento, potência do motor e complexidade do serviço. O orçamento final é sempre apresentado e aprovado antes de qualquer intervenção. <strong className="text-gray-700">Orçamento gratuito e sem compromisso.</strong>
        </p>
      </div>
    </div>
  </section>
);

export default Pricing;
