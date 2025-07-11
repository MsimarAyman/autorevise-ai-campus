import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, FileText, Brain, MessageSquare, CheckCircle, Clock } from 'lucide-react';
import { baccalaureatCoursesData } from '../data/baccalaureatData';

const BaccalaureatSessionDetail: React.FC = () => {
  const { courseId, sessionId } = useParams<{ courseId: string; sessionId: string }>();
  const [activeTab, setActiveTab] = useState<'summary' | 'quiz' | 'mindmap' | 'chat'>('summary');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{type: 'user' | 'ai', message: string}>>([]);

  const course = baccalaureatCoursesData.find(c => c.id === courseId);
  const session = course?.sessions.find(s => s.id === sessionId);

  if (!course || !session) {
    return (
      <div className="container mx-auto px-6 py-8">
        <div className="glass-card p-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Séance non trouvée</h2>
          <Link to="/baccalaureat" className="text-primary hover:underline">
            Retour aux cours
          </Link>
        </div>
      </div>
    );
  }

  const handleAnswerSelect = (questionIndex: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    session.quiz.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return (correct / session.quiz.length) * 100;
  };

  const handleSendMessage = () => {
    if (chatMessage.trim()) {
      setChatHistory(prev => [...prev, { type: 'user', message: chatMessage }]);
      // Simulate AI response
      setTimeout(() => {
        setChatHistory(prev => [...prev, { 
          type: 'ai', 
          message: `Je comprends votre question sur "${session.title}". Pouvez-vous être plus spécifique sur quel aspect vous souhaitez approfondir ?`
        }]);
      }, 1000);
      setChatMessage('');
    }
  };

  const renderMindMap = (nodes: any[], level = 0) => {
    return (
      <div className={`ml-${level * 4}`}>
        {nodes.map((node, index) => (
          <div key={index} className="mb-4">
            <div className={`p-3 rounded-lg border ${
              level === 0 ? 'bg-primary/10 border-primary text-primary font-semibold' :
              level === 1 ? 'bg-secondary/10 border-secondary text-secondary' :
              'bg-muted border-border text-muted-foreground'
            }`}>
              {node.title}
            </div>
            {node.children && renderMindMap(node.children, level + 1)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="container mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center mb-8">
        <Link to={`/baccalaureat/course/${courseId}`} className="mr-4 p-2 rounded-lg hover:bg-muted transition-colors">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div className="flex-1">
          <div className="flex items-center mb-2">
            <span className="text-sm text-muted-foreground mr-2">{course.title}</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-sm text-muted-foreground ml-2">{session.title}</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground">{session.title}</h1>
          <div className="flex items-center mt-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-1" />
            <span>{session.duration}</span>
            {session.completed && (
              <>
                <CheckCircle className="w-4 h-4 ml-4 mr-1 text-green-500" />
                <span className="text-green-500">Complétée</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="glass-card p-2 mb-8">
        <div className="grid grid-cols-4 gap-2">
          <button
            onClick={() => setActiveTab('summary')}
            className={`flex items-center justify-center py-3 px-4 rounded-lg transition-all duration-200 ${
              activeTab === 'summary' 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'hover:bg-muted text-muted-foreground'
            }`}
          >
            <FileText className="w-5 h-5 mr-2" />
            <span className="font-medium">Résumé</span>
          </button>
          
          <button
            onClick={() => setActiveTab('quiz')}
            className={`flex items-center justify-center py-3 px-4 rounded-lg transition-all duration-200 ${
              activeTab === 'quiz' 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'hover:bg-muted text-muted-foreground'
            }`}
          >
            <Brain className="w-5 h-5 mr-2" />
            <span className="font-medium">Quiz</span>
          </button>
          
          <button
            onClick={() => setActiveTab('mindmap')}
            className={`flex items-center justify-center py-3 px-4 rounded-lg transition-all duration-200 ${
              activeTab === 'mindmap' 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'hover:bg-muted text-muted-foreground'
            }`}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7l-7 7-7-7m14 18l-7-7-7 7" />
            </svg>
            <span className="font-medium">Mind Map</span>
          </button>
          
          <button
            onClick={() => setActiveTab('chat')}
            className={`flex items-center justify-center py-3 px-4 rounded-lg transition-all duration-200 ${
              activeTab === 'chat' 
                ? 'bg-primary text-primary-foreground shadow-lg' 
                : 'hover:bg-muted text-muted-foreground'
            }`}
          >
            <MessageSquare className="w-5 h-5 mr-2" />
            <span className="font-medium">Chat</span>
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="glass-card p-8">
        {activeTab === 'summary' && (
          <div className="prose prose-invert max-w-none">
            <div className="whitespace-pre-line text-foreground leading-relaxed">
              {session.summary}
            </div>
          </div>
        )}

        {activeTab === 'quiz' && (
          <div>
            {session.quiz.length > 0 ? (
              <div>
                {!showResults ? (
                  <div>
                    <div className="mb-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-foreground">
                          Question {currentQuestionIndex + 1} sur {session.quiz.length}
                        </h3>
                        <div className="text-sm text-muted-foreground">
                          {Math.round(((currentQuestionIndex + 1) / session.quiz.length) * 100)}% complété
                        </div>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 mb-6">
                        <div 
                          className="bg-gradient-to-r from-primary to-purple-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${((currentQuestionIndex + 1) / session.quiz.length) * 100}%` }}
                        />
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-foreground mb-4">
                        {session.quiz[currentQuestionIndex].question}
                      </h4>
                      <div className="space-y-3">
                        {session.quiz[currentQuestionIndex].options.map((option, optionIndex) => (
                          <label
                            key={optionIndex}
                            className="flex items-center p-4 rounded-lg border border-border hover:border-primary cursor-pointer transition-colors"
                          >
                            <input
                              type="radio"
                              name={`question-${currentQuestionIndex}`}
                              value={optionIndex}
                              checked={selectedAnswers[currentQuestionIndex] === optionIndex}
                              onChange={() => handleAnswerSelect(currentQuestionIndex, optionIndex)}
                              className="mr-3"
                            />
                            <span className="text-foreground">{option}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={() => setCurrentQuestionIndex(Math.max(0, currentQuestionIndex - 1))}
                        disabled={currentQuestionIndex === 0}
                        className="px-4 py-2 rounded-lg border border-border text-muted-foreground hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Précédent
                      </button>
                      
                      {currentQuestionIndex === session.quiz.length - 1 ? (
                        <button
                          onClick={() => setShowResults(true)}
                          className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          Voir les résultats
                        </button>
                      ) : (
                        <button
                          onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                          className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                        >
                          Suivant
                        </button>
                      )}
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-6">Résultats du Quiz</h3>
                    <div className="text-center mb-8">
                      <div className="text-4xl font-bold text-primary mb-2">
                        {calculateScore().toFixed(0)}%
                      </div>
                      <p className="text-muted-foreground">
                        {Object.keys(selectedAnswers).filter(key => 
                          selectedAnswers[parseInt(key)] === session.quiz[parseInt(key)]?.correctAnswer
                        ).length} sur {session.quiz.length} bonnes réponses
                      </p>
                    </div>

                    <div className="space-y-6">
                      {session.quiz.map((question, index) => (
                        <div key={index} className="border border-border rounded-lg p-4">
                          <h4 className="font-semibold text-foreground mb-3">{question.question}</h4>
                          <div className="space-y-2">
                            {question.options.map((option, optionIndex) => (
                              <div
                                key={optionIndex}
                                className={`p-2 rounded ${
                                  optionIndex === question.correctAnswer
                                    ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                                    : selectedAnswers[index] === optionIndex && optionIndex !== question.correctAnswer
                                    ? 'bg-red-500/20 text-red-400 border border-red-500/50'
                                    : 'bg-muted text-muted-foreground'
                                }`}
                              >
                                {option}
                                {optionIndex === question.correctAnswer && ' ✓'}
                                {selectedAnswers[index] === optionIndex && optionIndex !== question.correctAnswer && ' ✗'}
                              </div>
                            ))}
                          </div>
                          <p className="mt-3 text-sm text-muted-foreground italic">
                            {question.explanation}
                          </p>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={() => {
                        setShowResults(false);
                        setCurrentQuestionIndex(0);
                        setSelectedAnswers({});
                      }}
                      className="mt-6 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Recommencer le quiz
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                <Brain className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Aucun quiz disponible pour cette séance</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'mindmap' && (
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">{session.mindmap.title}</h3>
            {session.mindmap.nodes.length > 0 ? (
              <div className="space-y-4">
                {renderMindMap(session.mindmap.nodes)}
              </div>
            ) : (
              <div className="text-center text-muted-foreground">
                <svg className="w-12 h-12 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7l-7 7-7-7m14 18l-7-7-7 7" />
                </svg>
                <p>Aucune mind map disponible pour cette séance</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'chat' && (
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Assistant IA</h3>
            <div className="border border-border rounded-lg">
              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {chatHistory.length === 0 ? (
                  <div className="text-center text-muted-foreground">
                    <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Posez vos questions sur cette séance !</p>
                  </div>
                ) : (
                  chatHistory.map((chat, index) => (
                    <div
                      key={index}
                      className={`flex ${chat.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-sm px-4 py-2 rounded-lg ${
                          chat.type === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted text-foreground'
                        }`}
                      >
                        {chat.message}
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="border-t border-border p-4">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Tapez votre question..."
                    className="flex-1 px-3 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Envoyer
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BaccalaureatSessionDetail;