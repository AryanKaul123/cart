import React from 'react';

const Home = () => {
  return (
    <div className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between px-6 py-10 bg-gradient-to-r from-blue-50 to-white">
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-6 leading-tight">
          Discover Amazing Products<br />at Unbeatable Prices
        </h1>
        <p className="text-gray-600 mb-6 text-lg max-w-md">
          Welcome to StoreApp — your go-to marketplace for tech gadgets, fashion essentials, and lifestyle gear.
          Our platform curates the latest trends and delivers them right to your doorstep.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Start Shopping
        </button>
      </div>

      {/* Hero Image */}
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src="https://source.unsplash.com/random/600x400?store,product"
          alt="Store showcase"
          className="w-full h-auto rounded-xl shadow-xl object-cover"
        />
      </div>
    </div>
  );
};

export default Home;
