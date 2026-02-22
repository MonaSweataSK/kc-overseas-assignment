import './App.css';
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
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <GlobalAmbitions />
        <Steps />
        <Events />
        <Testimonials />
        <Updates />
      </main>
      <Footer />
    </>
  );
}

export default App;
