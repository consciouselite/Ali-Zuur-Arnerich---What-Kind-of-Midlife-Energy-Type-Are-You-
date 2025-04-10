// Quiz title and subtitle
export const quizTitle = "What Kind of Midlife Energy Type Are You? [QUIZ]";
export const quizSubtitle = "Discover your unique midlife energy signature and how it's shaping your next chapter in just 3 minutes";

// Questions array with type-specific options
export const typeQuestions: Question[] = [
  {
    id: 1,
    text: "[Name], when you think about your next chapter in life, what's your first instinct?",
    options: [
      {
        text: "I'm ready to spread my wings and soar into something completely new",
        type: "Phoenix Rising",
        icon: "🦅",
      },
      {
        text: "Let me reflect on what I've learned and how I can share it",
        type: "Wise Sage",
        icon: "🧠",
      },
      {
        text: "I'm buzzing with ideas about creative ways to reinvent myself",
        type: "Creative Catalyst",
        icon: "💡",
      },
      {
        text: "I want to build something stable and meaningful that lasts",
        type: "Grounded Guardian",
        icon: "🏠",
      },
    ],
  },
  {
    id: 2,
    text: "Your friends are planning a group trip to celebrate a milestone birthday. What's your natural role?",
    options: [
      {
        text: "I'll be the one dreaming up epic adventures and possibilities",
        type: "Phoenix Rising",
        icon: "🌟",
      },
      {
        text: "I'll help everyone find common ground and make sure everyone's voice is heard",
        type: "Wise Sage",
        icon: "🤝",
      },
      {
        text: "I'll design the most unique and memorable experience possible",
        type: "Creative Catalyst",
        icon: "🎨",
      },
      {
        text: "I'll handle the practical details and make sure everything runs smoothly",
        type: "Grounded Guardian",
        icon: "📋",
      },
    ],
  },
  {
    id: 3,
    text: "When facing a major life change, what's your go-to move?",
    options: [
      {
        text: "I see it as an opportunity for transformation and growth",
        type: "Phoenix Rising",
        icon: "🔥",
      },
      {
        text: "I take time to consider all angles and find the wisest path forward",
        type: "Wise Sage",
        icon: "⚖️",
      },
      {
        text: "I get excited about all the creative possibilities it opens up",
        type: "Creative Catalyst",
        icon: "🎯",
      },
      {
        text: "I focus on creating stability and security in the midst of change",
        type: "Grounded Guardian",
        icon: "🛡️",
      },
    ],
  },
  {
    id: 4,
    text: "[Name], what energizes you most about this stage of life?",
    options: [
      {
        text: "The freedom to reinvent myself and start fresh",
        type: "Phoenix Rising",
        icon: "🌅",
      },
      {
        text: "The wisdom and perspective I've gained along the way",
        type: "Wise Sage",
        icon: "💫",
      },
      {
        text: "The creative potential and new ideas that keep flowing",
        type: "Creative Catalyst",
        icon: "✨",
      },
      {
        text: "The deep roots and meaningful connections I've built",
        type: "Grounded Guardian",
        icon: "🌳",
      },
    ],
  },
  {
    id: 5,
    text: "When someone asks for your advice about a life transition, what's your natural approach?",
    options: [
      {
        text: "I help them see the exciting possibilities ahead",
        type: "Phoenix Rising",
        icon: "🚀",
      },
      {
        text: "I guide them to consider multiple perspectives and find their own wisdom",
        type: "Wise Sage",
        icon: "🎭",
      },
      {
        text: "I brainstorm creative solutions and new approaches with them",
        type: "Creative Catalyst",
        icon: "🎨",
      },
      {
        text: "I help them create a practical, step-by-step plan",
        type: "Grounded Guardian",
        icon: "🏗️",
      },
    ],
  },
  {
    id: 6,
    text: "What's your ideal way to spend a free weekend?",
    options: [
      {
        text: "Trying something completely new and adventurous",
        type: "Phoenix Rising",
        icon: "🏃‍♂️",
      },
      {
        text: "Deep conversations and meaningful reflection",
        type: "Wise Sage",
        icon: "📚",
      },
      {
        text: "Exploring creative projects and artistic expression",
        type: "Creative Catalyst",
        icon: "🎭",
      },
      {
        text: "Creating a peaceful, organized space and connecting with loved ones",
        type: "Grounded Guardian",
        icon: "🏡",
      },
    ],
  },
  {
    id: 7,
    text: "[Name], when you think about your legacy, what matters most to you?",
    options: [
      {
        text: "The transformations and positive changes I've inspired",
        type: "Phoenix Rising",
        icon: "🌟",
      },
      {
        text: "The wisdom and insights I've shared with others",
        type: "Wise Sage",
        icon: "💡",
      },
      {
        text: "The creative contributions and innovations I've brought to life",
        type: "Creative Catalyst",
        icon: "🎨",
      },
      {
        text: "The stable foundation and lasting impact I've built",
        type: "Grounded Guardian",
        icon: "🏛️",
      },
    ],
  },
  {
    id: 8,
    text: "What's your superpower in group situations?",
    options: [
      {
        text: "I bring energy and inspiration to any situation",
        type: "Phoenix Rising",
        icon: "⚡",
      },
      {
        text: "I help everyone find common ground and understanding",
        type: "Wise Sage",
        icon: "🎯",
      },
      {
        text: "I spark new ideas and creative solutions",
        type: "Creative Catalyst",
        icon: "💫",
      },
      {
        text: "I create a sense of stability and reliability",
        type: "Grounded Guardian",
        icon: "🛡️",
      },
    ],
  },
  {
    id: 9,
    text: "When facing a challenge, what's your first instinct?",
    options: [
      {
        text: "I see it as an opportunity for growth and transformation",
        type: "Phoenix Rising",
        icon: "🔥",
      },
      {
        text: "I take time to analyze and understand all aspects",
        type: "Wise Sage",
        icon: "🧠",
      },
      {
        text: "I get excited about finding creative solutions",
        type: "Creative Catalyst",
        icon: "💡",
      },
      {
        text: "I focus on creating a stable, practical solution",
        type: "Grounded Guardian",
        icon: "🏗️",
      },
    ],
  },
];

