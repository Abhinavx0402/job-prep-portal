import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Download, 
  Copy, 
  Check, 
  Plus, 
  Trash2, 
  Sparkles, 
  BookOpen, 
  Code
} from 'lucide-react';

export default function NotesSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  // Custom User Notes State
  const [myNotes, setMyNotes] = useState([
    { id: 1, title: "My Amazon SDE Interview Notes", content: "Remember to explain O(N) space complexity when using HashMaps for Two Sum. Practice rotational matrix problems on Leetcode." }
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);

  // Built-in Quick Revision Sheets
  const revisionSheets = [
    {
      id: "note-1",
      title: "Big-O Time & Space Complexity Master Sheet",
      category: "Algorithms",
      content: `ARRAY / VECTOR OPERATIONS:
- Access: O(1)
- Search: O(N) [Unsorted] / O(log N) [Sorted Binary Search]
- Insertion: O(1) [At End] / O(N) [At Beginning/Middle]
- Deletion: O(1) [At End] / O(N) [At Beginning/Middle]

SORTING ALGORITHMS:
- QuickSort: O(N log N) Avg | O(N^2) Worst | Space: O(log N)
- MergeSort: O(N log N) Best/Worst | Space: O(N)
- HeapSort: O(N log N) Best/Worst | Space: O(1)
- Binary Search Tree Search: O(H) where H = log N (balanced) or N (skewed)`
    },
    {
      id: "note-2",
      title: "SQL Window Functions & High-Yield Queries",
      category: "DBMS & SQL",
      content: `-- 2nd Highest Salary using DENSE_RANK()
WITH RankedSalaries AS (
    SELECT salary, DENSE_RANK() OVER (ORDER BY salary DESC) as rank_no
    FROM employees
)
SELECT salary FROM RankedSalaries WHERE rank_no = 2;

-- Running Total with SUM() OVER()
SELECT order_id, amount,
       SUM(amount) OVER (ORDER BY order_date) AS running_total
FROM orders;`
    },
    {
      id: "note-3",
      title: "Linux CLI & Git Essential Commands",
      category: "DevOps",
      content: `# Search text recursively in directory
grep -rnw '/path/to/dir/' -e 'search_term'

# Process memory inspection
top -u username
ps aux | grep node

# Git Undo last commit keeping changes
git reset --soft HEAD~1

# Stash uncommitted changes with message
git stash save "WIP: auth integration"`
    }
  ];

  const filteredSheets = revisionSheets.filter(sheet =>
    sheet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sheet.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    sheet.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const copySheet = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const downloadTxt = (filename, text) => {
    const element = document.createElement("a");
    const file = new Blob([text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `${filename}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    setMyNotes(prev => [
      { id: Date.now(), title: newTitle, content: newContent },
      ...prev
    ]);
    setNewTitle('');
    setNewContent('');
    setShowAddModal(false);
  };

  const deleteCustomNote = (id) => {
    setMyNotes(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="space-y-6">
      {/* Banner */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900 via-amber-950/40 to-gray-900 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-3">
              <Sparkles className="h-3.5 w-3.5 text-amber-400" />
              Quick Revision & Formulas
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Revision <span className="text-gradient-gold">Notes & Cheatsheets</span>
            </h2>
            <p className="text-sm text-gray-400 mt-2 max-w-2xl">
              Instant revision sheets for Big-O, SQL, System Design, and Linux CLI. Create and manage your personal interview notebook.
            </p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-950 text-xs font-bold shadow-lg shadow-amber-500/20 flex items-center gap-1.5 shrink-0"
          >
            <Plus className="h-4 w-4" /> Add Personal Note
          </button>
        </div>

        {/* Search */}
        <div className="mt-6 pt-6 border-t border-gray-800 relative max-w-md">
          <Search className="absolute left-3.5 top-[calc(50%+12px)] -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search notes by keyword or topic..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-gray-900 border border-gray-800 text-white placeholder-gray-500 text-xs focus:outline-none focus:border-amber-500"
          />
        </div>
      </div>

      {/* Personal Notes Section */}
      {myNotes.length > 0 && (
        <div className="glass-panel p-6 rounded-2xl border border-gray-800 space-y-4">
          <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider">My Personal Notebook</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {myNotes.map(note => (
              <div key={note.id} className="p-4 rounded-xl bg-gray-900/90 border border-amber-500/30 space-y-2 relative">
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-white text-sm">{note.title}</h4>
                  <button
                    onClick={() => deleteCustomNote(note.id)}
                    className="p-1 rounded text-gray-500 hover:text-red-400"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
                <p className="text-xs text-gray-300 leading-relaxed whitespace-pre-wrap">{note.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Built-in Revision Sheets Grid */}
      <div className="space-y-4">
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider">Standard Cheatsheets</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSheets.map((sheet) => (
            <div key={sheet.id} className="glass-panel p-5 rounded-2xl border border-gray-800 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-gray-800">
                  <div>
                    <span className="text-[10px] font-bold text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {sheet.category}
                    </span>
                    <h4 className="text-base font-bold text-white mt-1">{sheet.title}</h4>
                  </div>
                </div>

                <div className="mt-4 p-4 rounded-xl bg-gray-950 border border-gray-800 font-mono text-xs text-gray-300 leading-relaxed overflow-x-auto max-h-60">
                  <pre><code>{sheet.content}</code></pre>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  onClick={() => copySheet(sheet.content, sheet.id)}
                  className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 text-xs font-semibold flex items-center gap-1.5"
                >
                  {copiedId === sheet.id ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedId === sheet.id ? 'Copied' : 'Copy'}</span>
                </button>

                <button
                  onClick={() => downloadTxt(sheet.title, sheet.content)}
                  className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-semibold flex items-center gap-1.5 border border-amber-500/30"
                >
                  <Download className="h-3.5 w-3.5" /> Download TXT
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Custom Note Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="glass-panel w-full max-w-md rounded-2xl border border-gray-800 p-6 shadow-2xl animate-fade-in space-y-4">
            <h3 className="text-lg font-bold text-white">Create Personal Note</h3>
            <form onSubmit={handleAddNote} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Title</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. My TCS Interview Key Points"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-300 mb-1">Content</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Write your revision notes..."
                  value={newContent}
                  onChange={(e) => setNewContent(e.target.value)}
                  className="w-full p-3 rounded-xl bg-gray-900 border border-gray-800 text-white text-xs focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-xs text-gray-400 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-gray-950 text-xs font-bold"
                >
                  Save Note
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
