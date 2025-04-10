import { motion } from 'framer-motion';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

export const QuizProgress: React.FC<QuizProgressProps> = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2 text-sm">
        <span className="text-primary-600">Question {currentQuestion} of {totalQuestions}</span>
        <span className="text-primary-600">{Math.round(progress)}% complete</span>
      </div>
      <div className="h-2 bg-secondary-200 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-primary-600 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
};