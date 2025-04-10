import { Question, PersonalityType } from '../../../types/quizTypes';

export const quizTitle = "What's Your Movement Meditation Archetype? [QUIZ]";
export const quizSubtitle = "Discover your unique mind-body connection style and unlock your natural path to mindful movement";

export const typeQuestions: Question[] = [
  {
    id: 1,
    text: "When you're feeling stressed, what's your natural inclination for movement?",
    options: [
      {
        text: "Flow freely and let my body guide the way",
        type: "Fluid Integrator",
        icon: "🌊"
      },
      {
        text: "Find a stable position and ground myself",
        type: "Grounded Processor",
        icon: "🌳"
      },
      {
        text: "Move to a steady beat or pattern",
        type: "Rhythmic Releaser",
        icon: "🎵"
      },
      {
        text: "Express myself through spontaneous movement",
        type: "Intuitive Explorer",
        icon: "✨"
      }
    ]
  },
  {
    id: 2,
    text: "How do you prefer to learn new movement practices?",
    options: [
      {
        text: "By feeling into the movement and finding my flow",
        type: "Fluid Integrator",
        icon: "💫"
      },
      {
        text: "Through clear, step-by-step instruction",
        type: "Grounded Processor",
        icon: "📝"
      },
      {
        text: "By following a rhythmic pattern",
        type: "Rhythmic Releaser",
        icon: "🎶"
      },
      {
        text: "By experimenting and discovering my own way",
        type: "Intuitive Explorer",
        icon: "🔍"
      }
    ]
  },
  {
    id: 3,
    text: "What aspect of movement practice most helps you feel centered?",
    options: [
      {
        text: "The continuous flow of motion",
        type: "Fluid Integrator",
        icon: "🌊"
      },
      {
        text: "The feeling of being physically grounded",
        type: "Grounded Processor",
        icon: "⚓"
      },
      {
        text: "The repetitive, meditative rhythm",
        type: "Rhythmic Releaser",
        icon: "🎵"
      },
      {
        text: "The freedom to move authentically",
        type: "Intuitive Explorer",
        icon: "🦋"
      }
    ]
  },
  {
    id: 4,
    text: "In a group movement class, what draws your attention most?",
    options: [
      {
        text: "The fluid transitions between poses",
        type: "Fluid Integrator",
        icon: "🌊"
      },
      {
        text: "The proper alignment and form",
        type: "Grounded Processor",
        icon: "📏"
      },
      {
        text: "The synchronized rhythm of the group",
        type: "Rhythmic Releaser",
        icon: "👥"
      },
      {
        text: "The opportunity for creative expression",
        type: "Intuitive Explorer",
        icon: "🎨"
      }
    ]
  },
  {
    id: 5,
    text: "How do you prefer to process emotions through movement?",
    options: [
      {
        text: "Through flowing, continuous motion",
        type: "Fluid Integrator",
        icon: "💫"
      },
      {
        text: "Through steady, grounding movements",
        type: "Grounded Processor",
        icon: "🌳"
      },
      {
        text: "Through rhythmic, repetitive patterns",
        type: "Rhythmic Releaser",
        icon: "🎵"
      },
      {
        text: "Through spontaneous, expressive movement",
        type: "Intuitive Explorer",
        icon: "💃"
      }
    ]
  },
  {
    id: 6,
    text: "What environment helps you connect best with your practice?",
    options: [
      {
        text: "Open spaces that allow for fluid movement",
        type: "Fluid Integrator",
        icon: "🌅"
      },
      {
        text: "Stable, quiet spaces with good support",
        type: "Grounded Processor",
        icon: "🏠"
      },
      {
        text: "Spaces with good acoustics and rhythm",
        type: "Rhythmic Releaser",
        icon: "🎼"
      },
      {
        text: "Varied environments that inspire creativity",
        type: "Intuitive Explorer",
        icon: "🌈"
      }
    ]
  },
  {
    id: 7,
    text: "When learning a new movement sequence, what comes most naturally?",
    options: [
      {
        text: "Flowing between movements instinctively",
        type: "Fluid Integrator",
        icon: "🌊"
      },
      {
        text: "Breaking it down into clear steps",
        type: "Grounded Processor",
        icon: "📋"
      },
      {
        text: "Finding the underlying rhythm",
        type: "Rhythmic Releaser",
        icon: "🎵"
      },
      {
        text: "Adding your own creative variations",
        type: "Intuitive Explorer",
        icon: "✨"
      }
    ]
  },
  {
    id: 8,
    text: "How do you prefer to end a movement practice?",
    options: [
      {
        text: "Gradually slowing the flow of movement",
        type: "Fluid Integrator",
        icon: "🌊"
      },
      {
        text: "Finding a stable, grounded position",
        type: "Grounded Processor",
        icon: "🏔️"
      },
      {
        text: "Following a rhythmic cool-down",
        type: "Rhythmic Releaser",
        icon: "🎵"
      },
      {
        text: "Moving intuitively until naturally complete",
        type: "Intuitive Explorer",
        icon: "🦋"
      }
    ]
  },
  {
    id: 9,
    text: "What quality do you value most in a movement practice?",
    options: [
      {
        text: "Fluidity and continuous motion",
        type: "Fluid Integrator",
        icon: "🌊"
      },
      {
        text: "Stability and proper form",
        type: "Grounded Processor",
        icon: "🏛️"
      },
      {
        text: "Rhythm and repetition",
        type: "Rhythmic Releaser",
        icon: "🎵"
      },
      {
        text: "Freedom and creativity",
        type: "Intuitive Explorer",
        icon: "🎨"
      }
    ]
  }
];

