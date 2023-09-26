export default function Hero() {
  return (
    <div className="w-full">
      <div className="relative max-md:h-full h-screen object-fill bg-white">
        <video
          className="z-0 h-3/6 w-full bg-slate-950"
          src="https://res.cloudinary.com/dtyw96fds/video/upload/v1695156461/soccer_net_89176b6663.mp4"
          autoPlay
          loop
          muted
          controlsList="play nofullscreen nodownload noremoteplayback noplaybackrate foobar "
        ></video>
        <div className="text-center relative top-[-170px]">
          <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
            Unearth Your Passion
          </h1>

          <div className="mt-10  flex items-center justify-center gap-x-6">
            <a
              href="/login"
              className="rounded-md z-10 bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Get started
            </a>
            <a
              href="#faqs"
              className="text-sm font-semibold leading-6 z-5 text-white"
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div className="text-center relative top-[-90px]">
          <h2 className="text-2xl font-bold tracking-tight text-gray-700 sm:text-5xl">
            Experience the Thrill
          </h2>
        </div>
        <div className="flex flex-wrap w-full h-auto p-10 bg-blue-300 justify-evenly items-center">
          <div className="w-96 h-48 max-sm:mb-10 bg-black object-cover">
            <video
              src="https://res.cloudinary.com/dtyw96fds/video/upload/v1695156460/soccer_2160p_4b34511b28.mp4"
              autoPlay
              loop
              muted
              controlsList="play nofullscreen nodownload noremoteplayback noplaybackrate foobar"
            ></video>
          </div>
          <div className="w-96 h-48 max-sm:mb-10 bg-black object-cover">
            <video
              src="https://res.cloudinary.com/dtyw96fds/video/upload/v1695156456/tabletennisoutdoor_4095008135.mp4"
              autoPlay
              loop
              muted
              controlsList="play nofullscreen nodownload noremoteplayback noplaybackrate foobar"
            ></video>
          </div>
          <div className="w-96 h-48 max-sm:mb-10 bg-black object-cover">
            <video
              src="https://res.cloudinary.com/dtyw96fds/video/upload/v1694355763/samples/cld-sample-video.mp4"
              autoPlay
              loop
              muted
              controlsList="play nofullscreen nodownload noremoteplayback noplaybackrate foobar"
            ></video>
          </div>
        </div>
      </div>
    </div>
  );
}
