
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ALL_CATEGORIES, SoundCategory } from '@/models/sound-effects';

interface CategoryFiltersProps {
  selectedCategory: SoundCategory | 'all';
  onSelectCategory: (category: SoundCategory | 'all') => void;
}

const CategoryFilters = ({ 
  selectedCategory,
  onSelectCategory
}: CategoryFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedCategory === 'all' ? 'default' : 'outline'}
        size="sm"
        onClick={() => onSelectCategory('all')}
        className={selectedCategory === 'all' 
          ? 'bg-sound-purple hover:bg-sound-purple/90' 
          : 'hover:bg-sound-purple/10 hover:text-sound-purple'
        }
      >
        All
      </Button>
      
      {ALL_CATEGORIES.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'outline'}
          size="sm"
          onClick={() => onSelectCategory(category)}
          className={selectedCategory === category 
            ? 'bg-sound-purple hover:bg-sound-purple/90' 
            : 'hover:bg-sound-purple/10 hover:text-sound-purple'
          }
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilters;
