import { useEffect, useRef, useState } from 'react';

const values = [
  { icon: 'ri-shield-check-line', title: 'Qualidade Técnica', desc: 'Diagnósticos precisos e serviços executados com rigor técnico em cada etapa.' },
  { icon: 'ri-hand-heart-line', title: 'Confiança', desc: 'Construída ao longo de +28 anos de atendimento honesto e transparente, desde 1998.' },
  { icon: 'ri-flashlight-line', title: 'Agilidade', desc: 'Soluções rápidas e eficazes para minimizar o tempo de parada dos equipamentos.' },
  { icon: 'ri-cpu-line', title: 'Inovação Aplicada', desc: 'Desenvolvemos circuitos eletrônicos e adaptações técnicas personalizadas para cada desafio.' },
  { icon: 'ri-user-star-line', title: 'Foco no Cliente', desc: 'Cada atendimento é único — entendemos a necessidade e entregamos a melhor solução.' },
  { icon: 'ri-medal-line', title: 'Excelência', desc: 'Nosso propósito é garantir o funcionamento confiável dos equipamentos e a tranquilidade de cada cliente.' },
];

const stats = [
  { icon: 'ri-trophy-line', end: 28, suffix: '+', label: 'Anos de experiência' },
  { icon: 'ri-user-smile-line', end: 3000, suffix: '+', label: 'Clientes atendidos' },
  { icon: 'ri-settings-3-line', end: 1800, suffix: '+', label: 'Motores rebobinados' },
  { icon: 'ri-tools-line', end: 5000, suffix: '+', label: 'Serviços concluídos' },
];

const useCountUp = (end: number, duration = 1800, active: boolean) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration, active]);
  return count;
};

const StatCard = ({ stat, active }: { stat: typeof stats[0]; active: boolean }) => {
  const count = useCountUp(stat.end, 1800, active);
  return (
    <div className="flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 bg-gray-50/60">
      <div
        className="w-11 h-11 flex items-center justify-center rounded-xl mb-3"
        style={{ background: 'rgba(30,78,140,0.08)', color: '#1E4E8C' }}
      >
        <i className={`${stat.icon} text-xl`}></i>
      </div>
      <div className="text-3xl font-extrabold mb-1" style={{ color: '#38B6FF' }}>
        {count.toLocaleString('pt-BR')}{stat.suffix}
      </div>
      <div className="text-gray-500 text-xs font-medium leading-tight">{stat.label}</div>
    </div>
  );
};

const About = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStatsActive(true); },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sobre" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Text */}
          <div>
            <div
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-4"
              style={{ color: '#1E4E8C' }}
            >
              <i className="ri-information-line"></i>
              Sobre nós
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              +28 anos de{' '}
              <span style={{ color: '#1E4E8C' }}>qualidade técnica e confiança</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Fundada em <strong>1998</strong>, a Elétrica Porto construiu sua trajetória com base na qualidade técnica e no compromisso com cada cliente. Localizada em Porto Seguro, oferece soluções especializadas em <strong>manutenção e recuperação de motores elétricos e bombas d&apos;água</strong>, além de serviços em equipamentos como moedores elétricos de cana e roçadeiras.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Sob a liderança de <strong>Rudivan Porto</strong>, profissional com ampla experiência em eletromecânica e projetos eletrônicos, a Elétrica Porto vai além da manutenção tradicional — desenvolvemos <strong>adaptações técnicas e circuitos eletrônicos personalizados</strong>, criando soluções eficientes para os desafios específicos de cada cliente.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Desde <strong>1998</strong>, a empresa mantém dois princípios inegociáveis: <strong>qualidade técnica</strong> e <strong>confiança</strong>. Atendemos desde residências até propriedades rurais e operações industriais, sempre com o mesmo compromisso — soluções rápidas, honestas e eficazes.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Hoje somos referência regional em <strong>rebobinamento de motores elétricos</strong> e <strong>manutenção de bombas d&apos;água</strong>, com estrutura adequada e conhecimento técnico para garantir diagnósticos precisos e resultados consistentes.
            </p>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden w-full h-80 md:h-96" style={{ position: 'relative' }}>
              <img
                src="https://i.ibb.co/nss74Nbv/25-anos.jpg"
                alt="Equipe Elétrica Porto - 25 anos de experiência técnica"
                className="w-full h-full object-cover object-center"
                style={{ filter: 'brightness(1.06) contrast(1.12) saturate(1.08)' }}
              />
              {/* Leve overlay azul para harmonizar com identidade visual */}
              <div
                className="absolute inset-0 rounded-2xl"
                style={{ background: 'rgba(10,37,64,0.12)', pointerEvents: 'none' }}
              />
            </div>
            <div
              className="absolute -bottom-4 -left-4 text-white rounded-xl p-4"
              style={{ background: 'linear-gradient(135deg, #0A2540 0%, #1E4E8C 100%)' }}
            >
              <div className="text-2xl font-extrabold">+28</div>
              <div className="text-xs font-medium opacity-90">Anos de mercado</div>
            </div>
          </div>
        </div>

        {/* Animated Stats */}
        <div ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} active={statsActive} />
          ))}
        </div>

        {/* Values */}
        <div>
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Nossos Valores</h3>
            <p className="text-gray-500 text-sm">Os princípios que guiam cada serviço que prestamos</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="flex items-start gap-4 p-5 rounded-xl border border-gray-100 bg-gray-50/60 transition-all group cursor-default"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(30,78,140,0.25)';
                  e.currentTarget.style.background = 'rgba(30,78,140,0.04)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '';
                  e.currentTarget.style.background = '';
                }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0 transition-all"
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
                  <i className={`${v.icon} text-xl`}></i>
                </div>
                <div>
                  <div className="font-bold text-gray-800 text-sm mb-1">{v.title}</div>
                  <div className="text-gray-500 text-sm leading-relaxed">{v.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
