import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import JobPortal from './components/JobPortal';
import DsaPreparation from './components/DsaPreparation';
import AptitudePrep from './components/AptitudePrep';
import TechnicalPrep from './components/TechnicalPrep';
import CompanyPrep from './components/CompanyPrep';
import HrPrep from './components/HrPrep';
import NotesSection from './components/NotesSection';
import CodePlaygroundModal from './components/CodePlaygroundModal';
import PostJobModal from './components/PostJobModal';

import { INITIAL_JOBS } from './data/jobsData';
import { DSA_SHEETS } from './data/dsaSheetsData';
import { APTITUDE_DATA } from './data/aptitudeData';
import { TECHNICAL_NOTES } from './data/technicalNotesData';
import { COMPANIES_DATA } from './data/companiesData';
import { HR_PREP_DATA } from './data/hrPrepData';

export default function App() {
  const [activeTab, setActiveTab] = useState('jobs'); // jobs | dsa | aptitude | technical | company | hr | notes

  // App Level State
  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem('hireprep_jobs');
    return saved ? JSON.parse(saved) : INITIAL_JOBS;
  });

  const [savedJobIds, setSavedJobIds] = useState(() => {
    const saved = localStorage.getItem('hireprep_saved_jobs');
    return saved ? JSON.parse(saved) : ['job-1', 'job-4'];
  });

  const [appliedJobIds, setAppliedJobIds] = useState(() => {
    const saved = localStorage.getItem('hireprep_applied_jobs');
    return saved ? JSON.parse(saved) : ['job-3'];
  });

  const [solvedProblemIds, setSolvedProblemIds] = useState(() => {
    const saved = localStorage.getItem('hireprep_solved_dsa');
    return saved ? JSON.parse(saved) : ['dsa-1', 'dsa-4'];
  });

  // Playground & Post Job Modals
  const [activePlaygroundProblem, setActivePlaygroundProblem] = useState(null);
  const [showPostJobModal, setShowPostJobModal] = useState(false);

  // Sync state to local storage
  useEffect(() => {
    localStorage.setItem('hireprep_jobs', JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    localStorage.setItem('hireprep_saved_jobs', JSON.stringify(savedJobIds));
  }, [savedJobIds]);

  useEffect(() => {
    localStorage.setItem('hireprep_applied_jobs', JSON.stringify(appliedJobIds));
  }, [appliedJobIds]);

  useEffect(() => {
    localStorage.setItem('hireprep_solved_dsa', JSON.stringify(solvedProblemIds));
  }, [solvedProblemIds]);

  // Handlers
  const handleToggleSaveJob = (jobId) => {
    setSavedJobIds(prev => 
      prev.includes(jobId) ? prev.filter(id => id !== jobId) : [...prev, jobId]
    );
  };

  const handleApplyJob = (jobId) => {
    setAppliedJobIds(prev => 
      prev.includes(jobId) ? prev : [...prev, jobId]
    );
  };

  const handleToggleProblemStatus = (problemId) => {
    setSolvedProblemIds(prev =>
      prev.includes(problemId) ? prev.filter(id => id !== problemId) : [...prev, problemId]
    );
  };

  const handleAddJob = (newJob) => {
    setJobs(prev => [newJob, ...prev]);
  };

  // Calculate total problems count for badge
  const totalDsaCount = DSA_SHEETS.reduce((acc, sheet) => acc + sheet.problems.length, 0);

  return (
    <div className="min-h-screen bg-[#0b0f19] text-gray-100 flex flex-col selection:bg-indigo-600/40 selection:text-white">
      {/* Top Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        savedJobsCount={savedJobIds.length}
        solvedDsaCount={solvedProblemIds.length}
        totalDsaCount={totalDsaCount}
        onOpenPostJob={() => setShowPostJobModal(true)}
      />

      {/* Main App Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        {activeTab === 'jobs' && (
          <JobPortal
            jobs={jobs}
            savedJobIds={savedJobIds}
            onToggleSaveJob={handleToggleSaveJob}
            onApplyJob={handleApplyJob}
            appliedJobIds={appliedJobIds}
          />
        )}

        {activeTab === 'dsa' && (
          <DsaPreparation
            dsaSheets={DSA_SHEETS}
            solvedProblemIds={solvedProblemIds}
            onToggleProblemStatus={handleToggleProblemStatus}
            onOpenPlayground={(problem) => setActivePlaygroundProblem(problem)}
          />
        )}

        {activeTab === 'aptitude' && (
          <AptitudePrep aptitudeData={APTITUDE_DATA} />
        )}

        {activeTab === 'technical' && (
          <TechnicalPrep technicalNotes={TECHNICAL_NOTES} />
        )}

        {activeTab === 'company' && (
          <CompanyPrep companiesData={COMPANIES_DATA} />
        )}

        {activeTab === 'hr' && (
          <HrPrep hrPrepData={HR_PREP_DATA} />
        )}

        {activeTab === 'notes' && (
          <NotesSection />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800/80 bg-gray-950 py-8 text-center text-xs text-gray-500 mt-12">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">HirePrepHub</span>
            <span>• Placement Preparation & Job Opportunities Portal</span>
          </div>
          <p>© {new Date().getFullYear()} HirePrepHub. All job listings and company syllabus guidelines updated for 2025/2026 Batch.</p>
        </div>
      </footer>

      {/* Global Interactive Code Playground Modal */}
      {activePlaygroundProblem && (
        <CodePlaygroundModal
          problem={activePlaygroundProblem}
          onClose={() => setActivePlaygroundProblem(null)}
          onMarkSolved={(pId) => {
            if (!solvedProblemIds.includes(pId)) {
              setSolvedProblemIds(prev => [...prev, pId]);
            }
          }}
          isSolved={solvedProblemIds.includes(activePlaygroundProblem.id)}
        />
      )}

      {/* Recruiter Post Job Modal */}
      {showPostJobModal && (
        <PostJobModal
          onClose={() => setShowPostJobModal(false)}
          onAddJob={handleAddJob}
        />
      )}
    </div>
  );
}
