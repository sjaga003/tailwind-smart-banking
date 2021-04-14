import React from 'react';
import bgIntroMobile from '../img/undraw_finance.svg';

const Hero = () => {
  return (
    <section className="w-full bg-secondary-100 py-32  lg:px-20 xl:px-40">
      <div className="flex flex-col items-center px-8 md:flex-row">
        <div className="order-2 flex flex-col text-center items-center mt-10 md:order-1 md:text-left md:items-start md:mt-0">
          <span className="text-primary-0  text-4xl ">
            Next generation of digital banking
          </span>
          <span className="text-md text-secondary-300 my-6 max-w-sm ">
            Take your finanicial life online. Your BankSafe account will be a
            one stop shop for spending, saving, budgeting and more!
          </span>
          <button className="text-bold rounded-full bg-gradient-to-r from-green-500 to-blue-500 px-4 py-2 text-white w-auto hover:from-green-400 hover:to-blue-400">
            Request Invite
          </button>
        </div>
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <img className="w-4/5" src={bgIntroMobile} alt="intro" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
