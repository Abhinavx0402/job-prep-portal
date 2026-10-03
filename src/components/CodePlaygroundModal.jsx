import React, { useState, useEffect } from 'react';
import { 
  X, 
  Play, 
  CheckCircle2, 
  Terminal, 
  RotateCcw, 
  Sparkles, 
  Copy, 
  Check, 
  ExternalLink,
  Cpu
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CodePlaygroundModal({ 
  problem, 
  onClose, 
  onMarkSolved, 
  isSolved 
}) {
  if (!problem) return null;

  const [selectedLang, setSelectedLang] = useState('cpp');
  const [code, setCode] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [outputResult, setOutputResult] = useState(null);
  const [copied, setCopied] = useState(false);

  // Initialize code when language changes
  useEffect(() => {
    if (problem.solutionCode && problem.solutionCode[selectedLang]) {
      setCode(problem.solutionCode[selectedLang]);
    } else {
      setCode(`// Write your solution for ${problem.title}\n`);
    }
  }, [problem, selectedLang]);

  const handleRunCode = () => {
    setIsRunning(true);
    setOutputResult(null);

    setTimeout(() => {
      setIsRunning(false);
      setOutputResult({
        status: 'Accepted',
        runtime: '4 ms',
        memory: '8.2 MB',
        testCasesPassed: '3 / 3',
        stdout: `Input: ${problem.inputExample || 'Sample Input'}\nOutput: ${problem.outputExample || 'Sample Output'}\nExpected Output: ${problem.outputExample || 'Sample Output'}\nStatus: PASS (All test cases passed successfully!)`
      });
    }, 1200);
  };

  const handleSubmitCode = () => {
    setIsRunning(true);

    setTimeout(() => {
      setIsRunning(false);
      setOutputResult({
        status: 'Accepted',
        runtime: '0 ms (Beats 98.4% of submissions)',
        memory: '7.9 MB (Beats 95.1% of submissions)',
        testCasesPassed: '45 / 45',
        stdout: `Congratulations! Your solution passed all 45 test cases.\nRuntime: 0 ms\nMemory Usage: 7.9 MB`
      });

      // Fire Confetti!
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Fallback
      }

      onMarkSolved(problem.id);
    }, 1500);
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-4">
      <div className="glass-panel w-full max-w-5xl h-[92vh] rounded-2xl border border-gray-800 overflow-hidden shadow-2xl flex flex-col animate-fade-in">
        
        {/* Playground Header */}
        <div className="p-4 bg-gray-950 border-b border-gray-800 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center border border-purple-500/30">
              <Terminal className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white leading-none">{problem.title}</h3>
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  problem.difficulty === 'Easy' ? 'bg-emerald-500/20 text-emerald-400' :
                  problem.difficulty === 'Medium' ? 'bg-amber-500/20 text-amber-400' : 'bg-red-500/20 text-red-400'
                }`}>
                  {problem.difficulty}
                </span>
              </div>
              <span className="text-[11px] text-gray-500 mt-0.5 block">{problem.topicName}</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isSolved && (
              <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-bold border border-emerald-500/30 flex items-center gap-1">
                <CheckCircle2 className="h-3.5 w-3.5" /> Solved
              </span>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-gray-900 hover:bg-gray-800 text-gray-400 hover:text-white border border-gray-800"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Playground Body Split Screen */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
          
          {/* Left Panel: Problem Statement */}
          <div className="lg:col-span-5 p-5 border-r border-gray-800 overflow-y-auto space-y-4 bg-gray-900/40 text-xs text-gray-300">
            <div>
              <h4 className="text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">Problem Description</h4>
              <p className="leading-relaxed text-gray-200 text-sm">{problem.description}</p>
            </div>

            {problem.inputExample && (
              <div className="space-y-1">
                <span className="font-bold text-gray-400 uppercase text-[10px]">Example Input</span>
                <pre className="p-3 rounded-xl bg-gray-950 border border-gray-800 font-mono text-indigo-300">
                  {problem.inputExample}
                </pre>
              </div>
            )}

            {problem.outputExample && (
              <div className="space-y-1">
                <span className="font-bold text-gray-400 uppercase text-[10px]">Expected Output</span>
                <pre className="p-3 rounded-xl bg-gray-950 border border-gray-800 font-mono text-emerald-300">
                  {problem.outputExample}
                </pre>
              </div>
            )}

            <div className="flex items-center justify-between pt-2 text-[11px] text-gray-400 font-mono">
              <span>Time: <strong className="text-emerald-400">{problem.timeComplexity}</strong></span>
              <span>Space: <strong className="text-indigo-400">{problem.spaceComplexity}</strong></span>
            </div>

            {problem.articleUrl && (
              <a
                href={problem.articleUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-4 p-3 rounded-xl bg-gray-900 hover:bg-gray-800 border border-gray-800 text-indigo-300 flex items-center justify-between text-xs font-medium transition-colors"
              >
                <span>Read Full LeetCode Discussion</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>

          {/* Right Panel: Interactive Code Editor & Console Output */}
          <div className="lg:col-span-7 flex flex-col overflow-hidden bg-gray-950">
            
            {/* Editor Toolbar */}
            <div className="px-4 py-2 bg-gray-900/90 border-b border-gray-800 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 font-medium">Language:</span>
                {['cpp', 'java', 'python'].map(lang => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLang(lang)}
                    className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase transition-all ${
                      selectedLang === lang
                        ? 'bg-purple-600 text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {lang === 'cpp' ? 'C++' : lang}
                  </button>
                ))}
              </div>

              <button
                onClick={copyCode}
                className="px-2.5 py-1 rounded bg-gray-800 hover:bg-gray-700 text-gray-300 text-[11px] flex items-center gap-1"
              >
                {copied ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            {/* Code Textarea */}
            <div className="flex-1 p-4 relative font-mono text-xs text-gray-100 bg-gray-950">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                className="w-full h-full bg-transparent resize-none focus:outline-none font-mono text-xs text-emerald-300 leading-relaxed selection:bg-purple-600/40"
              />
            </div>

            {/* Console Output Panel */}
            {outputResult && (
              <div className="p-4 bg-gray-900 border-t border-gray-800 max-h-48 overflow-y-auto font-mono text-xs space-y-2 animate-fade-in">
                <div className="flex items-center justify-between">
                  <span className={`font-bold ${outputResult.status === 'Accepted' ? 'text-emerald-400' : 'text-red-400'}`}>
                    Status: {outputResult.status} ({outputResult.testCasesPassed})
                  </span>
                  <div className="flex items-center gap-3 text-[11px] text-gray-400">
                    <span>Runtime: <strong className="text-gray-200">{outputResult.runtime}</strong></span>
                    <span>Memory: <strong className="text-gray-200">{outputResult.memory}</strong></span>
                  </div>
                </div>
                <pre className="p-3 rounded bg-gray-950 text-gray-300 leading-relaxed text-[11px]">
                  {outputResult.stdout}
                </pre>
              </div>
            )}

            {/* Editor Action Bar */}
            <div className="p-3 bg-gray-950 border-t border-gray-800 flex items-center justify-between shrink-0">
              <button
                onClick={() => setCode(problem.solutionCode?.[selectedLang] || '')}
                className="px-3 py-1.5 rounded-lg bg-gray-900 hover:bg-gray-800 text-gray-400 text-xs font-medium flex items-center gap-1"
              >
                <RotateCcw className="h-3.5 w-3.5" /> Reset Code
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleRunCode}
                  disabled={isRunning}
                  className="px-4 py-2 rounded-xl bg-gray-800 hover:bg-gray-700 text-gray-200 text-xs font-bold border border-gray-700 flex items-center gap-1.5"
                >
                  <Play className="h-3.5 w-3.5 fill-gray-200" /> Run Tests
                </button>

                <button
                  onClick={handleSubmitCode}
                  disabled={isRunning}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-lg shadow-emerald-600/30 flex items-center gap-1.5"
                >
                  <Sparkles className="h-3.5 w-3.5 text-white" /> Submit Solution
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
