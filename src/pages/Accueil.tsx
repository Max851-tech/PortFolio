import React from 'react';
import { GraduationCap, Briefcase, Mail, ArrowRight } from 'lucide-react';

export default function Accueil() {
  return (
    <div className="relative min-h-screen">
      <div className="hero-pattern absolute inset-0 opacity-30"></div>
      
      <div className="relative space-y-12 px-4">
        <section className="text-center space-y-6 py-20 animate-slide-in">
          <h1 className="text-7xl font-bold gradient-text">
            Portfolio BTS SIO
          </h1>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Bienvenue dans mon univers numérique, où le code rencontre la créativité
          </p>
          <div className="animate-float mt-12">
            <svg className="mx-auto w-16 h-16 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 5l0 14M5 12l7 7 7-7" />
            </svg>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div className="gradient-border animate-slide-in" style={{animationDelay: '0.2s'}}>
            <div className="p-8 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                  <GraduationCap className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                  Formation
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                En formation BTS SIO, je me spécialise dans le développement d'applications 
                et la sécurité des systèmes d'information.
              </p>
              <a href="/bts-sio" className="group inline-flex items-center space-x-2 text-blue-600 hover:text-purple-600 transition-colors duration-300">
                <span>Découvrir mon parcours</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>

          <div className="gradient-border animate-slide-in" style={{animationDelay: '0.4s'}}>
            <div className="p-8 space-y-4">
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-orange-600">
                  Projets
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                Découvrez mes réalisations techniques et créatives, 
                témoignant de ma passion pour l'innovation numérique.
              </p>
              <a href="/projets" className="group inline-flex items-center space-x-2 text-pink-600 hover:text-orange-600 transition-colors duration-300">
                <span>Explorer mes projets</span>
                <ArrowRight className="h-4 w-4 transform group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        <section className="max-w-4xl mx-auto mt-20 animate-slide-in" style={{animationDelay: '0.6s'}}>
          <div className="glass-card p-8 rounded-2xl space-y-6">
            <h2 className="text-3xl font-bold text-center gradient-text">
              Me Contacter
            </h2>
            <div className="flex items-center justify-center space-x-4 text-gray-600">
              <Mail className="h-6 w-6" />
              <a href="mailto:votre.email@example.com" 
                className="text-lg hover:text-blue-600 transition-colors duration-300">
                m.russon.job@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}