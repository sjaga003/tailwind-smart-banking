import React from 'react';
import FeatureCard from './FeatureCard';

const featureInfo = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
    title: 'Online Banking',
    content:
      'Our modern web and mobile aplications allow you to keep track of your finances wherever you are in the world.',
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Simple Budgeting',
    content: `See exactly where your money goes each month. Receive notifications when you're close to hitting your limits.`,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
        />
      </svg>
    ),
    title: 'Fast Onboarding',
    content: `We don't do branches. Open your account in minutes online and start taking control of your finances right away.`,
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: 'Open API',
    content: `Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.`,
  },
];

const About = () => {
  return (
    <section className="bg-secondary-200 lg:px-20 xl:px-60">
      <div className="flex flex-col py-24 items-center text-center px-8 lg:px-0 md:items-start">
        <span className="text-primary-0 text-3xl">Why choose BankSafe?</span>
        <span className="text-md text-secondary-300 pt-4  md:text-left max-w-lg">
          We leaverage Open Banking to turn your bank account into your
          financial hub. Control your finances like never before.
        </span>
        <div className="pt-8 md:flex gap-8">
          {featureInfo.map((card) => (
            <FeatureCard key={card.title} cardInfo={card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
