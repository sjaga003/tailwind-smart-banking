import React from 'react';
import FeatureCard from './FeatureCard';
import budget from '../img/icon-budgeting.svg';

const featureInfo = [
  {
    icon: budget,
    title: 'Online Banking',
    content:
      'Our modern web and mobile aplications allow you to keep track of your finances wherever you are in the world.',
  },
  {
    icon: budget,
    title: 'Simple Budgeting',
    content: `See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.`,
  },
  {
    icon: budget,
    title: 'Fast Onboarding',
    content: `We don't do branches. Open your account in minutes online and start taking control of your finances right away.`,
  },
  {
    icon: budget,
    title: 'Open API',
    content: `Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.`,
  },
];

const About = () => {
  return (
    <section>
      <div>
        <span>Why choose coolBank?</span>
        <span>
          We leaverage Open Banking to turn your bank account into your
          financial hub. Control your finances like never before.
        </span>
        <div>
          {featureInfo.map((card) => (
            <FeatureCard cardInfo={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
