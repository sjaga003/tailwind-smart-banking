import React from 'react';

const ArticleCard = ({ cardInfo }) => {
  return (
    <div className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow ease-in-out duration-200 cursor-pointer group sm:max-w-xs ">
      <img
        className="w-full sm:h-1/2 md:h-2/5 xl:h-1/2 object-cover"
        src={cardInfo.image}
        alt={cardInfo.title}
      />
      <div className="p-4 flex flex-col">
        <span className="text-secondary-300 text-sm">By {cardInfo.author}</span>
        <span className="text-primary-0 py-2 group-hover:text-green-500">
          {cardInfo.title}
        </span>
        <span className="text-sm text-secondary-300">{cardInfo.content}</span>
      </div>
    </div>
  );
};

export default ArticleCard;
