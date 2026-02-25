import { ImageWithFallback } from './figma/ImageWithFallback';
import { Trophy, Users, Route } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4">
          A propos de l'événement
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto text-lg">
          Profitez de l'expérience de courir à travers notre belle ville tout en vous défiant et en vous connectant avec les autres coureurs
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1769876457918-1871f21d63bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxydW5uZXJzJTIwcmFjZSUyMGNvbXBldGl0aW9ufGVufDF8fHx8MTc3MjAzODA0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Runners at the event"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h3 className="text-3xl mb-4">A définir</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <Route className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-xl mb-2">Distances</h4>
            <p className="text-gray-600">
              Des super parcours à découvrir
            </p>
          </div>
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-xl mb-2">Rejoignez d'autres coureurs</h4>
            <p className="text-gray-600">
              Rejoignez des coureurs
            </p>
          </div>
          <div className="text-center p-6">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
              <Trophy className="w-8 h-8 text-yellow-600" />
            </div>
            <h4 className="text-xl mb-2">Récompenses ?</h4>
            <p className="text-gray-600">
              Récompenses pour les meilleurs coureurs ?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
