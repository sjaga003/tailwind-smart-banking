import React from 'react';
import bgIntroMobile from '../img/undraw_finance.svg';

const Hero = () => {
  return (
    <section className="w-full bg-secondary-100 py-32">
      <div className="flex flex-col items-center">
        <div className="order-2 flex flex-col text-center items-center mt-10">
          <span className="text-primary-0  text-3xl ">
            Next generation of digital banking
          </span>
          <span className="text-md text-secondary-300 pt-3">
            Take your finanicial life online. Your coolBank account will be a
            one stop shop for spending, saving, budgeting and more!
          </span>
          <button className="text-bold mt-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 px-4 py-2 text-white w-auto hover:from-green-400 hover:to-blue-400">
            Request Invite
          </button>
        </div>
        <div className="order-1 flex justify-center">
          <img className="w-4/5" src={bgIntroMobile} alt="intro" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
