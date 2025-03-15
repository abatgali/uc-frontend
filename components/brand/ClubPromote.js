import Link from "next/link";

export default function ClubPromote() {
  return (
    <div className="w-full h-screen object-cover relative bg-gradient-to-t from-gray-400 to-transparent">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 text-center mt-10">
        <h2
          className={`text-5xl font-bold tracking-tight text-white sm:text-4xl `}
        >
          Unearth Your Passion.
        </h2>
        <p className="mt-4 text-lg text-white max-sm:hidden ">
          Once you become a member join a club or create your own.{" "}
          <a href="/#faqs" className=" italic hovercursor-pointer">
            Learn More.
          </a>
        </p>
        <Link href="/tournament">
          <div className="w-48 mx-auto p-2 mt-5 bg-black text-gray-200 hover:text-black hover:bg-gray-200 font-semibold">
            Learn More
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
            src="https://storage.googleapis.com/uci-public/unearth_homepage.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
