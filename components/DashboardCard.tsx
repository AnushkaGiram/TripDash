import React from 'react';
import Icon from './Icon';
import { ICONS } from '../constants';

interface DashboardCardProps {
  title: string;
  iconName: keyof typeof ICONS;
  children: React.ReactNode;
  className?: string;
}

const DashboardCard: React.FC<DashboardCardProps> = ({ title, iconName, children, className = '' }) => {
  return (
    <div className={`bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col ${className}`}>
      <div className="flex items-center mb-4">
        <div className="p-2 rounded-lg bg-slate-100 text-brand-navy">
          <Icon name={iconName} className="w-5 h-5" />
        </div>
        <h2 className="ml-3 font-semibold text-gray-700 text-lg">{title}</h2>
      </div>
      <div className="flex-grow">
        {children}
      </div>
    </div>
  );
};

export default DashboardCard;