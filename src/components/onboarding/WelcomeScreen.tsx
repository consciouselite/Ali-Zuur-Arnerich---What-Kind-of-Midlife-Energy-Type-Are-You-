import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { quizTitle, quizSubtitle, typeQuestions } from '../../data/typeQuizData';

interface WelcomeScreenProps {
  onStart: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  // Strip the [QUIZ] suffix from the title if present
  const displayTitle = quizTitle.replace('[QUIZ]', '').trim();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center max-w-lg mx-auto"
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="mb-4 sm:mb-8"
      >
        <img 
          src="https://nrojbwxcqochzwhmmkql.supabase.co/storage/v1/object/sign/coaches-profile-images/Ali%20Zuur-Arnerich%20PP.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb2FjaGVzLXByb2ZpbGUtaW1hZ2VzL0FsaSBadXVyLUFybmVyaWNoIFBQLnBuZyIsImlhdCI6MTc0MzUxNTY4MiwiZXhwIjoxNzc1MDUxNjgyfQ.AIpLkN6LP82W-oSk8__cqmpTadv34hDJB0XDCpDEiZ8" 
          alt="Wellness with Ali" 
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full mx-auto shadow-lg border-4 border-primary-100 object-cover"
        />
      </motion.div>
      
      <motion.h1
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-700 mb-3 sm:mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        {displayTitle}
      </motion.h1>
      
      <motion.p
        className="text-primary-600 text-base sm:text-lg mb-6 sm:mb-8 max-w-md mx-auto px-2 sm:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        {quizSubtitle}
      </motion.p>
      
      <motion.div
        className="space-y-2 sm:space-y-3 mb-6 sm:mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <div className="flex items-center justify-center gap-2 text-primary-600">
          <div className="w-2 h-2 rounded-full bg-primary-600"></div>
          <span className="text-sm sm:text-base">{typeQuestions.length} simple questions</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-primary-600">
          <div className="w-2 h-2 rounded-full bg-primary-600"></div>
          <span className="text-sm sm:text-base">Takes only 3 minutes</span>
        </div>
        <div className="flex items-center justify-center gap-2 text-primary-600">
          <div className="w-2 h-2 rounded-full bg-primary-600"></div>
          <span className="text-sm sm:text-base">Get instant results</span>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="mt-6 sm:mt-8"
      >
        <button
          onClick={onStart}
          className="primary-button flex items-center justify-center gap-2 px-4 sm:px-8 py-3 sm:py-4 mx-auto text-base sm:text-lg"
        >
          <span>Get Started</span>
          <ArrowRight size={18} className="inline-block" />
        </button>
      </motion.div>
      
      <motion.p
        className="mt-6 sm:mt-8 text-xs sm:text-sm text-primary-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 1.2 }}
      >
        Join thousands of women navigating midlife with Wellness with Ali
      </motion.p>
    </motion.div>
  );
}; 