import React from 'react';

interface ParticipantCounterProps {
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

const ParticipantCounter: React.FC<ParticipantCounterProps> = ({ value, onDecrement, onIncrement }) => (
  <div className="flex w-full gap-1 bg-gray-50 rounded-3xl  justify-between items-center px-6 py-3 shadow-lg border border-gray-100">
    <button
      type="button"
      onClick={onDecrement}
      className="w-12 h-12 flex items-center justify-center bg-white text-gray-700 font-bold text-2xl rounded-full shadow-sm border border-gray-300 hover:bg-gray-200 active:scale-90 transition-all ease-in-out duration-200"
      aria-label="Decrease number of participants"
    >
      −
    </button>
    
    <span className="text-2xl font-semibold text-gray-900">{value}</span>
    
    <button
      type="button"
      onClick={onIncrement}
      className="w-12 h-12 flex items-center justify-center bg-white text-gray-700 font-bold text-2xl rounded-full shadow-sm border border-gray-300 hover:bg-gray-200 active:scale-90 transition-all ease-in-out duration-200"
      aria-label="Increase number of participants"
    >
      +
    </button>
  </div>
);

export default ParticipantCounter;
