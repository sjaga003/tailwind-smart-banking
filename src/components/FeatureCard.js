import React from 'react';

const FeatureCard = ({ cardInfo }) => {
  return (
    <div>
      <div>
        <img src={cardInfo.icon} alt={cardInfo.title} />
      </div>
      <span>{cardInfo.title}</span>
      <span>{cardInfo.content}</span>
    </div>
  );
};

export default FeatureCard;
