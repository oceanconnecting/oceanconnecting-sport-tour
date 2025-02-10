import React from "react";

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
  city: string;
}
const FilterTag: React.FC<FilterTagProps> = ({
  places,
  activeTag,
  handleTag,
  tagList,
}) => {
  const filteredPlaces =
    activeTag === "All"
      ? places
      : places.filter((place) => place.city === activeTag);
  return (
    <div className="lg:border lg:border-background-200 lg:bg-background-100 lg:shadow-lg w-fit p-2 rounded-full justify-center gap-2 flex flex-row flex-wrap">
      {tagList.map((tag, i) => (
        <div
          onClick={() => handleTag(tag)}
          className={`py-1 px-4 cursor-pointer rounded-full ${
            activeTag === tag
              ? "bg-background-200 transition-all duration-300 text-text-900"
              : "hover:bg-background-200 transition-all duration-300"
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
