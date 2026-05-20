import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ChannelsList from './components/ChannelsList';
import VideoSection from './components/VideoSection';

export default function App() {
  const [view, setView] = useState<'home' | 'channels'>('home');

  const goToChannels = () => {
    setView('channels');
    window.scrollTo(0, 0);
  };

  const goToHome = () => {
    setView('home');
    window.scrollTo(0, 0);
  };

  return (
    <div className="selection:bg-brand-cyan selection:text-black">
      <Header onNavigateHome={goToHome} onNavigateChannels={goToChannels} />
      <main>
        {view === 'home' ? (
          <>
            <Hero onNavigateChannels={goToChannels} />
            <VideoSection />
            <Features />
            <Pricing />
            <FAQ />
          </>
        ) : (
          <ChannelsList onBack={goToHome} />
        )}
      </main>
      <Footer />
    </div>
  );
}
