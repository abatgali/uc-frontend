import VideoPlayer from "@/app/components/videoPlayer";
import Eventlist from "../../components/eventList";
import { oswald } from "@/app/pages/_app";
import Link from "next/link";

const events = [
  {
    id: 1,
    name: "Soccer",
    desc: "Soccer match between Indianapolis and Chicago",
    imageURL:
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695499027/medium_soccer_f95972066c.jpg",
    videoURL:
      "https://storage.googleapis.com/uci-public/soccer_events_vidc.mp4",
    user: "Indianapolis Soccer Club",
    venue: "Lucas Oil Stadium",
    date: "2022-05-15",
    time: "14:00",
  },
  {
    id: 2,
    name: "ChiN iDol",
    desc: "Singing competition",
    imageURL:
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695156454/medium_idol_3aea1d1f22.jpg",
    videoURL: "",
    user: "Chin Student Association",
    venue: "Indiana University Auditorium",
    date: "2022-06-01",
    time: "18:00",
  },
  {
    id: 3,
    name: "Miss United Chin International",
    desc: "Beauty pageant ",
    imageURL:
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1696043444/medium_miss_0cd28af07e.jpg",
    videoURL: "",
    user: "Indianapolis Beauty Association",
    venue: "Murat Theatre",
    date: "2022-06-15",
    time: "19:00",
  },
  {
    id: 4,
    name: "Mister United Chin International",
    desc: "Beauty pageant ",
    imageURL:
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1696043444/medium_mister_723507ac98.jpg",
    videoURL: "",
    user: "Indianapolis Beauty Association",
    venue: "Murat Theatre",
    date: "2022-06-15",
    time: "19:00",
  },
  {
    id: 5,
    name: "Volleyball",
    desc: "Volleyball match between Indianapolis and Cincinnati",
    imageURL:
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695499912/medium_steven_abraham_WYJ_Nl4_D_H7_Y_unsplash_92e3b03a32.jpg",
    videoURL:
      "https://storage.googleapis.com/uci-public/volleyball_events_vidc.mp4",
    user: "Indianapolis Volleyball Club",
    venue: "Bankers Life Fieldhouse",
    date: "2022-07-01",
    time: "15:00",
  },
  {
    id: 6,
    name: "Lai Paih / Lai Wrestling",
    desc: "Lai Paih / Lai Wrestling competition for men and women",
    imageURL:
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695156456/medium_wrestling_cdae7afd34.jpg",
    videoURL: "",
    user: "Indianapolis Lai Paih Association",
    venue: "Indiana Farmers Coliseum",
    date: "2022-07-15",
    time: "20:00",
  },
  {
    id: 7,
    name: "Tennis - Badminton - Ping pong",
    desc: "Tennis, badminton, and ping pong tournament",
    imageURL:
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695499026/medium_badminton_95851d4596.jpg",
    videoURL: "",
    user: "Indianapolis Racquet Sports Association",
    venue: "Indianapolis Racquet Club",
    date: "2022-08-01",
    time: "10:00",
  },
  {
    id: 8,
    name: "400m Race",
    desc: "500m race for men and women",
    imageURL:
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695499911/medium_pexels_andrea_piacquadio_3764011_d207c87973.jpg",
    videoURL:
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
    imageURL:
      "https://res.cloudinary.com/dtyw96fds/image/upload/v1695499912/medium_hermes_rivera_ubb_N_Kj_L_Bvnc_unsplash_c8163dd75f.jpg",
    videoURL: "",
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
        <img
          src="https://res.cloudinary.com/dtyw96fds/image/upload/v1695784610/ticket-2974645_1280_araaqu.jpg"
          alt=""
          className="h-full w-full  opacity-70 object-cover shadow-lg "
        />
        <h2
          className={`text-3xl md:text-4xl font-semibold ${oswald.className} text-white absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center`}
        >
          Upcoming Events
        </h2>
      </div>
      <div className="flex flex-wrap justify-evenly h-auto mx-auto sm:py-10 w-fit ">
        {events.map((event) => (
          <div className="md:w-[40em] bg-black w-full hover:shadow-xl relative transform transition-all duration-500 ease-in-out md:hover:scale-105 overflow-hidden h-auto">
            {event.videoURL !== "" ? (
              <>
                <video
                  className=" w-full opacity-80 h-72 object-cover max-sm:h-screen object-center"
                  loop
                  playsInline
                  src={event.videoURL}
                  autoPlay
                  controlsList="play nofullscreen noremoteplayback noplaybackrate foobar nodownload "
                ></video>
                <div className="absolute inset-0 flex flex-col items-center justify-center z-50">
                  <h2 className={`text-4xl ${oswald.className} text-white`}>
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
                </div>
              </>
            ) : (
              <>
                <img
                  className=" w-full opacity-50 h-72 object-cover max-sm:h-screen object-center"
                  src={event.imageURL}
                  alt={event.name}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-50">
                  <h2
                    className={`text-4xl ${oswald.className} text-white text-center`}
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
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
