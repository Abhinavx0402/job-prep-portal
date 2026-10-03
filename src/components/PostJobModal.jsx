import React, { useState } from 'react';
import { X, PlusCircle, Sparkles, Building2, Briefcase } from 'lucide-react';

export default function PostJobModal({ onClose, onAddJob }) {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [workMode, setWorkMode] = useState('Hybrid');
  const [category, setCategory] = useState('Software Engineering');
  const [salary, setSalary] = useState('₹15,000,00 - ₹20,000,00 LPA');
  const [experience, setExperience] = useState('0 - 2 Years');
  const [tagsInput, setTagsInput] = useState('React, Node.js, SQL');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !company) return;

    const newJob = {
      id: `job-custom-${Date.now()}`,
      title,
      company,
      logoBg: 'bg-indigo-600',
      companyInitial: company.substring(0, 2).toUpperCase(),
      location: location || 'Remote / Hybrid',
      workMode,
      type: 'Full-Time',
      experience,
      salary,
      category,
      postedDate: 'Just now',
      urgent: true,
      tags: tagsInput.split(',').map(t => t.trim()).filter(Boolean),
      description: description || 'Exciting tech role at a fast-growing company.',
      responsibilities: ['Build scalable applications.', 'Collaborate with cross-functional teams.'],
      requirements: ['Strong programming skills.', 'Problem solving ability.'],
      perks: ['Health Insurance', 'Flexible Working Hours']
    };

    onAddJob(newJob);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="glass-panel w-full max-w-lg rounded-2xl border border-gray-800 p-6 shadow-2xl animate-fade-in relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-10 rounded-xl bg-indigo-600/20 text-indigo-400 flex items-center justify-center border border-indigo-500/30">
            <PlusCircle className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Post a Job Opportunity</h3>
            <p className="text-xs text-gray-400">Reach 50,000+ top engineering candidates</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-gray-300 mb-1">Job Title *</label>
            <input
              type="text"
              required
              placeholder="e.g. Senior Backend Engineer"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-gray-300 mb-1">Company Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Google / Microsoft"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-300 mb-1">Location</label>
              <input
                type="text"
                placeholder="e.g. Bengaluru, India"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-gray-300 mb-1">Work Mode</label>
              <select
                value={workMode}
                onChange={(e) => setWorkMode(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="Hybrid">Hybrid</option>
                <option value="Onsite">Onsite</option>
                <option value="Remote">Remote</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-gray-300 mb-1">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-indigo-500"
              >
                <option value="Software Engineering">Software Engineering</option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="AI / ML">AI / ML</option>
                <option value="Data & Analytics">Data & Analytics</option>
                <option value="DevOps & Infrastructure">DevOps & Infrastructure</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-gray-300 mb-1">Salary Range</label>
              <input
                type="text"
                placeholder="e.g. ₹18,00,000 LPA"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-300 mb-1">Required Experience</label>
              <input
                type="text"
                placeholder="e.g. 0 - 2 Years"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-gray-300 mb-1">Tech Stack Tags (Comma Separated)</label>
            <input
              type="text"
              placeholder="e.g. React, Python, AWS, Docker"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block font-semibold text-gray-300 mb-1">Role Description</label>
            <textarea
              rows={3}
              placeholder="Describe key responsibilities and qualifications..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-400 hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold shadow-lg shadow-indigo-600/30"
            >
              Publish Job Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
