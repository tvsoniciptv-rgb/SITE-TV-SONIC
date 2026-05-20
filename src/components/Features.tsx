import { motion } from 'motion/react';
import { Tv, Play, Smartphone, ShieldCheck, Zap, Headphones } from 'lucide-react';

const features = [
  {
    icon: Tv,
    title: '2.500 + CANAIS',
    description: 'A maior grade de canais abertos e fechados em um só lugar.',
  },
  {
    icon: Play,
    title: 'VOD Biblioteca',
    description: 'Milhares de filmes e séries atualizados diariamente para você.',
  },
  {
    icon: Zap,
    title: 'Qualidade 4K',
    description: 'Experiência imersiva com estabilidade garantida e sem travamentos.',
  },
  {
    icon: Smartphone,
    title: 'Multiplataforma',
    description: 'Assista na SMART TV, TV ANDROID, TV BOX, FIRE STICK, CELULAR, TABLET OU COMPUTADOR',
  },
  {
    icon: ShieldCheck,
    title: 'Teste Grátis',
    description: 'Experimente a nossa qualidade por 3 horas sem compromisso.',
  },
  {
    icon: Headphones,
    title: 'Suporte RAPIDO',
    description: 'Equipe técnica disponível para ajudar você O MAIS RAPIDO POSSIVEL',
  },
];

export default function Features() {
  return (
    <section id="canais" className="py-24 px-6 bg-brand-dark/80">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Por que escolher a <span className="text-brand-cyan">TV⚡SONIC</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Oferecemos a melhor tecnologia de streaming do mercado para garantir sua diversão sem interrupções.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-brand-card hover:bg-neutral-800 transition-colors border border-white/5 group"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-cyan/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="text-brand-cyan w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
