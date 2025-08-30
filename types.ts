
export interface BudgetData {
  planned: number;
  spent: number;
}

export interface Place {
  name: string;
  type: string;
  imageUrl: string;
}

export enum ItineraryItemType {
  Flight = 'Flight',
  Hotel = 'Hotel',
  Activity = 'Activity',
  Food = 'Food',
}

export interface ItineraryItem {
  day: number;
  time: string;
  title: string;
  description: string;
  type: ItineraryItemType;
}

export interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  icon: 'sun' | 'cloud' | 'rain';
}

export interface FlightInfo {
  flightNumber: string;
  departure: string;
  arrival: string;
  status: 'On Time' | 'Delayed' | 'Landed';
}

export interface Destination {
  name: string;
  lat: number;
  lng: number;
}

export interface ChecklistItem {
  id: number;
  text: string;
  completed: boolean;
}

export interface TripData {
  tripName: string;
  startDate: Date;
  budget: BudgetData;
  savedPlaces: Place[];
  itinerary: ItineraryItem[];
  weather: WeatherData;
  flight: FlightInfo;
  destinations: Destination[];
  checklist: ChecklistItem[];
}
