
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, CheckCircle, Play, Star, BookOpen } from 'lucide-react';
import { coursesData } from '../data/coursesData';

const CourseDetail: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = coursesData.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl text-white">Course not found</h1>
        <Link to="/" className="text-purple-400 hover:text-purple-300 mt-4 inline-block">
          Back to courses
        </Link>
      </div>
    );
  }

  const completedSessions = course.sessions.filter(session => session.completed).length;
  const progress = (completedSessions / course.sessions.length) * 100;

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'bg-green-500/20 text-green-300';
      case 'Intermediate': return 'bg-yellow-500/20 text-yellow-300';
      case 'Advanced': return 'bg-red-500/20 text-red-300';
      default: return 'bg-gray-500/20 text-gray-300';
    }
  };

  return (
    <div className="animate-fade-in">
      {/* Breadcrumb */}
      <Link 
        to="/"
        className="flex items-center text-purple-400 hover:text-purple-300 mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to courses
      </Link>

      {/* Course Header */}
      <div className="glass-card rounded-2xl p-8 mb-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getLevelColor(course.level)}`}>
                {course.level}
              </span>
              <div className="flex items-center text-yellow-400">
                <Star className="w-5 h-5 fill-current" />
                <span className="ml-1 font-medium">{course.rating}</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold gradient-text mb-4">{course.title}</h1>
            <p className="text-gray-300 text-lg mb-6 max-w-3xl">{course.description}</p>

            <div className="flex items-center gap-6 text-gray-400">
              <span className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                {course.duration}
              </span>
              <span className="flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                {course.sessions.length} sessions
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                {completedSessions} completed
              </span>
            </div>
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-gray-400 mb-2">
            <span>Course Progress</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div 
              className="bg-gradient-to-r from-purple-500 to-purple-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Sessions */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-white mb-6">Course Sessions</h2>
        
        {course.sessions.map((session, index) => (
          <Link 
            key={session.id}
            to={`/informatique/course/${courseId}/session/${session.id}`}
            className="block"
          >
            <div className="glass-card rounded-xl p-6 hover-glow group transition-all duration-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                    session.completed 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-purple-500/20 text-purple-400'
                  }`}>
                    {session.completed ? (
                      <CheckCircle className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6" />
                    )}
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-300 transition-colors">
                        Séance {index + 1}: {session.title}
                      </h3>
                      <span className="text-sm text-gray-400 flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {session.duration}
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm max-w-4xl">{session.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {session.completed && (
                    <span className="text-green-400 text-sm font-medium">Completed</span>
                  )}
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                    <Play className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CourseDetail;
