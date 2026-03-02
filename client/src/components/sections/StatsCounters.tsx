import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Youtube, Video, Eye, Trophy } from 'lucide-react';

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const AnimatedCounter = ({ end, suffix = "", duration = 2 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTimestamp: number | null = null;

      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;

        const progress = Math.min(
          (timestamp - startTimestamp) / (duration * 1000),
          1
        );

        const easeOut = progress * (2 - progress);
        setCount(Math.floor(easeOut * end));

        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };

      window.requestAnimationFrame(step);
    }
  }, [isInView, end, duration]);

  const formattedCount =
    count >= 1000000
      ? (count / 1000000).toFixed(1).replace(/\.0$/, '') + 'M'
      : count >= 1000
      ? (count / 1000).toFixed(1).replace(/\.0$/, '') + 'K'
      : count;

  return (
    <span
      ref={ref}
      className="font-display font-black text-4xl md:text-5xl text-white"
    >
      {formattedCount}
      {suffix}
    </span>
  );
};

export default function StatsCounters() {
  const stats = [
    {
      id: 1,
      label: "Total Subscribers",
      value: 850000,
      suffix: "+",
      icon: <Youtube className="w-8 h-8 text-red-500" />
    },
    {
      id: 2,
      label: "Total Videos",
      value: 1240,
      icon: <Video className="w-8 h-8 text-green-400" />
    },
    {
      id: 3,
      label: "Total Views",
      value: 145000000,
      suffix: "+",
      icon: <Eye className="w-8 h-8 text-blue-400" />
    },
    {
      id: 4,
      label: "BGMI Wins",
      value: 4500,
      suffix: "+",
      icon: <Trophy className="w-8 h-8 text-yellow-400" />
    }
  ];

  return (
    <section
      id="scores"
      className="py-20 bg-[#050505] border-t border-white/5 relative"
    >
      <div className="container mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-black uppercase">
            📊 Channel <span className="text-primary">Stats</span>
          </h2>
          <p className="text-gray-400 mt-4">
            Performance numbers of AimXLoLYT gaming journey
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-[0_0_30px_rgba(255,0,60,0.3)] transition-all duration-300"
            >
              <div className="mb-4 bg-black/50 p-4 rounded-full border border-white/10">
                {stat.icon}
              </div>

              <AnimatedCounter end={stat.value} suffix={stat.suffix} />

              <p className="text-gray-400 mt-3 uppercase text-sm tracking-wider">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Social & Contact Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-display font-black uppercase mb-8">
            Connect With <span className="text-primary">AimXLoLYT</span>
          </h3>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.youtube.com/@aimxlolyt"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-lg font-bold transition-all duration-300"
            >
              YouTube
            </a>

            <a
              href="https://instagram.com/pandeyvivek12"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white rounded-lg font-bold transition-all duration-300"
            >
              Instagram
            </a>

            <a
              href="mailto:vivekkumar23112019@zohomail.com"
              className="px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-bold transition-all duration-300"
            >
              Business Email
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}