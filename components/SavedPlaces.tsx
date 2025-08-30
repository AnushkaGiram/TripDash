import React from 'react';
import type { Place } from '../types';
import DashboardCard from './DashboardCard';

interface SavedPlacesProps {
  places: Place[];
}

const SavedPlaces: React.FC<SavedPlacesProps> = ({ places }) => {
  return (
    <DashboardCard title="Saved Places" iconName="mapPin" className="h-full">
      <div className="space-y-4 overflow-y-auto" style={{maxHeight: 'calc(100vh - 200px)'}}>
        {places.map((place, index) => (
          <div key={index} className="flex items-center space-x-4 p-2 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer">
            <img src={place.imageUrl} alt={place.name} className="w-16 h-16 rounded-lg object-cover" />
            <div>
              <p className="font-semibold text-gray-800">{place.name}</p>
              <p className="text-sm text-gray-500">{place.type}</p>
            </div>
          </div>
        ))}
      </div>
    </DashboardCard>
  );
};

export default SavedPlaces;