export const movementTypes: PersonalityType[] = [
  {
    type: "Fluid Integrator",
    description: "You naturally process life through flowing, continuous movement. Your mind-body connection thrives on fluid motion, and you find peace in the gentle ebb and flow of movement meditation.",
    strengths: [
      "Natural ability to achieve flow states",
      "Strong emotional awareness through movement",
      "Adaptable to different movement styles",
      "Intuitive understanding of body-breath connection"
    ],
    challenges: [
      "May struggle with structured practices",
      "Can become scattered without proper grounding",
      "Might overlook technical details",
      "Sometimes resistant to stillness"
    ],
    tips: [
      "Explore flowing yoga styles like Vinyasa",
      "Practice Tai Chi or Qigong",
      "Incorporate dance meditation",
      "Balance flow with grounding practices"
    ],
    image: "https://example.com/fluid-integrator.jpg"
  },
  {
    type: "Grounded Processor",
    description: "You connect best with movement through stability and structure. Your mind-body practice thrives on clear form and steady progression, finding peace in grounded, deliberate movement.",
    strengths: [
      "Strong foundation in movement practices",
      "Excellent attention to form and alignment",
      "Consistent and dedicated approach",
      "Natural ability to maintain presence"
    ],
    challenges: [
      "May resist spontaneous movement",
      "Can become too focused on 'correct' form",
      "Might struggle with fluid transitions",
      "Sometimes overthinks movement"
    ],
    tips: [
      "Practice standing meditation",
      "Focus on alignment-based yoga",
      "Incorporate mindful walking",
      "Gradually explore gentle flow sequences"
    ],
    image: "https://example.com/grounded-processor.jpg"
  },
  {
    type: "Rhythmic Releaser",
    description: "You find your deepest mind-body connection through rhythmic, repetitive movement. Your practice thrives on pattern and beat, finding meditation in the steady pulse of motion.",
    strengths: [
      "Natural sense of rhythm and timing",
      "Strong ability to maintain consistent practice",
      "Effective stress release through repetition",
      "Excellent at group synchronization"
    ],
    challenges: [
      "May rely too heavily on external rhythm",
      "Can become stuck in familiar patterns",
      "Might resist unstructured movement",
      "Sometimes disconnected from internal rhythm"
    ],
    tips: [
      "Practice breath-synchronized movement",
      "Explore moving meditation with music",
      "Try walking meditation with counting",
      "Incorporate drumming meditation"
    ],
    image: "https://example.com/rhythmic-releaser.jpg"
  },
  {
    type: "Intuitive Explorer",
    description: "You connect with movement through spontaneous, creative expression. Your mind-body practice thrives on freedom and exploration, finding peace in authentic, unstructured movement.",
    strengths: [
      "Strong inner guidance system",
      "Natural creativity in movement",
      "Adaptive and flexible approach",
      "Deep trust in body wisdom"
    ],
    challenges: [
      "May struggle with consistent practice",
      "Can resist structured learning",
      "Might skip foundational elements",
      "Sometimes scattered in approach"
    ],
    tips: [
      "Practice intuitive dance meditation",
      "Explore authentic movement",
      "Create personal movement rituals",
      "Balance freedom with gentle structure"
    ],
    image: "https://example.com/intuitive-explorer.jpg"
  }
]; 