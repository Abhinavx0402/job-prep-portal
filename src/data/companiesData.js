export const COMPANIES_DATA = [
  {
    id: "comp-tcs",
    name: "TCS (Ninja / Digital / Prime)",
    logoBg: "bg-purple-600",
    initials: "TCS",
    tier: "Tier-1 IT / Mass Recruiter & Digital Cadre",
    rolesOffered: [
      { title: "TCS Ninja", ctc: "₹3.36 - ₹4.0 LPA" },
      { title: "TCS Digital", ctc: "₹7.0 - ₹9.0 LPA" },
      { title: "TCS Prime", ctc: "₹9.0 - ₹11.5 LPA" }
    ],
    eligibility: {
      degree: "B.E. / B.Tech / M.E. / M.Tech / MCA / M.Sc",
      minPercentage: "60% or 6.0 CGPA throughout (10th, 12th, Diploma, Graduation)",
      backlogs: "Max 1 active backlog allowed during exam (0 backlogs at joining)",
      gapAllowed: "Maximum 24 months academic gap permitted with valid reason"
    },
    examPattern: {
      totalDuration: "165 Minutes",
      sections: [
        { section: "Numerical Ability", questions: 20, time: "40 mins", difficulty: "Moderate" },
        { section: "Verbal Ability", questions: 25, time: "30 mins", difficulty: "Easy to Moderate" },
        { section: "Reasoning Ability", questions: 20, time: "30 mins", difficulty: "Moderate" },
        { section: "Advanced Quantitative & Reasoning (Digital/Prime)", questions: 15, time: "25 mins", difficulty: "High" },
        { section: "Hands-on Coding (2 Problems)", questions: 2, time: "45 mins", difficulty: "1 Easy (Array/String) + 1 Medium (DP/Matrix)" }
      ]
    },
    syllabus: [
      "Quant: Percentages, Profit & Loss, Speed Distance, Work & Time, Permutations, Geometry",
      "Logical: Syllogisms, Blood Relations, Data Sufficiency, Coding-Decoding, Seating Arrangement",
      "Coding: Arrays, String Manipulation, Matrix operations, Recursion, Number Theory (GCD, Prime, Base conversions)"
    ],
    hiringRounds: [
      "Round 1: TCS NQT Online Test (Aptitude + Coding)",
      "Round 2: Technical Interview (Core Subjects, Project deep dive, Live Coding)",
      "Round 3: HR & Managerial Round (Behavioral, Shift readiness, Location preferences)"
    ],
    interviewExperiences: [
      {
        candidate: "Rahul Verma (B.Tech CSE - 2025)",
        role: "TCS Digital",
        result: "Selected (₹7.5 LPA)",
        review: "The NQT test had tough Advanced Quant questions. In the interview, they asked me to write code on paper for string reversal without built-in functions, explain my final year project architecture, and asked 3 DBMS questions on Joins and ACID properties. Know your resume project inside out!"
      }
    ]
  },
  {
    id: "comp-infosys",
    name: "Infosys (SE / DSE / SP)",
    logoBg: "bg-blue-700",
    initials: "INFY",
    tier: "Tier-1 IT & Specialist Cadre",
    rolesOffered: [
      { title: "System Engineer (SE)", ctc: "₹3.6 - ₹4.0 LPA" },
      { title: "Digital Specialist Engineer (DSE)", ctc: "₹6.25 LPA" },
      { title: "Specialist Programmer (SP)", ctc: "₹9.5 - ₹11.0 LPA" }
    ],
    eligibility: {
      degree: "B.E / B.Tech / M.E / M.Tech / MCA / M.Sc (All branches eligible)",
      minPercentage: "60% or 6.0 CGPA in 10th, 12th, and Graduation",
      backlogs: "No active backlogs allowed during recruitment test",
      gapAllowed: "Maximum 2 years gap"
    },
    examPattern: {
      totalDuration: "100 Minutes (HackWithInfy / Infytq test)",
      sections: [
        { section: "Mathematical Ability", questions: 10, time: "35 mins", difficulty: "Moderate" },
        { section: "Reasoning Ability", questions: 15, time: "25 mins", difficulty: "Moderate" },
        { section: "Verbal Ability", questions: 20, time: "20 mins", difficulty: "Easy" },
        { section: "Pseudo-code & Technical", questions: 5, time: "10 mins", difficulty: "High" },
        { section: "Puzzle Solving", questions: 4, time: "10 mins", difficulty: "Challenging" }
      ]
    },
    syllabus: [
      "Aptitude: Data Interpretation, Cryptarithmetic puzzles, Probability, Syllogisms",
      "Pseudo-code: C/C++/Java syntax output tracing, Recursion trees, Bitwise operators",
      "HackWithInfy Coding: Dynamic Programming, Graph Traversals, Sliding Window, Greedy"
    ],
    hiringRounds: [
      "Round 1: Infytq / HackWithInfy / Campus Assessment",
      "Round 2: Technical Interview (Algorithm optimization, OOPs concepts)",
      "Round 3: HR Discussion"
    ],
    interviewExperiences: [
      {
        candidate: "Priya Sharma (B.Tech ECE - 2025)",
        role: "Digital Specialist Engineer",
        result: "Selected (₹6.25 LPA)",
        review: "HackWithInfy had 3 problems. Solving 1.5 questions secured my DSE interview call. The interviewer focused heavily on Data Structures (Trees and HashMaps) and asked how to optimize an O(N^2) solution to O(N)."
      }
    ]
  },
  {
    id: "comp-amazon",
    name: "Amazon",
    logoBg: "bg-amber-600",
    initials: "AMZ",
    tier: "FAANG / Big Tech",
    rolesOffered: [
      { title: "Software Development Engineer (SDE-1)", ctc: "₹28.0 - ₹34.0 LPA (Base + Stocks + Sign-on)" },
      { title: "SDE Intern", ctc: "₹1,10,000 / month Stipend" }
    ],
    eligibility: {
      degree: "B.Tech / M.Tech / MCA in CS, IT or STEM fields",
      minPercentage: "No strict minimum CGPA cutoff, but strong resume required",
      backlogs: "0 backlogs",
      gapAllowed: "Evaluated case-by-case"
    },
    examPattern: {
      totalDuration: "120 Minutes",
      sections: [
        { section: "Debugging Round", questions: 7, time: "20 mins", difficulty: "Logical fix in C++/Java" },
        { section: "Coding Assessment", questions: 2, time: "70 mins", difficulty: "Medium - Hard DSA" },
        { section: "Workforces Behavioral Assessment", questions: 20, time: "30 mins", difficulty: "Amazon Leadership Principles" }
      ]
    },
    syllabus: [
      "DSA: Arrays, Trees, Graphs, Heap/PriorityQueue, Dynamic Programming, Two Pointers",
      "System Design: Basic Low Level Design (LLD), Object-Oriented Principles, Class Diagrams",
      "Behavioral: Amazon 16 Leadership Principles (Customer Obsession, Ownership, Bias for Action)"
    ],
    hiringRounds: [
      "Round 1: Online Assessment (OA on HackerRank)",
      "Round 2: Technical Round 1 (Data Structures & Live Coding)",
      "Round 3: Technical Round 2 (Algorithms & LLD)",
      "Round 4: Bar Raiser Round (System Design + Deep Dive on Leadership Principles)"
    ],
    interviewExperiences: [
      {
        candidate: "Ankit Gupta (B.Tech CS - 2024)",
        role: "SDE-1",
        result: "Selected (₹31 LPA total package)",
        review: "In all 3 interview rounds, 20 minutes were spent exclusively on Amazon Leadership Principles questions using the STAR method! For coding, I was asked 'Rotting Oranges (BFS)' and 'Course Schedule (Topological Sort)'. Always speak your thoughts out loud while writing code!"
      }
    ]
  },
  {
    id: "comp-google",
    name: "Google",
    logoBg: "bg-red-500",
    initials: "GOOG",
    tier: "FAANG / Tier-0 Tech",
    rolesOffered: [
      { title: "Software Engineer (L3)", ctc: "₹35.0 - ₹45.0 LPA Total CTC" },
      { title: "STEP Intern / SDE Intern", ctc: "₹1,25,000 / month Stipend" }
    ],
    eligibility: {
      degree: "BS/MS/PhD in Computer Science or related quantitative field",
      minPercentage: "No formal CGPA barrier",
      backlogs: "0 backlogs",
      gapAllowed: "Allowed"
    },
    examPattern: {
      totalDuration: "90 Minutes (Google Online Challenge / Kickstart)",
      sections: [
        { section: "Algorithmic Problem 1", questions: 1, time: "45 mins", difficulty: "Medium-Hard" },
        { section: "Algorithmic Problem 2", questions: 1, time: "45 mins", difficulty: "Hard" }
      ]
    },
    syllabus: [
      "Advanced DSA: Segment Trees, Disjoint Set Union (DSU), Trie, Graph shortest paths, Dynamic Programming with Bitmasking, Binary Search on Answer"
    ],
    hiringRounds: [
      "Round 1: Google Online Challenge (GOC)",
      "Round 2-4: 3 Technical Coding Interviews (45 mins each on Google Docs/CoderPad)",
      "Round 5: Googliness & Leadership Round"
    ],
    interviewExperiences: [
      {
        candidate: "Siddharth Rao (M.Tech CS)",
        role: "Software Engineer L3",
        result: "Selected (₹42 LPA)",
        review: "Google tests your problem-solving adaptability. My interviewer modified the constraints 3 times during the interview to test edge cases and space optimization. Focus heavily on time complexity proofs!"
      }
    ]
  }
];
