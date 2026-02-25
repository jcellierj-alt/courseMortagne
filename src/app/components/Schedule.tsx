import { Clock } from 'lucide-react';

const scheduleData = [
  {
    time: '8h00',
    event: 'Inscription ouverte',
    description: 'Rendez-vous au lieu de départ pour récupérer votre dossard',
  },
  {
    time: '9h00',
    event: 'Départ de la course',
    description: 'Départ de la course pour les ...',
  },
  {
    time: '11h00',
    event: 'Gouter',
    description: 'etc...',
  },
  {
    time: '12h00',
    event: 'A définir',
    description: 'Lorem ipsum dolor sit.',
  },
  {
    time: '15h00',
    event: 'A définir',
    description: 'Lorem ipsum dolor sit.',
  },
  {
    time: '16h30',
    event: 'A définir',
    description: 'Lorem ipsum dolor sit.',
  },
  {
    time: '18h00',
    event: 'A définir',
    description: 'Lorem ipsum dolor sit.',
  },
];

export function Schedule() {
  return (
    <section id="schedule" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-4">
          Programme de l'événement
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg">
          Planifiez votre journée de course avec notre calendrier détaillé
        </p>

        <div className="space-y-6">
          {scheduleData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex items-center gap-3 md:w-40 flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span className="text-blue-600">{item.time}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">{item.event}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-200">
          <h3 className="text-xl mb-2">Note importante</h3>
          <p className="text-gray-700">
            Merci de vous présenter au moins 45 minutes avant le départ de la course pour récupérer vos matériels et compléter l'inscription. Tous les horaires sont soumis à la météo.
          </p>
        </div>
      </div>
    </section>
  );
}
