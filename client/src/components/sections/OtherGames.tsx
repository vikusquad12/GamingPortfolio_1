import { motion } from 'framer-motion';
import { Gamepad2, Trophy, ArrowRight, User } from 'lucide-react';
import gta1 from '@/assets/gta-1.png';
import gta2 from '@/assets/gta-2.png';
import templeRunBg from '@/assets/temple-run.png';
import subwaySurfersBg from '@/assets/subway-surfers.png';

const gtaMissions = [
  { id: 1, name: "Pacific Standard Heist", desc: "Elite difficulty, no armor", thumb: gta1 },
  { id: 2, name: "Cayo Perico Stealth", desc: "Solo, undetected full run", thumb: gta2 },
  { id: 3, name: "Doomsday Heist", desc: "Speedrun world record pace", thumb: gta1 },
];

const templeLeaderboard = [
  { rank: 1, name: "AimXLoLYT", score: "42.5M" },
  { rank: 2, name: "ShadowGamer", score: "38.1M" },
  { rank: 3, name: "MonkeyKing", score: "35.2M" },
  { rank: 4, name: "RunnerPro", score: "31.8M" },
];

const subwayLeaderboard = [
  { rank: 1, name: "AimXLoLYT", score: "18.4M" },
  { rank: 2, name: "ProSurfer99", score: "15.2M" },
  { rank: 3, name: "RailRunner", score: "12.8M" },
  { rank: 4, name: "JetpackJoy", score: "10.5M" },
];

export default function OtherGames() {
  return (
    <section id="other-games" className="py-20 relative bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-2"
          >
            <Gamepad2 className="text-accent w-8 h-8" />
            <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-wider">
              Other <span className="text-accent neon-text-green">Games</span>
            </h2>
          </motion.div>
          <div className="h-1 w-20 bg-accent rounded-full mt-4 shadow-[0_0_10px_rgba(0,255,102,0.5)]" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* GTA 5 Section */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass rounded-2xl p-6 border-t-accent/30 flex flex-col"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-display font-bold text-white flex items-center gap-2">
                GTA 5 <span className="text-sm font-sans font-normal text-accent bg-accent/10 px-2 py-1 rounded">Popular Missions</span>
              </h3>
              <button className="text-sm text-gray-400 hover:text-accent flex items-center gap-1 transition-colors">
                View All <ArrowRight className="w-4 h-4" />
              </button>
            </div>
            
            <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory hide-scrollbar custom-scrollbar">
              {gtaMissions.map((mission) => (
                <div 
                  key={mission.id} 
                  className="min-w-[280px] w-[280px] snap-start glass-card rounded-xl overflow-hidden group cursor-pointer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <img src={mission.thumb} alt={mission.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3">
                      <h4 className="text-white font-bold font-display line-clamp-1 group-hover:text-accent transition-colors">{mission.name}</h4>
                      <p className="text-xs text-gray-300 mt-1">{mission.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Arcade Games Section (Temple Run & Subway Surfers) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Temple Run */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 relative overflow-hidden group hover:border-yellow-500/50 transition-colors h-full flex flex-col"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ backgroundImage: `url(${templeRunBg})` }}
              />
              <div className="absolute -right-10 -top-10 text-yellow-500/10 rotate-12 pointer-events-none">
                <Trophy className="w-40 h-40" />
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-4 relative z-10 flex items-center justify-between">
                Temple Run
                <span className="text-xs font-sans bg-yellow-500/20 text-yellow-500 px-2 py-1 rounded">High Score</span>
              </h3>
              
              <div className="flex items-end gap-2 mb-6 relative z-10">
                <span className="text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600 drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">
                  42,590,120
                </span>
              </div>
              
              <div className="space-y-2 relative z-10 flex-grow">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-display">Leaderboard</p>
                {templeLeaderboard.map((player) => (
                  <div key={player.rank} className={`flex justify-between items-center text-sm p-2 rounded ${player.rank === 1 ? 'bg-yellow-500/20 border border-yellow-500/30' : 'bg-black/20'}`}>
                    <div className="flex items-center gap-2">
                      <span className={`w-5 text-center font-display ${player.rank === 1 ? 'text-yellow-500' : 'text-gray-500'}`}>{player.rank}</span>
                      <User className="w-3 h-3 text-gray-400" />
                      <span className={player.rank === 1 ? 'text-white font-bold' : 'text-gray-400'}>{player.name}</span>
                    </div>
                    <span className={player.rank === 1 ? 'text-yellow-500 font-bold' : 'text-gray-300'}>{player.score}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Subway Surfers */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass rounded-2xl p-6 relative overflow-hidden group hover:border-blue-500/50 transition-colors h-full flex flex-col"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity"
                style={{ backgroundImage: `url(${subwaySurfersBg})` }}
              />
              <div className="absolute -right-10 -bottom-10 text-blue-500/10 -rotate-12 pointer-events-none">
                <Gamepad2 className="w-40 h-40" />
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-4 relative z-10 flex items-center justify-between">
                Subway Surfers
                <span className="text-xs font-sans bg-blue-500/20 text-blue-400 px-2 py-1 rounded">My Best</span>
              </h3>
              
              <div className="flex items-end gap-2 mb-6 relative z-10">
                <span className="text-4xl md:text-5xl font-display font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]">
                  18,405,800
                </span>
              </div>
              
              <div className="space-y-2 relative z-10 flex-grow">
                <p className="text-[10px] uppercase tracking-widest text-gray-500 mb-2 font-display">Leaderboard</p>
                {subwayLeaderboard.map((player) => (
                  <div key={player.rank} className={`flex justify-between items-center text-sm p-2 rounded ${player.rank === 1 ? 'bg-blue-500/20 border border-blue-500/30' : 'bg-black/20'}`}>
                    <div className="flex items-center gap-2">
                      <span className={`w-5 text-center font-display ${player.rank === 1 ? 'text-blue-400' : 'text-gray-500'}`}>{player.rank}</span>
                      <User className="w-3 h-3 text-gray-400" />
                      <span className={player.rank === 1 ? 'text-white font-bold' : 'text-gray-400'}>{player.name}</span>
                    </div>
                    <span className={player.rank === 1 ? 'text-blue-400 font-bold' : 'text-gray-300'}>{player.score}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}