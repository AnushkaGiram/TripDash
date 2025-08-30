
import React from 'react';
import { ICONS } from '../constants';

interface IconProps {
  name: keyof typeof ICONS;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, className = 'w-6 h-6' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      {ICONS[name]}
    </svg>
  );
};

export default Icon;
