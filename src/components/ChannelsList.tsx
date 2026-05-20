import { motion } from 'motion/react';
import { ArrowLeft, Trophy, Film, Tv, Baby, Star } from 'lucide-react';

const categories = [
  {
    id: 'esportes',
    title: 'Esportes & Futebol',
    icon: Trophy,
    items: ['Premiere (Todos)', 'Combate', 'Paramount+', 'Disney+ (ESPN)', 'TNT Sports', 'DAZN', 'Brasileirão 2026', 'Champions League', 'Libertadores', 'Copa Sul-Americana', 'NBA Pass', 'NFL Game Pass'],
    color: 'from-green-500/20 to-emerald-500/20'
  },
  {
    id: 'filmes',
    title: 'Filmes & Streaming',
    icon: Film,
    items: ['Lançamentos Cinema', 'Netflix (Conteúdo)', 'Prime Video', 'HBO Max (Max)', 'Disney+', 'Star+', 'Apple TV+', 'GloboPlay', 'Telecine (Todos)', 'Universal+', 'Rede Telecine'],
    color: 'from-red-500/20 to-pink-500/20'
  },
  {
    id: 'series',
    title: 'Séries Premium',
    icon: Star,
    items: ['The Last of Us', 'House of the Dragon', 'Stranger Things', 'The Boys', 'Séries Turcas', 'Séries Coreanas (Doramas)', 'Vikings', 'Game of Thrones', 'Séries Originais Streaming'],
    color: 'from-blue-500/20 to-indigo-500/20'
  },
  {
    id: 'kids',
    title: 'Desenhos & Kids',
    icon: Baby,
    items: ['Discovery Kids', 'Disney Junior', 'Cartoon Network', 'Nickelodeon', 'Gloob', 'Nick Jr.', 'Boomerang', 'Tooncast', 'Disney Channel', 'Panda Kids', 'Baby TV'],
    color: 'from-yellow-500/20 to-orange-500/20'
  },
  {
    id: 'variedades',
    title: 'Canais Abertos & VIP',
    icon: Tv,
    items: ['Globo (Todas)', 'Record (Todas)', 'SBT (Todas)', 'Band', 'RedeTV', 'CNN Brasil', 'GloboNews', 'Jovem Pan News', 'Band News', 'Multishow', 'GNT', 'Viva'],
    color: 'from-purple-500/20 to-violet-500/20'
  }
];

interface ChannelsListProps {
  onBack: () => void;
}

export default function ChannelsList({ onBack }: ChannelsListProps) {
  return (
    <div className="min-h-screen bg-brand-dark pt-28 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center gap-2 text-gray-400 hover:text-brand-cyan mb-8 transition-colors group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Voltar para Início
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
            Nossa Grade de <span className="text-brand-cyan cyan-glow">Canais</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Explore a nossa imensa biblioteca de conteúdos. Tudo o que você procura em um só lugar, com qualidade 4K e zero travamentos.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-3xl bg-brand-card border border-white/5 relative overflow-hidden group`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-brand-cyan/10 rounded-xl">
                    <cat.icon className="text-brand-cyan w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">{cat.title}</h2>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span 
                      key={item} 
                      className="px-3 py-1.5 bg-white/5 rounded-lg text-sm text-gray-300 hover:text-brand-cyan hover:bg-brand-cyan/10 transition-all border border-white/5"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-10 rounded-3xl bg-brand-cyan/10 border border-brand-cyan/20 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Faltou algum canal?</h3>
          <p className="text-gray-300 mb-8 max-w-xl mx-auto">
            Nossa lista é atualizada diariamente. Se você não encontrou o que procura, fale com nosso suporte e faremos o possível para adicionar.
          </p>
          <a 
            href="https://wa.me/5511975881722?text=Olá! Gostaria de saber mais sobre a grade de canais da TV⚡SONIC"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-8 py-4 bg-brand-cyan text-black font-bold rounded-xl hover:scale-105 transition-all shadow-xl shadow-brand-cyan/20"
          >
            Falar com Consultor
          </a>
        </motion.div>
      </div>
    </div>
  );
}
