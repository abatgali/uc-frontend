import { oswald } from "../pages/_app";

const events = [
  {
    id: 1,
    name: "Soccer",
    desc: "Soccer match between Indianapolis and Chicago",
    imageURL:
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695499027/medium_soccer_f95972066c.jpg",
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
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695156454/medium_idol_3aea1d1f22.jpg",
    user: "Chin Student Association",
    venue: "Indiana University Auditorium",
    date: "2022-06-01",
    time: "18:00",
  },
  {
    id: 3,
    name: "Miss & Mister beauty pageant",
    desc: "Beauty pageant for men and women",
    imageURL:
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695156454/medium_pageant2_5e5c687dd3.jpg",
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
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695499912/medium_steven_abraham_WYJ_Nl4_D_H7_Y_unsplash_92e3b03a32.jpg",
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
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695156456/medium_wrestling_cdae7afd34.jpg",
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
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695499026/medium_badminton_95851d4596.jpg",
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
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695499911/medium_pexels_andrea_piacquadio_3764011_d207c87973.jpg",
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
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695499912/medium_hermes_rivera_ubb_N_Kj_L_Bvnc_unsplash_c8163dd75f.jpg",
    user: "Indianapolis Boxing Association",
    venue: "Indiana Convention Center",
    date: "2022-09-01",
    time: "17:00",
  },
];

export default function Eventlist() {
  return (
    <>
      <h2
        className={`text-3xl md:text-4xl font-semibold ${oswald.className} text-center pt-8`}
      >
        Upcoming Events
      </h2>
      <p className="text-center pt-3 pb-8">Let's help you make plans!</p>
      <div className="flex flex-wrap justify-evenly h-auto mx-auto py-10 w-fit mb-10">
        {events.map((event) => (
          <div className="md:w-[40em] bg-gray-500 my-3 flex flex-col md:flex-row h-96 md:h-48 w-full hover:shadow-xl">
            <div className="bg-black w-full  h-3/5 md:h-full md:w-1/2 object-cover overflow-hidden">
              <img
                className="  h-auto w-full object-center"
                src={event.imageURL}
                alt={event.name}
              />
            </div>
            <div className="bg-white p-4 h-3/5 md:h-full md:w-1/2">
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
      </div>
    </>
  );
}
