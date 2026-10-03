import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MapPin, 
  Briefcase, 
  DollarSign, 
  Clock, 
  Bookmark, 
  BookmarkCheck, 
  ExternalLink, 
  Filter, 
  Sparkles,
  CheckCircle2,
  Building2,
  X,
  Send,
  Zap,
  Check
} from 'lucide-react';

export default function JobPortal({ 
  jobs, 
  savedJobIds, 
  onToggleSaveJob, 
  onApplyJob,
  appliedJobIds 
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedWorkMode, setSelectedWorkMode] = useState('All');
  const [showSavedOnly, setShowSavedOnly] = useState(false);

  // Active job details modal state
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApplyModal, setShowApplyModal] = useState(false);
  
  // Application Form State
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantResume, setApplicantResume] = useState('resume_john_doe.pdf');
  const [applySuccess, setApplySuccess] = useState(false);

  const categories = ['All', 'Software Engineering', 'Frontend', 'Backend', 'AI / ML', 'Data & Analytics', 'DevOps & Infrastructure'];
  const workModes = ['All', 'Hybrid', 'Onsite', 'Remote'];

  // Filter Jobs
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      const matchesSearch = 
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory === 'All' || job.category === selectedCategory;
      const matchesWorkMode = selectedWorkMode === 'All' || job.workMode === selectedWorkMode;
      const matchesSaved = !showSavedOnly || savedJobIds.includes(job.id);

      return matchesSearch && matchesCategory && matchesWorkMode && matchesSaved;
    });
  }, [jobs, searchQuery, selectedCategory, selectedWorkMode, showSavedOnly, savedJobIds]);

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (!selectedJob) return;

    onApplyJob(selectedJob.id);
    setApplySuccess(true);

    setTimeout(() => {
      setApplySuccess(false);
      setShowApplyModal(false);
    }, 2000);
  };

  return (
    <div className="space-y-6">
      {/* Search & Filter Header Banner */}
      <div className="relative rounded-2xl overflow-hidden glass-panel p-6 sm:p-8 border border-gray-800 bg-gradient-to-r from-gray-900 via-indigo-950/40 to-gray-900 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-3">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            Verified Off-Campus & Campus Drives 2026
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Find Your Dream <span className="text-gradient-purple">Tech Career</span>
          </h2>
          <p className="text-sm text-gray-400 mt-2">
            Explore active hiring opportunities at top product companies, FAANG, and fast-growing Indian tech startups with verified salaries and direct referral apply options.
          </p>

          {/* Search Inputs */}
          <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by job title, company (e.g. Razorpay, Amazon), or skills (e.g. React, Java)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-gray-900/90 border border-gray-700/80 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>
            
            <button
              onClick={() => setShowSavedOnly(!showSavedOnly)}
              className={`w-full sm:w-auto px-4 py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
                showSavedOnly 
                  ? 'bg-amber-500 text-gray-950 shadow-lg shadow-amber-500/20' 
                  : 'bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700'
              }`}
            >
              <Bookmark className={`h-4 w-4 ${showSavedOnly ? 'fill-gray-950' : 'text-amber-400'}`} />
              <span>{showSavedOnly ? 'Showing Saved' : 'Saved Jobs'}</span>
            </button>
          </div>
        </div>

        {/* Category Pills Filter */}
        <div className="mt-6 pt-6 border-t border-gray-800/80 flex flex-wrap items-center gap-2">
          <span className="text-xs text-gray-400 font-medium flex items-center gap-1 mr-2">
            <Filter className="h-3.5 w-3.5 text-gray-400" /> Categories:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                selectedCategory === cat
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                  : 'bg-gray-900/80 text-gray-400 hover:text-gray-200 hover:bg-gray-800 border border-gray-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Main Jobs Listing & Stats Bar */}
      <div className="flex items-center justify-between text-xs text-gray-400 px-1">
        <span>Showing <strong className="text-white">{filteredJobs.length}</strong> job opportunities</span>
        <div className="flex items-center gap-2">
          <span>Mode:</span>
          {workModes.map(mode => (
            <button
              key={mode}
              onClick={() => setSelectedWorkMode(mode)}
              className={`px-2 py-1 rounded text-[11px] ${
                selectedWorkMode === mode 
                  ? 'bg-indigo-500/20 text-indigo-300 font-bold border border-indigo-500/30' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {mode}
            </button>
          ))}
        </div>
      </div>

      {/* Job Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredJobs.map((job) => {
          const isSaved = savedJobIds.includes(job.id);
          const isApplied = appliedJobIds.includes(job.id);

          return (
            <div 
              key={job.id} 
              className="glass-card rounded-2xl p-5 border border-gray-800 flex flex-col justify-between hover:border-indigo-500/40 relative group"
            >
              {/* Card Header */}
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className={`h-12 w-12 rounded-xl ${job.logoBg} flex items-center justify-center font-bold text-white text-base shadow-md`}>
                      {job.companyInitial}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-semibold text-gray-400">{job.company}</span>
                        {job.urgent && (
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-red-500/10 text-red-400 border border-red-500/20 flex items-center gap-1">
                            <Zap className="h-3 w-3" /> Hiring Urgent
                          </span>
                        )}
                      </div>
                      <h3 className="text-base font-bold text-white mt-0.5 group-hover:text-indigo-300 transition-colors">
                        {job.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    onClick={() => onToggleSaveJob(job.id)}
                    className="p-2 rounded-lg bg-gray-900/60 hover:bg-gray-800 text-gray-400 hover:text-amber-400 border border-gray-800 transition-colors"
                  >
                    {isSaved ? (
                      <BookmarkCheck className="h-4 w-4 text-amber-400 fill-amber-400" />
                    ) : (
                      <Bookmark className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>

                {/* Metadata Pills */}
                <div className="flex flex-wrap items-center gap-3 mt-4 text-xs text-gray-400">
                  <span className="flex items-center gap-1 text-gray-300">
                    <MapPin className="h-3.5 w-3.5 text-indigo-400" /> {job.location}
                  </span>
                  <span className="flex items-center gap-1 text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <DollarSign className="h-3.5 w-3.5" /> {job.salary}
                  </span>
                  <span className="flex items-center gap-1 text-gray-300">
                    <Briefcase className="h-3.5 w-3.5 text-purple-400" /> {job.experience}
                  </span>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3.5">
                  {job.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="px-2 py-1 rounded-md text-[11px] font-medium bg-gray-900 text-gray-300 border border-gray-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="mt-5 pt-4 border-t border-gray-800/80 flex items-center justify-between gap-3">
                <span className="text-[11px] text-gray-500 flex items-center gap-1">
                  <Clock className="h-3 w-3" /> Posted {job.postedDate}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setSelectedJob(job)}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-700 transition-colors"
                  >
                    View Details
                  </button>

                  <button
                    onClick={() => {
                      setSelectedJob(job);
                      setShowApplyModal(true);
                    }}
                    disabled={isApplied}
                    className={`px-4 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all ${
                      isApplied 
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 cursor-not-allowed'
                        : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-md shadow-indigo-600/20'
                    }`}
                  >
                    {isApplied ? (
                      <>
                        <CheckCircle2 className="h-3.5 w-3.5" /> Applied
                      </>
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5" /> Easy Apply
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredJobs.length === 0 && (
        <div className="text-center py-16 glass-panel rounded-2xl border border-gray-800">
          <Building2 className="h-12 w-12 text-gray-600 mx-auto mb-3" />
          <h3 className="text-lg font-bold text-gray-300">No Jobs Matching Your Criteria</h3>
          <p className="text-xs text-gray-500 max-w-sm mx-auto mt-1">
            Try adjusting your search keywords, clear category filters, or toggle off 'Saved Jobs'.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedWorkMode('All');
              setShowSavedOnly(false);
            }}
            className="mt-4 px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold hover:bg-indigo-500"
          >
            Reset Filters
          </button>
        </div>
      )}

      {/* JOB DETAILS DRAWER MODAL */}
      {selectedJob && !showApplyModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-panel w-full max-w-2xl rounded-2xl border border-gray-800 overflow-hidden shadow-2xl animate-fade-in max-h-[90vh] flex flex-col">
            {/* Drawer Header */}
            <div className="p-6 border-b border-gray-800 bg-gray-900/80 flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className={`h-14 w-14 rounded-2xl ${selectedJob.logoBg} flex items-center justify-center font-extrabold text-white text-xl shadow-lg`}>
                  {selectedJob.companyInitial}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedJob.title}</h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-gray-400">
                    <span className="font-semibold text-gray-200">{selectedJob.company}</span>
                    <span>•</span>
                    <span className="text-indigo-400">{selectedJob.location}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="p-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Drawer Body Scrollable */}
            <div className="p-6 overflow-y-auto space-y-6 text-sm text-gray-300">
              {/* Highlight Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 rounded-xl bg-gray-900/80 border border-gray-800">
                  <span className="text-[11px] text-gray-500 block">Experience</span>
                  <span className="font-bold text-white text-xs">{selectedJob.experience}</span>
                </div>
                <div className="p-3 rounded-xl bg-gray-900/80 border border-gray-800">
                  <span className="text-[11px] text-gray-500 block">Salary Package</span>
                  <span className="font-bold text-emerald-400 text-xs">{selectedJob.salary}</span>
                </div>
                <div className="p-3 rounded-xl bg-gray-900/80 border border-gray-800">
                  <span className="text-[11px] text-gray-500 block">Work Mode</span>
                  <span className="font-bold text-indigo-400 text-xs">{selectedJob.workMode}</span>
                </div>
                <div className="p-3 rounded-xl bg-gray-900/80 border border-gray-800">
                  <span className="text-[11px] text-gray-500 block">Job Type</span>
                  <span className="font-bold text-purple-400 text-xs">{selectedJob.type}</span>
                </div>
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Role Overview</h4>
                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">{selectedJob.description}</p>
              </div>

              {/* Responsibilities */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Key Responsibilities</h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {selectedJob.responsibilities?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Candidate Requirements</h4>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {selectedJob.requirements?.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Perks */}
              {selectedJob.perks && (
                <div>
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Perks & Benefits</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.perks.map((perk, idx) => (
                      <span key={idx} className="px-3 py-1 rounded-lg text-xs bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 font-medium">
                        ✨ {perk}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-4 border-t border-gray-800 bg-gray-900/90 flex items-center justify-between">
              <button
                onClick={() => onToggleSaveJob(selectedJob.id)}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-gray-800 hover:bg-gray-700 text-gray-300 flex items-center gap-2"
              >
                <Bookmark className="h-4 w-4 text-amber-400" />
                <span>{savedJobIds.includes(selectedJob.id) ? 'Saved' : 'Save Job'}</span>
              </button>

              <button
                onClick={() => setShowApplyModal(true)}
                disabled={appliedJobIds.includes(selectedJob.id)}
                className={`px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 ${
                  appliedJobIds.includes(selectedJob.id)
                    ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-lg shadow-indigo-600/30'
                }`}
              >
                {appliedJobIds.includes(selectedJob.id) ? 'Already Applied' : 'Proceed to Easy Apply'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* EASY APPLY APPLICATION FORM MODAL */}
      {showApplyModal && selectedJob && (
        <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="glass-panel w-full max-w-lg rounded-2xl border border-gray-800 p-6 shadow-2xl animate-fade-in relative">
            <button
              onClick={() => setShowApplyModal(false)}
              className="absolute top-4 right-4 p-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>

            {applySuccess ? (
              <div className="text-center py-10 space-y-3">
                <div className="h-16 w-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <Check className="h-8 w-8 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-white">Application Submitted!</h3>
                <p className="text-xs text-gray-400 max-w-xs mx-auto">
                  Your application and resume profile have been directly forwarded to the recruiting team at <strong className="text-indigo-300">{selectedJob.company}</strong>.
                </p>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`h-10 w-10 rounded-xl ${selectedJob.logoBg} flex items-center justify-center font-bold text-white text-sm`}>
                    {selectedJob.companyInitial}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Apply to {selectedJob.company}</h3>
                    <p className="text-xs text-indigo-400 font-medium">{selectedJob.title}</p>
                  </div>
                </div>

                <form onSubmit={handleApplySubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="john.doe@example.com"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 9876543210"
                      value={applicantPhone}
                      onChange={(e) => setApplicantPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-white text-xs focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-300 mb-1">Attached Resume</label>
                    <div className="p-3 rounded-xl bg-gray-900 border border-dashed border-gray-700 flex items-center justify-between text-xs text-gray-300">
                      <span className="font-mono text-indigo-300 flex items-center gap-1.5">
                        📄 {applicantResume}
                      </span>
                      <span className="text-[10px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded font-bold">
                        Verified
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 flex items-center justify-end gap-3">
                    <button
                      type="button"
                      onClick={() => setShowApplyModal(false)}
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-gray-400 hover:text-white"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="px-6 py-2.5 rounded-xl text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 flex items-center gap-1.5"
                    >
                      <Send className="h-3.5 w-3.5" /> Submit Application
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
