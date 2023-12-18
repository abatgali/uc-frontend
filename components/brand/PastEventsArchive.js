// components/PastEventsArchive.js
import React from "react";
import styles from '@/app/styles/CategoryFilter.module.css';


export default function PastEventsArchive({ events }) {
  const pastEvents = events.filter(
    (event) => !event.tba && new Date(event.date) < new Date()
  );

  return (
    <div className={`${styles.pastEventsArchive}`}>
      {pastEvents.map((event) => (
        <div key={event.id} className={`${styles.pastEvent}`}>
          <h3>{event.name}</h3>
          <p>{event.details}</p>
          <span>{event.venue}</span>
          <span>{event.date}</span>
        </div>
      ))}
    </div>
  );
}
