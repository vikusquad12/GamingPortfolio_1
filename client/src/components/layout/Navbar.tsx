import { useState, useEffect } from 'react';
import { Menu, X, Play, Monitor, Gamepad2, Trophy, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', icon: <Play className="w-4 h-4" /> },
    { name: 'BGMI Videos', icon: <Gamepad2 className="w-4 h-4" /> },
    { name: 'Live', icon: <Monitor className="w-4 h-4" /> },
    { name: 'Other Games', icon: <Gamepad2 className="w-4 h-4" /> },
    { name: 'Scores', icon: <Trophy className="w-4 h-4" /> },
    { name: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="AimXLoLYT Logo" className="w-10 h-10 object-contain rounded-lg neon-border-red" />
          <span className="font-display font-bold text-xl tracking-wider text-white">
            AimX<span className="text-primary neon-text-red">LoL</span>YT
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={`#${link.name.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-muted-foreground hover:text-white transition-colors flex items-center gap-2 hover:neon-text-red"
            >
              {link.icon}
              {link.name}
            </a>
          ))}
          <a 
            href="https://www.youtube.com/@aimxlolyt"
              target="_blank"
              rel="noopener noreferrer"
            className="ml-4 px-5 py-2 bg-primary hover:bg-primary/90 text-white rounded-md font-bold text-sm transition-all shadow-[0_0_15px_rgba(255,0,60,0.5)] hover:shadow-[0_0_25px_rgba(255,0,60,0.8)] neon-glow"
          >
            Subscribe
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full glass border-t-0 py-4 flex flex-col items-center gap-4 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={`#${link.name.toLowerCase().replace(' ', '-')}`}
                className="text-base font-medium text-white flex items-center gap-2 w-full px-6 py-2 hover:bg-white/5"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
            <a 
              href="#youtube" 
              className="mt-2 w-[calc(100%-3rem)] text-center px-5 py-3 bg-primary text-white rounded-md font-bold text-sm shadow-[0_0_15px_rgba(255,0,60,0.5)]"
            >
              Subscribe
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}