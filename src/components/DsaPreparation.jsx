import React, { useState, useMemo } from 'react';
import { 
  Code2, 
  CheckCircle2, 
  Clock, 
  Circle, 
  ExternalLink, 
  BookOpen, 
  Terminal, 
  Sparkles, 
  Play, 
  Copy, 
  Check, 
  X,
  Building2,
  ChevronRight,
  ListFilter
} from 'lucide-react';

export default function DsaPreparation({ 
  dsaSheets, 
  solvedProblemIds, 
  onToggleProblemStatus,
  onOpenPlayground 
}) {
  const [selectedTopicId, setSelectedTopicId] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [companyFilter, setCompanyFilter] = useState('All');

  // Solution Code Modal state
  const [viewingSolutionProblem, setViewingSolutionProblem] = useState(null);
  const [activeLang, setActiveLang] = useState('cpp');
  const [copied, setCopied] = useState(false);

  // Flatten all problems with topic metadata
  const allProblems = useMemo(() => {
    return dsaSheets.flatMap(sheet => 
      sheet.problems.map(prob => ({
        ...prob,
        topicName: sheet.topic,
        topicId: sheet.id
      }))
    );
  }, [dsaSheets]);

  // Companies list
  const companiesList = useMemo(() => {
    const set = new Set();
    allProblems.forEach(p => p.companies?.forEach(c => set.add(c)));
    return ['All', ...Array.from(set)];
  }, [allProblems]);

  // Filtered problems
  const filteredProblems = useMemo(() => {
    return allProblems.filter(prob => {
      const matchesTopic = selectedTopicId === 'all' || prob.topicId === selectedTopicId;
      const matchesDiff = selectedDifficulty === 'All' || prob.difficulty === selectedDifficulty;
      
      const isSolved = solvedProblemIds.includes(prob.id);
      const matchesStatus = 
        statusFilter === 'All' ||
        (statusFilter === 'Solved' && isSolved) ||
        (statusFilter === 'Unsolved' && !isSolved);

      const matchesCompany = companyFilter === 'All' || prob.companies?.includes(companyFilter);

      return matchesTopic && matchesDiff && matchesStatus && matchesCompany;
    });
  }, [allProblems, selectedTopicId, selectedDifficulty, statusFilter, companyFilter, solvedProblemIds]);

  const solvedCount = solvedProblemIds.length;
  const totalCount = allProblems.length;
  const progressPct = Math.round((solvedCount / (totalCount || 1)) * 100);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Top DSA Header Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 via-purple-950/40 to-gray-900 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-3">
              <Sparkles className="h-3.5 w-3.5 text-purple-400" />
              SDE Placement Roadmap 2026
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Topic-Wise <span className="text-gradient-purple">DSA Sheet</span>
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-2xl">
              Curated standard Data Structures & Algorithms problem sets asked in Google, Amazon, TCS Digital, and Microsoft coding interviews with C++, Java, and Python solutions.
            </p>
          </div>

          {/* Progress Card */}
          <div className="w-full lg:w-72 glass-card p-4 rounded-xl border border-purple-500/30 bg-purple-950/20 flex flex-col gap-2 shrink-0">
            <div className="flex items-center justify-between text-xs font-bold">
              <span className="text-gray-300">Overall Sheet Progress</span>
              <span className="text-purple-300">{solvedCount} / {totalCount} Solved</span>
            </div>
            <div className="w-full bg-gray-900 h-3 rounded-full overflow-hidden border border-purple-500/30">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-purple-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${progressPct}%` }}
              ></div>
            </div>
            <div className="flex justify-between items-center text-[11px] text-gray-400 mt-1">
              <span>Completion: <strong className="text-white">{progressPct}%</strong></span>
              <span className="text-emerald-400 font-semibold">Target: 100%</span>
            </div>
          </div>
        </div>

        {/* Topic Tabs */}
        <div className="mt-6 pt-6 border-t border-gray-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setSelectedTopicId('all')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedTopicId === 'all'
                ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
            }`}
          >
            All Topics ({allProblems.length})
          </button>
          {dsaSheets.map((sheet) => {
            const sheetSolved = sheet.problems.filter(p => solvedProblemIds.includes(p.id)).length;
            const isSelected = selectedTopicId === sheet.id;
            return (
              <button
                key={sheet.id}
                onClick={() => setSelectedTopicId(sheet.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap flex items-center gap-2 transition-all ${
                  isSelected
                    ? 'bg-purple-600 text-white shadow-md shadow-purple-600/30'
                    : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
                }`}
              >
                <span>{sheet.topic}</span>
                <span className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-gray-800 text-purple-400'
                }`}>
                  {sheetSolved}/{sheet.problems.length}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Filter Bar */}
      <div className="glass-panel p-4 rounded-xl border border-gray-800 flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-gray-400 font-medium flex items-center gap-1">
            <ListFilter className="h-3.5 w-3.5" /> Filters:
          </span>

          {/* Difficulty Dropdown */}
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="bg-gray-900 border border-gray-800 text-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-purple-500"
          >
            <option value="All">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>

          {/* Status Dropdown */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-gray-900 border border-gray-800 text-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-purple-500"
          >
            <option value="All">All Statuses</option>
            <option value="Solved">Solved</option>
            <option value="Unsolved">Unsolved</option>
          </select>

          {/* Company Dropdown */}
          <select
            value={companyFilter}
            onChange={(e) => setCompanyFilter(e.target.value)}
            className="bg-gray-900 border border-gray-800 text-gray-300 rounded-lg px-3 py-1.5 focus:outline-none focus:border-purple-500"
          >
            {companiesList.map(comp => (
              <option key={comp} value={comp}>
                {comp === 'All' ? 'All Target Companies' : comp}
              </option>
            ))}
          </select>
        </div>

        <span className="text-gray-400">
          Showing <strong className="text-white">{filteredProblems.length}</strong> problems
        </span>
      </div>

      {/* Problem List Table */}
      <div className="glass-panel rounded-2xl border border-gray-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-900/90 text-gray-400 text-xs uppercase font-semibold border-b border-gray-800">
                <th className="py-3.5 px-4 w-12 text-center">Status</th>
                <th className="py-3.5 px-4">Problem Title</th>
                <th className="py-3.5 px-4">Topic</th>
                <th className="py-3.5 px-4">Difficulty</th>
                <th className="py-3.5 px-4">Asked In Companies</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800/60 text-xs">
              {filteredProblems.map((prob) => {
                const isSolved = solvedProblemIds.includes(prob.id);

                return (
                  <tr 
                    key={prob.id} 
                    className="hover:bg-gray-800/40 transition-colors group"
                  >
                    {/* Status Toggle Button */}
                    <td className="py-3.5 px-4 text-center">
                      <button
                        onClick={() => onToggleProblemStatus(prob.id)}
                        className="p-1 rounded-full transition-transform hover:scale-110"
                        title={isSolved ? 'Mark as Unsolved' : 'Mark as Solved'}
                      >
                        {isSolved ? (
                          <CheckCircle2 className="h-5 w-5 text-emerald-400 fill-emerald-400/20" />
                        ) : (
                          <Circle className="h-5 w-5 text-gray-600 hover:text-gray-400" />
                        )}
                      </button>
                    </td>

                    {/* Problem Title & Info */}
                    <td className="py-3.5 px-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span 
                            onClick={() => onOpenPlayground(prob)}
                            className={`font-semibold cursor-pointer group-hover:text-purple-300 transition-colors ${
                              isSolved ? 'text-gray-400 line-through' : 'text-gray-100'
                            }`}
                          >
                            {prob.title}
                          </span>
                          {prob.articleUrl && (
                            <a
                              href={prob.articleUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-gray-500 hover:text-indigo-400"
                              title="Open External Problem Statement"
                            >
                              <ExternalLink className="h-3 w-3" />
                            </a>
                          )}
                        </div>
                        <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-1">{prob.description}</p>
                      </div>
                    </td>

                    {/* Topic Name */}
                    <td className="py-3.5 px-4 text-gray-400 font-medium">
                      {prob.topicName}
                    </td>

                    {/* Difficulty Badge */}
                    <td className="py-3.5 px-4">
                      <span className={`px-2.5 py-1 rounded-md text-[10px] font-bold ${
                        prob.difficulty === 'Easy'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : prob.difficulty === 'Medium'
                          ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                          : 'bg-red-500/10 text-red-400 border border-red-500/20'
                      }`}>
                        {prob.difficulty}
                      </span>
                    </td>

                    {/* Asked Companies */}
                    <td className="py-3.5 px-4">
                      <div className="flex flex-wrap gap-1">
                        {prob.companies?.map(comp => (
                          <span key={comp} className="px-1.5 py-0.5 rounded bg-gray-900 text-gray-400 border border-gray-800 text-[10px]">
                            {comp}
                          </span>
                        ))}
                      </div>
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* Solution Code Button */}
                        <button
                          onClick={() => setViewingSolutionProblem(prob)}
                          className="px-2.5 py-1.5 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-300 border border-gray-800 text-[11px] font-medium flex items-center gap-1"
                        >
                          <BookOpen className="h-3.5 w-3.5 text-purple-400" /> Solution
                        </button>

                        {/* Interactive Playground Button */}
                        <button
                          onClick={() => onOpenPlayground(prob)}
                          className="px-3 py-1.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-[11px] font-bold shadow-md shadow-purple-600/20 flex items-center gap-1"
                        >
                          <Play className="h-3 w-3 fill-white" /> Solve Code
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* SOLUTION CODE MODAL */}
      {viewingSolutionProblem && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-panel w-full max-w-3xl rounded-2xl border border-gray-800 overflow-hidden shadow-2xl animate-fade-in flex flex-col max-h-[85vh]">
            {/* Header */}
            <div className="p-5 border-b border-gray-800 bg-gray-900/90 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-purple-400 uppercase tracking-wider">{viewingSolutionProblem.topicName}</span>
                <h3 className="text-lg font-bold text-white mt-0.5">{viewingSolutionProblem.title} Solution</h3>
              </div>
              <button
                onClick={() => setViewingSolutionProblem(null)}
                className="p-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Language Selector & Copy */}
            <div className="px-5 py-3 bg-gray-950 border-b border-gray-800/80 flex items-center justify-between">
              <div className="flex items-center gap-2">
                {['cpp', 'java', 'python'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setActiveLang(lang)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono font-bold uppercase transition-all ${
                      activeLang === lang
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-900 text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    {lang === 'cpp' ? 'C++' : lang}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 text-xs text-gray-400 font-mono">
                <span>Time: <strong className="text-emerald-400">{viewingSolutionProblem.timeComplexity}</strong></span>
                <span>Space: <strong className="text-indigo-400">{viewingSolutionProblem.spaceComplexity}</strong></span>
                <button
                  onClick={() => copyToClipboard(viewingSolutionProblem.solutionCode[activeLang])}
                  className="px-2.5 py-1 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-200 flex items-center gap-1 text-xs"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Code Body */}
            <div className="p-5 overflow-y-auto bg-gray-950 font-mono text-xs text-gray-200 flex-1">
              <pre className="whitespace-pre-wrap leading-relaxed">
                <code>{viewingSolutionProblem.solutionCode[activeLang]}</code>
              </pre>
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-gray-800 bg-gray-900/90 flex items-center justify-between">
              <span className="text-xs text-gray-400">
                Test your solution live in the interactive code playground!
              </span>
              <button
                onClick={() => {
                  const p = viewingSolutionProblem;
                  setViewingSolutionProblem(null);
                  onOpenPlayground(p);
                }}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold shadow-md shadow-purple-600/20 flex items-center gap-1.5"
              >
                <Terminal className="h-4 w-4" /> Launch Playground
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
