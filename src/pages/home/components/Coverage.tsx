const cities = [
  { name: 'Porto Seguro', highlight: true, icon: 'ri-map-pin-2-fill', desc: 'Sede — atendimento imediato' },
  { name: 'Arraial d\'Ajuda', highlight: false, icon: 'ri-map-pin-line', desc: 'Atendimento regular' },
  { name: 'Trancoso', highlight: false, icon: 'ri-map-pin-line', desc: 'Atendimento regular' },
  { name: 'Santa Cruz Cabrália', highlight: false, icon: 'ri-map-pin-line', desc: 'Atendimento regular' },
  { name: 'Eunápolis', highlight: false, icon: 'ri-map-pin-line', desc: 'Atendimento regular' },
  { name: 'Itabela', highlight: false, icon: 'ri-map-pin-line', desc: 'Atendimento regular' },
  { name: 'Guaratinga', highlight: false, icon: 'ri-map-pin-line', desc: 'Atendimento regular' },
  { name: 'Belmonte', highlight: false, icon: 'ri-map-pin-line', desc: 'Atendimento regular' },
  { name: 'Itapebi', highlight: false, icon: 'ri-map-pin-line', desc: 'Atendimento regular' },
];

const highlights = [
  { icon: 'ri-flashlight-line', value: '< 2h', label: 'Tempo médio de resposta' },
  { icon: 'ri-map-2-line', value: '9+', label: 'Cidades atendidas' },
  { icon: 'ri-road-map-line', value: '150km', label: 'Raio de atendimento' },
  { icon: 'ri-calendar-check-line', value: '6 dias', label: 'Seg a Sáb' },
];