// Type definitions
export const midlifeEnergyTypes: PersonalityType[] = [
  {
    type: "The Phoenix Rising",
    description: "You're a natural transformer who sees every challenge as an opportunity for growth. Your superpower is your ability to rise from the ashes, stronger and wiser than before. You have an incredible gift for helping others see the possibilities in their own transformations.",
    strengths: [
      "Remarkable resilience and adaptability",
      "Natural talent for seeing potential where others see problems",
      "Ability to inspire others through personal transformation",
      "Deep wisdom from life experience",
    ],
    challenges: [
      "Learning to balance transformation with stability",
      "Developing patience with the renewal process",
      "Building sustainable support systems",
    ],
    tips: [
      "Start noticing how your natural ability to transform challenges can create lasting positive change in your life and the lives of others",
    ],
    image: "https://example.com/phoenix-rising.jpg",
  },
  {
    type: "The Wise Sage",
    description: "You're a natural wisdom keeper who sees the deeper patterns in life. Your superpower is your ability to understand multiple perspectives and guide others to their own insights. You have an incredible gift for helping people find clarity in complex situations.",
    strengths: [
      "Exceptional emotional intelligence",
      "Natural talent for conflict resolution",
      "Ability to see patterns across different life areas",
      "Deep understanding of human nature",
    ],
    challenges: [
      "Learning to balance wisdom with action",
      "Developing more direct communication",
      "Building confidence in sharing insights",
    ],
    tips: [
      "Start noticing how your natural wisdom can create deeper connections and understanding in your relationships and community",
    ],
    image: "https://example.com/wise-sage.jpg",
  },
  {
    type: "The Creative Catalyst",
    description: "You're a natural innovator who sees possibilities everywhere. Your superpower is your ability to connect seemingly unrelated ideas and create something new. You have an incredible gift for inspiring others to think outside the box.",
    strengths: [
      "Remarkable creativity and innovation",
      "Natural talent for seeing new solutions",
      "Ability to inspire others with fresh ideas",
      "Strong adaptability to change",
    ],
    challenges: [
      "Learning to balance creativity with practicality",
      "Developing follow-through on ideas",
      "Building sustainable creative practices",
    ],
    tips: [
      "Start noticing how your natural creativity can bring new energy and possibilities to your life and the lives of others",
    ],
    image: "https://example.com/creative-catalyst.jpg",
  },
  {
    type: "The Grounded Guardian",
    description: "You're a natural stabilizer who creates security and reliability. Your superpower is your ability to build lasting foundations and maintain what matters most. You have an incredible gift for helping others feel safe and supported.",
    strengths: [
      "Exceptional reliability and consistency",
      "Natural talent for creating stability",
      "Ability to maintain long-term relationships",
      "Deep understanding of practical needs",
    ],
    challenges: [
      "Learning to balance stability with growth",
      "Developing flexibility when needed",
      "Building confidence in change",
    ],
    tips: [
      "Start noticing how your natural ability to create stability can support both your growth and the growth of those around you",
    ],
    image: "https://example.com/grounded-guardian.jpg",
  },
]; 