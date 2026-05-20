import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';

interface HeroProps {
  onNavigateChannels: () => void;
}

export default function Hero({ onNavigateChannels }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background overlay - letting the body background show through */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-cyan/10 text-brand-cyan text-sm font-bold tracking-widest uppercase mb-6 border border-brand-cyan/20">
            Qualidade Ultra HD 4K
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Sua TV, <br />
            <span className="text-brand-cyan cyan-glow italic">Sem Limites!</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg leading-relaxed">
            <strong className="text-brand-cyan uppercase">Mais de 2.500 Canais e Filmes</strong>. Melhor qualidade e melhor suporte. Temos os melhores lançamentos do cinema. Venha fazer parte da <strong className="text-white">TV⚡SONIC</strong>.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onNavigateChannels}
              className="px-8 py-4 bg-brand-cyan text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-105 transition-all shadow-xl shadow-brand-cyan/20"
            >
              Lista de Canais
            </button>
          </div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden md:block relative px-4"
        >
          <div className="relative group block rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-cyan/30 shadow-brand-cyan/20">
             <img 
               src="/src/assets/images/tv_sonic_promotion_poster_1779238101227.png" 
               alt="TV SONIC Promoção"
               className="w-full h-auto rounded-3xl transform hover:scale-105 transition-transform duration-700"
             />
             <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-brand-dark/40 to-transparent"></div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-cyan/20 blur-[100px] rounded-full"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 blur-[100px] rounded-full"></div>
        </motion.div>
      </div>
    </section>
  );
}
