import React from 'react';
import { Code, FileText, ExternalLink } from 'lucide-react';

export default function Projets() {
  const projets = [
    {
      titre: "Projet 1 : Le Nombre Mystérieux",
      description: "Projet de développement d'un jeu interactif où l'utilisateur doit deviner un nombre mystère. Ce projet démontre la maîtrise des concepts de base de la programmation et de l'interaction utilisateur.",
      technologies: ["Java", "Interface graphique", "Gestion des événements"],
      lienPDF: "/Projet1LeNombreMystérieux.pdf",
      logo: "https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?auto=format&fit=crop&q=80&w=300&h=300"
    },
    {
      titre: "Projet 2 : Devine Le Mot et Calculatrice Graphique",
      description: "Double projet comprenant un jeu de devinettes de mots et une calculatrice avec interface graphique. Démontre la capacité à gérer plusieurs fonctionnalités dans une même application.",
      technologies: ["Java", "JavaFX", "Algorithmes", "Interface utilisateur"],
      lienPDF: "/Projet2DevineLeMotEtCalculatriceGraphique.pdf",
      logo: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80&w=300&h=300"
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">Mes Projets</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Découvrez les différents projets réalisés pendant ma formation
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        {projets.map((projet, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="aspect-w-16 aspect-h-9">
              <img 
                src={projet.logo} 
                alt={projet.titre}
                className="object-cover w-full h-48"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-4 flex items-center space-x-2">
                <Code className="h-6 w-6 text-indigo-600" />
                <span>{projet.titre}</span>
              </h2>
              <p className="text-gray-600 mb-4">{projet.description}</p>
              <div className="mb-4">
                <h3 className="font-semibold mb-2">Technologies utilisées :</h3>
                <div className="flex flex-wrap gap-2">
                  {projet.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <a 
                  href={projet.lienPDF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                >
                  <FileText className="h-5 w-5" />
                  <span>Voir le projet</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}