import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, GraduationCap, ArrowRight } from 'lucide-react';

const DomainSelection: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent mb-4">
            Autorevise
          </h1>
          <p className="text-xl text-muted-foreground">
            Choisissez votre domaine d'apprentissage
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Informatique Option */}
          <Link to="/informatique" className="group">
            <div className="glass-card p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl border-gradient">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center">
                  <Monitor className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Informatique
                </h2>
                <p className="text-muted-foreground mb-6">
                  Découvrez nos cours de programmation : Python, Java, JavaScript, bases de données, développement web et mobile
                </p>
                <div className="flex items-center justify-center text-primary group-hover:translate-x-2 transition-transform">
                  <span className="font-medium mr-2">Commencer</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>

          {/* Baccalauréat Option */}
          <Link to="/baccalaureat" className="group">
            <div className="glass-card p-8 h-full transition-all duration-300 hover:scale-105 hover:shadow-2xl border-gradient">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500 flex items-center justify-center">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Baccalauréat
                </h2>
                <p className="text-muted-foreground mb-6">
                  Préparez votre baccalauréat avec nos cours de mathématiques et physique adaptés au programme
                </p>
                <div className="flex items-center justify-center text-emerald-500 group-hover:translate-x-2 transition-transform">
                  <span className="font-medium mr-2">Commencer</span>
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Plateforme d'apprentissage interactive avec IA
          </p>
        </div>
      </div>
    </div>
  );
};

export default DomainSelection;