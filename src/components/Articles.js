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
    title: 'Take your coolBank card wherever you go',
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
    <section className="py-16 flex flex-col items-center bg-secondary-100 overflow-hidden rounded-md">
      <span className="text-primary-0 text-3xl pb-4">Latest Articles</span>
      <div className="px-4">
        {articleInfo.map((card) => (
          <ArticleCard cardInfo={card} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
