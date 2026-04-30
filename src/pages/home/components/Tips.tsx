const tips = [
  {
    icon: 'ri-drop-line',
    title: 'Verifique o nível de água regularmente',
    desc: 'Bombas que trabalham a seco sofrem superaquecimento e queimam rapidamente. Sempre confirme que há água suficiente antes de ligar.',
    color: 'bg-blue-50 text-blue-500 border-blue-100',
  },
  {
    icon: 'ri-temp-hot-line',
    title: 'Atenção ao superaquecimento do motor',
    desc: 'Se o motor estiver muito quente ao toque, desligue imediatamente. Isso pode indicar problema na ventilação ou sobrecarga.',
    color: 'bg-sky-50 text-sky-600 border-sky-100',
  },
  {
    icon: 'ri-calendar-check-line',
    title: 'Faça manutenção preventiva anual',
    desc: 'Uma revisão anual evita 80% das quebras. Inclui verificação de rolamentos, vedações, isolamento e conexões elétricas.',
    color: 'bg-green-50 text-green-500 border-green-100',
  },
  {
    icon: 'ri-sound-module-line',
    title: 'Ruídos estranhos = sinal de alerta',
    desc: 'Barulhos de vibração, rangido ou batida podem indicar rolamento desgastado. Quanto antes verificar, menor o custo do reparo.',
    color: 'bg-yellow-50 text-yellow-600 border-yellow-100',
  },
  {
    icon: 'ri-flashlight-line',
    title: 'Proteja contra variações de tensão',
    desc: 'Use protetor de tensão ou relé de monitoramento. Variações elétricas são uma das principais causas de queima de motores.',
    color: 'bg-red-50 text-red-500 border-red-100',
  },
  {
    icon: 'ri-filter-line',
    title: 'Limpe filtros e crivos periodicamente',
    desc: 'Entupimentos nos filtros fazem a bomba trabalhar mais e reduzem a vida útil. Limpe a cada 3 meses ou conforme o uso.',
    color: 'bg-teal-50 text-teal-500 border-teal-100',
  },
];

const Tips = () => (
  <section id="dicas" className="py-20 md:py-28" style={{ background: 'rgb(250,250,252)' }}>
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      <div className="text-center mb-14">
        <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-4" style={{ color: '#1E4E8C' }}>
          <i className="ri-lightbulb-flash-line"></i>
          Dicas rápidas
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          Manutenção preventiva que <span style={{ color: '#1E4E8C' }}>salva dinheiro</span>
        </h2>
        <p className="text-gray-500 text-sm max-w-lg mx-auto">
          Pequenos cuidados diários evitam grandes problemas. Nossa equipe preparou estas dicas para você.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {tips.map((tip) => (
          <div
            key={tip.title}
            className={`rounded-xl border p-5 flex gap-4 items-start ${tip.color} hover:-translate-y-0.5 transition-transform`}
          >
            <div className={`w-10 h-10 flex items-center justify-center rounded-lg flex-shrink-0 ${tip.color}`}>
              <i className={`${tip.icon} text-xl`}></i>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-sm mb-1">{tip.title}</h4>
              <p className="text-gray-600 text-xs leading-relaxed">{tip.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Tips;
