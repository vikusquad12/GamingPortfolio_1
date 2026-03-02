import { motion } from 'framer-motion';
import { PlayCircle, Youtube } from 'lucide-react';
import heroBg from '@/assets/hero-bg.png';
import logo from '@/assets/logo.png';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat blur-sm scale-105"
          style={{ backgroundImage: `url(${heroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-background" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,0,60,0.1)_0%,transparent_70%)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <img 
            src={logo} 
            alt="AimXLoLYT Logo" 
            className="w-32 h-32 md:w-40 md:h-40 object-contain rounded-2xl neon-border-red p-2 bg-black/50 backdrop-blur-sm shadow-[0_0_30px_rgba(255,0,60,0.4)]"
          />
        </motion.div>

        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-display font-black tracking-tight text-white mb-4 uppercase"
        >
          Welcome to <span className="text-primary neon-text-red">AimXLoL</span>YT
          <br className="hidden md:block" /> Ultimate BGMI Gameplay Hub
        </motion.h1>

        <motion.p 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-lg md:text-2xl text-gray-300 font-medium mb-10 max-w-3xl"
        >
          Live Streams <span className="text-primary">•</span> Intense Clutches <span className="text-primary">•</span> Pro-Level Gameplay
        </motion.p>

<motion.div 
  initial={{ y: 20, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.5, delay: 0.6 }}
  className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto"
>
  <a
    href="https://www.youtube.com/@aimxlolyt"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-lg transition-all shadow-[0_0_20px_rgba(255,0,60,0.6)] hover:shadow-[0_0_30px_rgba(255,0,60,0.8)] neon-glow group"
  >
    <PlayCircle className="w-6 h-6" />
    Watch on YouTube
  </a>

  <a
    href="https://www.youtube.com/@aimxlolyt"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 px-8 py-4 glass hover:bg-white/10 text-white rounded-lg font-bold text-lg border border-white/20 transition-all hover:border-white/40 group"
  >
    <Youtube className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
    Visit YouTube Channel
  </a>
</motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs text-muted-foreground uppercase tracking-widest mb-2 font-display">Scroll Down</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent" />
      </div>
    </section>
  );
}