import React, { useState, useEffect } from 'react';
import DashboardCard from './DashboardCard';

interface TripCountdownProps {
  targetDate: Date;
}

const TripCountdown: React.FC<TripCountdownProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft as { days: number, hours: number, minutes: number, seconds: number };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timeComponents = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Mins', value: timeLeft.minutes },
    { label: 'Secs', value: timeLeft.seconds },
  ];

  return (
    <DashboardCard title="Trip Countdown" iconName="calendar">
      <div className="grid grid-cols-4 gap-2 text-center h-full content-center">
        {timeComponents.map(({ label, value }) => (
          <div key={label} className="bg-slate-50 p-3 rounded-lg">
            <div className="text-2xl font-bold text-brand-navy">{String(value || 0).padStart(2, '0')}</div>
            <div className="text-xs text-gray-500 uppercase">{label}</div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
};

export default TripCountdown;