import React from 'react';

function Loading() {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <div className="w-12 h-12 border-4 border-gray-300 border-t-4 border-t-primary-300 rounded-full animate-spin"></div>
            <p>Loading...</p>
        </div>
    );
};

export default Loading;
