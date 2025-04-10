import { AnimatePresence } from 'framer-motion';
import { QuizProgress } from './components/QuizProgress';
import { TypeQuizQuestion } from './components/TypeQuizQuestion';
import { LeadForm } from './components/LeadForm';
import { TypeQuizResult } from './components/results/TypeQuizResult';
import { NameInput } from './components/onboarding/NameInput';
import { GenderSelect } from './components/onboarding/GenderSelect';
import { AgeSelect } from './components/onboarding/AgeSelect';
import { WelcomeScreen } from './components/onboarding/WelcomeScreen';
import { typeQuestions, quizTitle, quizSubtitle } from './data/typeQuizData';
import { useTypeQuiz } from './hooks/useTypeQuiz';
import './styles/index.css';

function App() {
  const {
    state,
    userData,
    result,
    typeCounts,
    handleAnswer,
    handleFormSubmit,
    setUserData,
    updateOnboarding,
    nextStep
  } = useTypeQuiz();

  const handleFormChange = (field: keyof typeof userData, value: string) => {
    setUserData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-secondary-100 py-12 px-4">
      <div className="quiz-container">
        {state.step !== 'welcome' && (
          <img
            src="https://nrojbwxcqochzwhmmkql.supabase.co/storage/v1/object/sign/coaches-profile-images/Ali%20Zuur-Arnerich%20PP.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb2FjaGVzLXByb2ZpbGUtaW1hZ2VzL0FsaSBadXVyLUFybmVyaWNoIFBQLnBuZyIsImlhdCI6MTc0MzUxNTY4MiwiZXhwIjoxNzc1MDUxNjgyfQ.AIpLkN6LP82W-oSk8__cqmpTadv34hDJB0XDCpDEiZ8"
            alt="Wellness with Ali"
            className="coach-image"
          />
        )}

        <AnimatePresence mode="wait">
          {state.step === 'welcome' && (
            <WelcomeScreen key="welcome" onStart={nextStep} />
          )}
          
          {state.step === 'form' && (
            <h2 key="form-title" className="text-2xl font-bold text-primary-600 mb-4">Where should we send you your results?</h2>
          )}
          
          {state.step !== 'result' && state.step !== 'questions' && state.step !== 'gender' && state.step !== 'age' && state.step !== 'welcome' && state.step !== 'name' && state.step !== 'form' && (
            <h1 key="quiz-title" className="quiz-title">{quizTitle}</h1>
          )}
          
          {state.step !== 'result' && state.step !== 'questions' && state.step !== 'form' && state.step !== 'gender' && state.step !== 'age' && state.step !== 'welcome' && state.step !== 'name' && (
            <p key="quiz-subtitle" className="quiz-subtitle">
              {quizSubtitle}
            </p>
          )}

          {state.step === 'name' && (
            <NameInput
              key="name-input"
              value={state.onboardingData.firstName}
              onChange={(name) => updateOnboarding({ firstName: name })}
              onNext={nextStep}
            />
          )}

          {state.step === 'gender' && (
            <GenderSelect
              key="gender-select"
              value={state.onboardingData.gender}
              onChange={(gender) => updateOnboarding({ gender })}
              onNext={nextStep}
            />
          )}

          {state.step === 'age' && (
            <AgeSelect
              key="age-select"
              value={state.onboardingData.ageGroup}
              onChange={(ageGroup) => updateOnboarding({ ageGroup })}
              onNext={nextStep}
              gender={state.onboardingData.gender}
            />
          )}

          {state.step === 'questions' && (
            <div key="questions-container">
              <QuizProgress
                currentQuestion={state.currentQuestion + 1}
                totalQuestions={typeQuestions.length}
              />
              <TypeQuizQuestion
                key={`question-${state.currentQuestion}`}
                question={{
                  ...typeQuestions[state.currentQuestion],
                  text: typeQuestions[state.currentQuestion].text.replace(
                    /\[Name\]/g,
                    state.onboardingData.firstName || ''
                  )
                }}
                selectedAnswer={null}
                onSelectAnswer={handleAnswer}
              />
            </div>
          )}

          {state.step === 'form' && (
            <LeadForm
              key="lead-form"
              userData={userData}
              onSubmit={handleFormSubmit}
              onChange={handleFormChange}
            />
          )}

          {state.step === 'result' && result && (
            <TypeQuizResult
              key="quiz-result"
              result={result}
              userData={userData}
              typeCounts={typeCounts}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;