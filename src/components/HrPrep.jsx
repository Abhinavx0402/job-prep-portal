import React, { useState } from 'react';
import { 
  UserCheck, 
  Sparkles, 
  Star, 
  MessageSquare, 
  Lightbulb, 
  CheckCircle2, 
  Send, 
  Bot, 
  Award,
  BookOpen
} from 'lucide-react';

export default function HrPrep({ hrPrepData }) {
  const [selectedQuestionIdx, setSelectedQuestionIdx] = useState(0);

  // Interactive Simulator state
  const [userResponseText, setUserResponseText] = useState('');
  const [feedbackResult, setFeedbackResult] = useState(null);

  const selectedQuestion = hrPrepData.questions[selectedQuestionIdx];

  const handleSimulateFeedback = (e) => {
    e.preventDefault();
    if (!userResponseText.trim()) return;

    // Simulate AI feedback based on STAR method indicators
    const hasSituation = /situation|when|during|project|college|team|work|faced/i.test(userResponseText);
    const hasAction = /i built|i created|i resolved|i communicated|i implemented|i decided/i.test(userResponseText);
    const hasResult = /result|outcome|achieved|improved|reduced|increased|percent|succes/i.test(userResponseText);

    let score = 70;
    if (hasSituation) score += 10;
    if (hasAction) score += 10;
    if (hasResult) score += 10;

    setFeedbackResult({
      score: Math.min(score, 98),
      alignment: score > 85 ? 'Excellent STAR Alignment' : 'Good Draft - Needs Quantifiable Result',
      strengths: [
        hasSituation ? 'Clear situational context provided.' : 'Context could be slightly more specific.',
        hasAction ? 'Strong personal ownership verbs ("I built", "I resolved").' : 'Focus more on YOUR personal actions rather than team actions.',
        hasResult ? 'Included quantifiable metrics/impact!' : 'Add measurable outcome figures (e.g. % improvement).'
      ],
      tip: 'Remember to keep your final answer under 90 seconds in the actual interview!'
    });
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 via-pink-950/40 to-gray-900 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-pink-500/10 text-pink-400 border border-pink-500/20 mb-3">
          <Sparkles className="h-3.5 w-3.5 text-pink-400" />
          HR & Behavioral Interview Toolkit
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Master the <span className="text-gradient-purple">STAR Method & HR Rounds</span>
        </h2>
        <p className="text-sm text-gray-400 mt-2 max-w-2xl">
          Learn how to structure behavioral responses for Amazon Leadership Principles, TCS HR, and Google Googliness rounds with sample answers and simulated AI answer evaluator.
        </p>
      </div>

      {/* STAR Method Breakdown Cards */}
      <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-4">
        <div className="flex items-center gap-2 text-white font-bold text-lg border-b border-gray-800 pb-3">
          <Star className="h-5 w-5 text-amber-400 fill-amber-400" />
          <span>The STAR Answer Framework</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {hrPrepData.starMethod.steps.map((step) => (
            <div key={step.letter} className="p-4 rounded-xl bg-gray-900/80 border border-gray-800 space-y-2">
              <div className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-lg bg-indigo-600 text-white font-black text-base flex items-center justify-center shadow-md">
                  {step.letter}
                </span>
                <span className="font-bold text-gray-100 text-sm">{step.title}</span>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">{step.description}</p>
              <div className="p-2.5 rounded bg-gray-950 border border-gray-800 text-[11px] text-indigo-300 font-mono">
                "{step.example}"
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Grid: Common HR Questions & Interactive Practice */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Question Selector list */}
        <div className="glass-panel p-5 rounded-2xl border border-gray-800 space-y-3">
          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider">Top HR Questions</h3>
          <div className="space-y-2">
            {hrPrepData.questions.map((q, idx) => (
              <button
                key={q.id}
                onClick={() => {
                  setSelectedQuestionIdx(idx);
                  setUserResponseText('');
                  setFeedbackResult(null);
                }}
                className={`w-full p-3.5 rounded-xl text-left text-xs font-semibold transition-all space-y-1 ${
                  selectedQuestionIdx === idx
                    ? 'bg-gradient-to-r from-indigo-600/30 to-purple-600/30 border border-indigo-500/40 text-white'
                    : 'bg-gray-900/60 text-gray-400 hover:bg-gray-800 hover:text-gray-200 border border-transparent'
                }`}
              >
                <span className="text-[10px] text-indigo-400 block font-bold uppercase">{q.category}</span>
                <p className="line-clamp-2">{q.question}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Question Details & Answer Evaluator */}
        <div className="lg:col-span-2 space-y-6">
          {selectedQuestion && (
            <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-6">
              <div>
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">HR Question Guide</span>
                <h3 className="text-xl font-bold text-white mt-1">{selectedQuestion.question}</h3>
              </div>

              {/* Expert Tips */}
              <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-xs text-indigo-200 space-y-2">
                <strong className="flex items-center gap-1.5 font-bold text-indigo-300">
                  <Lightbulb className="h-4 w-4 text-amber-400" /> Key Advice & Strategy:
                </strong>
                <ul className="space-y-1 pl-4 list-disc text-gray-300">
                  {selectedQuestion.tips.map((tip, tIdx) => (
                    <li key={tIdx}>{tip}</li>
                  ))}
                </ul>
              </div>

              {/* Sample Model Answer */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block">Top-Rated Model Response</span>
                <div className="p-4 rounded-xl bg-gray-950 border border-gray-800 text-xs text-gray-200 leading-relaxed italic">
                  "{selectedQuestion.sampleAnswer}"
                </div>
              </div>

              {/* Interactive Answer Simulator */}
              <div className="pt-4 border-t border-gray-800 space-y-4">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Bot className="h-4 w-4 text-purple-400" />
                  <span>Simulate Your Answer Evaluation</span>
                </div>

                <form onSubmit={handleSimulateFeedback} className="space-y-3">
                  <textarea
                    rows={4}
                    placeholder="Type or paste your answer draft here using the STAR framework..."
                    value={userResponseText}
                    onChange={(e) => setUserResponseText(e.target.value)}
                    className="w-full p-3.5 rounded-xl bg-gray-900 border border-gray-800 text-white text-xs placeholder-gray-500 focus:outline-none focus:border-indigo-500"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold shadow-lg shadow-indigo-600/30 flex items-center gap-1.5"
                  >
                    <Send className="h-3.5 w-3.5" /> Evaluate My Answer
                  </button>
                </form>

                {/* Feedback Box */}
                {feedbackResult && (
                  <div className="p-5 rounded-2xl bg-gray-950 border border-indigo-500/30 space-y-3 animate-fade-in text-xs">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-indigo-300 text-sm flex items-center gap-1.5">
                        <Award className="h-4 w-4 text-amber-400" /> {feedbackResult.alignment}
                      </span>
                      <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 font-bold">
                        Score: {feedbackResult.score}/100
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      {feedbackResult.strengths.map((str, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{str}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-gray-400 italic pt-2 border-t border-gray-800">{feedbackResult.tip}</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
