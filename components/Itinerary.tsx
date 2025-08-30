import React from 'react';
import type { ItineraryItem } from '../types';
import { ItineraryItemType } from '../types';
import DashboardCard from './DashboardCard';
import Icon from './Icon';

interface ItineraryProps {
  items: ItineraryItem[];
}

const ItineraryIcon: React.FC<{ type: ItineraryItemType }> = ({ type }) => {
  // FIX: Corrected the type for the icon `name` prop by removing an extraneous `keyof`.
  const iconMap: Record<ItineraryItemType, { name: React.ComponentProps<typeof Icon>['name']; color: string; }> = {
    [ItineraryItemType.Flight]: { name: 'airplane', color: 'bg-slate-100 text-brand-navy' },
    [ItineraryItemType.Hotel]: { name: 'hotel', color: 'bg-slate-100 text-brand-navy' },
    [ItineraryItemType.Activity]: { name: 'activity', color: 'bg-slate-100 text-brand-navy' },
    [ItineraryItemType.Food]: { name: 'food', color: 'bg-slate-100 text-brand-navy' },
  };
  const { name, color } = iconMap[type];
  return (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${color}`}>
      <Icon name={name} className="w-5 h-5" />
    </div>
  );
};

const Itinerary: React.FC<ItineraryProps> = ({ items }) => {
  const groupedByDay = items.reduce((acc, item) => {
    (acc[item.day] = acc[item.day] || []).push(item);
    return acc;
  }, {} as Record<number, ItineraryItem[]>);

  return (
    <DashboardCard title="Itinerary" iconName="calendar">
      <div className="space-y-6">
        {Object.entries(groupedByDay).map(([day, dayItems]) => (
          <div key={day}>
            <h3 className="font-bold text-lg mb-3 text-gray-700">Day {day}</h3>
            <div className="relative pl-12 border-l-2 border-slate-200">
              {dayItems.map((item, index) => (
                <div key={index} className="mb-6 last:mb-0">
                  <div className="absolute -left-5 top-0">
                    <ItineraryIcon type={item.type} />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">{item.time}</p>
                    <p className="font-semibold text-gray-800">{item.title}</p>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
};

export default Itinerary;