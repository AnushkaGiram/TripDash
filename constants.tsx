import React from 'react';
import type { TripData } from './types';
import { ItineraryItemType } from './types';

export const MOCK_TRIP_DATA: TripData = {
  tripName: 'Incredible India Tour',
  startDate: new Date(new Date().getTime() + 25 * 24 * 60 * 60 * 1000), // 25 days from now
  budget: {
    planned: 3500,
    spent: 1500,
  },
  savedPlaces: [
    { name: 'Taj Mahal', type: 'Monument', imageUrl: 'https://picsum.photos/400/300?random=5' },
    { name: 'Hawa Mahal', type: 'Palace', imageUrl: 'https://picsum.photos/400/300?random=6' },
    { name: 'Golden Temple', type: 'Temple', imageUrl: 'https://picsum.photos/400/300?random=7' },
    { name: 'Gateway of India', type: 'Monument', imageUrl: 'https://picsum.photos/400/300?random=8' },
  ],
  itinerary: [
    { day: 1, time: '09:00', title: 'Flight to Delhi (DEL)', description: 'Flight AI102 from JFK', type: ItineraryItemType.Flight },
    { day: 1, time: '14:00', title: 'Check-in at The Leela Palace', description: 'Experience luxury in the capital.', type: ItineraryItemType.Hotel },
    { day: 1, time: '16:00', title: "Explore Humayun's Tomb", description: 'A stunning example of Mughal architecture.', type: ItineraryItemType.Activity },
    { day: 1, time: '19:00', title: 'Dinner at Indian Accent', description: 'Enjoy inventive modern Indian cuisine.', type: ItineraryItemType.Food },
    { day: 2, time: '06:00', title: 'Sunrise tour of Taj Mahal', description: 'Travel to Agra and witness the iconic monument.', type: ItineraryItemType.Activity },
    { day: 2, time: '11:00', title: 'Explore Agra Fort', description: 'Historic Mughal fort with impressive palaces.', type: ItineraryItemType.Activity },
    { day: 2, time: '13:30', title: 'Lunch at Pinch of Spice', description: 'Authentic Mughlai cuisine in Agra.', type: ItineraryItemType.Food },
    { day: 2, time: '18:00', title: 'Dinner at Esphahan', description: 'Fine dining at The Oberoi Amarvilas.', type: ItineraryItemType.Food },
    { day: 3, time: '09:00', title: 'Travel to Jaipur', description: 'Scenic 4-hour drive to the Pink City.', type: ItineraryItemType.Activity },
    { day: 3, time: '15:00', title: 'Check-in at Rambagh Palace', description: 'Experience royal hospitality.', type: ItineraryItemType.Hotel },
    { day: 3, time: '16:30', title: 'Visit Hawa Mahal', description: 'Photo stop at the Palace of Winds.', type: ItineraryItemType.Activity },
    { day: 3, time: '19:30', title: 'Dinner at Chokhi Dhani', description: 'Cultural village and traditional dinner.', type: ItineraryItemType.Food },
    { day: 4, time: '10:00', title: 'Explore Amber Fort', description: 'Majestic hilltop fort with elephant rides.', type: ItineraryItemType.Activity },
    { day: 4, time: '16:00', title: 'Flight to Mumbai (BOM)', description: 'Flight 6E 237 from JAI', type: ItineraryItemType.Flight },
    { day: 4, time: '18:30', title: 'Check-in at The Taj Mahal Palace', description: 'Overlooking the Gateway of India.', type: ItineraryItemType.Hotel },
    { day: 4, time: '20:00', title: 'Dinner at Sea Lounge', description: 'Enjoy city views and a delicious meal.', type: ItineraryItemType.Food },
  ],
  weather: {
    city: 'Delhi',
    temperature: 32,
    condition: 'Clear Sky',
    icon: 'sun',
  },
  flight: {
    flightNumber: 'AI102',
    departure: 'JFK',
    arrival: 'DEL',
    status: 'On Time',
  },
  destinations: [
    { name: 'Delhi', lat: 28.7041, lng: 77.1025 },
    { name: 'Agra', lat: 27.1767, lng: 78.0081 },
    { name: 'Jaipur', lat: 26.9124, lng: 75.7873 },
    { name: 'Mumbai', lat: 19.0760, lng: 72.8777 },
  ],
  checklist: [
    { id: 1, text: 'Passport & Visa', completed: true },
    { id: 2, text: 'Flight Tickets', completed: true },
    { id: 3, text: 'Hotel Vouchers', completed: false },
    { id: 4, text: 'Travel Insurance', completed: true },
    // FIX: Added the missing `text` property key to the checklist item.
    { id: 5, text: "ID / Driver's License", completed: false },
    { id: 6, text: 'Foreign Currency', completed: false },
  ],
};

// SVG Icons as React Components
export const ICONS: { [key: string]: React.ReactNode } = {
  airplane: <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />,
  suitcase: <path strokeLinecap="round" strokeLinejoin="round" d="M12 6H6a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-6m-6 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />,
  mapPin: <path strokeLinecap="round" strokeLinejoin="round" d="M12 21c-3.866 0-7-3.134-7-7s3.134-7 7-7 7 3.134 7 7-3.134 7-7 7z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 11a2 2 0 100 4 2 2 0 000-4z" />,
  sun: <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M12 12a4 4 0 100-8 4 4 0 000 8z" />,
  cloud: <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h1m8-9v1M3.05 16.95a7 7 0 0111.9-6.95 5.5 5.5 0 018.5 8.5H12" />,
  rain: <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h1m8-9v1M3.05 16.95a7 7 0 0111.9-6.95 5.5 5.5 0 018.5 8.5H12M9 18v3m3-3v3m3-3v3" />,
  dollar: <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2" />,
  calendar: <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />,
  hotel: <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0v-4a2 2 0 012-2h6a2 2 0 012 2v4m-6 0h-2" />,
  activity: <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />,
  food: <path strokeLinecap="round" strokeLinejoin="round" d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0c-.454-.303-.977-.454-1.5-.454V5.454c0-1.105.895-2 2-2h7c1.105 0 2 .895 2 2v10.092zM12 12.454v5.092" />,
  chevronDown: <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />,
  planeDepart: <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  planeArrive: <path strokeLinecap="round" strokeLinejoin="round" d="M9.248 12.832l3.197 2.132A1 1 0 0014 14.13V9.868a1 1 0 00-1.555-.832L9.248 11.168a1 1 0 000 1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />,
  clipboardCheck: <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />,
  check: <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />,
};