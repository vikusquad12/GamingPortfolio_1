import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import bgmi1 from '@/assets/bgmi-1.png';
import bgmi2 from '@/assets/bgmi-2.png';
import bgmi3 from '@/assets/bgmi-3.png';

const allVideos = [
  {
    id: 1,
    title: "BGMI INTENSE CLUTCH 🔥",
    thumbnail: bgmi1,
    link: "https://www.youtube.com/watch?v=VTc-3-j4GiU"
  },
  {
    id: 2,
    title: "M24 GOD LEVEL SNIPING 🤯",
    thumbnail: bgmi2,
    link: "https://www.youtube.com/watch?v=dfjc21cauEA"
  },
  {
    id: 3,
    title: "FINAL ZONE ZERO HP WIN 🏆",
    thumbnail: bgmi3,
    link: "https://www.youtube.com/watch?v=M7gxf73T55I"
  },
  {
    id: 4,
    title: "PRO RANK PUSH GAMEPLAY",
    thumbnail: bgmi1,
    link: "https://www.youtube.com/watch?v=QgucrinoDTQ"
  },
  {
    id: 5,
    title: "INSANE HEADSHOT MOMENTS",
    thumbnail: bgmi2,
    link: "https://www.youtube.com/watch?v=eujXp-h9x9M"
  },
  {
    id: 6,
    title: "DOMINATING CONQUEROR LOBBY",
    thumbnail: bgmi3,
    link: "https://www.youtube.com/watch?v=w7-JlAoe1EM"
  }
];

// Shuffle function
const getRandomVideos = () => {
  const shuffled = [...allVideos].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, 3);
};

export default function PopularVideos() {
  const videos = getRandomVideos();

  return (
    <section id="bgmi-videos" className="py-20 bg-background">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-4xl font-display font-black uppercase">
            🔥 Random <span className="text-primary">BGMI</span> Videos
          </h2>
          <p className="text-gray-400 mt-3">
            Refresh page to see different videos 🎮
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <motion.a
              key={video.id}
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl overflow-hidden group cursor-pointer relative border border-primary/30 hover:shadow-[0_0_30px_rgba(255,0,60,0.4)] transition-all"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition" />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center shadow-[0_0_20px_rgba(255,0,60,0.8)]">
                    <Play className="w-8 h-8 text-white ml-1" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-black">
                <h3 className="font-bold text-white group-hover:text-primary transition">
                  {video.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}