const services = [
  {
    icon: 'ri-water-flash-line',
    title: 'Manutenção de Bombas d\'Água',
    desc: 'Diagnóstico, reparo e revisão completa de bombas centrífugas, submersas e periféricas. Atendimento emergencial disponível.',
    tags: ['Residencial', 'Rural', 'Industrial'],
    img: 'https://i.ibb.co/N6bMPFjj/Essa.jpg',
  },
  {
    icon: 'ri-settings-3-line',
    title: 'Rebobinamento de Motores',
    desc: 'Rebobinamento profissional de motores elétricos monofásicos e trifásicos com garantia de qualidade e laudos técnicos.',
    tags: ['Monofásico', 'Trifásico', 'Industrial'],
    img: 'https://i.ibb.co/v6DgCLLR/Topo.png',
  },
  {
    icon: 'ri-flashlight-line',
    title: 'Instalação e Diagnóstico',
    desc: 'Instalação de motores e bombas com configuração completa, cabeamento elétrico e testes de funcionamento.',
    tags: ['Instalação', 'Diagnóstico', 'Preventivo'],
    img: 'https://i.ibb.co/CKTKwyvZ/Chat-GPT-Image-16-de-abr-de-2026-00-51-05.png',
  },
  {
    icon: 'ri-home-gear-line',
    title: 'Atendimento Especializado',
    desc: 'Atendemos residências, estabelecimentos comerciais e propriedades rurais com soluções sob medida para cada necessidade.',
    tags: ['Residencial', 'Comercial', 'Rural'],
    img: 'https://i.ibb.co/k2WvMQ0G/df9cddb92b0640c4a1db25a4593a9ae0.jpg',
  },
];

const Services = () => (
  <section id="servicos" className="py-20 md:py-28" style={{ background: 'rgb(248,248,250)' }}>
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-14">
        <div
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-4"
          style={{ color: '#1E4E8C' }}
        >
          <i className="ri-tools-line"></i>
          Nossos serviços
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Soluções completas em{' '}
          <span style={{ color: '#1E4E8C' }}>manutenção elétrica</span>
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto text-sm md:text-base">
          Atuamos com diagnóstico, manutenção e recuperação de equipamentos, garantindo desempenho, segurança e durabilidade.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((svc) => (
          <div
            key={svc.title}
            className="bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all hover:-translate-y-1 group"
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(30,78,140,0.25)')}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
          >
            <div className="h-44 overflow-hidden relative">
              <img
                src={svc.img}
                alt={svc.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                style={
                  ['Manutenção de Bombas d\'Água', 'Rebobinamento de Motores', 'Instalação e Diagnóstico', 'Atendimento Especializado'].includes(svc.title)
                    ? { filter: 'brightness(1.05) contrast(1.1) saturate(1.05)' }
                    : {}
                }
              />
              {['Manutenção de Bombas d\'Água', 'Rebobinamento de Motores', 'Instalação e Diagnóstico', 'Atendimento Especializado'].includes(svc.title) && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{ background: 'rgba(10,37,64,0.13)' }}
                />
              )}
            </div>
            <div className="p-5">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-lg mb-3 transition-all"
                style={{ background: 'rgba(30,78,140,0.1)', color: '#1E4E8C' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #1E4E8C, #38B6FF)';
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(30,78,140,0.1)';
                  e.currentTarget.style.color = '#1E4E8C';
                }}
              >
                <i className={`${svc.icon} text-xl`}></i>
              </div>
              <h3 className="font-bold text-gray-900 text-sm mb-2 leading-snug">{svc.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">{svc.desc}</p>
              <div className="flex flex-wrap gap-1">
                {svc.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 rounded-full font-medium border"
                    style={{ background: 'rgba(30,78,140,0.06)', color: '#1E4E8C', borderColor: 'rgba(30,78,140,0.15)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-14 text-center">
        <p className="text-gray-500 text-sm mb-4">Precisa de um serviço diferente? Fale conosco!</p>
        <a
          href="#contato"
          onClick={(e) => { e.preventDefault(); document.querySelector('#contato')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-full transition-all cursor-pointer text-sm whitespace-nowrap border-2"
          style={{ borderColor: '#1E4E8C', color: '#1E4E8C' }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#1E4E8C';
            e.currentTarget.style.color = 'white';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = '#1E4E8C';
          }}
        >
          <i className="ri-customer-service-2-line"></i>
          Falar com especialista
        </a>
      </div>
    </div>
  </section>
);

export default Services;
