import React from 'react';
import type { WeatherData, FlightInfo } from '../types';
import DashboardCard from './DashboardCard';
import Icon from './Icon';

interface WeatherFlightPanelProps {
  weather: WeatherData;
  flight: FlightInfo;
}

const statusClasses: Record<FlightInfo['status'], string> = {
  'On Time': 'bg-slate-200 text-slate-800',
  'Delayed': 'bg-slate-200 text-slate-800',
  'Landed': 'bg-slate-200 text-slate-800',
};

const WeatherFlightPanel: React.FC<WeatherFlightPanelProps> = ({ weather, flight }) => {
  return (
    <DashboardCard title="Status Panel" iconName="airplane">
      <div className="flex flex-col h-full divide-y divide-slate-200">
        {/* Weather Section */}
        <div className="flex-1 pb-4">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Weather in {weather.city}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Icon name={weather.icon} className="w-12 h-12 text-brand-navy" />
              <div>
                <p className="text-3xl font-bold">{weather.temperature}°C</p>
                <p className="text-gray-600">{weather.condition}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Flight Section */}
        <div className="flex-1 pt-4">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Flight Status</h3>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-bold text-lg">{flight.flightNumber}</p>
              <div className="flex items-center space-x-2 text-sm text-gray-600 mt-1">
                <Icon name="planeDepart" className="w-5 h-5" />
                <span>{flight.departure}</span>
                <span className="font-mono text-xs text-gray-400">→</span>
                <Icon name="planeArrive" className="w-5 h-5" />
                <span>{flight.arrival}</span>
              </div>
            </div>
            <span className={`px-3 py-1 text-sm font-semibold rounded-full ${statusClasses[flight.status]}`}>
              {flight.status}
            </span>
          </div>
        </div>
      </div>
    </DashboardCard>
  );
};

export default WeatherFlightPanel;