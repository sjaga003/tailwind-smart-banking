import React from 'react';
import plane from '../img/image-plane.jpg';
import restaurant from '../img/image-restaurant.jpg';
import confetti from '../img/image-confetti.jpg';
import currency from '../img/image-currency.jpg';
import ArticleCard from './ArticleCard';

const articleInfo = [
  {
    image: currency,
    author: 'Claire Robinson',
    title: 'Receive money in any currency with no fees',
    content: `The world is getting smaller and we're becoming more mobile. So why should you be forced to only recieve money in a single...`,
  },
  {
    image: restaurant,
    author: 'Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    content: `Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...`,
  },
  {
    image: plane,
    author: 'Wilson Hutton',
    title: 'Take your BankSafe card wherever you go',
    content: `We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...`,
  },
  {
    image: confetti,
    author: 'Claire Robinson',
    title: 'Our invite-only Beta accounts are live!',
    content: `After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...`,
  },
];

const Articles = () => {
  return (
    <section className="py-16 bg-secondary-100 lg:px-20 xl:px-60">
      <div className=" flex flex-col flex-wrap ">
        <span className="text-primary-0 text-3xl pb-8 lg:px-0 sm:px-10">
          Latest Articles
        </span>
        <div className="px-2 lg:px-0 gap-8 md:gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {articleInfo.map((card) => (
            <ArticleCard key={card.title} cardInfo={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
