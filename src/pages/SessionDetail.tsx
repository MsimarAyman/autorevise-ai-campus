
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Brain, Map, MessageSquare, Clock, BookOpen } from 'lucide-react';
import { coursesData, mockAIData } from '../data/coursesData';

type ContentType = 'summary' | 'quiz' | 'mindmap' | 'chat';

const SessionDetail: React.FC = () => {
  const { courseId, sessionId } = useParams<{ courseId: string; sessionId: string }>();
  const [activeContent, setActiveContent] = useState<ContentType | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const course = coursesData.find(c => c.id === courseId);
  const session = course?.sessions.find(s => s.id === sessionId);

  if (!course || !session) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl text-white">Session not found</h1>
        <Link to="/" className="text-purple-400 hover:text-purple-300 mt-4 inline-block">
          Back to courses
        </Link>
      </div>
    );
  }

  const handleContentSelect = (type: ContentType) => {
    setIsLoading(true);
    setActiveContent(type);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="glass-card rounded-2xl p-8 text-center">
          <div className="animate-spin w-8 h-8 border-4 border-purple-500 border-t-transparent rounded-full mx-auto mb-4"></div>
          <p className="text-purple-300">AI is processing your request...</p>
        </div>
      );
    }

    switch (activeContent) {
      case 'summary':
        const summaryData = mockAIData.summary[sessionId as keyof typeof mockAIData.summary];
        return summaryData ? (
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">📝 Summary</h3>
            <div className="prose prose-purple max-w-none">
              <div className="text-gray-300 whitespace-pre-line leading-relaxed">
                {summaryData.content}
              </div>
            </div>
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-8 text-center">
            <p className="text-gray-400">Summary content not available for this session.</p>
          </div>
        );

      case 'quiz':
        const quizData = mockAIData.quiz[sessionId as keyof typeof mockAIData.quiz];
        return quizData ? (
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">🧠 Quiz</h3>
            <div className="space-y-6">
              {quizData.questions.map((question, index) => (
                <div key={question.id} className="border border-purple-500/20 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    {index + 1}. {question.question}
                  </h4>
                  <div className="space-y-2">
                    {question.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        className={`w-full text-left p-3 rounded-lg transition-colors ${
                          optionIndex === question.correct
                            ? 'bg-green-500/20 border border-green-500/40 text-green-300'
                            : 'bg-gray-700/50 hover:bg-gray-700 text-gray-300'
                        }`}
                      >
                        {String.fromCharCode(65 + optionIndex)}. {option}
                      </button>
                    ))}
                  </div>
                  <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                    <p className="text-blue-300 text-sm">
                      <strong>Explanation:</strong> {question.explanation}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-8 text-center">
            <p className="text-gray-400">Quiz content not available for this session.</p>
          </div>
        );

      case 'mindmap':
        const mindmapData = mockAIData.mindmap[sessionId as keyof typeof mockAIData.mindmap];
        return mindmapData ? (
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">🗺️ Mind Map</h3>
            <div className="text-gray-300">
              <h4 className="text-xl font-semibold mb-4">{mindmapData.title}</h4>
              <div className="space-y-4">
                {mindmapData.nodes.map((node, index) => (
                  <div key={index} className="border-l-4 border-purple-500 pl-4">
                    <h5 className="font-semibold text-purple-300 mb-2">{node.title}</h5>
                    {node.children && (
                      <div className="ml-4 space-y-2">
                        {node.children.map((child, childIndex) => (
                          <div key={childIndex} className="border-l-2 border-purple-300/50 pl-3">
                            <h6 className="font-medium text-white mb-1">{child.title}</h6>
                            {child.children && (
                              <div className="ml-3 space-y-1">
                                {child.children.map((grandchild, grandchildIndex) => (
                                  <p key={grandchildIndex} className="text-gray-400 text-sm">
                                    • {grandchild.title}
                                  </p>
                                ))}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="glass-card rounded-2xl p-8 text-center">
            <p className="text-gray-400">Mind map content not available for this session.</p>
          </div>
        );

      case 'chat':
        return (
          <div className="glass-card rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">💬 AI Assistant</h3>
            <div className="space-y-4">
              <div className="bg-gray-700/50 rounded-lg p-4">
                <p className="text-purple-300 font-medium">AI Assistant</p>
                <p className="text-gray-300 mt-1">
                  Hello! I'm your learning assistant. Ask me anything about {session.title} or any concepts you'd like to understand better.
                </p>
              </div>
              
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Ask a question about this session..."
                  className="flex-1 bg-gray-700/50 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors">
                  Send
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const contentOptions = [
    {
      type: 'summary' as ContentType,
      icon: FileText,
      title: 'SUMMARIZE',
      description: 'Extract key concepts and main points',
      color: 'bg-blue-500/20 hover:bg-blue-500/30 border-blue-500/30'
    },
    {
      type: 'quiz' as ContentType,
      icon: Brain,
      title: 'QUIZ ME',
      description: 'Generate interactive quizzes',
      color: 'bg-green-500/20 hover:bg-green-500/30 border-green-500/30'
    },
    {
      type: 'mindmap' as ContentType,
      icon: Map,
      title: 'MIND MAP',
      description: 'Create visual knowledge maps',
      color: 'bg-purple-500/20 hover:bg-purple-500/30 border-purple-500/30'
    }
  ];

  return (
    <div className="animate-fade-in">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-purple-400 mb-6">
        <Link to="/informatique" className="hover:text-purple-300 transition-colors">Courses</Link>
        <span className="text-gray-500">/</span>
        <Link to={`/informatique/course/${courseId}`} className="hover:text-purple-300 transition-colors">
          {course.title}
        </Link>
        <span className="text-gray-500">/</span>
        <span className="text-gray-300">{session.title}</span>
      </div>

      {/* Session Header */}
      <div className="glass-card rounded-2xl p-8 mb-8">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-bold gradient-text">{session.title}</h1>
            <div className="flex items-center gap-4 text-gray-400 mt-2">
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {session.duration}
              </span>
              <span className="text-sm">Part of {course.title}</span>
            </div>
          </div>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">{session.description}</p>
      </div>

      {/* AI Content Generator Options */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-6">AI Content Generator Hub</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {contentOptions.map((option) => {
            const Icon = option.icon;
            return (
              <button
                key={option.type}
                onClick={() => handleContentSelect(option.type)}
                className={`${option.color} border rounded-2xl p-6 text-left transition-all duration-300 hover-glow group`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-8 h-8 text-white" />
                  <h3 className="text-xl font-bold text-white">{option.title}</h3>
                </div>
                <p className="text-gray-300">{option.description}</p>
              </button>
            );
          })}
        </div>

        {/* Chat Option */}
        <button
          onClick={() => handleContentSelect('chat')}
          className="w-full bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/30 rounded-2xl p-6 text-left transition-all duration-300 hover-glow"
        >
          <div className="flex items-center gap-3 mb-3">
            <MessageSquare className="w-8 h-8 text-white" />
            <h3 className="text-xl font-bold text-white">AI CHATBOT</h3>
          </div>
          <p className="text-gray-300">Ask questions and get personalized help</p>
        </button>
      </div>

      {/* Generated Content */}
      {activeContent && (
        <div className="mb-8">
          {renderContent()}
        </div>
      )}
    </div>
  );
};

export default SessionDetail;
