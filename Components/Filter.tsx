import React from 'react';
import clsx from 'clsx'; // Optional, you can manage without this as well.

interface FilterProps {
  activeTag: string;
  handleTag: (tag: string) => void;
  tagList: string[];
}

const Filter: React.FC<FilterProps> = ({ activeTag, handleTag, tagList }) => {
  return (
    <div className="flex flex-wrap justify-between gap-4 max-w-3xl mx-auto">
      {tagList.map((tag, i) => (
        <div
          key={i}
          role="button"
          tabIndex={0}
          onClick={() => handleTag(tag)}
          onKeyPress={(e) => e.key === 'Enter' && handleTag(tag)}
          className={clsx(
            'py-1 px-4 cursor-pointer rounded-full text-center transition-all',
            activeTag === tag
              ? 'bg-black/60 text-orange-400'
              : 'bg-white text-black hover:bg-gray-100'
          )}
        >
          {tag}
        </div>
      ))}
    </div>
  );
};

export default Filter;
