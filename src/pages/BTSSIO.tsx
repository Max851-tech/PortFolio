import React from 'react';
import { BookOpen, Award, Building, FileText } from 'lucide-react';

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
      entreprise: "Klicat",
      periode: "Janvier - Mars 2025",
      description: "Stage de deuxième année effectué à Bois-Colombes. Développement d'applications web avec le framework Svelte. Participation à plusieurs projets de développement front-end, mettant en pratique les concepts modernes de développement web et travaillant en équipe dans un environnement professionnel.",
      rapport: "/Rapport de Stage 2ème année.pdf"
    },
    {
      entreprise: "Mairie de Bois-Colombes",
      periode: "Mai - Juin 2023",
      description: "Stage de première année en tant que technicien support. Assistance aux utilisateurs, maintenance du parc informatique et résolution des problèmes techniques au sein des services municipaux.",
      rapport: "/Rapport-Stage-1ereAnnée.pdf"
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
              {stage.rapport && (
                <a 
                  href={stage.rapport}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 mt-2"
                >
                  <FileText className="h-4 w-4" />
                  <span>Voir le rapport de stage</span>
                </a>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}