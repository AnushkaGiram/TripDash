import React from 'react';
import type { Destination } from '../types';
import DashboardCard from './DashboardCard';
import Icon from './Icon';

interface MapVisualizationProps {
  destinations: Destination[];
}

const MapVisualization: React.FC<MapVisualizationProps> = ({ destinations }) => {
  // Guard against empty or single-point destinations array
  if (!destinations || destinations.length === 0) {
    return (
      <DashboardCard title="Trip Map" iconName="mapPin">
        <div className="flex items-center justify-center h-full text-gray-500">
          Add destinations to see the map.
        </div>
      </DashboardCard>
    );
  }

  // Calculate the bounding box of the destinations
  const latitudes = destinations.map(d => d.lat);
  const longitudes = destinations.map(d => d.lng);
  
  const minLat = Math.min(...latitudes);
  const maxLat = Math.max(...latitudes);
  const minLng = Math.min(...longitudes);
  const maxLng = Math.max(...longitudes);

  // Add padding to the bounding box to ensure pins aren't on the edge
  const latSpan = maxLat - minLat || 1; // handle single point case
  const lngSpan = maxLng - minLng || 1; // handle single point case
  const PADDING_RATIO = 0.15;

  const paddedMinLat = minLat - latSpan * PADDING_RATIO;
  const paddedMaxLat = maxLat + latSpan * PADDING_RATIO;
  const paddedMinLng = minLng - lngSpan * PADDING_RATIO;
  const paddedMaxLng = maxLng + lngSpan * PADDING_RATIO;

  const paddedLatSpan = paddedMaxLat - paddedMinLat;
  const paddedLngSpan = paddedMaxLng - paddedMinLng;

  // Create a dynamic projection function based on the bounding box
  const project = (lat: number, lng: number): { x: number; y: number } => {
    // If there's only one point, center it
    if (destinations.length === 1) {
      return { x: 50, y: 50 };
    }
    const x = ((lng - paddedMinLng) / paddedLngSpan) * 100;
    const y = ((paddedMaxLat - lat) / paddedLatSpan) * 100; // Y is inverted for screen coordinates
    return { x, y };
  };
  
  return (
    <DashboardCard title="Trip Map" iconName="mapPin">
      <div className="relative w-full h-64 bg-slate-100 rounded-lg overflow-hidden">
        {/* Abstract Map Background */}
        <svg width="100%" height="100%" className="absolute inset-0">
          <path d="M-200,300 C40,-10 300,50 500,200" fill="none" stroke="#e2e8f0" strokeWidth="80" />
          <path d="M-100,50 C150,200 200,-50 600,100" fill="none" stroke="#e2e8f0" strokeWidth="60" />
        </svg>

        {/* Connection lines */}
        <svg width="100%" height="100%" className="absolute inset-0">
          {destinations.slice(0, -1).map((dest, i) => {
            const start = project(dest.lat, dest.lng);
            const end = project(destinations[i + 1].lat, destinations[i + 1].lng);
            return (
              <line
                key={`line-${i}`}
                x1={`${start.x}%`}
                y1={`${start.y}%`}
                x2={`${end.x}%`}
                y2={`${end.y}%`}
                stroke="#a3a3a3"
                strokeWidth="2"
                strokeDasharray="4 4"
              />
            );
          })}
        </svg>

        {/* Destination Pins */}
        {destinations.map((dest, index) => {
          const { x, y } = project(dest.lat, dest.lng);
          return (
            <div
              key={index}
              className="absolute group"
              style={{ top: `${y}%`, left: `${x}%`, transform: 'translate(-50%, -100%)' }}
            >
              <Icon name="mapPin" className="w-8 h-8 text-brand-navy drop-shadow-lg" />
              <span className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-max px-2 py-1 bg-gray-800 text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity">
                {dest.name}
              </span>
            </div>
          );
        })}
      </div>
    </DashboardCard>
  );
};

export default MapVisualization;