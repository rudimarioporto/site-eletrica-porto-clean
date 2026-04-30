import { useState } from 'react';

const faqs = [
  {
    question: 'Qual é o prazo para conserto de uma bomba d\'água?',
    answer: 'O prazo varia conforme o tipo de defeito. Reparos simples são feitos no mesmo dia. Serviços mais complexos, como rebobinamento completo, levam de 1 a 3 dias úteis. Sempre informamos o prazo antes de iniciar o serviço.',
    icon: 'ri-time-line',
  },
  {
    question: 'Vocês oferecem garantia nos serviços?',
    answer: 'Sim! Todos os nossos serviços têm garantia. Manutenções e reparos têm garantia de 90 dias. Rebobinamentos de motores têm garantia de 6 meses. Instalações completas têm garantia de 1 ano. Trabalhamos com peças de qualidade e emitimos laudo técnico.',
    icon: 'ri-shield-check-line',
  },
  {
    question: 'Como funciona o orçamento? É gratuito?',
    answer: 'Sim, o orçamento é 100% gratuito e sem compromisso. Você pode solicitar pelo WhatsApp, telefone ou pelo formulário do site. Para serviços em campo, fazemos a visita técnica e apresentamos o orçamento antes de qualquer intervenção.',
    icon: 'ri-price-tag-3-line',
  },
  {
    question: 'Vocês atendem em qual região?',
    answer: 'Atendemos Porto Seguro e toda a região do Extremo Sul da Bahia, incluindo Santa Cruz Cabrália, Eunápolis, Itabela, Guaratinga e municípios vizinhos. Para localidades mais distantes, consulte disponibilidade pelo WhatsApp.',
    icon: 'ri-map-pin-line',
  },
  {
    question: 'Quais tipos de motores e bombas vocês consertam?',
    answer: 'Trabalhamos com motores elétricos monofásicos e trifásicos de qualquer marca e potência. Em bombas, atendemos centrífugas, submersas, periféricas e de pressurização. Atendemos equipamentos residenciais, comerciais, industriais e rurais.',
    icon: 'ri-settings-3-line',
  },
  {
    question: 'Vocês fazem atendimento emergencial?',
    answer: 'Sim! Temos atendimento prioritário para emergências. Entre em contato pelo WhatsApp e informe a urgência — nossa equipe avalia a disponibilidade e prioriza o atendimento. Casos críticos como falta d\'água em residências ou parada de produção têm prioridade máxima.',
    icon: 'ri-alarm-warning-line',
  },
  {
    question: 'Qual a forma de pagamento aceita?',
    answer: 'Aceitamos dinheiro, PIX, cartão de débito e crédito (parcelamento disponível). Para empresas, também trabalhamos com boleto bancário. O pagamento é realizado após a conclusão e aprovação do serviço.',
    icon: 'ri-bank-card-line',
  },
  {
    question: 'Vocês emitem nota fiscal?',
    answer: 'Sim, emitimos nota fiscal para todos os serviços. Trabalhamos de forma totalmente regularizada, com CNPJ ativo e responsabilidade técnica. Isso garante segurança jurídica para você e para sua empresa.',
    icon: 'ri-file-text-line',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="faq" className="py-20 md:py-28" style={{ background: 'rgb(248,248,250)' }}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: '#1E4E8C' }}
          >
            <i className="ri-question-answer-line"></i>
            Dúvidas Frequentes
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Perguntas que nossos{' '}
            <span style={{ color: '#1E4E8C' }}>clientes fazem</span>
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Reunimos as dúvidas mais comuns sobre preço, prazo, garantia e atendimento. Não encontrou o que procura? Fale conosco pelo WhatsApp.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border overflow-hidden transition-all duration-200 cursor-pointer"
              style={{ borderColor: openIndex === i ? 'rgba(30,78,140,0.3)' : 'rgba(0,0,0,0.07)' }}
              onClick={() => toggle(i)}
            >
              <div className="flex items-center gap-3 p-5">
                <div
                  className="w-9 h-9 flex items-center justify-center rounded-lg flex-shrink-0 transition-all duration-200"
                  style={{
                    background: openIndex === i ? 'linear-gradient(135deg, #1E4E8C, #38B6FF)' : 'rgba(30,78,140,0.08)',
                    color: openIndex === i ? 'white' : '#1E4E8C',
                  }}
                >
                  <i className={`${faq.icon} text-base`}></i>
                </div>
                <span className="font-semibold text-gray-800 text-sm flex-1 leading-snug pr-2">
                  {faq.question}
                </span>
                <div
                  className="w-7 h-7 flex items-center justify-center rounded-full flex-shrink-0 transition-all duration-200"
                  style={{
                    background: openIndex === i ? 'rgba(30,78,140,0.1)' : 'rgba(0,0,0,0.04)',
                    transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)',
                  }}
                >
                  <i className="ri-arrow-down-s-line text-gray-500 text-base"></i>
                </div>
              </div>
              {openIndex === i && (
                <div
                  className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t"
                  style={{ borderColor: 'rgba(30,78,140,0.1)' }}
                >
                  <p className="pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-5">Ainda tem dúvidas? Nossa equipe está pronta para ajudar!</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://wa.me/5573999933162?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20os%20servi%C3%A7os%20da%20El%C3%A9trica%20Porto."
              target="_blank"
              rel="nofollow noreferrer"
              className="inline-flex items-center justify-center gap-2 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all hover:opacity-90 cursor-pointer whitespace-nowrap"
              style={{ background: 'linear-gradient(90deg, #0A2540 0%, #1E4E8C 55%, #38B6FF 100%)' }}
            >
              <i className="ri-whatsapp-line text-base"></i>
              Falar pelo WhatsApp
            </a>
            <a
              href="#agendamento"
              onClick={(e) => { e.preventDefault(); document.querySelector('#agendamento')?.scrollIntoView({ behavior: 'smooth' }); }}
              className="inline-flex items-center justify-center gap-2 font-bold px-7 py-3.5 rounded-full text-sm transition-all cursor-pointer whitespace-nowrap border-2"
              style={{ borderColor: '#1E4E8C', color: '#1E4E8C' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#1E4E8C'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#1E4E8C'; }}
            >
              <i className="ri-calendar-check-line text-base"></i>
              Agendar Atendimento
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
