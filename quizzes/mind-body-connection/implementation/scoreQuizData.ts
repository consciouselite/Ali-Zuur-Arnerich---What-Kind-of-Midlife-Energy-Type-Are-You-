import { Question, PersonalityType } from "../../../src/types";

// Quiz title and subtitle
export const quizTitle = "The Mind-Body Connection Assessment [QUIZ]";
export const quizSubtitle = "Discover your somatic awareness score in just 3 minutes";

// Questions array with options
export const scoreQuestions: Question[] = [
  {
    id: 1,
    text: "[Name], when you experience stress, how aware are you of physical sensations in your body?",
    options: [
      { text: "Rarely notice any physical sensations", score: 1, icon: "😶" },
      { text: "Only notice when sensations become intense", score: 2, icon: "😐" },
      { text: "Sometimes notice moderate sensations", score: 3, icon: "🤔" },
      { text: "Often notice subtle bodily responses", score: 4, icon: "😌" },
      { text: "Consistently aware of even slight changes", score: 5, icon: "🧘" },
    ],
  },
  {
    id: 2,
    text: "How often do you notice your breathing patterns throughout the day?",
    options: [
      { text: "Almost never think about my breathing", score: 1, icon: "😮‍💨" },
      { text: "Only notice when breathing feels difficult", score: 2, icon: "😤" },
      { text: "Occasionally check my breathing pattern", score: 3, icon: "🌬️" },
      { text: "Regularly notice and adjust my breathing", score: 4, icon: "🫁" },
      { text: "Constantly aware of my breath quality", score: 5, icon: "🌟" },
    ],
  },
  {
    id: 3,
    text: "When you feel strong emotions, how connected are you to your body's response?",
    options: [
      { text: "Don't notice any physical changes", score: 1, icon: "😶" },
      { text: "Notice major physical reactions only", score: 2, icon: "😰" },
      { text: "Sometimes feel emotional sensations in body", score: 3, icon: "💭" },
      { text: "Often feel emotions manifest physically", score: 4, icon: "💫" },
      { text: "Always aware of emotional-body connection", score: 5, icon: "🎯" },
    ],
  },
  {
    id: 4,
    text: "[Name], how would you describe your movement awareness during daily activities?",
    options: [
      { text: "Move without much awareness", score: 1, icon: "🏃" },
      { text: "Notice movement only when uncomfortable", score: 2, icon: "🚶" },
      { text: "Sometimes pay attention to how I move", score: 3, icon: "🏃‍♂️" },
      { text: "Often move with mindful awareness", score: 4, icon: "🧘‍♂️" },
      { text: "Consistently move with full presence", score: 5, icon: "🌟" },
    ],
  },
  {
    id: 5,
    text: "How well can you identify physical sensations in different parts of your body?",
    options: [
      { text: "Struggle to notice body sensations", score: 1, icon: "😕" },
      { text: "Can only notice major sensations", score: 2, icon: "😅" },
      { text: "Notice sensations in some areas", score: 3, icon: "🎯" },
      { text: "Feel sensations in most body areas", score: 4, icon: "✨" },
      { text: "Experience detailed body awareness", score: 5, icon: "🎨" },
    ],
  },
  {
    id: 6,
    text: "When you're busy or stressed, how connected do you feel to your body?",
    options: [
      { text: "Completely disconnected from body", score: 1, icon: "😫" },
      { text: "Only notice body when in pain", score: 2, icon: "😣" },
      { text: "Maintain some body awareness", score: 3, icon: "🎭" },
      { text: "Stay mostly connected to body", score: 4, icon: "🎯" },
      { text: "Remain fully embodied even when busy", score: 5, icon: "🌟" },
    ],
  },
  {
    id: 7,
    text: "[Name], how would you rate your ability to use body awareness for stress relief?",
    options: [
      { text: "Don't know how to use body for stress relief", score: 1, icon: "😫" },
      { text: "Try but don't find it helpful", score: 2, icon: "😕" },
      { text: "Sometimes use body awareness for relief", score: 3, icon: "🎯" },
      { text: "Often use body practices for stress", score: 4, icon: "🌟" },
      { text: "Consistently use body for stress relief", score: 5, icon: "✨" },
    ],
  },
  {
    id: 8,
    text: "How well do you integrate movement with your emotional state?",
    options: [
      { text: "Don't connect movement and emotions", score: 1, icon: "😶" },
      { text: "Notice connection only in extreme cases", score: 2, icon: "😰" },
      { text: "Sometimes move based on emotions", score: 3, icon: "🎭" },
      { text: "Often move to process emotions", score: 4, icon: "💫" },
      { text: "Always integrate movement and emotions", score: 5, icon: "🌟" },
    ],
  },
  {
    id: 9,
    text: "How would you describe your daily body awareness practice?",
    options: [
      { text: "Don't practice body awareness", score: 1, icon: "😕" },
      { text: "Practice occasionally when reminded", score: 2, icon: "🎯" },
      { text: "Practice a few times per week", score: 3, icon: "🌟" },
      { text: "Practice most days", score: 4, icon: "✨" },
      { text: "Practice consistently throughout day", score: 5, icon: "🎨" },
    ],
  },
  {
    id: 10,
    text: "How well can you identify the early signs of physical tension?",
    options: [
      { text: "Don't notice tension until severe", score: 1, icon: "😫" },
      { text: "Notice only major tension", score: 2, icon: "😣" },
      { text: "Sometimes catch early tension", score: 3, icon: "🎯" },
      { text: "Often notice early tension", score: 4, icon: "🌟" },
      { text: "Always catch early tension signs", score: 5, icon: "✨" },
    ],
  },
  {
    id: 11,
    text: "[Name], how would you rate your ability to use body awareness for decision-making?",
    options: [
      { text: "Don't consider body in decisions", score: 1, icon: "😕" },
      { text: "Only consider body in major decisions", score: 2, icon: "🎯" },
      { text: "Sometimes check body for guidance", score: 3, icon: "🌟" },
      { text: "Often use body wisdom for decisions", score: 4, icon: "✨" },
      { text: "Always consult body for decisions", score: 5, icon: "🎨" },
    ],
  },
  {
    id: 12,
    text: "How well do you maintain body awareness during challenging situations?",
    options: [
      { text: "Lose all body awareness when stressed", score: 1, icon: "😫" },
      { text: "Struggle to maintain awareness", score: 2, icon: "😣" },
      { text: "Keep some awareness during challenges", score: 3, icon: "🎯" },
      { text: "Maintain good awareness most times", score: 4, icon: "🌟" },
      { text: "Stay fully embodied in all situations", score: 5, icon: "✨" },
    ],
  },
];

