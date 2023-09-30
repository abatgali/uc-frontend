import FAQs from "../components/faq";
import FollowSocials from "../components/followSocials";
import SectionHome from "../components/homesection";
import Link from "next/link";
import MobileHero from "../components/sportsHomesection";
import { oswald } from "../pages/_app";
import ClubPromote from "../components/clubPromote";

export default function Home() {
  return (
    <>
      <div className="w-full h-screen object-cover relative bg-gradient-to-t from-gray-400 to-transparent">
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-center mt-10">
          <h2
            className={` ${oswald.className} text-5xl font-bold tracking-tight text-white sm:text-4xl `}
          >
            Participate. Compete. Win.
          </h2>
          <p className="mt-4 text-lg text-white max-sm:hidden ">
            Unlock a world of excitement, camaraderie, and competition. United
            Chin International is your all-access pass to an incredible array of
            clubs, events, and competitions that will keep you engaged,
            entertained, and energized. Say hello to limitless opportunities
            right in your community.
          </p>
          <Link href="/signup">
            <div className="w-48 mx-auto p-2 mt-5 bg-black text-gray-200">
              Join Now
            </div>
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-[32rem] aspect-video ">
          <video
            className="w-full h-screen object-cover opacity-70 mix-blend-multiply max-sm:opacity-90"
            controlsList="play nofullscreen nodownload noremoteplayback noplaybackrate foobar "
            autoPlay
            loop
            muted
          >
            <source
              src="https://res.cloudinary.com/dtyw96fds/video/upload/v1695156461/soccer_net_89176b6663.mp4"
              // src="https://res.cloudinary.com/dtyw96fds/video/upload/v1695761401/pexels-claudio-calaboica-5476886_2160p_ducohk.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <img
          src="https://res.cloudinary.com/dtyw96fds/image/upload/v1695776983/pexels-harrison-haines-3696395_f81rd2.jpg"
          alt=""
          className="h-full w-full  object-cover shadow-lg object-center mix-blend-multiply max-sm:hidden"
        />
      </div>
      <MobileHero />
      <ClubPromote />
      <SectionHome />

      <FollowSocials />
      <FAQs />
    </>
  );
}
