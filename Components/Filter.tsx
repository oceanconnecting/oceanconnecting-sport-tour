import React from "react";
import clsx from "clsx"; // Optional, you can manage without this as well.
import FilterTag from "@/sections/places/filterTag";
import { useState } from "react";
interface places {
  title: string;
  descr: string;
  image: string;
  city: string;
}

interface FilterProps {
  activeTag: string;
  handleTag: (tag: string) => void;
  tagList: string[];
  places: places[];
}

const Filter: React.FC<FilterProps> = ({
  places,
  activeTag,
  handleTag,
  tagList,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-wrap justify-center gap-4 w-full">
      <FilterTag
        places={places}
        activeTag={activeTag}
        handleTag={handleTag}
        tagList={tagList}
      />
    </div>
  );
};

export default Filter;
