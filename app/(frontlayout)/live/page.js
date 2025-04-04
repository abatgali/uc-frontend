import { Facebook, YouTube, X, Rumble } from "@/components/brand/LivePlatformLogos";
import { getSEOTags } from "@/libs/seo";

export const metadata = getSEOTags({
  title: "Live",
  description: "United Chin Association | UCA",
  canonicalUrlRelative: "/live",
});

export default function Live() {
  return (
    <>
      <div className="w-full h-screen object-cover relative bg-black">
        <div className="absolute top-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-center mt-10">
          <h2
            className={`text-6xl font-bold tracking-tight text-white sm:text-5xl `}
          >
            Watch Live
          </h2>
          <p className="mt-4 text-lg text-white max-sm:hidden z-30">
            Welcome to the heart of the action! Tune in to watch all the UC Cup
            events live and immerse yourself in the excitement of our sporting
            competitions. Simply click on the platform icons below to access the
            live streams.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-[32rem] aspect-video">
          <video
            className="w-full h-screen object-cover opacity-80"
            controlsList="play nofullscreen nodownload noremoteplayback noplaybackrate foobar "
            autoPlay
            loop
            muted
            playsInline
            disablePictureInPicture
          >
            <source
              src="https://storage.googleapis.com/uci-public/live_hero_vid.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className=" py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className={`text-3xl font-extrabold `}>
            Live Stream Channels
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Don&apos;t miss out on any of the action! Watch our latest events live on
            our streaming channels. Subscribe to our YouTube and Rumble channels
            to stay updated.
          </p>
          <div className=" w-full  h-32 flex justify-around flex-wrap p-5">
            <div className=" m-3 ">
              <YouTube />
            </div>
            {/* <div className=" m-3 ">
              <Rumble />
            </div>
            <div className=" m-3 ">
              <Facebook />
            </div>
            <div className=" m-3 ">
              <X />
            </div> */}
          </div>
          <div className="mt-8 mx-auto">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="p-5">
                <h3 className="text-lg font-medium text-gray-900">YouTube</h3>
                <p className="mt-2 text-sm text-gray-500">
                  Subscribe to our YouTube channel for live streams and
                  highlights.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
