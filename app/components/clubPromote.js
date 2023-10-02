import { oswald } from "../pages/_app";
import Link from "next/link";

export default function ClubPromote() {
  return (
    <div className="w-full h-screen object-cover relative bg-gradient-to-t from-gray-400 to-transparent">
      <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 text-center mt-10">
        <h2
          className={` ${oswald.className} text-5xl font-bold tracking-tight text-white sm:text-4xl `}
        >
          Unearth Your Passion.
        </h2>
        <p className="mt-4 text-lg text-white max-sm:hidden ">
          Once you become a member join a club or create your own. We are chill
          like that.{" "}
          <a href="/#faqs" className=" italic hovercursor-pointer">
            Learn More.
          </a>
        </p>
        <Link href="/signup">
          <div className="w-48 mx-auto p-2 mt-5 bg-black text-gray-200 hover:text-black hover:bg-gray-200 font-semibold">
            Create an Account
          </div>
        </Link>
      </div>
      <div
        className="absolute top-0 left-0 w-full h-[32rem] aspect-video "
        id="jump"
      >
        <video
          className="w-full h-screen object-cover  mix-blend-multiply"
          controlsList="play nofullscreen nodownload noremoteplayback noplaybackrate foobar "
          autoPlay
          loop
          muted
          disablePictureInPicture
        >
          <source
            src="https://res.cloudinary.com/dtyw96fds/video/upload/v1695775459/pexels-kelly-lacy-5677397_2160p_mnl65a.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
