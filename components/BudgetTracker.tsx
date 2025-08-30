import React from 'react';
import type { BudgetData } from '../types';
import DashboardCard from './DashboardCard';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';

interface BudgetTrackerProps {
  budget: BudgetData;
}

const BudgetTracker: React.FC<BudgetTrackerProps> = ({ budget }) => {
  const { planned, spent } = budget;
  const percentage = Math.round((spent / planned) * 100);
  const remaining = planned - spent;
  
  const data = [{ name: 'Spent', value: percentage }];

  return (
    <DashboardCard title="Budget Tracker" iconName="dollar">
        <div className="flex flex-col items-center justify-center h-full">
            <div className="w-full h-32">
                <ResponsiveContainer width="100%" height="100%">
                    <RadialBarChart 
                        innerRadius="70%" 
                        outerRadius="85%" 
                        data={data} 
                        startAngle={90} 
                        endAngle={-270}
                        barSize={12}
                    >
                        <PolarAngleAxis 
                            type="number" 
                            domain={[0, 100]} 
                            angleAxisId={0} 
                            tick={false} 
                        />
                        <RadialBar 
                            background 
                            dataKey='value' 
                            cornerRadius={10} 
                            className="fill-brand-navy" 
                        />
                         <text
                            x="50%"
                            y="50%"
                            textAnchor="middle"
                            dominantBaseline="middle"
                            className="text-2xl font-bold fill-gray-700"
                        >
                            {`${percentage}%`}
                        </text>
                    </RadialBarChart>
                </ResponsiveContainer>
            </div>
            <div className="text-center mt-2">
                <p className="text-sm text-gray-500">
                    <span className="font-semibold text-gray-600">${spent.toLocaleString()}</span> spent of ${planned.toLocaleString()}
                </p>
                <p className="text-sm font-medium text-brand-navy">
                    ${remaining.toLocaleString()} remaining
                </p>
            </div>
        </div>
    </DashboardCard>
  );
};

export default BudgetTracker;