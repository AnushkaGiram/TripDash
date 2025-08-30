import React, { useState, useMemo } from 'react';
import type { ChecklistItem } from '../types';
import DashboardCard from './DashboardCard';
import Icon from './Icon';

interface TripChecklistProps {
  initialItems: ChecklistItem[];
}

const TripChecklist: React.FC<TripChecklistProps> = ({ initialItems }) => {
  const [items, setItems] = useState(initialItems);

  const handleToggle = (id: number) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const completedCount = useMemo(() => items.filter(item => item.completed).length, [items]);
  const totalCount = items.length;
  const progressPercentage = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <DashboardCard title="Trip Checklist" iconName="clipboardCheck">
      <div className="space-y-3">
        {items.map(item => (
          <div
            key={item.id}
            onClick={() => handleToggle(item.id)}
            className="flex items-center cursor-pointer group"
            role="checkbox"
            aria-checked={item.completed}
            tabIndex={0}
            onKeyDown={(e) => (e.key === ' ' || e.key === 'Enter') && handleToggle(item.id)}
          >
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                item.completed ? 'bg-brand-navy border-brand-navy' : 'border-gray-300 group-hover:border-brand-navy'
            }`}>
              {item.completed && <Icon name="check" className="w-4 h-4 text-white" />}
            </div>
            <span className={`ml-3 text-gray-700 transition-colors ${
                item.completed ? 'line-through text-gray-400' : ''
            }`}>
              {item.text}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="flex justify-between items-center text-sm text-gray-500 mb-1">
              <span>Progress</span>
              <span className="font-semibold">{Math.round(progressPercentage)}%</span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2">
              <div 
                  className="bg-brand-navy h-2 rounded-full transition-all duration-300" 
                  style={{ width: `${progressPercentage}%` }}
              ></div>
          </div>
      </div>
    </DashboardCard>
  );
};

export default TripChecklist;