const Coverage = () => (
  <section id="area-atendimento" className="py-20 md:py-28 bg-white">
    <div className="max-w-7xl mx-auto px-4 md:px-8">
      {/* Header */}
      <div className="text-center mb-14">
        <div
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-4"
          style={{ color: '#1E4E8C' }}
        >
          <i className="ri-map-2-line"></i>
          Área de Atendimento
        </div>
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
          Atendimento em{' '}
          <span style={{ color: '#1E4E8C' }}>toda a região</span>
        </h2>
        <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
          Atendemos Porto Seguro e cidades próximas com agilidade e compromisso.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left — Map + stats */}
        <div className="flex flex-col gap-5">
          {/* Map embed */}
          <div className="rounded-2xl overflow-hidden border border-gray-100" style={{ height: '340px' }}>
            <div
              className="flex items-center gap-3 px-4 py-3 border-b border-gray-100"
            >
              <div
                className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, #1E4E8C, #38B6FF)', color: 'white' }}
              >
                <i className="ri-map-pin-2-fill text-sm"></i>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-gray-900 text-sm">Extremo Sul da Bahia</div>
                <div className="text-gray-400 text-xs">Porto Seguro e região</div>
              </div>
              <a
                href="https://maps.google.com/?q=Porto+Seguro,+BA"
                target="_blank"
                rel="nofollow noreferrer"
                className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-full border transition-all cursor-pointer whitespace-nowrap"
                style={{ borderColor: '#1E4E8C', color: '#1E4E8C' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#1E4E8C'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1E4E8C'; }}
              >
                <i className="ri-external-link-line"></i>
                Ver no Maps
              </a>
            </div>
            <iframe
              title="Área de atendimento Elétrica Porto — Extremo Sul da Bahia"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d220000!2d-39.17!3d-16.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1714000000001!5m2!1spt-BR!2sbr"
              width="100%"
              height="292"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="flex flex-col items-center text-center p-4 rounded-xl border border-gray-100 bg-gray-50/60"
              >
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-lg mb-2"
                  style={{ background: 'rgba(30,78,140,0.08)', color: '#1E4E8C' }}
                >
                  <i className={`${h.icon} text-base`}></i>
                </div>
                <div className="font-extrabold text-lg" style={{ color: '#38B6FF' }}>{h.value}</div>
                <div className="text-gray-500 text-xs leading-tight mt-0.5">{h.label}</div>
              </div>
            ))}
          </div>

          {/* CTA abaixo do mapa */}
          <a
            href="https://wa.me/5573999933162?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20El%C3%A9trica%20Porto.%20Gostaria%20de%20solicitar%20um%20atendimento."
            target="_blank"
            rel="nofollow noreferrer"
            className="flex items-center justify-center gap-2 text-white font-extrabold px-8 py-4 rounded-full text-base transition-all hover:scale-105 cursor-pointer whitespace-nowrap w-full"
            style={{
              background: 'linear-gradient(90deg, #0A2540 0%, #1E4E8C 50%, #38B6FF 100%)',
              boxShadow: '0 4px 20px rgba(56,182,255,0.25)',
            }}
          >
            <i className="ri-whatsapp-line text-lg"></i>
            Solicitar Atendimento
          </a>
        </div>

        {/* Right — Cities list */}
        <div>
          <div className="mb-5">
            <div className="font-bold text-gray-900 text-base mb-1">Cidades atendidas</div>
            <p className="text-gray-500 text-sm">
              Atendemos residências, comércios, indústrias e propriedades rurais em toda a região.
            </p>
          </div>

          <div className="flex flex-col gap-2 mb-6">
            {cities.map((city) => (
              <div
                key={city.name}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border transition-all"
                style={{
                  background: city.highlight
                    ? 'linear-gradient(90deg, rgba(10,37,64,0.05), rgba(56,182,255,0.08))'
                    : 'white',
                  borderColor: city.highlight ? 'rgba(56,182,255,0.3)' : 'rgba(0,0,0,0.07)',
                }}
              >
                <div
                  className="w-8 h-8 flex items-center justify-center rounded-lg flex-shrink-0"
                  style={{
                    background: city.highlight
                      ? 'linear-gradient(135deg, #1E4E8C, #38B6FF)'
                      : 'rgba(56,182,255,0.10)',
                    color: city.highlight ? 'white' : '#38B6FF',
                  }}
                >
                  <i className={`${city.icon} text-sm`}></i>
                </div>
                <div className="flex-1 min-w-0">
                  <div
                    className="font-bold text-sm flex items-center gap-2"
                    style={{ color: city.highlight ? '#0A2540' : '#374151' }}
                  >
                    {city.name}
                    {city.highlight && (
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: 'rgba(56,182,255,0.15)', color: '#38B6FF' }}
                      >
                        Sede
                      </span>
                    )}
                  </div>
                  <div className="text-gray-400 text-xs">{city.desc}</div>
                </div>
                <i className="ri-arrow-right-s-line flex-shrink-0" style={{ color: '#38B6FF' }}></i>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="flex items-start gap-3 p-4 rounded-xl border"
            style={{ background: 'rgba(30,78,140,0.04)', borderColor: 'rgba(30,78,140,0.12)' }}
          >
            <div
              className="w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0"
              style={{ background: 'linear-gradient(135deg, #1E4E8C, #38B6FF)', color: 'white' }}
            >
              <i className="ri-question-line text-sm"></i>
            </div>
            <div className="flex-1">
              <div className="font-bold text-gray-800 text-sm mb-0.5">Sua cidade não está na lista?</div>
              <p className="text-gray-500 text-xs leading-relaxed mb-2">
                Entre em contato — atendemos outras localidades mediante consulta de disponibilidade.
              </p>
              <a
                href="https://wa.me/5573999933162?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20se%20voc%C3%AAs%20atendem%20na%20minha%20cidade."
                target="_blank"
                rel="nofollow noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold px-4 py-2 rounded-full text-white cursor-pointer whitespace-nowrap hover:opacity-90"
                style={{ background: 'linear-gradient(90deg, #1E4E8C, #38B6FF)' }}
              >
                <i className="ri-whatsapp-line"></i>
                Consultar disponibilidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Coverage;
