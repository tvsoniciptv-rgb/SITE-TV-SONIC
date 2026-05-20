import { motion } from 'motion/react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Mensal',
    price: '30',
    period: 'mês',
    features: ['2.500+ Canais', 'Filmes e Séries', 'Qualidade 4K/UHD', 'Acesso 1 Tela', 'COM MELHOR Suporte'],
    recommended: false,
    cta: 'Começar Agora',
  },
  {
    name: 'Trimestral',
    price: '80',
    period: '3 meses',
    features: ['2.500+ Canais', 'Filmes e Séries', 'Qualidade 4K/UHD', 'Acesso 1 Tela', 'COM MELHOR Suporte'],
    recommended: false,
    cta: 'Assinar com Desconto',
  },
  {
    name: 'Anual',
    price: '300',
    period: 'ano',
    features: ['Tudo do Trimestral', 'Maior Economia', 'Qualidade 4K/UHD', 'Acesso 1 Tela', 'COM MELHOR Suporte'],
    recommended: true,
    cta: 'Melhor Oferta',
  },
];

export default function Pricing() {
  return (
    <section id="planos" className="py-24 px-6 bg-brand-dark/90">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            Nossos <span className="text-brand-cyan">Planos</span>
          </motion.h2>
          <p className="text-gray-400 text-lg">Escolha o plano ideal para você e sua família.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`p-8 rounded-3xl border ${
                plan.recommended 
                  ? 'bg-brand-card border-brand-cyan ring-4 ring-brand-cyan/10 scale-105' 
                  : 'bg-brand-card/50 border-white/5'
              } flex flex-col relative overflow-hidden`}
            >
              {plan.recommended && (
                <div className="absolute top-0 right-0 bg-brand-cyan text-black px-4 py-1 font-bold text-xs rounded-bl-xl uppercase tracking-wider">
                  Recomendado
                </div>
              )}

              {/* Sonic Mascot Mascot */}
              <div className="absolute -right-4 -top-4 opacity-30 group-hover:opacity-50 transition-opacity">
                <img 
                  src="/src/assets/images/tv_sonic_brand_logo_new_1779230340428.png" 
                  alt="Sonic" 
                  className="w-40 h-40 object-contain"
                />
              </div>
              
              <div className="mb-8 relative z-10">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-gray-400 text-lg">R$</span>
                  <span className="text-5xl font-display font-bold text-brand-cyan">{plan.price}</span>
                  <span className="text-gray-400 text-sm italic">/{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow relative z-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-gray-300">
                    <Check className="w-5 h-5 text-brand-cyan flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="relative z-10">
                <a 
                  href={`https://wa.me/5511975881722?text=Olá! Gostaria de assinar o plano ${plan.name} da TV⚡SONIC`}
                  target="_blank"
                  rel="noreferrer"
                  className={`w-full block py-4 rounded-xl font-bold transition-all text-center ${
                    plan.recommended
                      ? 'bg-brand-cyan text-black hover:bg-white shadow-lg shadow-brand-cyan/20'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
