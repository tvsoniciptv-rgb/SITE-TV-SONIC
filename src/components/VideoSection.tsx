import { motion } from 'motion/react';
import { PlayCircle, Shield, Tv, Zap, Users, Play } from 'lucide-react';
import { useRef, useState } from 'react';


export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section id="conheca" className="py-24 px-6 relative overflow-hidden bg-brand-dark/40">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-display font-bold mb-4"
          >
            <span className="text-brand-cyan cyan-glow text-shadow-glow uppercase tracking-tighter">TV⚡SONIC</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            A revolução do entretenimento digital. Estabilidade, qualidade e o melhor conteúdo em um só lugar.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-brand-cyan/20 bg-black mb-12"
        >
          {/* Main Video Player - Extremely robust configuration */}
          <div className="w-full h-full relative">
            <iframe 
              className="w-full h-full rounded-3xl"
              src="https://www.youtube.com/embed/obMVJy4Giis?autoplay=0&mute=0&controls=1&rel=0"
              title="TV SONIC IPTV Promo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            
            {/* Brand Watermark (Top) - Covers original generic titles */}
            <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/95 via-black/80 to-transparent pointer-events-none z-20">
              <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
                <div className="bg-brand-dark border-2 border-brand-cyan/60 px-8 py-4 rounded-2xl flex items-center gap-4 shadow-[0_0_40px_rgba(34,211,238,0.3)]">
                  <Play className="text-brand-cyan fill-current w-6 h-6 animate-pulse" />
                  <span className="text-white font-black tracking-tighter text-3xl uppercase">OFICIAL TV⚡<span className="text-brand-cyan uppercase">SONIC</span></span>
                </div>
                <div className="bg-brand-cyan text-black px-6 py-3 rounded-xl text-sm font-black uppercase tracking-widest shadow-xl shadow-brand-cyan/40">
                  LIVE 4K ULTRA HD
                </div>
              </div>
            </div>

            {/* Brand Watermark (Bottom) to cover original author credit */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none z-20">
              <div className="bg-brand-dark/95 backdrop-blur-2xl border-2 border-brand-cyan/60 px-8 py-4 rounded-full shadow-[0_0_40px_rgba(34,211,238,0.4)] flex items-center gap-4 scale-110 transform transition-transform">
                <Play className="text-brand-cyan fill-current w-6 h-6 animate-pulse" />
                <span className="text-white font-black tracking-tight text-xl italic">TV⚡<span className="text-brand-cyan">SONIC</span></span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* New Brand Showcase Section */}
        <div className="mt-20 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
          >
            <div className="absolute -inset-4 bg-brand-cyan/20 blur-3xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative">
              <p className="text-center text-xl md:text-3xl font-display font-black text-white italic mb-6 animate-bounce tracking-tight">
                VENHA FAZER PARTE DA <span className="text-brand-cyan cyan-glow">TV⚡SONIC</span>
              </p>
              <div className="w-full max-w-md mx-auto aspect-square rounded-[2rem] overflow-hidden border-4 border-brand-cyan/50 shadow-[0_0_50px_rgba(34,211,238,0.3)]">
                <img 
                  src="/images/tv_sonic_brand_logo_new_1779230340428.png" 
                  alt="TV SONIC Brand"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
          
          {/* Fallback for local files if the user prefers - Hidden but available in code for future use */}
          {/* 
          <video 
            ref={videoRef}
            className="hidden"
            controls
            playsInline
            preload="auto"
            poster="/images/tv_sonic_promotional_background_1779231675087.png"
          >
            <source src="/promo.mp4" type="video/mp4" />
          </video>
          */}

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <Tv className="text-brand-cyan mb-3" size={32} />
            <span className="text-white text-3xl font-bold font-display">+ de 120 mil</span>
            <span className="text-gray-500 text-sm">conteudos</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <Zap className="text-brand-cyan mb-3" size={32} />
            <span className="text-white text-xl font-bold font-display uppercase tracking-tighter">Suporte RAPIDO</span>
            <span className="text-gray-500 text-[10px] sm:text-xs leading-tight text-center mt-1">Equipe técnica disponível para ajudar você O MAIS RAPIDO POSSIVEL</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <Users className="text-brand-cyan mb-3" size={32} />
            <span className="text-white text-3xl font-bold font-display">4K</span>
            <span className="text-gray-500 text-sm">Qualidade Ultra HD</span>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center p-6 rounded-2xl bg-white/5 border border-white/10"
          >
            <Shield className="text-brand-cyan mb-3" size={32} />
            <span className="text-white text-3xl font-bold font-display">100%</span>
            <span className="text-gray-500 text-sm">Seguro e Estável</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
