import React from 'react';
import { Code, FileText, ExternalLink } from 'lucide-react';

export default function Projets() {
  const projets = [
    {
      titre: "Pokemon Battle Simulator",
      description: "Application web React qui simule des combats Pokémon en utilisant l'API PokéAPI. Les utilisateurs peuvent sélectionner leurs Pokémon et les faire combattre en temps réel avec un système de combat basé sur les types et les statistiques.",
      technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "PokéAPI"],
      lienGit: "https://gitlab.com/sio1480948/pokemon-battle",
      logo: "https://images.unsplash.com/photo-1613771404784-3a5686aa2be3?auto=format&fit=crop&q=80&w=300&h=300",
      realisations: [
        "Système de combat en temps réel avec calcul de dégâts",
        "Intégration de l'API PokéAPI pour les données Pokémon",
        "Interface utilisateur interactive et responsive",
        "Système de logs de combat détaillé"
      ]
    },
    {
      titre: "Restaurant Table Manager",
      description: "Application web de gestion des tables de restaurant développée avec Svelte et TypeScript. Le projet comprend un tableau de bord en temps réel, un éditeur de plan de salle avec drag & drop, et un système de sauvegarde automatique. J'ai contribué à l'optimisation des performances et à l'amélioration de l'expérience utilisateur.",
      technologies: ["Svelte", "TypeScript", "Express.js", "JSON", "Drag & Drop API"],
      lienGit: "https://github.com/Max851-tech/RestaurantTableManager",
      logo: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?auto=format&fit=crop&q=80&w=300&h=300",
      realisations: [
        "Conception du tableau de bord avec statistiques en temps réel",
        "Développement de l'éditeur de plan de salle interactif",
        "Implémentation du système de sauvegarde automatique",
        "Optimisation des performances des composants"
      ]
    },
    {
      titre: "Projet GPS",
      description: "Application de cartographie interactive utilisant Leaflet.js et Svelte. Cette application permet aux utilisateurs de planifier leurs trajets avec différents modes de transport et de visualiser les instructions de navigation en temps réel.",
      technologies: ["Svelte", "Leaflet.js", "JavaScript", "API Cartographie"],
      lienGit: "https://github.com/Max851-tech/Stage/tree/main/ProjetGps",
      logo: "https://images.unsplash.com/photo-1611516491426-03025e6043c8?auto=format&fit=crop&q=80&w=300&h=300",
      realisations: [
        "Intégration de Leaflet.js pour la cartographie interactive",
        "Développement du système de points de départ/arrivée",
        "Implémentation des différents modes de transport",
        "Création de l'affichage des instructions de navigation"
      ]
    },
    {
      titre: "Le Nombre Mystérieux",
      description: "Projet scolaire développé en Java, implémentant un jeu de devinettes où l'utilisateur doit trouver un nombre aléatoire. Le projet met en œuvre les concepts fondamentaux de la programmation Java.",
      technologies: ["Java", "Programmation Orientée Objet", "Console I/O"],
      lienGit: "/DM-NombreMystérieux.pdf",
      logo: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=300&h=300",
      realisations: [
        "Génération de nombres aléatoires",
        "Gestion des entrées utilisateur",
        "Logique de jeu interactive",
        "Interface console utilisateur"
      ]
    },
    {
      titre: "Devine Le Mot et Calculatrice Graphique",
      description: "Double projet comprenant un jeu de devinettes de mots et une calculatrice avec interface graphique. Ce projet démontre la maîtrise de différents aspects de la programmation Java.",
      technologies: ["Java", "Swing", "AWT", "Algorithmes"],
      lienGit: "/Devine le mot et calculatrice graphique.pdf",
      logo: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&q=80&w=300&h=300",
      realisations: [
        "Interface graphique avec Swing",
        "Gestion des événements utilisateur",
        "Algorithmes de calcul",
        "Système de score pour le jeu"
      ]
    },
    {
      titre: "DM JAVA / JAVASCRIPT",
      description: "Projet scolaire combinant Java et JavaScript. Il comprend un mini GPS pour calculer les distances entre villes et un algorithme de tri par sélection. Le projet démontre la maîtrise des fondamentaux de la programmation et l'utilisation de différents langages.",
      technologies: ["Java", "JavaScript", "Algorithmes", "Géolocalisation"],
      lienGit: "/DM-JAVA-JAVASCRIPT-Luc-Moi.pdf",
      logo: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=300&h=300",
      realisations: [
        "Développement d'un système de calcul de distances entre villes",
        "Implémentation d'un algorithme de tri par sélection",
        "Interface utilisateur interactive",
        "Intégration de fonctionnalités Java et JavaScript"
      ]
    },
    {
      titre: "QCM-App Échecs",
      description: "Application web de quiz spécialisée dans les échecs, permettant aux utilisateurs de tester leurs connaissances sur différents aspects du jeu. L'application offre une gestion complète des utilisateurs et des questions, avec une interface intuitive pour la passation des QCM.",
      technologies: ["Laravel 10", "MySQL", "Blade", "PHP", "npm"],
      lienGit: "https://gitlab.com/sio1480948/qcm-app",
      logo: "https://images.unsplash.com/photo-1528819622765-d6bcf132f793?auto=format&fit=crop&q=80&w=300&h=300",
      realisations: [
        "Système d'authentification sécurisé",
        "Gestion des questions et réponses",
        "Interface utilisateur intuitive",
        "Base de données MySQL optimisée"
      ]
    },
    {
      titre: "Guess What",
      description: "Jeu de devinettes en ligne de commande développé en PHP orienté objet. Ce projet pédagogique met en œuvre les principes de la POO et inclut des tests unitaires. Le jeu est basé sur la manipulation de cartes et peut être étendu en application web avec Laravel.",
      technologies: ["PHP 8+", "POO", "PHPUnit", "Composer", "CLI"],
      lienGit: "https://gitlab.com/m.russonprinci/guesswhat-maxime-russon",
      logo: "https://images.unsplash.com/photo-1494059980473-813e73ee784b?auto=format&fit=crop&q=80&w=300&h=300",
      realisations: [
        "Architecture orientée objet complète",
        "Implémentation de tests unitaires",
        "Interface en ligne de commande",
        "Structure extensible pour future version web"
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">Mes Projets</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Découvrez mes réalisations techniques et créatives
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
                <h3 className="font-semibold mb-2">Réalisations principales :</h3>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  {projet.realisations.map((realisation, i) => (
                    <li key={i}>{realisation}</li>
                  ))}
                </ul>
              </div>

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
                  href={projet.lienGit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                >
                  <ExternalLink className="h-5 w-5" />
                  <span>Voir le projet sur Git</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}