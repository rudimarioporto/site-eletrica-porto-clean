import { useState } from 'react';

const googleReviews = [
  {
    name: 'Antônio Sequeira&nbsp;',
    initials: 'MO',
    role: 'Proprietário Rural',
    time: 'há 2 semanas',
    text: 'Minha bomba de irrigação parou no meio da safra. Liguei pra Elétrica Porto às 7h e às 10h já tinha um técnico aqui. Consertaram na hora, sem enrolação. Salvaram minha colheita!',
    rating: 5,
    service: 'Manutenção de Bomba',
    avatar: 'https://readdy.ai/api/search-image?query=middle%20aged%20brazilian%20farmer%20man%20portrait%20friendly%20smiling%20outdoor%20natural%20light%20simple%20background&width=100&height=100&seq=av01&orientation=squarish',
  },
  {
    name: 'Sandra Santos',
    initials: 'SM',
    role: 'Empresária — Padaria',
    time: 'há 1 mês',
    text: 'O motor do meu equipamento queimou e precisava urgente. A equipe foi super atenciosa, fez o rebobinamento em 2 dias e o preço foi muito mais barato que trocar por um novo. Recomendo demais!',
    rating: 5,
    service: 'Rebobinamento de Motor',
    avatar: 'https://readdy.ai/api/search-image?query=brazilian%20businesswoman%20middle%20aged%20portrait%20smiling%20confident%20professional%20simple%20background&width=100&height=100&seq=av02&orientation=squarish',
  },
  {
    name: 'Aílton Ferreira',
    initials: 'RF',
    role: 'Morador — Condomínio',
    time: 'há 3 semanas',
    text: 'Tínhamos um problema crônico com a bomba d\'água do prédio. Chamei a Elétrica Porto, fizeram um diagnóstico completo e resolveram de vez. Já tem 1 ano e nenhum problema. Excelente!',
    rating: 5,
    service: 'Diagnóstico e Reparo',
    avatar: 'https://readdy.ai/api/search-image?query=young%20brazilian%20man%20portrait%20casual%20smiling%20friendly%20natural%20light%20simple%20background&width=100&height=100&seq=av03&orientation=squarish',
  },
  {
    name: 'Sâmara Lima',
    initials: 'AL',
    role: 'Proprietária — Pousada',
    time: 'há 2 meses',
    text: 'Contratei a Elétrica Porto para instalar todo o sistema de bombeamento da pousada. Profissionalismo do começo ao fim, prazo cumprido e preço dentro do orçamento. Parceiros de confiança!',
    rating: 5,
    service: 'Instalação Completa',
    avatar: 'https://readdy.ai/api/search-image?query=young%20brazilian%20woman%20portrait%20smiling%20friendly%20warm%20natural%20light%20simple%20clean%20background&width=100&height=100&seq=av04&orientation=squarish',
  },
  {
    name: 'Sandro Oliveira',
    initials: 'CE',
    role: 'Técnico em Manutenção',
    time: 'há 1 semana',
    text: 'Trabalho com manutenção industrial há 15 anos e a Elétrica Porto é nossa referência para rebobinamento. Qualidade técnica impecável, laudo completo e entrega no prazo. Top!',
    rating: 5,
    service: 'Rebobinamento Industrial',
    avatar: 'https://readdy.ai/api/search-image?query=brazilian%20technician%20man%20portrait%20friendly%20smiling%20work%20clothes%20simple%20background&width=100&height=100&seq=av05&orientation=squarish',
  },
  {
    name: 'Patrícia Souza',
    initials: 'PS',
    role: 'Proprietária Rural',
    time: 'há 5 dias',
    text: 'Bomba da minha fazenda parou de funcionar e precisava urgente. Atendimento rápido, técnico muito educado e competente. Resolveram o problema no mesmo dia. Super recomendo!',
    rating: 5,
    service: 'Atendimento Emergencial',
    avatar: 'https://readdy.ai/api/search-image?query=brazilian%20rural%20woman%20farmer%20portrait%20smiling%20friendly%20natural%20light%20outdoor%20simple%20background&width=100&height=100&seq=av06&orientation=squarish',
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <i
        key={i}
        className={i < rating ? 'ri-star-fill' : 'ri-star-line'}
        style={{ color: '#38B6FF', fontSize: '13px' }}
      ></i>
    ))}
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  const visible = 3;
  const total = googleReviews.length;

  const prev = () => setCurrent((c) => (c === 0 ? total - visible : c - 1));
  const next = () => setCurrent((c) => (c >= total - visible ? 0 : c + 1));

  const displayed = googleReviews.slice(current, current + visible);
  const fill = visible - displayed.length;
  const filled = fill > 0 ? [...displayed, ...googleReviews.slice(0, fill)] : displayed;

  const avgRating = (googleReviews.reduce((a, r) => a + r.rating, 0) / googleReviews.length).toFixed(1);

  return (
    <section id="depoimentos" className="py-20 md:py-28" style={{ background: 'rgb(248,248,250)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#1E4E8C' }}
          >
            <i className="ri-google-line"></i>
            Avaliações Google
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            O que nossos clientes <span style={{ color: '#1E4E8C' }}>dizem</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto mb-6">
            A confiança dos nossos clientes é construída com trabalho sério e resultados consistentes.
          </p>

          {/* Google rating summary */}
          <div className="inline-flex items-center gap-5 px-6 py-4 rounded-2xl border border-gray-100 bg-white">
            {/* Google logo area */}
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1 mb-1">
                <span className="font-extrabold text-3xl text-gray-900">{avgRating}</span>
              </div>
              <StarRating rating={5} />
              <div className="text-gray-400 text-xs mt-1">{googleReviews.length} avaliações</div>
            </div>
            <div className="w-px h-12 bg-gray-100"></div>
            <div className="flex flex-col gap-1">
              {[5, 4, 3].map((star) => {
                const count = googleReviews.filter((r) => r.rating === star).length;
                const pct = Math.round((count / googleReviews.length) * 100);
                return (
                  <div key={star} className="flex items-center gap-2">
                    <span className="text-xs text-gray-400 w-3">{star}</span>
                    <i className="ri-star-fill text-xs" style={{ color: '#38B6FF' }}></i>
                    <div className="w-24 h-1.5 rounded-full bg-gray-100 overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${pct}%`, background: 'linear-gradient(90deg, #1E4E8C, #38B6FF)' }}
                      />
                    </div>
                    <span className="text-xs text-gray-400">{pct}%</span>
                  </div>
                );
              })}
            </div>
            <div className="w-px h-12 bg-gray-100 hidden sm:block"></div>
            <a
              href="https://maps.app.goo.gl/ZXf3pgMM5vxAtRHF6"
              target="_blank"
              rel="nofollow noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-xs font-bold px-4 py-2.5 rounded-full border transition-all cursor-pointer whitespace-nowrap"
              style={{ borderColor: '#1E4E8C', color: '#1E4E8C' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#1E4E8C'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1E4E8C'; }}
            >
              <i className="ri-google-line"></i>
              Ver no Google
            </a>
          </div>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {filled.map((review, i) => (
            <div
              key={`${review.name}-${i}`}
              className="bg-white rounded-2xl p-5 border border-gray-100 flex flex-col gap-3 transition-all"
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(30,78,140,0.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="relative flex-shrink-0">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover object-top"
                    />
                    {/* Google G badge */}
                    <div
                      className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center border border-white"
                      style={{ background: '#4285F4' }}
                    >
                      <span className="text-white font-bold" style={{ fontSize: '8px' }}>G</span>
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-sm leading-tight">{review.name}</div>
                    <div className="text-gray-400 text-xs">{review.role}</div>
                  </div>
                </div>
                <div className="text-gray-300 text-xs whitespace-nowrap">{review.time}</div>
              </div>

              {/* Stars */}
              <StarRating rating={review.rating} />

              {/* Text */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>

              {/* Footer */}
              <div
                className="flex items-center justify-between pt-3 border-t border-gray-100"
              >
                <span
                  className="text-xs px-2.5 py-1 rounded-full font-medium border"
                  style={{ color: '#1E4E8C', background: 'rgba(30,78,140,0.06)', borderColor: 'rgba(30,78,140,0.15)' }}
                >
                  {review.service}
                </span>
                <div className="flex items-center gap-1">
                  <i className="ri-thumb-up-line text-xs text-gray-300"></i>
                  <span className="text-xs text-gray-300">Útil</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 cursor-pointer transition-colors"
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#1E4E8C'; e.currentTarget.style.color = '#1E4E8C'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.color = ''; }}
            aria-label="Anterior"
          >
            <i className="ri-arrow-left-s-line text-xl"></i>
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full cursor-pointer transition-all"
                style={{
                  width: i === current ? '20px' : '8px',
                  height: '8px',
                  background: i === current ? '#1E4E8C' : '#d1d5db',
                }}
                aria-label={`Avaliação ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 text-gray-500 cursor-pointer transition-colors"
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#1E4E8C'; e.currentTarget.style.color = '#1E4E8C'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.color = ''; }}
            aria-label="Próximo"
          >
            <i className="ri-arrow-right-s-line text-xl"></i>
          </button>
        </div>

        {/* Ver no Google CTA */}
        <div className="text-center">
          <a
            href="https://maps.app.goo.gl/ZXf3pgMM5vxAtRHF6"
            target="_blank"
            rel="nofollow noreferrer"
            className="inline-flex items-center gap-2 font-bold text-sm px-6 py-3 rounded-full border-2 transition-all cursor-pointer whitespace-nowrap hover:scale-105"
            style={{ borderColor: '#1E4E8C', color: '#1E4E8C' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#1E4E8C'; e.currentTarget.style.color = 'white'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1E4E8C'; }}
          >
            <i className="ri-google-line text-base"></i>
            Ver todas as avaliações no Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
