export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-xl mb-4">Course Mortagne-au-Perche</h3>
            <p className="text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  A propos de l'événement
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-gray-400 hover:text-white transition-colors">
                  Programme
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Nous contacter
                </a>
              </li>
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <h3 className="text-xl mb-4">Détails de l'événement</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Date: xx septembre 2026</li>
              <li>Heure: 8h00 - 16h00</li>
              <li>Lieu: Orange Bleu</li>
              <li>Inscription: Ouverte</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Course Mortagne-au-Perche. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
