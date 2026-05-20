import { motion } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const faqs = [
  {
    question: 'O que é o TV⚡SONIC IPTV?',
    answer: 'É um serviço de transmissão de canais de TV, filmes e séries via internet. Você não precisa de antenas, apenas uma conexão estável e um dispositivo compatível.',
  },
  {
    question: 'Em quais aparelhos posso usar?',
    answer: 'Nossa lista é compatível com Smart TVs (Samsung, LG, Android TV), TV Box, Celulares (Android e iOS), Computadores, e consoles de videogame via aplicativos como IPTV Smarters, XCIPTV, entre outros.',
  },
  {
    question: 'Quanto tempo dura o teste grátis?',
    answer: 'Oferecemos um teste completo de 3 horas para você avaliar todos os canais e a estabilidade do sinal sem custos.',
  },
  {
    question: 'Posso usar em mais de uma tela ao mesmo tempo?',
    answer: 'Os planos padrão permitem uma conexão simultânea. Caso precise de mais telas, oferecemos planos familiares personalizados. Entre em contato com nosso suporte.',
  },
  {
    question: 'Quais as formas de pagamento?',
    answer: 'Aceitamos PIX (confirmação imediata), Cartão de Crédito.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 bg-brand-dark/95">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Perguntas <span className="text-brand-cyan">Frequentes</span>
          </h2>
          <p className="text-gray-400">Tire suas dúvidas sobre o nosso serviço.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              className="bg-brand-card border border-white/5 rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-neutral-800/50 transition-colors"
              >
                <span className="font-bold text-lg">{faq.question}</span>
                {openIndex === idx ? (
                  <Minus className="text-brand-cyan w-5 h-5" />
                ) : (
                  <Plus className="text-brand-cyan w-5 h-5" />
                )}
              </button>
              
              {openIndex === idx && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="px-6 pb-6 text-gray-400 leading-relaxed"
                >
                  <p className="pt-2">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
