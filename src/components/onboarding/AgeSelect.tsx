import { motion } from 'framer-motion';

interface AgeSelectProps {
  value: string | null;
  onChange: (age: '18-25' | '26-35' | '36-45' | '46+') => void;
  onNext: () => void;
  gender: 'male' | 'female' | null;
}

const maleAgeImages = {
  '18-25': 'https://images.pexels.com/photos/6679377/pexels-photo-6679377.jpeg?auto=compress&cs=tinysrgb&w=400',
  '26-35': 'https://images.pexels.com/photos/804009/pexels-photo-804009.jpeg?auto=compress&cs=tinysrgb&w=400',
  '36-45': 'https://images.pexels.com/photos/3525908/pexels-photo-3525908.jpeg?auto=compress&cs=tinysrgb&w=400',
  '46+': 'https://images.pexels.com/photos/262391/pexels-photo-262391.jpeg?auto=compress&cs=tinysrgb&w=400',
};

const femaleAgeImages = {
  '18-25': 'https://images.pexels.com/photos/1447771/pexels-photo-1447771.jpeg?auto=compress&cs=tinysrgb&w=400',
  '26-35': 'https://images.pexels.com/photos/325865/pexels-photo-325865.jpeg?auto=compress&cs=tinysrgb&w=400',
  '36-45': 'https://images.pexels.com/photos/7752788/pexels-photo-7752788.jpeg?auto=compress&cs=tinysrgb&w=400',
  '46+': 'https://images.pexels.com/photos/8417210/pexels-photo-8417210.jpeg?auto=compress&cs=tinysrgb&w=400',
};

const ageGroups = [
  {
    range: '18-25',
    icon: '🌱',
    title: '18-25 years'
  },
  {
    range: '26-35',
    icon: '🌿',
    title: '26-35 years'
  },
  {
    range: '36-45',
    icon: '🌊',
    title: '36-45 years'
  },
  {
    range: '46+',
    icon: '🌳',
    title: '46+ years'
  }
] as const;

export const AgeSelect: React.FC<AgeSelectProps> = ({ value, onChange, onNext, gender }) => {
  // Determine which set of images to use based on gender
  const imageSet = gender === 'male' ? maleAgeImages : femaleAgeImages;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full"
    >
      <h2 className="text-xl sm:text-2xl font-bold text-primary-700 mb-4 sm:mb-6">Which age group do you belong to?</h2>
      <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-3xl mx-auto">
        {ageGroups.map((group) => (
          <button
            key={group.range}
            onClick={() => {
              onChange(group.range);
              onNext();
            }}
            className={`age-option ${value === group.range ? 'age-option-selected' : ''}`}
          >
            <div className="aspect-square overflow-hidden rounded-lg mb-2 sm:mb-3">
              <img
                src={imageSet[group.range]}
                alt={group.title}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-sm sm:text-lg text-primary-700">
              {group.icon} {group.title}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
};