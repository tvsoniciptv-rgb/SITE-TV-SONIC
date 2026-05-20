import { motion } from 'motion/react';
import { Menu, X, Play } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onNavigateHome: () => void;
  onNavigateChannels: () => void;
}

export default function Header({ onNavigateHome, onNavigateChannels }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#', onClick: onNavigateHome },
    { name: 'Planos', href: '#planos', onClick: onNavigateHome },
    { name: 'Canais', href: '#canais', onClick: onNavigateChannels },
    { name: 'FAQ', href: '#faq', onClick: onNavigateHome },
    { name: 'Suporte', href: '#suporte', onClick: onNavigateHome },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <button onClick={onNavigateHome} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <div className="w-10 h-10 bg-brand-cyan rounded-lg flex items-center justify-center shadow-lg shadow-brand-cyan/20">
            <Play className="text-black fill-current w-6 h-6" />
          </div>
          <h1 className="text-2xl font-display font-bold tracking-tight">
            TV⚡<span className="text-brand-cyan">SONIC</span>
          </h1>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => {
                if (link.onClick) link.onClick();
                // If it's a home hash link and we are on home, let browser handle scroll
              }}
              className="text-sm font-medium text-gray-400 hover:text-brand-cyan transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
              href="https://wa.me/5511975881722?text=Olá! Quero assinar a TV⚡SONIC Agora"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 bg-brand-cyan text-black font-bold rounded-lg text-sm hover:scale-105 active:scale-95 transition-all"
            >
              Assine Agora
            </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-card p-6 border-b border-white/5 absolute w-full"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => {
                  if (link.onClick) link.onClick();
                  setIsOpen(false);
                }}
                className="text-lg font-medium text-gray-300"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="https://wa.me/5511975881722?text=Olá! Quero assinar a TV⚡SONIC Agora"
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
              className="w-full py-4 bg-brand-cyan text-black font-bold rounded-xl text-center"
            >
              Assine Agora
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}
