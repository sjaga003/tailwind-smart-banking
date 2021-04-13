import React from 'react';

const ArticleCard = ({ cardInfo }) => {
  return (
    <div>
      <img src={cardInfo.image} alt={cardInfo.title} />
      <div>
        <span>By {cardInfo.author}</span>
        <span>{cardInfo.title}</span>
        <span>{cardInfo.content}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
