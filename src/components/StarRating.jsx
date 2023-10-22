import React from 'react';
import { FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';

const StarRating = ({ rating }) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating); // Estrelas cheias
  const decimalPart = rating - fullStars; // Parte decimal (meia estrela)

  const starElements = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= fullStars) {
      starElements.push(<FaStar key={i} color="yellow" size={40} />);
    } else if (i === fullStars + 1 && decimalPart >= 0.5) {
      starElements.push(<FaStarHalf key={i} color="yellow" size={40} />);
    } else {
      starElements.push(<FaRegStar key={i} color="yellow" size={40} />);
    }
  }

  return (
    <div className="star-rating">
      {starElements}
    </div>
  );
};

export default StarRating;
