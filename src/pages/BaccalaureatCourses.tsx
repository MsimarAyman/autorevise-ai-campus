import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Users, BookOpen, Filter, Grid, List, ArrowLeft } from 'lucide-react';
import { baccalaureatCoursesData, BaccalaureatCourse } from '../data/baccalaureatData';

const BaccalaureatCourses: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filter, setFilter] = useState<'all' | 'mathematics' | 'physics'>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCourses = baccalaureatCoursesData.filter(course => {
    const matchesFilter = filter === 'all' || course.category === filter;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const CourseCard: React.FC<{ course: BaccalaureatCourse }> = ({ course }) => (
    <Link to={`/baccalaureat/course/${course.id}`} className="group">
      <div className={`glass-card transition-all duration-300 hover:scale-105 hover:shadow-2xl border-gradient ${
        viewMode === 'list' ? 'flex items-center p-4' : 'p-6'
      }`}>
        <div className={`${viewMode === 'list' ? 'w-32 h-20 mr-4 flex-shrink-0' : 'w-full h-48 mb-4'} rounded-lg overflow-hidden`}>
          <img 
            src={course.image} 
            alt={course.title}
            className="w-full h-full object-cover transition-transform group-hover:scale-110"
          />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              course.category === 'mathematics' 
                ? 'bg-blue-500/20 text-blue-400' 
                : 'bg-emerald-500/20 text-emerald-400'
            }`}>
              {course.category === 'mathematics' ? 'Mathématiques' : 'Physique'}
            </span>
            <div className="flex items-center text-amber-400">
              <Star className="w-4 h-4 fill-current mr-1" />
              <span className="text-sm font-medium">{course.rating}</span>
            </div>
          </div>
          
          <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
            {course.title}
          </h3>
          
          <p className="text-muted-foreground mb-4 line-clamp-2">
            {course.description}
          </p>
          
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{course.duration}</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-4 h-4 mr-1" />
                <span>{course.totalSessions} séances</span>
              </div>
            </div>
            <span className={`px-2 py-1 rounded text-xs font-medium ${
              course.difficulty === 'Débutant' ? 'bg-green-500/20 text-green-400' :
              course.difficulty === 'Intermédiaire' ? 'bg-amber-500/20 text-amber-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {course.difficulty}
            </span>
          </div>
          
          {course.progress > 0 && (
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-muted-foreground">Progression</span>
                <span className="text-primary font-medium">{course.progress}%</span>
              </div>
              <div className="w-full bg-muted rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-primary to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Link to="/" className="mr-4 p-2 rounded-lg hover:bg-muted transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent mb-2">
            Cours de Baccalauréat
          </h1>
          <p className="text-lg text-muted-foreground">
            Préparez votre baccalauréat avec nos cours de mathématiques et physique
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="glass-card p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          <div className="flex items-center space-x-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value as typeof filter)}
              className="bg-background border border-border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">Toutes les matières</option>
              <option value="mathematics">Mathématiques</option>
              <option value="physics">Physique</option>
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Rechercher un cours..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-background border border-border rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary w-64"
            />
            
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Course Grid */}
      {filteredCourses.length > 0 ? (
        <div className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="glass-card p-12 text-center">
          <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
          <div className="text-gray-400 text-lg">Aucun cours trouvé correspondant à vos critères</div>
        </div>
      )}
    </div>
  );
};

export default BaccalaureatCourses;