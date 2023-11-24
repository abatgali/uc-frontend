'use client';
import Link from "next/link";
import Image from "next/image";
import ClubPromote from "@/components/brand/ClubPromote";
import FollowSocials from "@/components/brand/FollowSocials";
import Questions from "@/components/brand/Questions";

export default function UCup() {
  return (
    <>
      <div className="w-full h-screen object-cover relative ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center mt-10">
          <Image
            src="https://storage.googleapis.com/uci-public/Branding/primary%20logo/3x/UCI%20primary%403x.png"
            className="mb-12 w-64 h-auto mx-auto"
            width={256}
            height={48}
            alt="UMAA - United Myanmar American Association Logo"
          />
          <h2
            className={`text-5xl font-bold tracking-tight text-white sm:text-4xl `}
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
          <Link href="/signin">
            <div className=" mx-auto p-2 mt-5 bg-black text-gray-200 hover:bg-gray-200 hover:text-black font-semibold w-48">
              Join Now
            </div>
          </Link>
        </div>
        <div className="absolute top-0 left-0 w-full h-[32rem] " id="football">
          <video
            className="w-full h-screen object-cover "
            controlsList="play nofullscreen nodownload noremoteplayback noplaybackrate foobar "
            autoPlay
            loop
            muted
            disablePictureInPicture
            playsInline
          >
            <source
              src="https://storage.googleapis.com/uci-public/homepage_herovid_edited.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <ClubPromote />
      <FollowSocials />
      <Questions />
    </>
  );
}
