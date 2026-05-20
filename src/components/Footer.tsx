import { Play, Instagram, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="suporte" className="bg-brand-dark/95 pt-20 pb-10 border-t border-white/5 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-cyan rounded flex items-center justify-center">
                <Play className="text-black fill-current w-5 h-5" />
              </div>
              <h2 className="text-xl font-display font-bold">
                TV⚡<span className="text-brand-cyan">SONIC</span>
              </h2>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A melhor e mais estável plataforma de IPTV do Brasil. Milhares de conteúdos em alta definição para você e sua família.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-cyan hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-cyan hover:text-black transition-all">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-cyan hover:text-black transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 tracking-wide">Plataforma</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Início</a></li>
              <li><a href="#planos" className="hover:text-brand-cyan transition-colors">Planos</a></li>
              <li><a href="#canais" className="hover:text-brand-cyan transition-colors">Canais</a></li>
              <li><a href="#faq" className="hover:text-brand-cyan transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 tracking-wide">Suporte</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><a href="https://wa.me/5511975881722" target="_blank" rel="noreferrer" className="hover:text-brand-cyan transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Telegram</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Tutoriais</a></li>
              <li><a href="#" className="hover:text-brand-cyan transition-colors">Fale Conosco</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-6 tracking-wide">Assine a News</h3>
            <p className="text-gray-400 text-sm mb-4">Receba atualizações de novos filmes e canais.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Seu e-mail"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-brand-cyan flex-grow"
              />
              <button className="px-4 py-2 bg-brand-cyan text-black font-bold rounded-lg text-sm">
                Ok
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} TV⚡SONIC IPTV. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-brand-cyan">Termos de Uso</a>
            <a href="#" className="hover:text-brand-cyan">Privacidade</a>
          </div>
          <p className="text-center md:text-right">
            Desenvolvido com <span className="text-brand-cyan">❤️</span> para a melhor experiência.
          </p>
        </div>
      </div>
    </footer>
  );
}
