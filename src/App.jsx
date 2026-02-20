import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Services } from './components/sections/Services';
import { GlobalAmbitions } from './components/sections/GlobalAmbitions';
import { Steps } from './components/sections/Steps';
import { Events } from './components/sections/Events';
import { Testimonials } from './components/sections/Testimonials';
import { Updates } from './components/sections/Updates';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <GlobalAmbitions />
        <Steps />
        <Events />
        <Testimonials />
        <Updates />
        <Footer />
      </main>
    </div>
  );
}

export default App;
