// components/EventCard.js
import Image from "next/image";
import React from "react";

export default function EventCard({ event, onSelect }) {
  const dateLabel = event.tba
    ? "TBA"
    : new Date(event.date).toLocaleDateString("en-US", {
        day: "2-digit",
        month: "short",
      });

  return (
    <div
      className="flex 
      sm:w-2/3 mx-auto
      items-center bg-white  shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out cursor-pointer"
      onClick={onSelect}
    >
      <div className="flex-none w-48 h-48 relative">
        <Image
          src={event.image_url}
          alt={event.name}
          layout="fill"
          objectFit="cover"
          className=""
        />
      </div>
      <div className="flex-1 p-4">
        <div className="flex items-center mb-2">
          <span
            className={`text-sm font-semibold ${
              event.tba ? "bg-gray-400" : "bg-blue-500"
            } text-white px-3 py-1 mr-4`}
          >
            {dateLabel}
          </span>
          <h3 className="text-lg font-bold">
            {event.name} {event.sub_name}
          </h3>
        </div>
        <p className="text-gray-700 text-sm">{event.details}</p>
        <p className="text-gray-500 text-sm">{event.venue}</p>
      </div>
    </div>
  );
}

// components/EventCard.js
// import styles from "@/app/styles/EventCard.module.css";
// import Image from "next/image";
// import React from "react";

// export default function EventCard({ event, onSelect }) {
//   return (
//     <div
//       className={`${styles.eventCard}`}
//       tabIndex="0"
//       role="button"
//       onClick={onSelect}
//       onKeyPress={(e) => e.key === "Enter" && onSelect()}
//     >
//       <Image
//         src={event.image_url}
//         alt={event.name}
//         width={500}
//         height={300}
//         className="w-full h-full object-cover"
//         priority
//       />
//       <h3>{event.name}</h3>
//       <p>{event.details}</p>
//       <span>{event.venue}</span>
//       <span>{event.date}</span>
//     </div>
//   );
// }
