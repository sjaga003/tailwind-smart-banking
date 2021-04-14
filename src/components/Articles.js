import React from 'react';

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
    image: currency,
    author: 'Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    content: `Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you...`,
  },
  {
    image: currency,
    author: 'Wilson Hutton',
    title: 'Take your coolBank card wherever you go',
    content: `We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...`,
  },
  {
    image: currency,
    author: 'Claire Robinson',
    title: 'Our invite-only Beta accounts are live!',
    content: `After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...`,
  },
];

const Articles = () => {
  return (
    <section>
      <span>Latest Articles</span>
      {articleInfo.map((card) => (
        <ArticleCard cardInfo={card} />
      ))}
    </section>
  );
};

export default Articles;