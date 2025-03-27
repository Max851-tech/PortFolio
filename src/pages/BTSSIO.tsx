import React from 'react';
import { BookOpen, Award, Building } from 'lucide-react';

export default function BTSSIO() {
  const competences = [
    {
      domaine: "Développement",
      items: [
        "Programmation orientée objet",
        "Développement web front-end et back-end",
        "Bases de données SQL et NoSQL",
        "Méthodes agiles"
      ]
    },
    {
      domaine: "Cybersécurité",
      items: [
        "Sécurité des applications",
        "Protection des données",
        "Audit de sécurité",
        "Veille technologique"
      ]
    }
  ];

  const stages = [
    {
      entreprise: "Nom de l'entreprise",
      periode: "Mai - Juin 2023",
      description: "Description des missions et réalisations pendant le stage"
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">BTS SIO - SLAM</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Services Informatiques aux Organisations - Solutions Logicielles et Applications Métiers
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3 mb-6">
            <BookOpen className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-semibold">Formation</h2>
          </div>
          <p className="text-gray-600 mb-4">
            Le BTS SIO option SLAM forme des professionnels capables de répondre aux besoins informatiques 
            des organisations en développant des solutions logicielles.
          </p>
          <a 
            href="/cv.pdf" 
            className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-800"
          >
            <span>Voir mon CV</span>
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-3 mb-6">
            <Award className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-semibold">Compétences</h2>
          </div>
          <div className="space-y-6">
            {competences.map((comp, index) => (
              <div key={index}>
                <h3 className="font-semibold text-lg mb-2">{comp.domaine}</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {comp.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center space-x-3 mb-6">
          <Building className="h-6 w-6 text-indigo-600" />
          <h2 className="text-2xl font-semibold">Stages</h2>
        </div>
        <div className="space-y-6">
          {stages.map((stage, index) => (
            <div key={index} className="border-l-4 border-indigo-600 pl-4">
              <h3 className="font-semibold text-lg">{stage.entreprise}</h3>
              <p className="text-gray-500">{stage.periode}</p>
              <p className="text-gray-600 mt-2">{stage.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}