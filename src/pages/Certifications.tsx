import React from 'react';
import { AlignCenterVertical as Certificate, Award, CheckCircle } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      titre: "Introduction To Cybersecurity",
      date: "2024",
      description: "Certification Cisco Networking Academy validant les connaissances fondamentales en cybersécurité, incluant les principes de base de la sécurité informatique et les bonnes pratiques",
      lienAttestation: "/CertificatIntroductionALaCybersécurité.pdf"
    },
    {
      titre: "JavaScriptEssentials1",
      date: "2024",
      description: "Certification validant les connaissances fondamentales en JavaScript et les bases essentielles du langage",
      lienAttestation: "/JavaScriptEssentials1.pdf"
    },
    {
      titre: "Introduction To Modern IA",
      date: "2024",
      description: "Certification attestant des connaissances sur l'intelligence artificielle moderne, ses applications et ses enjeux",
      lienAttestation: "/IntroductionToModernIA.pdf"
    },
    {
      titre: "Svelte: Les Fondamentaux",
      date: "2024",
      description: "Formation Udemy complète sur les bases du framework Svelte, couvrant la création d'applications web réactives et performantes",
      lienAttestation: "/[2025] Svelte.js 4.2.19.pdf"
    },
    {
      titre: "DiplomeDuMooc",
      date: "2024",
      description: "Certification obtenue suite à la réussite du MOOC",
      lienAttestation: "/DiplomeDuMooc.pdf"
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">Certifications</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Découvrez mes certifications et attestations obtenues
        </p>
      </section>

      <div className="grid gap-8">
        {certifications.map((cert, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-3 mb-4">
              <Certificate className="h-6 w-6 text-indigo-600" />
              <h2 className="text-2xl font-semibold">{cert.titre}</h2>
            </div>
            <div className="ml-9">
              <p className="text-gray-500 mb-2">{cert.date}</p>
              <p className="text-gray-600 mb-4">{cert.description}</p>
              <a 
                href={cert.lienAttestation}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
              >
                <CheckCircle className="h-5 w-5" />
                <span>Voir l'attestation</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}