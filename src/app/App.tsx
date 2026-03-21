import { Calendar, MapPin, Clock, Users, Award, Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from './components/ui/button';
import { Card, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import heroBanner from 'figma:asset/79ace575950bd655c8bee610ac189fc720814648.png';
import eventPoster from 'figma:asset/3296355a3b9393fca201f1c8634d86ff6b659d83.png';
import qrCode from 'figma:asset/b4b8eab7f52c0fcad802f6df251812f866c98886.png';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-blue-600">
              Course Mortagne-au-Perche
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#accueil" className="text-gray-700 hover:text-blue-600 transition">Accueil</a>
              <a href="#apropos" className="text-gray-700 hover:text-blue-600 transition">À propos</a>
              <a href="#infos" className="text-gray-700 hover:text-blue-600 transition">Infos Course</a>
              <a href="#programme" className="text-gray-700 hover:text-blue-600 transition">Programme</a>
              <a href="#partenaires" className="text-gray-700 hover:text-blue-600 transition">Partenaires</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition">Contact</a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Inscription
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="pt-16">
        <div className="relative h-[600px] overflow-hidden">
          <img 
            src={heroBanner} 
            alt="Trail des Perches" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-2xl text-white">
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  Le Trail des Perches
                </h1>
                <p className="text-2xl mb-2">Mortagne-au-Perche 2026</p>
                <p className="text-xl mb-8 opacity-90">
                  Rejoignez-nous pour une expérience de course inoubliable à travers le cœur de notre ville
                </p>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    <span>19 Septembre 2026</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    <span>Site de l'Hippodrome</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>2 Courses: 6 km & 12 km</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button size="lg" className="bg-lime-400 text-gray-900 hover:bg-lime-500 font-semibold">
                    S'inscrire maintenant
                  </Button>
                  <Button size="lg" variant="outline" className="bg-white/10 text-white border-white hover:bg-white/20">
                    Voir le programme
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              À propos de l'événement
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Profitez de l'expérience de courir à travers notre belle ville tout en vous défiant et en vous connectant avec les autres coureurs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-t-4 border-t-blue-600">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Parcours Unique</h3>
                <p className="text-gray-600">
                  Découvrez le patrimoine historique de Mortagne-au-Perche à travers des parcours pittoresques
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-lime-400">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-lime-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Rejoignez d'autres coureurs</h3>
                <p className="text-gray-600">
                  Une communauté accueillante de coureurs passionnés de tous niveaux
                </p>
              </CardContent>
            </Card>

            <Card className="border-t-4 border-t-blue-600">
              <CardContent className="pt-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Récompenses</h3>
                <p className="text-gray-600">
                  Médailles pour tous les participants et prix pour les vainqueurs de chaque catégorie
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={eventPoster} 
                alt="Affiche Trail des Perches" 
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-6">Le Trail des Perches</h3>
              <p className="text-gray-600 mb-4">
                L'Athletic Club Mortagnais est fier de vous présenter le Trail des Perches, une course exceptionnelle qui vous fera découvrir le charme authentique de Mortagne-au-Perche.
              </p>
              <p className="text-gray-600 mb-4">
                Que vous soyez coureur débutant ou expérimenté, nos deux parcours de 6 km et 12 km sont conçus pour offrir un défi adapté à tous les niveaux. Traversez les rues pavées historiques, admirez l'architecture médiévale et profitez de l'ambiance festive qui règne dans toute la ville.
              </p>
              <p className="text-gray-600">
                Cet événement est bien plus qu'une simple course - c'est une célébration de notre communauté, de notre patrimoine et de l'esprit sportif qui nous unit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Race Info Section */}
      <section id="infos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Informations Course
            </h2>
            <p className="text-xl text-gray-600">
              Tout ce que vous devez savoir pour participer
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-blue-200 bg-blue-50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xl">6</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Course 6 km</h3>
                    <p className="text-gray-600">Parcours découverte</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Idéal pour les débutants et coureurs occasionnels</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Parcours urbain à travers le centre historique</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Dénivelé modéré</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Points de ravitaillement à mi-parcours et à l'arrivée</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-lime-400 bg-lime-50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-lime-500 rounded-lg flex items-center justify-center">
                    <span className="text-gray-900 font-bold text-xl">12</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Course 12 km</h3>
                    <p className="text-gray-600">Parcours sportif</p>
                  </div>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-lime-600 mt-1">•</span>
                    <span>Pour coureurs confirmés recherchant un défi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lime-600 mt-1">•</span>
                    <span>Parcours vallonné avec passages techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lime-600 mt-1">•</span>
                    <span>Dénivelé plus important</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lime-600 mt-1">•</span>
                    <span>Plusieurs points de ravitaillement sur le parcours</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-br from-blue-600 to-blue-700 text-white">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Clock className="w-6 h-6" />
                Retrait des dossards
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3">📍 Lieu</h4>
                  <p className="mb-4">Site de l'Hippodrome, Mortagne-au-Perche</p>
                  
                  <h4 className="font-semibold text-lg mb-3">📅 Date et horaires</h4>
                  <p className="mb-2"><strong>Jeudi 18 septembre 2026</strong></p>
                  <p className="mb-4">14h00 - 19h00</p>
                  
                  <p className="mb-2"><strong>Vendredi 19 septembre 2026</strong></p>
                  <p>07h00 - 08h30 (jour de la course)</p>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3">📋 Documents requis</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Confirmation d'inscription (email ou imprimé)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Pièce d'identité</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span>✓</span>
                      <span>Certificat médical de moins d'un an (ou licence FFA en cours)</span>
                    </li>
                  </ul>
                  
                  <div className="mt-6 p-4 bg-white/10 rounded-lg backdrop-blur-sm">
                    <p className="text-sm">
                      ⚠️ <strong>Important :</strong> Merci de vous présenter au moins 45 minutes avant le départ de la course pour récupérer vos matériels et compléter l'inscription. Tous les horaires sont soumis à la météo.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Programme Section */}
      <section id="programme" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Programme de l'événement
            </h2>
            <p className="text-xl text-gray-600">
              Planifiez votre journée de course avec notre calendrier détaillé
            </p>
          </div>

          <div className="space-y-6">
            <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">07h00</span>
                      <span className="text-gray-400">-</span>
                      <span className="text-gray-600">08h30</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Dernière chance - Retrait des dossards</h3>
                    <p className="text-gray-600">
                      Récupération des dossards pour ceux qui n'ont pas pu les retirer la veille
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-lime-400 hover:shadow-lg transition">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-lime-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-lime-600">08h00</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Ouverture du village départ</h3>
                    <p className="text-gray-600">
                      Échauffement, derniers préparatifs et ambiance festive avant le départ
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition bg-blue-50">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">🏃</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">09h00</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Départ Course 6 km</h3>
                    <p className="text-gray-600">
                      Top départ pour le parcours découverte de 6 kilomètres
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-lime-400 hover:shadow-lg transition bg-lime-50">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-lime-500 rounded-full flex items-center justify-center">
                      <span className="text-gray-900 font-bold text-xl">🏃</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-lime-600">09h15</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Départ Course 12 km</h3>
                    <p className="text-gray-600">
                      Top départ pour le parcours sportif de 12 kilomètres
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-600 hover:shadow-lg transition">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                      <Award className="w-8 h-8 text-blue-600" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-blue-600">11h30</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Remise des prix</h3>
                    <p className="text-gray-600">
                      Cérémonie de remise des prix pour les vainqueurs et moments conviviaux
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-gray-400 hover:shadow-lg transition">
              <CardContent className="pt-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">🎉</span>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl font-bold text-gray-600">12h30</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Clôture de l'événement</h3>
                    <p className="text-gray-600">
                      Fin officielle de l'événement - À l'année prochaine !
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partenaires" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos Partenaires
            </h2>
            <p className="text-xl text-gray-600">
              Merci à nos partenaires qui rendent cet événement possible
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold text-center mb-8 text-gray-700">Partenaires Officiels</h3>
            <div className="grid md:grid-cols-3 gap-8 items-center justify-items-center">
              <Card className="w-full h-48 flex items-center justify-center hover:shadow-xl transition p-6">
                <div className="text-center">
                  <div className="text-blue-600 font-bold text-2xl mb-2">RNE</div>
                  <div className="text-sm text-gray-600">Le Département</div>
                </div>
              </Card>
              
              <Card className="w-full h-48 flex items-center justify-center hover:shadow-xl transition p-6">
                <div className="text-center">
                  <div className="text-green-600 font-bold text-2xl mb-2">CDC</div>
                  <div className="text-sm text-gray-600">Communauté de Communes</div>
                </div>
              </Card>
              
              <Card className="w-full h-48 flex items-center justify-center hover:shadow-xl transition p-6">
                <div className="text-center">
                  <div className="text-lime-600 font-bold text-2xl mb-2">Mortagne</div>
                  <div className="text-sm text-gray-600">au Perche</div>
                </div>
              </Card>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-lime-50 rounded-xl p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900">
              Devenez Partenaire
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Vous souhaitez soutenir notre événement et gagner en visibilité auprès de notre communauté ? 
              Contactez-nous pour découvrir nos offres de partenariat.
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Nous contacter
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Venez nous parler
            </h2>
            <p className="text-xl text-gray-600">
              Des questions ? N'hésitez pas à nous contacter
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Nous contacter</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <a href="mailto:contact@trail-perches.fr" className="text-blue-600 hover:underline">
                      contact@trail-perches.fr
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Téléphone</div>
                    <a href="tel:+33102030405" className="text-blue-600 hover:underline">
                      +33 1 02 03 04 05
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Départ de la course</div>
                    <p className="text-gray-600">
                      Site de l'Hippodrome<br />
                      61400 Mortagne-au-Perche
                    </p>
                  </div>
                </div>

                <div className="pt-6">
                  <div className="font-semibold mb-3">Suivez-nous</div>
                  <div className="flex gap-4">
                    <a href="#" className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition">
                      <Facebook className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition">
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition">
                      <Instagram className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <div className="font-semibold mb-3">Inscription en ligne</div>
                  <p className="text-gray-600 mb-4">Scannez le QR code pour vous inscrire :</p>
                  <img 
                    src={qrCode} 
                    alt="QR Code inscription" 
                    className="w-40 h-40 border-2 border-gray-200 rounded-lg"
                  />
                  <p className="text-sm text-gray-500 mt-2">ou rendez-vous sur www.finishers.com</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h3>
              <Card>
                <CardContent className="pt-6">
                  <form className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nom
                      </label>
                      <Input 
                        id="name" 
                        placeholder="Votre nom" 
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="votre@email.com" 
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea 
                        id="message" 
                        placeholder="Comment pouvons-nous vous aider ?" 
                        rows={6}
                        className="w-full"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                      Envoyer un message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-xl mb-4">Course Mortagne-au-Perche</h4>
              <p className="text-gray-400">
                Le Trail des Perches - Une expérience de course unique au cœur du Perche
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Liens rapides</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#apropos" className="hover:text-white transition">À propos de l'événement</a></li>
                <li><a href="#infos" className="hover:text-white transition">Informations Course</a></li>
                <li><a href="#programme" className="hover:text-white transition">Programme</a></li>
                <li><a href="#contact" className="hover:text-white transition">Nous contacter</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Détails de l'événement</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Date: 19 septembre 2026</li>
                <li>Heure: 09h00 - 12h30</li>
                <li>Lieu: Site de l'Hippodrome</li>
                <li>Inscription: www.finishers.com</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2026 Course Mortagne-au-Perche. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
