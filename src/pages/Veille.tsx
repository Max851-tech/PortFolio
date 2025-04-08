import React from 'react';
import { Eye, AlertTriangle, Building, Lightbulb } from 'lucide-react';

export default function Veille() {
  const articles = [
    {
      titre: "Les cybermenaces majeures de mars 2025",
      date: "Mars 2025",
      description: "Cet article de CM Alliance recense les principales cyberattaques, rançongiciels et violations de données survenues en mars 2025, soulignant la nécessité pour les entreprises de renforcer leur cybersécurité.",
      source: "CM Alliance",
      lien: "https://www.cm-alliance.com/cybersecurity-blog/biggest-cyber-attacks-ransomware-attacks-data-breaches-of-march-2025?utm_source=chatgpt.com"
    },
    {
      titre: "Menaces de cybersécurité en France en 2025",
      date: "2025",
      description: "76% des entreprises françaises prévoient d'augmenter leurs investissements en cybersécurité en 2025, reflétant une prise de conscience croissante des risques.",
      source: "Business Wire",
      lien: "https://www.businesswire.com/news/home/20250129552796/fr/"
    },
    {
      titre: "Bilan 2024 : Les cyberattaques qui ont redéfini la sécurité numérique en France",
      date: "30 Décembre 2024",
      description: "En janvier 2024, EDF a subi une attaque par ransomware exploitant une vulnérabilité dans un logiciel tiers, entraînant le chiffrement de données sensibles et une interruption temporaire des services. Cet incident met en évidence la vulnérabilité des infrastructures critiques face aux cybermenaces.",
      source: "ManageEngine Blog",
      lien: "https://blogs.manageengine.com/fr/2024/12/30/bilan-2024-les-cyberattaques-qui-ont-redefini-la-securite-numerique-en-france.html"
    },
    {
      titre: "La nouvelle ère du hacktivisme",
      date: "12 Octobre 2024",
      description: "Le hacktivisme connaît un renouveau, avec des groupes revendiquant des piratages de sites français pour des motifs politiques ou religieux. Cette évolution complexifie la distinction entre activisme indépendant et cyberespionnage orchestré par des États.",
      source: "Le Monde",
      lien: "https://www.lemonde.fr/pixels/article/2024/10/12/la-nouvelle-ere-du-hacktivisme_6350322_4408996.html"
    },
    {
      titre: "Panorama des cybermenaces 2024 de l'ANSSI : +15% d'attaques en France",
      date: "Mars 2024",
      description: "Le dernier rapport de l'ANSSI révèle une augmentation de 15% des cyberattaques en France en 2024, avec 4 386 événements de sécurité traités. Cette hausse souligne l'importance pour les entreprises de renforcer leurs mesures de cybersécurité.",
      source: "Digitemis",
      lien: "https://www.digitemis.com/panorama-cybermenaces-anssi-2024-protection-entreprise/"
    },
    {
      titre: "Baromètre 2024 de la cybersécurité des entreprises françaises",
      date: "Février 2024",
      description: "Cette seconde édition du baromètre offre un aperçu des tendances et des enjeux en matière de cybersécurité, évaluant le niveau de maturité des entreprises françaises face aux menaces numériques.",
      source: "Visiativ",
      lien: "https://www.visiativ.com/actualites/actualites/barometre-la-cybersecurite-des-entreprises-francaises-edition-2024/"
    },
    {
      titre: "Cybersécurité 2024 : Les tendances pour les entreprises",
      date: "Janvier 2024",
      description: "Avec l'émergence de nouvelles technologies et menaces, il est crucial pour les entreprises de rester informées des tendances émergentes en matière de cybersécurité pour protéger leurs données sensibles et leurs systèmes informatiques.",
      source: "Roverba",
      lien: "https://roverba.com/cybersecurite-2024-les-tendances-pour-les-entreprises/"
    },
    {
      titre: "Les 10 cyberattaques les plus courantes en entreprise",
      date: "2023",
      description: "53% des entreprises ont été victimes d'une cyberattaque en 2023, avec une augmentation de plus de 50% des attaques sur les petites entreprises en trois ans.",
      source: "BPI France",
      lien: "https://bigmedia.bpifrance.fr/nos-dossiers/quelles-sont-les-10-cyberattaques-les-plus-courantes-en-entreprise"
    },
    {
      titre: "Les principales menaces cyber pour les entreprises en 2023",
      date: "2023",
      description: "Le piratage de compte (26%), l'hameçonnage (21%) et les rançongiciels (17%) sont les principales menaces, avec une hausse de 63% des fraudes aux virements.",
      source: "France Num",
      lien: "https://www.francenum.gouv.fr/magazine-du-numerique/quelles-sont-les-principales-menaces-cyber-pour-les-entreprises-en-2023"
    }
  ];

  return (
    <div className="space-y-8">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-800">Veille Technologique</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Thème : L'entreprise et la menace informatique
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center space-x-3 mb-6">
            <Eye className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-semibold">Méthodologie</h2>
          </div>
          <div className="space-y-4 text-gray-600">
            <p>
              Ma veille technologique est basée sur une surveillance régulière des sources suivantes :
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Sites spécialisés en cybersécurité</li>
              <li>Flux RSS des principaux acteurs du secteur</li>
              <li>Newsletters professionnelles</li>
              <li>Réseaux sociaux professionnels</li>
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
          <div className="flex items-center space-x-3 mb-6">
            <Building className="h-6 w-6 text-indigo-600" />
            <h2 className="text-2xl font-semibold">Apports</h2>
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Pour l'entreprise</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Anticipation des menaces potentielles</li>
                <li>Mise à jour des pratiques de sécurité</li>
                <li>Conformité aux normes et réglementations</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Pour moi</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Développement des connaissances</li>
                <li>Compréhension des enjeux actuels</li>
                <li>Amélioration continue des compétences</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center space-x-3 mb-6">
          <AlertTriangle className="h-6 w-6 text-indigo-600" />
          <h2 className="text-2xl font-semibold">Articles et Analyses</h2>
        </div>
        <div className="space-y-6">
          {articles.map((article, index) => (
            <div key={index} className="border-l-4 border-indigo-600 pl-4 py-4 hover:bg-gray-50 transition-colors duration-300">
              <h3 className="font-semibold text-lg">{article.titre}</h3>
              <p className="text-gray-500">{article.date}</p>
              <p className="text-gray-600 mt-2">{article.description}</p>
              <div className="mt-2">
                <a 
                  href={article.lien}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-indigo-600 hover:text-indigo-800 transition-colors duration-300"
                >
                  <Lightbulb className="h-4 w-4" />
                  <span>Lire l'article sur {article.source}</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}