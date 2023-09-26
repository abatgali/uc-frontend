const events = [
  {
    id: 1,
    name: "Soccer",
    desc: "Soccer match between Indianapolis and Chicago",
    imageURL:
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695499027/thumbnail_soccer_f95972066c.jpg",
    user: "Indianapolis Soccer Club",
    venue: "Lucas Oil Stadium",
    date: "2022-05-15",
    time: "14:00",
  },
  {
    id: 2,
    name: "Chin iDol",
    desc: "Singing competition",
    imageURL:
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695156454/thumbnail_idol_3aea1d1f22.jpg",
    user: "Chinese Student Association",
    venue: "Indiana University Auditorium",
    date: "2022-06-01",
    time: "18:00",
  },
  {
    id: 3,
    name: "Miss & Mister beauty pageant",
    desc: "Beauty pageant for men and women",
    imageURL:
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695156454/thumbnail_pageant2_5e5c687dd3.jpg",
    user: "Indianapolis Beauty Association",
    venue: "Murat Theatre",
    date: "2022-06-15",
    time: "19:00",
  },
  {
    id: 4,
    name: "Volleyball",
    desc: "Volleyball match between Indianapolis and Cincinnati",
    imageURL:
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695499912/thumbnail_steven_abraham_WYJ_Nl4_D_H7_Y_unsplash_92e3b03a32.jpg",
    user: "Indianapolis Volleyball Club",
    venue: "Bankers Life Fieldhouse",
    date: "2022-07-01",
    time: "15:00",
  },
  {
    id: 5,
    name: "Men & Women Lai Paih / Lai Wrestling",
    desc: "Lai Paih / Lai Wrestling competition for men and women",
    imageURL:
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695156456/thumbnail_wrestling_cdae7afd34.jpg",
    user: "Indianapolis Lai Paih Association",
    venue: "Indiana Farmers Coliseum",
    date: "2022-07-15",
    time: "20:00",
  },
  {
    id: 6,
    name: "Tennis - Badminton - Ping pong",
    desc: "Tennis, badminton, and ping pong tournament",
    imageURL:
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695499026/thumbnail_badminton_95851d4596.jpg",
    user: "Indianapolis Racquet Sports Association",
    venue: "Indianapolis Racquet Club",
    date: "2022-08-01",
    time: "10:00",
  },
  {
    id: 7,
    name: "500m Race",
    desc: "500m race for men and women",
    imageURL:
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695499911/thumbnail_pexels_andrea_piacquadio_3764011_d207c87973.jpg",
    user: "Indianapolis Running Club",
    venue: "Indianapolis Motor Speedway",
    date: "2022-08-15",
    time: "12:00",
  },
  {
    id: 8,
    name: "Men & Women Boxing",
    desc: "Boxing match for men and women",
    imageURL:
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695499912/thumbnail_hermes_rivera_ubb_N_Kj_L_Bvnc_unsplash_c8163dd75f.jpg",
    user: "Indianapolis Boxing Association",
    venue: "Indiana Convention Center",
    date: "2022-09-01",
    time: "17:00",
  },
];

export default function Eventlist() {
  return (
    <>
      <h2 className="text-2xl">Upcoming Events</h2>
      <hr className="my-10" />
      {events.map((event) => (
        <div className="flex items-center bg-white shadow-lg rounded-lg mx-2 my-2 p-4">
          <div className="flex-shrink-0 h-30 w-50">
            <img
              className=" object-cover"
              src={event.imageURL}
              alt={event.name}
            />
          </div>
          <div className="ml-4">
            <h2 className="text-lg leading-5 font-medium text-black">
              {event.name}
            </h2>
            <p className="text-sm leading-5 text-gray-500">{event.desc}</p>
            <p className="text-sm leading-5 text-gray-500">{event.venue}</p>
            <p className="text-sm leading-5 text-gray-500">
              {event.date} {event.time}
            </p>
            <a
              href={`/register/${event.id}`}
              className="mt-2 text-blue-500 hover:text-blue-700"
            >
              Register
            </a>
          </div>
        </div>
      ))}
    </>
  );
}