// Score profile definitions
export const scoreProfiles: PersonalityType[] = [
  {
    type: "Disconnection Zone",
    description: "You're experiencing significant separation between mind and body, which may be contributing to physical tension and emotional stress. This is a common starting point, and the good news is that even small changes can create meaningful shifts in your mind-body connection.",
    scoreRange: { min: 12, max: 24 },
    image: "https://example.com/disconnection.jpg",
    tips: [
      "Start with a 3-minute body scan each morning",
      "Practice simple breathing exercises twice daily",
      "Take short movement breaks every 2 hours",
      "Begin a basic emotion-body mapping journal"
    ],
  },
  {
    type: "Awareness Building",
    description: "You have foundational awareness but still miss important body signals during stress or emotional challenges. This is an exciting stage where small, consistent practices can create significant improvements in your mind-body connection.",
    scoreRange: { min: 25, max: 36 },
    image: "https://example.com/awareness-building.jpg",
    tips: [
      "Practice progressive muscle relaxation daily",
      "Integrate mindful walking into your routine",
      "Start a body sensation diary",
      "Try basic movement meditation practices"
    ],
  },
  {
    type: "Integrated Presence",
    description: "You maintain good mind-body connection in most situations but can deepen this awareness for healing. Your foundation is strong, and you're ready for more advanced practices to enhance your integration.",
    scoreRange: { min: 37, max: 48 },
    image: "https://example.com/integrated-presence.jpg",
    tips: [
      "Explore advanced body scan techniques",
      "Practice complex movement meditation",
      "Develop emotional-body integration exercises",
      "Create personalized movement rituals"
    ],
  },
  {
    type: "Embodied Wisdom",
    description: "You have exceptional mind-body integration and can use this foundation for advanced healing practices. Your deep awareness allows you to navigate challenges with grace and support others in their journey.",
    scoreRange: { min: 49, max: 60 },
    image: "https://example.com/embodied-wisdom.jpg",
    tips: [
      "Share your practices with others",
      "Explore advanced somatic techniques",
      "Create challenging integration scenarios",
      "Develop teaching and mentoring skills"
    ],
  },
]; 