import React from 'react';

const FeatureCard = ({ cardInfo }) => {
  return (
    <div className="flex flex-col text-center items-center py-8 md:items-start md:text-left">
      <span className="rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white p-4">
        {cardInfo.icon}
      </span>
      <span className="text-primary-0 text-lg py-4">{cardInfo.title}</span>
      <span className="text-secondary-300 max-w-xs">{cardInfo.content}</span>
    </div>
  );
};

export default FeatureCard;
