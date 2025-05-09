export interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    type: string;
    icon: string;
  }[];
  reverseScoring?: boolean;
}

export interface PersonalityType {
  type: string;
  description: string;
  strengths: string[];
  challenges: string[];
  tips: string[];
  image?: string;
} 