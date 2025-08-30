
import React from 'react';
import Header from './components/Header';
import TripCountdown from './components/TripCountdown';
import BudgetTracker from './components/BudgetTracker';
import SavedPlaces from './components/SavedPlaces';
import Itinerary from './components/Itinerary';
import WeatherFlightPanel from './components/WeatherFlightPanel';
import MapVisualization from './components/MapVisualization';
import TripChecklist from './components/TripChecklist';
import { MOCK_TRIP_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-gray-800">
      <Header tripName={MOCK_TRIP_DATA.tripName} />
      <main className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Main Section */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <TripCountdown targetDate={MOCK_TRIP_DATA.startDate} />
            <BudgetTracker budget={MOCK_TRIP_DATA.budget} />
            <WeatherFlightPanel weather={MOCK_TRIP_DATA.weather} flight={MOCK_TRIP_DATA.flight} />
            <TripChecklist initialItems={MOCK_TRIP_DATA.checklist} />
            <div className="sm:col-span-2">
              <Itinerary items={MOCK_TRIP_DATA.itinerary} />
            </div>
             <div className="sm:col-span-2">
              <MapVisualization destinations={MOCK_TRIP_DATA.destinations} />
            </div>
          </div>

          {/* Sidebar Section */}
          <div className="lg:col-span-1">
            <SavedPlaces places={MOCK_TRIP_DATA.savedPlaces} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
