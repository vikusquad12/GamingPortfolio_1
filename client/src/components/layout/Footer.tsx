import { Youtube, Instagram, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-black border-t border-white/10 pt-16 pb-8 relative overflow-hidden"
    >
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="AimXLoLYT Logo"
                className="w-12 h-12 object-contain rounded-lg border border-primary/50"
              />
              <span className="font-display font-bold text-2xl tracking-wider text-white">
                AimX<span className="text-primary">LoL</span>YT
              </span>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Ultimate BGMI Gameplay Hub. Professional esports content, live streams, and intense gaming moments.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-display font-bold text-white mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#home" className="hover:text-primary">Home</a></li>
              <li><a href="#bgmi-videos" className="hover:text-primary">BGMI Videos</a></li>
              <li><a href="#live" className="hover:text-primary">Live Streams</a></li>
              <li><a href="#other-games" className="hover:text-primary">Other Games</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-display font-bold text-white mb-4 uppercase tracking-wider">
              Connect With Me
            </h4>

            <div className="flex gap-4">
              {/* YouTube */}
              <a
                href="https://www.youtube.com/@aimxlolyt"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-gray-300 hover:bg-red-600 hover:text-white transition-all"
              >
                <Youtube className="w-6 h-6" />
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/pandeyvivek12"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-gray-300 hover:bg-pink-600 hover:text-white transition-all"
              >
                <Instagram className="w-6 h-6" />
              </a>

              {/* Email */}
              <a
                href="mailto:vivekkumar23112019@zohomail.com"
                className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-gray-300 hover:bg-green-500 hover:text-black transition-all"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>

            <a
              href="mailto:vivekkumar23112019@zohomail.com"
              className="mt-6 w-full max-w-[200px] py-3 bg-white/5 border border-primary/50 text-white hover:bg-primary transition-all rounded font-bold text-sm uppercase tracking-widest text-center"
            >
              Business Inquiries
            </a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} AimXLoLYT Gaming. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}