import React from 'react';

interface RatingProps {
    rating: number;
    maxRating?: number;
}

const Rating: React.FC<RatingProps> = ({ rating, maxRating = 5 }) => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
        stars.push(
            <span key={i} style={{ color: i <= rating ? 'gold' : 'gray' }}>
                ★
            </span>
        );
    }

    return <div>{stars}</div>;
};

export default Rating;