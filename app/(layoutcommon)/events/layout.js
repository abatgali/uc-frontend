import { oswald } from "../../pages/_app";
export default function EventsLayout({ children }) {
  return (
    <>
      <div className="w-full h-[12rem] object-cover bg-gradient-to-l from-slate-950 to-red-900 relative">
        <img
          src="https://res.cloudinary.com/dtyw96fds/image/upload/v1695784610/ticket-2974645_1280_araaqu.jpg"
          alt=""
          className="h-full w-full  opacity-80 object-cover shadow-lg object-center"
        />
        <h2
          className={`text-3xl md:text-4xl font-semibold ${oswald.className} text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
        >
          Upcoming Events
        </h2>
      </div>
      <div className="w-full">
        <div className="mx-auto ">{children}</div>
      </div>
    </>
  );
}
