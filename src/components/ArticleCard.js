import React from 'react';

const ArticleCard = ({ cardInfo }) => {
  return (
    <div className="bg-white mb-6 rounded-md overflow-hidden">
      <img src={cardInfo.image} alt={cardInfo.title} />
      <div className="p-4 flex flex-col">
        <span className="text-secondary-300 text-sm">By {cardInfo.author}</span>
        <span className="text-primary-0 py-2">{cardInfo.title}</span>
        <span className="text-sm text-secondary-300">{cardInfo.content}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
