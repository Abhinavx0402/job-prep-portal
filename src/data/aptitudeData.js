export const APTITUDE_DATA = {
  quant: {
    title: "Quantitative Aptitude",
    icon: "Calculator",
    color: "from-blue-500 to-indigo-600",
    topics: [
      {
        id: "q-1",
        name: "Percentages & Profit Loss",
        formulas: [
          "Percentage Change = ((New Value - Old Value) / Old Value) * 100",
          "Profit % = (Profit / Cost Price) * 100",
          "Loss % = (Loss / Cost Price) * 100",
          "Selling Price = Cost Price * ((100 + Profit %) / 100)"
        ],
        trick: "To calculate X% of Y fast, remember X% of Y = Y% of X (e.g. 16% of 50 = 50% of 16 = 8).",
        questions: [
          {
            id: "q1-1",
            question: "A product is sold at a 20% discount on the marked price of ₹1,500. If the seller still makes a 20% profit on the cost price, what is the cost price?",
            options: ["₹1,000", "₹1,200", "₹1,150", "₹1,250"],
            correctAnswer: 0,
            explanation: "Selling Price = Marked Price * (1 - 0.20) = 1500 * 0.80 = ₹1,200.\nSince Selling Price = Cost Price * 1.20 => 1200 = CP * 1.20 => CP = 1200 / 1.20 = ₹1,000."
          },
          {
            id: "q1-2",
            question: "If A's salary is 25% more than B's salary, by what percentage is B's salary less than A's salary?",
            options: ["20%", "25%", "15%", "18.5%"],
            correctAnswer: 0,
            explanation: "Formula: (R / (100 + R)) * 100 where R = 25.\n(25 / 125) * 100 = 1/5 * 100 = 20%."
          }
        ]
      },
      {
        id: "q-2",
        name: "Time, Speed & Distance",
        formulas: [
          "Speed = Distance / Time",
          "Average Speed = (Total Distance) / (Total Time)",
          "If distance is equal: Average Speed = (2 * S1 * S2) / (S1 + S2)",
          "1 m/s = (18/5) km/h | 1 km/h = (5/18) m/s"
        ],
        trick: "When two objects move in opposite directions, relative speed = S1 + S2. When moving in the same direction, relative speed = |S1 - S2|.",
        questions: [
          {
            id: "q2-1",
            question: "A train 150 meters long crosses a telegraph post in 9 seconds. What is the speed of the train in km/h?",
            options: ["50 km/h", "60 km/h", "54 km/h", "72 km/h"],
            correctAnswer: 1,
            explanation: "Speed in m/s = 150 / 9 = 50/3 m/s.\nSpeed in km/h = (50/3) * (18/5) = 10 * 6 = 60 km/h."
          }
        ]
      },
      {
        id: "q-3",
        name: "Permutations, Combinations & Probability",
        formulas: [
          "nPr = n! / (n - r)!",
          "nCr = n! / (r! * (n - r)!)",
          "Probability P(E) = (Favorable Outcomes) / (Total Outcomes)"
        ],
        trick: "nCr = nC(n-r). For example, 10C8 = 10C2 = (10 * 9) / 2 = 45.",
        questions: [
          {
            id: "q3-1",
            question: "Two dice are thrown simultaneously. What is the probability of getting a sum equal to 8?",
            options: ["5/36", "1/6", "7/36", "4/36"],
            correctAnswer: 0,
            explanation: "Total pairs when 2 dice are thrown = 6 * 6 = 36.\nPairs giving sum 8: (2,6), (3,5), (4,4), (5,3), (6,2) -> 5 favorable outcomes.\nProbability = 5 / 36."
          }
        ]
      }
    ]
  },
  logical: {
    title: "Logical Reasoning",
    icon: "Brain",
    color: "from-purple-500 to-pink-600",
    topics: [
      {
        id: "l-1",
        name: "Syllogisms & Logical Deductions",
        formulas: [
          "Universal Affirmative: All A are B",
          "Universal Negative: No A is B",
          "Particular Affirmative: Some A are B",
          "Particular Negative: Some A are not B"
        ],
        trick: "Use Euler Venn Diagram circles to visualize premise overlap. Never assume beyond given statements.",
        questions: [
          {
            id: "l1-1",
            question: "Statements: 1. All coders are logical. 2. Some logical people are engineers.\nConclusions: I. Some coders are engineers. II. Some engineers are logical.",
            options: ["Only conclusion I follows", "Only conclusion II follows", "Both follow", "Neither follows"],
            correctAnswer: 1,
            explanation: "Statement 2 ('Some logical people are engineers') directly converts to 'Some engineers are logical' (II is valid). Conclusion I does not necessarily follow from the Venn diagram."
          }
        ]
      },
      {
        id: "l-2",
        name: "Coding-Decoding & Blood Relations",
        formulas: [
          "Alphabet Positions: A=1, B=2 ... Z=26",
          "Reverse Positions (EJOTY rule & sum=27): A=26, Z=1 (A+Z = 27)"
        ],
        trick: "Remember 'EJOTY' for positions 5, 10, 15, 20, 25 to quickly pinpoint letter indices.",
        questions: [
          {
            id: "l2-1",
            question: "If COMPUTER is written as RFUVQNPC in a code, how is MEDICINE written in that same code?",
            options: ["EOJDEJFM", "EOJDJEFM", "MFEDJJOE", "EOJDJEFN"],
            correctAnswer: 1,
            explanation: "Reverse string and add 1 to inner letters:\nCOMPUTER -> Reverse: RETUPMOC -> R, E+1=F, T+1=U, U+1=V, P+1=Q, M+1=N, O+1=P, C -> RFUVQNPC.\nMEDICINE -> Reverse: ENICIDEM -> E, N+1=O, I+1=J, C+1=D, I+1=J, D+1=E, E+1=F, M -> EOJDJEFM."
          }
        ]
      }
    ]
  },
  verbal: {
    title: "Verbal Ability",
    icon: "BookOpen",
    color: "from-emerald-500 to-teal-600",
    topics: [
      {
        id: "v-1",
        name: "Sentence Correction & Grammar",
        formulas: [
          "Subject-Verb Agreement: Singular subject takes singular verb.",
          "Parallelism: Keep verbs in identical grammatical tense format in lists.",
          "Dangling Modifiers: Ensure modifiers immediately touch the subject they describe."
        ],
        trick: "Eliminate options with passive voice redundancy or pronoun ambiguity first.",
        questions: [
          {
            id: "v1-1",
            question: "Choose the grammatically correct sentence:",
            options: [
              "Neither the manager nor the employees was present in the meeting.",
              "Neither the manager nor the employees were present in the meeting.",
              "Neither the manager or the employees was present in the meeting.",
              "Neither the manager nor the employees has been present in the meeting."
            ],
            correctAnswer: 1,
            explanation: "Rule of Proximity: When subjects are joined by 'neither...nor', the verb agrees with the subject closest to it. Here 'employees' is plural, so 'were' is correct."
          }
        ]
      }
    ]
  }
};
