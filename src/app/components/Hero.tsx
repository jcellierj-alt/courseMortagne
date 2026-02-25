import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, MapPin } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1730045768278-bb87a2939e71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uaW5nJTIwbWFyYXRob24lMjBjaXR5fGVufDF8fHx8MTc3MTkzNTI5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Running event"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl mb-6 animate-fade-in">
          Course Mortagne-au-Perche 2026
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200">
          Rejoignez-nous pour une expérience de course inoubliable à travers le cœur de notre ville
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
          <div className="flex items-center gap-2">
            <Calendar className="w-5 h-5" />
            <span className="text-lg">xx Septembre 2026</span>
          </div>
          <div className="hidden sm:block text-gray-400">•</div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">Orange Bleu</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#schedule"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg transition-colors"
          >
            Voir le programme
          </a>
          <a
            href="#contact"
            className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg backdrop-blur-sm transition-colors border border-white/20"
          >
            Nous contacter
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
