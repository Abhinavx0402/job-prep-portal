import React, { useState } from 'react';
import { 
  BookOpenCheck, 
  Cpu, 
  Database, 
  Wifi, 
  Server, 
  Code, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  CheckCircle2, 
  Copy, 
  Check
} from 'lucide-react';

export default function TechnicalPrep({ technicalNotes }) {
  const [selectedSubjectId, setSelectedSubjectId] = useState(technicalNotes[0]?.id);
  const [expandedTopicIdx, setExpandedTopicIdx] = useState(0);
  const [copiedCodeIdx, setCopiedCodeIdx] = useState(null);

  const selectedSubject = technicalNotes.find(s => s.id === selectedSubjectId) || technicalNotes[0];

  const copyCode = (code, idx) => {
    navigator.clipboard.writeText(code);
    setCopiedCodeIdx(idx);
    setTimeout(() => setCopiedCodeIdx(null), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 via-indigo-950/40 to-gray-900 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
          <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
          CS Core Fundamentals & System Design
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Computer Science <span className="text-gradient-purple">Technical Notes</span>
        </h2>
        <p className="text-sm text-gray-400 mt-2 max-w-2xl">
          High-yield technical notes for Operating Systems, DBMS, Computer Networks, System Design, and Object-Oriented Programming commonly asked in technical interview rounds.
        </p>

        {/* Subject Pills */}
        <div className="mt-6 pt-6 border-t border-gray-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {technicalNotes.map((subject) => {
            const isSelected = selectedSubjectId === subject.id;
            return (
              <button
                key={subject.id}
                onClick={() => {
                  setSelectedSubjectId(subject.id);
                  setExpandedTopicIdx(0);
                }}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-600/30'
                    : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
                }`}
              >
                {subject.subject}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Subject Content */}
      <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-6">
        <div className="flex items-center justify-between pb-4 border-b border-gray-800">
          <div>
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">Subject Deep-Dive</span>
            <h3 className="text-xl font-bold text-white mt-0.5">{selectedSubject.subject}</h3>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-bold border ${selectedSubject.tagColor}`}>
            {selectedSubject.topics.length} Key Topics
          </span>
        </div>

        {/* Topics Accordion List */}
        <div className="space-y-4">
          {selectedSubject.topics.map((topic, idx) => {
            const isExpanded = expandedTopicIdx === idx;

            return (
              <div 
                key={idx}
                className="glass-card rounded-xl border border-gray-800/90 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setExpandedTopicIdx(isExpanded ? null : idx)}
                  className="w-full p-4 bg-gray-900/80 hover:bg-gray-800/60 flex items-center justify-between text-left transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="h-6 w-6 rounded-full bg-indigo-500/20 text-indigo-400 font-bold text-xs flex items-center justify-center">
                      {idx + 1}
                    </span>
                    <h4 className="text-sm font-bold text-gray-100">{topic.title}</h4>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="h-4 w-4 text-gray-400" />
                  ) : (
                    <ChevronDown className="h-4 w-4 text-gray-400" />
                  )}
                </button>

                {isExpanded && (
                  <div className="p-5 border-t border-gray-800 space-y-4 text-xs text-gray-300 animate-fade-in">
                    <div>
                      <strong className="text-gray-400 block uppercase tracking-wider text-[10px] mb-1">Concept Overview</strong>
                      <p className="text-gray-200 leading-relaxed text-xs sm:text-sm">{topic.summary}</p>
                    </div>

                    {/* Key Takeaways */}
                    {topic.keyPoints && (
                      <div>
                        <strong className="text-gray-400 block uppercase tracking-wider text-[10px] mb-2">High-Yield Takeaways</strong>
                        <ul className="space-y-2">
                          {topic.keyPoints.map((point, pIdx) => (
                            <li key={pIdx} className="flex items-start gap-2 text-gray-300">
                              <CheckCircle2 className="h-3.5 w-3.5 text-indigo-400 shrink-0 mt-0.5" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Code or Diagram Snippet */}
                    {topic.codeSnippet && (
                      <div className="mt-3 rounded-xl bg-gray-950 border border-gray-800 p-4 font-mono text-xs text-gray-200 relative">
                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-800 text-gray-500 text-[10px]">
                          <span>Reference Implementation / Syntax</span>
                          <button
                            onClick={() => copyCode(topic.codeSnippet, idx)}
                            className="flex items-center gap-1 text-gray-400 hover:text-white"
                          >
                            {copiedCodeIdx === idx ? <Check className="h-3 w-3 text-emerald-400" /> : <Copy className="h-3 w-3" />}
                            <span>{copiedCodeIdx === idx ? 'Copied!' : 'Copy'}</span>
                          </button>
                        </div>
                        <pre className="whitespace-pre-wrap leading-relaxed">
                          <code>{topic.codeSnippet}</code>
                        </pre>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
