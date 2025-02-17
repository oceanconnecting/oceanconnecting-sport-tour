import React from 'react';


interface ParticipantCounterProps {
    label: string;
    value: number;
    onDecrement: () => void;
    onIncrement: () => void;
  }
const ParticipantCounter: React.FC<ParticipantCounterProps> = ({ label, value, onDecrement, onIncrement }) => (
    <div>
      <label className="block text-sm font-medium mb-2">{label}</label>
      <div className="flex items-center justify-center gap-20">
        <button
          type="button"
          onClick={onDecrement}
          className="p-2 font-medium bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
          aria-label="Decrease number of participants"
        >
          -
        </button>
        <span className="px-6 font-semibold">{value}</span>
        <button
          type="button"
          onClick={onIncrement}
          className="p-2 font-medium bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
          aria-label="Increase number of participants"
        >
          +
        </button>
      </div>
    </div>
  );
  export default ParticipantCounter;