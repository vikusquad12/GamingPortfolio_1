import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import PopularVideos from '@/components/sections/PopularVideos';
import LiveStream from '@/components/sections/LiveStream';
import OtherGames from '@/components/sections/OtherGames';
import StatsCounters from '@/components/sections/StatsCounters';
import GamerProfile from '@/components/sections/GamerProfile';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-primary selection:text-white dark">
      <Navbar />
      <main>
        <Hero />
        <PopularVideos />
        <LiveStream />
        <OtherGames />
        <StatsCounters />
        <GamerProfile />
      </main>
      <Footer />
    </div>
  );
}