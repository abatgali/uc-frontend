import HeroVids from "./herovids";
export default function Hero() {
  return (
    <div className="w-full">
      <div className="relative object-fill h-auto overflow-hidden inline-block">
        <div className="flex flex-row">
          <video
            className="z-0 sm:h-[500px] max-sm:hidden w-full md:w-1/2 bg-slate-950 aspect-video"
            src="https://res.cloudinary.com/dtyw96fds/video/upload/v1695156461/soccer_net_89176b6663.mp4"
            autoPlay
            loop
            muted
            controlsList="play nofullscreen nodownload noremoteplayback noplaybackrate foobar "
          ></video>
          <video
            className="z-0 max-sm:h-96 max-sm:aspect-[3/2] sm:h-[500px] w-auto md:w-1/2 bg-slate-950 aspect-video"
            src="https://res.cloudinary.com/dtyw96fds/video/upload/v1695775459/pexels-kelly-lacy-5677397_2160p_mnl65a.mp4"
            autoPlay
            loop
            muted
            controlsList="play nofullscreen nodownload noremoteplayback noplaybackrate foobar "
          ></video>
        </div>
        <div className="text-center relative top-[-170px] sm:top-[-200px]">
          <h1 className="text-2xl font-bold tracking-tight text-white sm:text-6xl font-brand">
            Unearth Your Passion
          </h1>

          <div className="mt-10  flex items-center justify-center gap-x-6">
            <a
              href="/login"
              className="rounded-md z-5 bg-amber-600 px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
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
        <div className="text-center relative top-[-40px] z-10">
          <p className=" text-gray-100  text-sm lg:text-lg">
            Join our community and participate in sports, meet new people, and
            experience the thrill of competition.
          </p>
          <h2 className="text-xl font-bold tracking-tight text-gray-200 sm:text-4xl mt-4">
            Experience the Thrill
          </h2>
        </div>
        <HeroVids />
      </div>
    </div>
  );
}
