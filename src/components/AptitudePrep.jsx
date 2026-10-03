import React, { useState } from 'react';
import { 
  Calculator, 
  Brain, 
  BookOpen, 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  RotateCcw, 
  Zap, 
  Award,
  ChevronRight
} from 'lucide-react';

export default function AptitudePrep({ aptitudeData }) {
  const [activeCategory, setActiveCategory] = useState('quant'); // quant | logical | verbal
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

  // Quiz State
  const [userAnswers, setUserAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const categoryConfig = aptitudeData[activeCategory];
  const activeTopic = categoryConfig?.topics[activeTopicIndex] || categoryConfig?.topics[0];

  const handleSelectOption = (questionId, optionIndex) => {
    if (quizSubmitted) return;
    setUserAnswers(prev => ({ ...prev, [questionId]: optionIndex }));
  };

  const calculateScore = () => {
    if (!activeTopic) return 0;
    let score = 0;
    activeTopic.questions.forEach(q => {
      if (userAnswers[q.id] === q.correctAnswer) score++;
    });
    return score;
  };

  const resetQuiz = () => {
    setUserAnswers({});
    setQuizSubmitted(false);
  };

  return (
    <div className="space-y-6">
      {/* Aptitude Banner Header */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 via-blue-950/40 to-gray-900 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
          <Sparkles className="h-3.5 w-3.5 text-blue-400" />
          Aptitude & Speed Math Masterclass
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Aptitude & <span className="text-gradient-purple">Reasoning Hub</span>
        </h2>
        <p className="text-sm text-gray-400 mt-2 max-w-2xl">
          Clear campus placement written screening rounds (TCS NQT, Infosys Infytq, Accenture ASE) with topic formulas, shortcut tricks, and timed practice tests.
        </p>

        {/* Category Tabs */}
        <div className="mt-6 pt-6 border-t border-gray-800 flex items-center gap-3">
          <button
            onClick={() => {
              setActiveCategory('quant');
              setActiveTopicIndex(0);
              resetQuiz();
            }}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              activeCategory === 'quant'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30'
                : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
            }`}
          >
            <Calculator className="h-4 w-4" /> Quantitative Aptitude
          </button>

          <button
            onClick={() => {
              setActiveCategory('logical');
              setActiveTopicIndex(0);
              resetQuiz();
            }}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              activeCategory === 'logical'
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-600/30'
                : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
            }`}
          >
            <Brain className="h-4 w-4" /> Logical Reasoning
          </button>

          <button
            onClick={() => {
              setActiveCategory('verbal');
              setActiveTopicIndex(0);
              resetQuiz();
            }}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all ${
              activeCategory === 'verbal'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/30'
                : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
            }`}
          >
            <BookOpen className="h-4 w-4" /> Verbal Ability
          </button>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side: Topic Selector & Formulas */}
        <div className="space-y-6">
          {/* Subtopic Selector */}
          <div className="glass-panel p-5 rounded-2xl border border-gray-800 space-y-3">
            <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Select Topic Module</h3>
            <div className="space-y-1.5">
              {categoryConfig?.topics.map((topic, idx) => (
                <button
                  key={topic.id}
                  onClick={() => {
                    setActiveTopicIndex(idx);
                    resetQuiz();
                  }}
                  className={`w-full p-3 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition-all ${
                    activeTopicIndex === idx
                      ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                      : 'bg-gray-900/60 text-gray-400 hover:bg-gray-800 hover:text-gray-200 border border-transparent'
                  }`}
                >
                  <span>{topic.name}</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              ))}
            </div>
          </div>

          {/* Formulas & Trick Card */}
          {activeTopic && (
            <div className="glass-card p-5 rounded-2xl border border-gray-800 space-y-4">
              <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm">
                <Zap className="h-4 w-4 text-amber-400" />
                <span>Formula & Shortcut Cheatsheet</span>
              </div>

              {activeTopic.trick && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200 space-y-1">
                  <strong className="block font-bold text-amber-300">⚡ Pro Shortcut Tip:</strong>
                  <p>{activeTopic.trick}</p>
                </div>
              )}

              <div className="space-y-2">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block">Key Formulas</span>
                <ul className="space-y-1.5 font-mono text-xs text-indigo-200">
                  {activeTopic.formulas.map((f, i) => (
                    <li key={i} className="p-2 rounded bg-gray-900 border border-gray-800/80">
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Right Side: Interactive Practice Quiz */}
        <div className="lg:col-span-2 glass-panel p-6 rounded-2xl border border-gray-800 space-y-6">
          {activeTopic && (
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-gray-800">
                <div>
                  <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">{categoryConfig.title}</span>
                  <h3 className="text-xl font-bold text-white mt-0.5">{activeTopic.name} Quiz</h3>
                </div>

                {quizSubmitted && (
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                    <Award className="h-4 w-4 text-emerald-400" />
                    <span>Score: {calculateScore()} / {activeTopic.questions.length}</span>
                  </div>
                )}
              </div>

              {/* Questions List */}
              <div className="mt-6 space-y-8">
                {activeTopic.questions.map((q, qIndex) => {
                  const selectedOpt = userAnswers[q.id];
                  const isCorrect = selectedOpt === q.correctAnswer;

                  return (
                    <div key={q.id} className="p-5 rounded-2xl bg-gray-900/60 border border-gray-800/80 space-y-4">
                      <div className="flex items-start justify-between gap-3">
                        <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                          Q{qIndex + 1}
                        </span>
                        <p className="text-sm font-semibold text-gray-100 flex-1 leading-relaxed">
                          {q.question}
                        </p>
                      </div>

                      {/* Options */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                        {q.options.map((optionText, optIdx) => {
                          let buttonStyle = 'bg-gray-900 border-gray-800 text-gray-300 hover:border-indigo-500/50';

                          if (selectedOpt === optIdx) {
                            buttonStyle = 'bg-indigo-600/30 border-indigo-500 text-white font-bold';
                          }

                          if (quizSubmitted) {
                            if (optIdx === q.correctAnswer) {
                              buttonStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold';
                            } else if (selectedOpt === optIdx && !isCorrect) {
                              buttonStyle = 'bg-red-500/20 border-red-500 text-red-300 font-bold';
                            }
                          }

                          return (
                            <button
                              key={optIdx}
                              onClick={() => handleSelectOption(q.id, optIdx)}
                              disabled={quizSubmitted}
                              className={`p-3 rounded-xl border text-xs text-left transition-all flex items-center justify-between ${buttonStyle}`}
                            >
                              <span>{optionText}</span>
                              {quizSubmitted && optIdx === q.correctAnswer && (
                                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                              )}
                              {quizSubmitted && selectedOpt === optIdx && !isCorrect && (
                                <XCircle className="h-4 w-4 text-red-400 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {/* Explanation box after submission */}
                      {quizSubmitted && (
                        <div className="p-4 rounded-xl bg-gray-950 border border-gray-800 text-xs space-y-1.5 animate-fade-in">
                          <strong className="text-indigo-300 block flex items-center gap-1 font-bold">
                            <HelpCircle className="h-3.5 w-3.5 text-indigo-400" /> Step-by-Step Explanation:
                          </strong>
                          <p className="text-gray-300 leading-relaxed whitespace-pre-line">{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Quiz Submit Bar */}
              <div className="mt-8 pt-4 border-t border-gray-800 flex items-center justify-between">
                <button
                  onClick={resetQuiz}
                  className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-semibold flex items-center gap-1.5"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Reset Quiz
                </button>

                {!quizSubmitted ? (
                  <button
                    onClick={() => setQuizSubmitted(true)}
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/30"
                  >
                    Submit & Evaluate Answers
                  </button>
                ) : (
                  <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="h-4 w-4" /> Evaluated
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
