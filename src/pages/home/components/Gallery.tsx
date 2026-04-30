import { useState } from 'react';

interface GalleryItem {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  tag: 'antes-depois' | 'manutencao' | 'instalacao' | 'oficina';
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    category: 'Antes & Depois',
    title: 'Rebobinamento de motor trifásico 15cv',
    description: 'Motor com queima total das bobinas recuperado com fio de cobre de alta qualidade.',
    image: 'https://i.ibb.co/nqm6m6Cj/f7c2a3489d4d8c65cf57c674cbdbf981.jpg',
    tag: 'antes-depois',
  },
  {
    id: 2,
    category: 'Manutenção',
    title: 'Revisão de bomba centrífuga',
    description: 'Substituição de vedações, rolamentos e revisão geral com teste de pressão.',
    image: 'https://i.ibb.co/Gfdyxn1W/Nasosnoe-oborudovanie-1024x620.jpg',
    tag: 'manutencao',
  },
  {
    id: 3,
    category: 'Instalação',
    title: 'Sistema de pressurização residencial',
    description: 'Instalação completa de pressurizador com painel de comando automático.',
    image: 'https://i.ibb.co/HDcfcSGv/image-28e9b045.png',
    tag: 'instalacao',
  },
  {
    id: 4,
    category: 'Oficina',
    title: 'Bancada de diagnóstico e testes',
    description: 'Equipamentos para diagnóstico preciso de motores e bombas.',
    image: 'https://i.ibb.co/nx6c9kK/0f9ea67d68d84a0e85b02225368e3871.png',
    tag: 'oficina',
  },
  {
    id: 5,
    category: 'Antes & Depois',
    title: 'Bomba submersível rural recuperada',
    description: 'Recuperação de bomba submersível para irrigação com substituição de impelidor.',
    image: 'https://i.ibb.co/cXCRShHg/nasosy2.jpg',
    tag: 'antes-depois',
  },
  {
    id: 6,
    category: 'Instalação',
    title: 'Motor trifásico industrial 50cv',
    description: 'Instalação de motor industrial com alinhamento e painel de comando.',
    image: 'https://i.ibb.co/nsLdqvhf/photo-2023-07-24-11-52-33-1000x600.jpg',
    tag: 'instalacao',
  },
  {
    id: 7,
    category: 'Manutenção',
    title: 'Troca de rolamentos em motor monofásico',
    description: 'Substituição de rolamentos desgastados com lubrificação e alinhamento do eixo.',
    image: 'https://i.ibb.co/rRcC5kXP/Adobe-Stock-144152440-Preview.jpg',
    tag: 'manutencao',
  },
  {
    id: 8,
    category: 'Oficina',
    title: 'Equipe técnica em ação',
    description: 'Profissionais com +28 anos de experiência no setor, desde 1998.',
    image: 'https://i.ibb.co/svbqsLmt/Chat-GPT-Image-16-de-abr-de-2026-16-17-32.png',
    tag: 'oficina',
  },
  {
    id: 9,
    category: 'Antes & Depois',
    title: 'Motor de bomba de piscina restaurado',
    description: 'Restauração completa de motor de bomba de piscina com garantia de 6 meses.',
    image: 'https://i.ibb.co/ycwCZJgX/maxresdefault-1.jpg',
    tag: 'antes-depois',
  },
];

const tags = [
  { key: 'all', label: 'Todos', icon: 'ri-grid-line' },
  { key: 'antes-depois', label: 'Antes & Depois', icon: 'ri-contrast-2-line' },
  { key: 'manutencao', label: 'Manutenção', icon: 'ri-tools-line' },
  { key: 'instalacao', label: 'Instalação', icon: 'ri-settings-3-line' },
  { key: 'oficina', label: 'Oficina', icon: 'ri-building-2-line' },
];

const tagStyle: Record<string, { bg: string; color: string }> = {
  'antes-depois': { bg: 'rgba(30,78,140,0.12)', color: '#1E4E8C' },
  'manutencao':   { bg: 'rgba(56,182,255,0.15)', color: '#0e7ab5' },
  'instalacao':   { bg: 'rgba(10,37,64,0.1)',    color: '#0A2540' },
  'oficina':      { bg: 'rgba(30,78,140,0.08)',  color: '#1E4E8C' },
};

const Gallery = () => {
  const [activeTag, setActiveTag] = useState<string>('all');
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = activeTag === 'all'
    ? galleryItems
    : galleryItems.filter((g) => g.tag === activeTag);

  return (
    <section id="galeria" className="py-20 md:py-28" style={{ background: 'rgb(248,248,250)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#1E4E8C' }}
          >
            <i className="ri-camera-line"></i>
            Portfólio
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Trabalhos <span style={{ color: '#1E4E8C' }}>realizados</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto leading-relaxed">
            Cada serviço é executado com técnica, responsabilidade e atenção aos detalhes. Veja alguns dos nossos trabalhos reais — mais de 3.000 clientes atendidos.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {tags.map((t) => (
            <button
              key={t.key}
              onClick={() => setActiveTag(t.key)}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap border"
              style={
                activeTag === t.key
                  ? { background: 'linear-gradient(90deg, #0A2540, #1E4E8C)', color: 'white', borderColor: 'transparent' }
                  : { background: 'white', color: '#6b7280', borderColor: 'rgba(0,0,0,0.1)' }
              }
              onMouseEnter={(e) => {
                if (activeTag !== t.key) {
                  e.currentTarget.style.borderColor = '#1E4E8C';
                  e.currentTarget.style.color = '#1E4E8C';
                }
              }}
              onMouseLeave={(e) => {
                if (activeTag !== t.key) {
                  e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)';
                  e.currentTarget.style.color = '#6b7280';
                }
              }}
            >
              <i className={`${t.icon} text-sm`}></i>
              {t.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => setLightbox(item)}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(30,78,140,0.25)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = '')}
            >
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-center justify-center transition-all duration-300"
                  style={{ background: 'rgba(10,37,64,0)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(10,37,64,0.35)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(10,37,64,0)')}
                >
                  <div className="w-11 h-11 flex items-center justify-center bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <i className="ri-zoom-in-line text-gray-800 text-lg"></i>
                  </div>
                </div>
                {/* Category badge */}
                <span
                  className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ background: tagStyle[item.tag].bg, color: tagStyle[item.tag].color, backdropFilter: 'blur(4px)' }}
                >
                  {item.category}
                </span>
              </div>

              {/* Info */}
              <div className="p-4">
                <h3 className="font-bold text-gray-900 text-sm mb-1 leading-snug">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-5">Precisa de um serviço semelhante?</p>
          <a
            href="https://wa.me/5573999933162?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20El%C3%A9trica%20Porto.%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="nofollow noreferrer"
            className="inline-flex items-center gap-2 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all hover:opacity-90 hover:scale-105 cursor-pointer whitespace-nowrap"
            style={{ background: 'linear-gradient(90deg, #0A2540 0%, #1E4E8C 55%, #38B6FF 100%)', boxShadow: '0 4px 20px rgba(30,78,140,0.3)' }}
          >
            <i className="ri-whatsapp-line text-base"></i>
            Solicitar Orçamento pelo WhatsApp
          </a>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: 'rgba(10,37,64,0.88)' }}
          onClick={() => setLightbox(null)}
        >
          <div
            className="relative bg-white rounded-2xl overflow-hidden max-w-2xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-3 right-3 z-10 w-8 h-8 flex items-center justify-center bg-black/50 hover:bg-black/70 text-white rounded-full cursor-pointer transition-colors"
            >
              <i className="ri-close-line text-sm"></i>
            </button>
            <div className="w-full h-72">
              <img src={lightbox.image} alt={lightbox.title} className="w-full h-full object-cover object-top" />
            </div>
            <div className="p-5">
              <span
                className="text-xs font-bold px-2.5 py-1 rounded-full"
                style={{ background: tagStyle[lightbox.tag].bg, color: tagStyle[lightbox.tag].color }}
              >
                {lightbox.category}
              </span>
              <h3 className="font-bold text-gray-900 text-lg mt-3 mb-1">{lightbox.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{lightbox.description}</p>
              <a
                href="https://wa.me/5573999933162?text=Ol%C3%A1%2C%20vi%20o%20portf%C3%B3lio%20da%20El%C3%A9trica%20Porto%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                target="_blank"
                rel="nofollow noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-white font-bold text-sm px-5 py-2.5 rounded-full cursor-pointer whitespace-nowrap hover:opacity-90"
                style={{ background: 'linear-gradient(90deg, #1E4E8C, #38B6FF)' }}
              >
                <i className="ri-whatsapp-line"></i>
                Solicitar serviço similar
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
