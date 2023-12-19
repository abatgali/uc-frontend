import Link from "next/link";
import Image from "next/image";

const events = [
  {
    id: 1,
    name: "Soccer",
    desc: "Soccer match between Indianapolis and Chicago",
    image_url: "",
    vid_url:
      "https://storage.googleapis.com/uci-public/soccer_events_vidc.mp4",
    user: "Indianapolis Soccer Club",
    venue: "Lucas Oil Stadium",
    date: "2022-05-15",
    time: "14:00",
  },
  {
    id: 2,
    name: "Volleyball",
    desc: "Volleyball match between Indianapolis and Cincinnati",
    image_url: "",
    vid_url:
      "https://storage.googleapis.com/uci-public/volleyball_events_vidc.mp4",
    user: "Indianapolis Volleyball Club",
    venue: "Bankers Life Fieldhouse",
    date: "2022-07-01",
    time: "15:00",
  },
  {
    id: 3,
    name: "ChiN iDol",
    desc: "Singing competition",
    image_url: "https://storage.googleapis.com/uci-public/events/chin_idol.png",
    vid_url: "",
    user: "Chin Student Association",
    venue: "Indiana University Auditorium",
    date: "2022-06-01",
    time: "18:00",
  },
  {
    id: 4,
    name: "Miss ",
    desc: "Beauty pageant ",
    details: "United Chin International 2024",
    image_url:
      "https://storage.googleapis.com/uci-public/events/beauty_pageant.png",
    vid_url: "",
    user: "Indianapolis Beauty Association",
    venue: "Murat Theatre",
    date: "2022-06-15",
    time: "19:00",
  },
  {
    id: 5,
    name: "Mister",
    desc: "Beauty pageant ",
    details: "United Chin International 2024",

    image_url:
      "https://storage.googleapis.com/uci-public/events/mister_pageant.png",
    vid_url: "",
    user: "Indianapolis Beauty Association",
    venue: "Murat Theatre",
    date: "2022-06-15",
    time: "19:00",
  },

  {
    id: 6,
    name: "Lai Paih / Lai Wrestling",
    desc: "Lai Paih / Lai Wrestling competition for men and women",
    image_url:
      "https://storage.googleapis.com/uci-public/events/large_wrestling_cdae7afd34.jpg",
    vid_url: "",
    user: "Indianapolis Lai Paih Association",
    venue: "Indiana Farmers Coliseum",
    date: "2022-07-15",
    time: "20:00",
  },
  {
    id: 7,
    name: "Tennis - Badminton - Ping pong",
    desc: "Tennis, badminton, and ping pong tournament",
    image_url:
      "https://storage.googleapis.com/uci-public/events/events_tennis.jpg",
    vid_url: "",
    user: "Indianapolis Racquet Sports Association",
    venue: "Indianapolis Racquet Club",
    date: "2022-08-01",
    time: "10:00",
  },
  {
    id: 8,
    name: "400m Race",
    desc: "500m race for men and women",
    image_url: "",
    vid_url:
      "https://storage.googleapis.com/uci-public/running_events_vidc.mp4",
    user: "Indianapolis Running Club",
    venue: "Indianapolis Motor Speedway",
    date: "2022-08-15",
    time: "12:00",
  },
  {
    id: 9,
    name: "Boxing",
    desc: "Boxing match for men and women",
    image_url:
      "https://storage.googleapis.com/uci-public/events/boxing_events.jpg",
    vid_url: "",
    user: "Indianapolis Boxing Association",
    venue: "Indiana Convention Center",
    date: "2022-09-01",
    time: "17:00",
  },
];
export default function Events() {
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
      <div className="flex flex-wrap justify-evenly h-auto mx-auto sm:py-10 w-fit ">
        {events.map((event) => (
          <div 
          key={event.id}
          className="md:w-[40em] bg-black w-full hover:shadow-xl relative transform transition-all duration-500 ease-in-out md:hover:scale-105 overflow-hidden h-auto">
            {event.vid_url !== "" ? (
              <>
                <video
                  className=" w-full opacity-80 h-72 object-cover max-sm:h-screen object-center"
                  loop
                  playsInline
                  src={event.vid_url}
                  autoPlay
                  controlsList="play nofullscreen noremoteplayback noplaybackrate foobar nodownload "
                ></video>
              </>
            ) : (
              <>
                <Image
                  className=" w-full opacity-50 h-72 object-cover max-sm:h-screen object-center"
                  src={event.image_url}
                  alt={event.name}
                  width={1920}
                  height={1080}
                />
              </>
            )}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-50">
              <h2
                className={`text-4xl text-white text-center`}
              >
                {event.name}
              </h2>
              <Link
                href={`/events/${encodeURIComponent(event.id)}`}
                className="mt-2 px-4 py-2 z-40"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#ffff"
                  className="w-8 h-8"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <h2
                className={`text-2xl text-white text-center`}
              >
                {event.details}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
