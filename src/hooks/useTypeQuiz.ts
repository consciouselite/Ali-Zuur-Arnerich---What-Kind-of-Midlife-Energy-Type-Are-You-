import { useState } from 'react';
import { QuizState, UserData, OnboardingData, QuizStep } from '../types';
import { personalityTypes } from '../data/typeQuizData';
import { quizService } from '../services/quiz.service';

export const useTypeQuiz = () => {
  const [state, setState] = useState<QuizState>({
    step: 'welcome',
    currentQuestion: 0,
    answers: [],
    onboardingData: {
      firstName: '',
      gender: null,
      ageGroup: null
    }
  });

  const [userData, setUserData] = useState<UserData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    gender: null,
    ageGroup: null
  });

  const [result, setResult] = useState<any>(null);
  const [typeCounts, setTypeCounts] = useState<Record<string, number>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleAnswer = (type: string) => {
    const newAnswers = [...state.answers, type];
    setState((prev: QuizState) => ({
      ...prev,
      answers: newAnswers,
      currentQuestion: prev.currentQuestion + 1,
      step: prev.currentQuestion === 8 ? 'form' : 'questions' // We have 9 questions (0-8)
    }));
  };

  const calculateResult = () => {
    // Count frequency of each type in answers
    const counts: Record<string, number> = state.answers.reduce((acc: Record<string, number>, type: string) => {
      acc[type] = (acc[type] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    // Find the type(s) with highest count
    let maxCount = 0;
    let dominantTypes: string[] = [];

    Object.entries(counts).forEach(([type, count]) => {
      if (count > maxCount) {
        maxCount = count;
        dominantTypes = [type];
      } else if (count === maxCount) {
        dominantTypes.push(type);
      }
    });

    // Type mapping to ensure we match answer types to full personality type names
    const typeMapping: Record<string, string> = {
      "Phoenix Rising": "The Phoenix Rising",
      "Wise Sage": "The Wise Sage",
      "Creative Catalyst": "The Creative Catalyst",
      "Grounded Guardian": "The Grounded Guardian"
    };

    // Default to first dominant type
    let dominantType = dominantTypes[0]; 
    
    // Convert the answer type to the full personality type name
    if (dominantType && typeMapping[dominantType]) {
      dominantType = typeMapping[dominantType];
    }
    
    // If there are multiple dominant types, pick the first one that has a mapping
    if (dominantTypes.length > 1) {
      for (const type of dominantTypes) {
        if (typeMapping[type]) {
          dominantType = typeMapping[type];
          break;
        }
      }
    }

    // Get the full profile for the dominant type
    const profile = personalityTypes.find(p => p.type === dominantType);
    
    // Fallback if no profile is found
    if (!profile) {
      console.warn(`No profile found for dominant type: ${dominantType}. Falling back to first personality type.`);
      return {
        profile: personalityTypes[0],
        dominantType: personalityTypes[0].type,
        dominancePercentage: 0,
        typeCounts: counts
      };
    }

    // Calculate percentage of dominance
    const totalQuestions = state.answers.length;
    const dominancePercentage = totalQuestions > 0 ? (maxCount / totalQuestions) * 100 : 0;

    return { 
      profile, 
      dominantType, 
      dominancePercentage, 
      typeCounts: counts 
    };
  };

  const updateOnboarding = (data: Partial<OnboardingData>) => {
    setState((prev: QuizState) => ({
      ...prev,
      onboardingData: { ...prev.onboardingData, ...data }
    }));
  };

  const nextStep = () => {
    setState((prev: QuizState) => {
      const steps: QuizStep[] = ['welcome', 'name', 'gender', 'age', 'questions', 'form', 'result'];
      const currentIndex = steps.indexOf(prev.step);
      const nextStep = steps[currentIndex + 1];
      return { ...prev, step: nextStep };
    });
  };

  const handleFormSubmit = async (formData: Partial<UserData>) => {
    setIsSubmitting(true);
    setError(null);

    try {
      const fullUserData = {
        ...userData,
        ...state.onboardingData,
        ...formData,
        ageGroup: formData.ageGroup || userData.ageGroup || state.onboardingData.ageGroup || null
      };

      const { profile, typeCounts: counts, dominantType } = calculateResult();
      setResult(profile);
      setTypeCounts(counts);

      try {
        // Try to save to server but don't block moving to results if it fails
        await quizService.saveQuizResults(
          fullUserData,
          0, // No score in type framework
          dominantType,
          state.answers.map(_ => 0) // Convert type answers to scores (all 0)
        );
      } catch (serverError) {
        console.error('Error saving quiz results to server:', serverError);
        setError('Failed to save quiz results, but your results are still available.');
        // Continue to results page despite the error
      }

      // Always move to results page, even if saving to server fails
      setState((prev: QuizState) => ({ ...prev, step: 'result' }));
    } catch (err) {
      console.error('Error calculating quiz results:', err);
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    state,
    userData,
    result,
    typeCounts,
    isSubmitting,
    error,
    handleAnswer,
    handleFormSubmit,
    calculateResult,
    setUserData,
    updateOnboarding,
    nextStep
  };
}; 