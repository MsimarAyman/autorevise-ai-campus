import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, Star, Play, CheckCircle, Circle } from 'lucide-react';
import { baccalaureatCoursesData } from '../data/baccalaureatData';

const BaccalaureatCourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = baccalaureatCoursesData.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Cours non trouvé</h2>
          <Link to="/baccalaureat" className="text-primary hover:underline">
            Retour aux cours
          </Link>
        </div>
      </div>
    );
  }

  const completedSessions = course.sessions.filter(session => session.completed).length;
  const progressPercentage = (completedSessions / course.sessions.length) * 100;

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Link to="/baccalaureat" className="mr-4 p-2 rounded-lg hover:bg-muted transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-foreground mb-2">{course.title}</h1>
          <p className="text-lg text-muted-foreground">{course.description}</p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Course Overview */}
          <div className="glass-card p-6 mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    course.category === 'mathematics' 
                      ? 'bg-blue-500/20 text-blue-400' 
                      : 'bg-emerald-500/20 text-emerald-400'
                  }`}>
                    {course.category === 'mathematics' ? 'Mathématiques' : 'Physique'}
                  </span>
                  <div className="flex items-center text-amber-400">
                    <Star className="w-5 h-5 fill-current mr-1" />
                    <span className="font-medium">{course.rating}</span>
                  </div>
                </div>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-4 h-4 mr-2" />
                    <span>{course.totalSessions} séances</span>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-muted-foreground">Progression du cours</span>
                    <span className="text-primary font-medium">{progressPercentage.toFixed(0)}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-primary to-purple-500 h-3 rounded-full transition-all duration-300"
                      style={{ width: `${progressPercentage}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sessions List */}
          <div className="glass-card p-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">Séances du cours</h2>
            <div className="space-y-4">
              {course.sessions.map((session, index) => (
                <Link
                  key={session.id}
                  to={`/baccalaureat/course/${courseId}/session/${session.id}`}
                  className="block"
                >
                  <div className="flex items-center p-4 rounded-lg border border-border hover:border-primary transition-all duration-200 hover:bg-muted/50">
                    <div className="mr-4">
                      {session.completed ? (
                        <CheckCircle className="w-6 h-6 text-green-500" />
                      ) : (
                        <Circle className="w-6 h-6 text-muted-foreground" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h3 className="font-semibold text-foreground">{session.title}</h3>
                        <span className="text-sm text-muted-foreground">{session.duration}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{session.description}</p>
                    </div>
                    
                    <div className="ml-4">
                      <Play className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="glass-card p-6 sticky top-8">
            <h3 className="text-xl font-bold text-foreground mb-4">Informations du cours</h3>
            
            <div className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground">Niveau</label>
                <p className="font-medium text-foreground">{course.difficulty}</p>
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground">Durée totale</label>
                <p className="font-medium text-foreground">{course.duration}</p>
              </div>
              
              <div>
                <label className="text-sm text-muted-foreground">Séances complétées</label>
                <p className="font-medium text-foreground">{completedSessions}/{course.totalSessions}</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="font-semibold text-foreground mb-3">Ce que vous apprendrez</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {course.sessions.map((session, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{session.title.replace(/^Séance \d+ : /, '')}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BaccalaureatCourseDetail;