"use client";
import React, { useState, useEffect } from "react";
import EventList from "@/components/brand/EventList";
import CategoryFilter from "@/components/brand/CategoryFilter";
import EventHighlight from "@/components/brand/EventHighlight";
import PastEventsArchive from "@/components/brand/PastEventsArchive";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";
import Head from 'next/head';


<Head>
  <meta name="description" content="Upcoming events for our non-profit organization" />
  <meta property="og:title" content="Non-Profit Events" />
  <meta property="og:description" content="Join us for our upcoming events and make a difference!" />
  <meta property="og:image" content="/path-to-your-social-media-image.jpg" />
  <meta property="og:type" content="website" />
</Head>


export default function HomePage() {
  const supabase = createClientComponentClient();
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    let { data, error } = await supabase
      .from("categories")
      .select("*")
      .order("id", { ascending: true });
    if (error) {
      console.log(error);
    } else {
      // console.log(data);
      setCategories(data);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, [supabase]);

  const fetchEvents = async () => {
    let { data, error } = await supabase
      .from("events")
      .select("*")
      .order("id", { ascending: true });
    if (error) {
      console.log(error);
    } else {
      // console.log(data);
      setEvents(data);
    }
  };
  useEffect(() => {
    fetchEvents();
  }, [supabase]);
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleFilterChange = (categoryId) => {
    if (categoryId) {
      setFilteredEvents(
        events.filter((event) => event.category_id === categoryId)
      );
    } else {
      setFilteredEvents(events);
    }
  };

  return (
    <>
    <div className="w-full h-[20rem] object-cover bg-gradient-to-b from-black to-gray-900 relative max-sm:hidden">
        <Image
          src="https://storage.googleapis.com/uci-public/events_home.jpg"
          alt="tix banner"
          className="h-full w-full opacity-90 object-cover shadow-lg "
          width={1920}
          height={1080}
        />
        <h2
          className={`text-3xl md:text-4xl font-semibold text-white absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center`}
        >
          Upcoming Events
        </h2>
      </div>
      <div className="py-24 sm:pb-36 md:pb-48">
        <CategoryFilter
          categories={categories}
          onFilterChange={handleFilterChange}
        />
        <EventHighlight events={filteredEvents} />
        <EventList events={events} categories={categories}/>
        <PastEventsArchive events={events} />
      </div>
    </>
  );
}
