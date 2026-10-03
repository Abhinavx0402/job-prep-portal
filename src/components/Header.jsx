import React from 'react';
import { 
  Briefcase, 
  Code2, 
  Calculator, 
  BookOpenCheck, 
  Building2, 
  UserCheck, 
  Bookmark, 
  PlusCircle, 
  Sparkles,
  Search,
  FileText
} from 'lucide-react';

export default function Header({ 
  activeTab, 
  setActiveTab, 
  savedJobsCount, 
  solvedDsaCount, 
  totalDsaCount,
  onOpenPostJob 
}) {
  const navItems = [
    { id: 'jobs', label: 'Job Portal', icon: Briefcase, badge: 'Hiring Now' },
    { id: 'dsa', label: 'DSA Preparation', icon: Code2, badge: `${solvedDsaCount}/${totalDsaCount}` },
    { id: 'aptitude', label: 'Aptitude & Reasoning', icon: Calculator },
    { id: 'technical', label: 'CS Fundamentals', icon: BookOpenCheck },
    { id: 'company', label: 'Company Hiring Info', icon: Building2 },
    { id: 'hr', label: 'HR & Behavioral', icon: UserCheck },
    { id: 'notes', label: 'Revision Notes', icon: FileText }
  ];

  const dsaProgressPct = Math.round((solvedDsaCount / (totalDsaCount || 1)) * 100);

  return (
    <header className="sticky top-0 z-40 glass-panel border-b border-gray-800 backdrop-blur-md">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-indigo-900/60 via-purple-900/60 to-slate-900 text-xs px-4 py-1.5 flex items-center justify-between text-indigo-200 border-b border-indigo-500/20">
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-medium text-emerald-400">Placement Season Active:</span>
          <span>1,200+ Off-Campus & On-Campus Roles Updated for 2025/2026 Batch</span>
        </div>
        <div className="hidden md:flex items-center gap-4 text-gray-400">
          <span>DSA Track: <strong className="text-indigo-300">{dsaProgressPct}% Solved</strong></span>
          <span>Saved Jobs: <strong className="text-amber-300">{savedJobsCount}</strong></span>
        </div>
      </div>

      {/* Main Header Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
        <div className="flex items-center justify-between gap-4">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('jobs')}>
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-600 to-pink-500 p-0.5 shadow-lg shadow-indigo-500/20">
              <div className="h-full w-full bg-gray-950 rounded-[10px] flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-indigo-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-white m-0 leading-none">
                  HirePrep<span className="text-indigo-400">Hub</span>
                </h1>
                <span className="px-2 py-0.5 text-[10px] font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 rounded-full uppercase tracking-wider">Pro</span>
              </div>
              <p className="text-xs text-gray-400 m-0 mt-0.5">Jobs, DSA Sheets & Company Hiring Patterns</p>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setActiveTab('jobs')}
              className="relative p-2 rounded-lg bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 hover:text-white border border-gray-700/60 transition-colors flex items-center gap-1.5 text-xs font-medium"
              title="View Bookmarked Jobs"
            >
              <Bookmark className="h-4 w-4 text-amber-400" />
              <span className="hidden sm:inline">Saved Jobs</span>
              {savedJobsCount > 0 && (
                <span className="bg-amber-500 text-gray-950 text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  {savedJobsCount}
                </span>
              )}
            </button>

            <button
              onClick={onOpenPostJob}
              className="px-3.5 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-medium text-xs shadow-md shadow-indigo-500/20 transition-all flex items-center gap-1.5"
            >
              <PlusCircle className="h-4 w-4" />
              <span>Post a Job</span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto pt-4 pb-1 no-scrollbar border-t border-gray-800/60 mt-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600/90 to-purple-600/90 text-white shadow-lg shadow-indigo-600/25 border border-indigo-400/30'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800/60 border border-transparent'
                }`}
              >
                <Icon className={`h-4 w-4 ${isActive ? 'text-white' : 'text-gray-400'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-semibold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-gray-800 text-indigo-400 border border-indigo-500/20'
                  }`}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
