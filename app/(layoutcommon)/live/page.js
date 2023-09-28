import {
  Facebook,
  Rumble,
  YouTube,
} from "@/app/components/live_platform_logos";

export default function Live() {
  return (
    <>
      <div className="w-full h-screen object-cover relative">
        <img
          src="https://res.cloudinary.com/dtyw96fds/image/upload/v1695776983/pexels-harrison-haines-3696395_f81rd2.jpg"
          alt=""
          className="h-full w-full  bg-gray-900/5 object-cover shadow-lg object-center"
        />
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center mt-10">
          <h2 className="text-5xl font-bold tracking-tight text-white sm:text-4xl">
            Watch Live
          </h2>
          <p className="mt-4 text-lg text-white max-sm:hidden">
            Welcome to the heart of the action! Tune in to watch all the UC Cup
            events live and immerse yourself in the excitement of our sporting
            competitions. Simply click on the platform icons above to access the
            live streams.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full  h-32 flex justify-around flex-wrap p-5">
          <div className=" m-4 ">
            <YouTube />
          </div>
          <div className=" m-4 ">
            <Rumble />
          </div>
          <div className=" m-4 ">
            <Facebook />
          </div>
        </div>
        <div className="absolute top-32 left-0 w-full h-72 bg-black bg-opacity-80 mt-10 aspect-video">
          <video className="w-full h-full object-cover" controls>
            <source src="path_to_your_video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
}
