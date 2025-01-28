import React from 'react';
import ImageCard from '@/Components/ImageCard';

interface FilterTagProps {
  places: Place[];
  activeTag: string;
  handleTag: (tag: string) => void;
  tagList: string[];
}

interface Place {
  title: string;
  descr: string;
  image: string;
  city:string ;
}
const FilterTag: React.FC<FilterTagProps> = ({ places, activeTag, handleTag, tagList }) => {
  
  const filteredPlaces = activeTag === 'All' ? places : places.filter((place) => place.city === activeTag);
  return (
    <div className="w-[60%] flex flex-row justify-between">
      {tagList.map((tag, i) => (
        <div
          onClick={() => handleTag(tag)}
          className={`py-1 px-4 cursor-pointer rounded-full ${
            activeTag === tag ? 'bg-primary-700 transition-all duration-300 text-text-100' : 'hover:bg-primary-900 transition-all duration-300'
          }`}
          key={i}
        >
          {tag}
        </div>
      ))}
    </div>
    
  );
};

export default FilterTag;
