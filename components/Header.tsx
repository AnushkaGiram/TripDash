import React from 'react';
import Icon from './Icon';

interface HeaderProps {
  tripName: string;
}

const Header: React.FC<HeaderProps> = ({ tripName }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="bg-brand-navy text-white p-2 rounded-lg">
              <Icon name="suitcase" className="w-6 h-6" />
            </div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
              TripDash / <span className="font-medium text-gray-600">{tripName}</span>
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            <img 
              src="https://picsum.photos/200" 
              alt="User Avatar" 
              className="w-10 h-10 rounded-full border-2 border-brand-navy"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;