"use client";
import React, { useEffect, useState } from "react";
import EventCard from "./EventCard";
import EventDetailModal from "./EventDetailModal";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import CategoryFilter from "./CategoryFilter";

export default function EventList({ events }) {
  const [selectedEvent, setSelectedEvent] = useState(null);

  return (
    <>
      {events.length > 0 ? (
        <div className="space-y-4">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onSelect={() => setSelectedEvent(event)}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600">
          No events found for the selected category.
        </p>
      )}
      {selectedEvent && (
        <EventDetailModal
          event={selectedEvent}
          isOpen={!!selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
}
