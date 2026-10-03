import React, { useState } from 'react';
import { 
  Building2, 
  Sparkles, 
  Award, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  BookOpen, 
  UserCheck, 
  AlertCircle,
  ChevronRight
} from 'lucide-react';

export default function CompanyPrep({ companiesData }) {
  const [selectedCompanyId, setSelectedCompanyId] = useState(companiesData[0]?.id);

  const selectedCompany = companiesData.find(c => c.id === selectedCompanyId) || companiesData[0];

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 via-emerald-950/40 to-gray-900 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-3">
          <Sparkles className="h-3.5 w-3.5 text-emerald-400" />
          Company Specific Hiring Insights & Blueprints
        </span>
        <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Company <span className="text-gradient-emerald">Hiring Process & Exam Patterns</span>
        </h2>
        <p className="text-sm text-gray-400 mt-2 max-w-2xl">
          Get complete insights on exam patterns, test duration, marking schemes, section-wise syllabus, eligibility criteria, and candidate interview experiences for top tech recruiters.
        </p>

        {/* Company Pills */}
        <div className="mt-6 pt-6 border-t border-gray-800 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {companiesData.map((comp) => {
            const isSelected = selectedCompanyId === comp.id;
            return (
              <button
                key={comp.id}
                onClick={() => setSelectedCompanyId(comp.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-2 transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-600/30'
                    : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
                }`}
              >
                <span>{comp.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Deep-Dive Company Dashboard */}
      {selectedCompany && (
        <div className="space-y-6 animate-fade-in">
          {/* Header Card */}
          <div className="glass-panel p-6 rounded-2xl border border-gray-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className={`h-16 w-16 rounded-2xl ${selectedCompany.logoBg} flex items-center justify-center font-extrabold text-white text-2xl shadow-xl`}>
                {selectedCompany.initials}
              </div>
              <div>
                <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                  {selectedCompany.tier}
                </span>
                <h3 className="text-2xl font-bold text-white mt-1">{selectedCompany.name}</h3>
              </div>
            </div>

            {/* Roles offered pills */}
            <div className="flex flex-wrap gap-3">
              {selectedCompany.rolesOffered.map((role, rIdx) => (
                <div key={rIdx} className="p-3 rounded-xl bg-gray-900/90 border border-gray-800 text-xs">
                  <span className="text-gray-400 block font-medium">{role.title}</span>
                  <span className="font-bold text-emerald-400">{role.ctc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Grid Layout: Eligibility & Exam Pattern */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Eligibility Criteria */}
            <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-base border-b border-gray-800 pb-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                <span>Eligibility & Criteria</span>
              </div>

              <div className="space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-gray-900/80 border border-gray-800 flex justify-between items-center">
                  <span className="text-gray-400">Eligible Degrees</span>
                  <span className="font-bold text-gray-200 text-right">{selectedCompany.eligibility.degree}</span>
                </div>

                <div className="p-3 rounded-xl bg-gray-900/80 border border-gray-800 flex justify-between items-center">
                  <span className="text-gray-400">Min Percentage / CGPA</span>
                  <span className="font-bold text-emerald-400">{selectedCompany.eligibility.minPercentage}</span>
                </div>

                <div className="p-3 rounded-xl bg-gray-900/80 border border-gray-800 flex justify-between items-center">
                  <span className="text-gray-400">Active Backlogs Policy</span>
                  <span className="font-bold text-amber-400">{selectedCompany.eligibility.backlogs}</span>
                </div>

                <div className="p-3 rounded-xl bg-gray-900/80 border border-gray-800 flex justify-between items-center">
                  <span className="text-gray-400">Academic Gap Allowed</span>
                  <span className="font-bold text-indigo-400">{selectedCompany.eligibility.gapAllowed}</span>
                </div>
              </div>
            </div>

            {/* Hiring Rounds */}
            <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-4">
              <div className="flex items-center gap-2 text-white font-bold text-base border-b border-gray-800 pb-3">
                <UserCheck className="h-5 w-5 text-indigo-400" />
                <span>Hiring Process Pipeline</span>
              </div>

              <div className="space-y-3">
                {selectedCompany.hiringRounds.map((round, rdIdx) => (
                  <div key={rdIdx} className="p-3.5 rounded-xl bg-gray-900/80 border border-gray-800 flex items-center gap-3 text-xs">
                    <span className="h-7 w-7 rounded-full bg-indigo-600/30 text-indigo-300 font-bold flex items-center justify-center shrink-0">
                      {rdIdx + 1}
                    </span>
                    <span className="font-semibold text-gray-200">{round}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Exam Pattern Table */}
          <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-800 pb-3">
              <div className="flex items-center gap-2 text-white font-bold text-base">
                <Clock className="h-5 w-5 text-purple-400" />
                <span>Written Screening Test Pattern</span>
              </div>
              <span className="text-xs font-bold text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">
                Total Time: {selectedCompany.examPattern.totalDuration}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-gray-900/90 text-gray-400 uppercase font-semibold border-b border-gray-800">
                    <th className="p-3">Test Section</th>
                    <th className="p-3">Questions</th>
                    <th className="p-3">Time Limit</th>
                    <th className="p-3">Difficulty</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800/60">
                  {selectedCompany.examPattern.sections.map((sec, idx) => (
                    <tr key={idx} className="hover:bg-gray-800/30">
                      <td className="p-3 font-semibold text-gray-200">{sec.section}</td>
                      <td className="p-3 text-indigo-300 font-bold">{sec.questions} Qs</td>
                      <td className="p-3 text-gray-400">{sec.time}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded bg-gray-900 text-emerald-400 font-bold border border-gray-800">
                          {sec.difficulty}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section-wise Syllabus */}
          <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-base border-b border-gray-800 pb-3">
              <BookOpen className="h-5 w-5 text-amber-400" />
              <span>Recommended Syllabus & Topics</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {selectedCompany.syllabus.map((syl, sIdx) => (
                <div key={sIdx} className="p-4 rounded-xl bg-gray-900/80 border border-gray-800 text-xs text-gray-300 space-y-1">
                  <span className="font-bold text-amber-300 block">Section Breakdown {sIdx + 1}</span>
                  <p className="leading-relaxed">{syl}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Candidate Experiences */}
          <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-4">
            <div className="flex items-center gap-2 text-white font-bold text-base border-b border-gray-800 pb-3">
              <UserCheck className="h-5 w-5 text-purple-400" />
              <span>Real Candidate Interview Experiences</span>
            </div>

            <div className="space-y-4">
              {selectedCompany.interviewExperiences.map((exp, eIdx) => (
                <div key={eIdx} className="p-5 rounded-xl bg-gray-900/80 border border-gray-800 space-y-2 text-xs">
                  <div className="flex items-center justify-between">
                    <div>
                      <strong className="text-sm font-bold text-white">{exp.candidate}</strong>
                      <span className="text-gray-400 block text-[11px]">{exp.role}</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 font-bold border border-emerald-500/20">
                      {exp.result}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed pt-2 border-t border-gray-800/80">{exp.review}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
