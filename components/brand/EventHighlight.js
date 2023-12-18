// components/EventHighlight.js
import styles from '@/app/styles/CategoryFilter.module.css';

import React from 'react';
import EventCard from './EventCard';

export default function EventHighlight({ events }) {
  // Assuming the events are sorted by date, with upcoming events first
  const upcomingEvents = events.filter(event => new Date(event.date) >= new Date());

  return (
    <div className={`${styles.EventHighlight}`}>
      {upcomingEvents.map(event => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
}
