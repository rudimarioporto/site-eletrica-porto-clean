import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Coverage from './components/Coverage';
import Testimonials from './components/Testimonials';
import Tips from './components/Tips';
import FAQ from './components/FAQ';
import Scheduling from './components/Scheduling';
import Contact from './components/Contact';
import Footer from './components/Footer';
import EmergencyBanner from './components/EmergencyBanner';


const WA_HREF = 'https://wa.me/5573999933162?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20El%C3%A9trica%20Porto.%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.';

const HomePage = () => (
  <div className="font-sans antialiased">
    <Navbar />
    <main>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Pricing />
      <Coverage />
      <Testimonials />
      <Tips />
      <FAQ />
      <Scheduling />
      <Contact />
    </main>
    <Footer />
    <EmergencyBanner />

    {/* Botão flutuante WhatsApp — acima do chat */}
    <a
      href={WA_HREF}
      target="_blank"
      rel="nofollow noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-5 z-50 flex items-center justify-center rounded-full cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 whitespace-nowrap"
      style={{
        bottom: '84px',
        width: '52px',
        height: '52px',
        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
      }}
    >
      <i className="ri-whatsapp-line text-2xl text-white" />
    </a>
  </div>
);

export default HomePage;
