import { motion } from 'framer-motion';
import liveImg from '@/assets/live.jpg';

export default function LiveStream() {
  return (
    <section id="live" className="py-20 bg-black border-y border-white/5">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-black uppercase">
            🔴 Live <span className="text-primary">Streams</span>
          </h2>
          <p className="text-gray-400 mt-3">
            Click below to watch live gameplay
          </p>
        </div>

        <motion.a
          href="https://www.youtube.com/@aimxlolyt/streams"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          className="block max-w-5xl mx-auto rounded-2xl overflow-hidden border-2 border-primary/40 shadow-[0_0_40px_rgba(255,0,60,0.3)]"
        >
          <div className="relative aspect-video">
            <img
              src={liveImg}
              alt="Live Stream"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
              <div className="px-8 py-4 bg-primary text-white font-bold rounded-lg shadow-[0_0_20px_rgba(255,0,60,0.8)]">
                WATCH LIVE STREAMS
              </div>
            </div>
          </div>
        </motion.a>

      </div>
    </section>
  );
}