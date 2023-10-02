import { oswald } from "@/app/pages/_app";
import {
  Facebook,
  Rumble,
  YouTube,
} from "@/app/components/live_platform_logos";

export default function Live() {
  return (
    <>
      <div className="w-full h-screen object-cover relative bg-black">
        {/* <img
          src="https://res.cloudinary.com/dtyw96fds/image/upload/v1695776983/pexels-harrison-haines-3696395_f81rd2.jpg"
          alt=""UC Cup isn't just about activities; it's a hub for building enduring
            friendships and meaningful connections. Meet kindred spirits who
            share your passions, aspirations, and dreams. Together, you'll craft
            unforgettable memories that will stand the test of time.
          className="h-full w-full  object-cover shadow-lg object-center"
        /> */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-center mt-10">
          <h2
            className={`text-6xl font-bold tracking-tight text-white sm:text-5xl ${oswald.className} `}
          >
            Watch Live
          </h2>
          <p className="mt-4 text-lg text-white max-sm:hidden z-50">
            Welcome to the heart of the action! Tune in to watch all the UC Cup
            events live and immerse yourself in the excitement of our sporting
            competitions. Simply click on the platform icons below to access the
            live streams.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-[32rem] aspect-video">
          <video
            className="w-full h-screen object-cover opacity-40"
            controlsList="play nofullscreen nodownload noremoteplayback noplaybackrate foobar "
            autoPlay
            loop
            muted
            disablePictureInPicture
          >
            <source
              src="https://res.cloudinary.com/dtyw96fds/video/upload/v1695761401/pexels-claudio-calaboica-5476886_2160p_ducohk.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className=" py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-extrabold  ${oswald.className}`}>
            Live Stream Channels
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't miss out on any of the action! Watch our latest events live on
            our streaming channels. Subscribe to our YouTube and Rumble channels
            to stay updated.
          </p>
          <div className=" w-full  h-32 flex justify-around flex-wrap p-5">
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
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <h3 className="text-lg font-medium text-gray-900">YouTube</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Subscribe to our YouTube channel for live streams and
                  highlights.
                </p>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <h3 className="text-lg font-medium text-gray-900">Rumble</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Follow us on Rumble for exclusive content and live streams.
                </p>
              </div>
            </div>
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <h3 className="text-lg font-medium text-gray-900">Facebook</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Follow our Facebook page for live streams and updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
