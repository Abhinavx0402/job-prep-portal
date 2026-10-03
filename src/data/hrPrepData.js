export const HR_PREP_DATA = {
  starMethod: {
    title: "The STAR Answer Method",
    description: "The gold standard framework for answering behavioral and situational HR interview questions.",
    steps: [
      {
        letter: "S",
        title: "Situation",
        description: "Set the context by detailing a specific event or challenge you faced. Keep it brief (15-20% of answer).",
        example: "During my 3rd-year capstone project, our team lost 2 backend team members right before the final milestone deployment."
      },
      {
        letter: "T",
        title: "Task",
        description: "Explain the responsibility or goal assigned to you in that situation.",
        example: "I was tasked with taking over the REST API integration and database schema migration within a tight 5-day deadline."
      },
      {
        letter: "A",
        title: "Action",
        description: "Describe the specific actions YOU took. Highlight your technical skills, leadership, and initiative (50% of answer).",
        example: "I refactored the legacy Express.js endpoints, set up automated Postman tests to verify payload accuracy, and held daily 15-minute syncs with the frontend team."
      },
      {
        letter: "R",
        title: "Result",
        description: "Share the quantifiable outcomes, lessons learned, and positive impact achieved (25% of answer).",
        example: "We deployed the portal 1 day ahead of schedule with zero breaking bugs, achieving a 98% pass rate in client acceptance testing."
      }
    ]
  },
  questions: [
    {
      id: "hr-1",
      category: "Personal & Behavioral",
      question: "Tell me about yourself and why you chose a career in software engineering.",
      tips: [
        "Use the Past-Present-Future structure.",
        "Keep it strictly professional (under 2 minutes).",
        "Connect your passion for coding to real projects or problem-solving."
      ],
      sampleAnswer: "Hello! I am a final-year Computer Science student passionate about building scalable web applications and solving complex algorithmic challenges. Over the past two years, I've mastered JavaScript, React, and Python, and built projects including an AI-powered job portal. Recently, during my internship, I reduced API latency by 30% using Redis caching. I am eager to bring my problem-solving drive and full-stack development skills to your team."
    },
    {
      id: "hr-2",
      category: "Conflict & Stress Management",
      question: "Describe a situation where you had a disagreement with a team member or manager.",
      tips: [
        "Never speak negatively about past teammates.",
        "Focus on data-driven conflict resolution.",
        "Show empathy and active listening."
      ],
      sampleAnswer: "In a team hackathon, my teammate wanted to use a NoSQL database while I advocated for PostgreSQL because of complex relational data. Instead of arguing, I proposed creating a quick 30-minute benchmark schema. Once we ran queries on sample data, the relational joins proved significantly faster and simpler. We agreed on PostgreSQL, worked smoothly, and won 2nd place."
    },
    {
      id: "hr-3",
      category: "Company Knowledge & Career Goals",
      question: "Where do you see yourself in 3 to 5 years?",
      tips: [
        "Align your personal growth with the company's growth trajectory.",
        "Show ambition for technical mastery or team leadership.",
        "Avoid mentioning higher studies or moving to competitors."
      ],
      sampleAnswer: "In 3 to 5 years, I envision myself as a Senior Full-Stack Engineer and technical lead within the organization. I want to deeply master distributed systems design, mentor junior developers, and take ownership of key feature rollouts that directly drive user engagement."
    },
    {
      id: "hr-4",
      category: "Weaknesses & Growth",
      question: "What is your biggest weakness and how are you working to overcome it?",
      tips: [
        "Pick a genuine non-fatal weakness (e.g. difficulty delegating, public speaking anxiety).",
        "Describe active steps you are taking to fix it."
      ],
      sampleAnswer: "Earlier, I used to find it challenging to speak spontaneously in front of large crowds. To address this, I actively joined our college Toastmasters club and began hosting technical workshop presentations. While I still get nervous, I now manage it effectively and communicate clearly under pressure."
    }
  ]
};
