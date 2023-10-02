import { oswald } from "../pages/_app";
import { YouTube, Facebook, Instagram, TikTok, X } from "./live_platform_logos";
export default function FollowSocials() {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 text-center pt-8">
      <h2
        className={` ${oswald.className} text-4xl font-bold tracking-tight sm:text-4xl`}
      >
        Follow our Socials
      </h2>
      <p className="text-md font-semibold text-gray mt-4 relative leading-8 text-gray-600 mx-auto"></p>
      <div className="bg-white pt-10 pb-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg  leading-8 text-gray-900">
            Stay in the game and never miss a moment by following UC Cup on
            social media for the latest updates, behind-the-scenes action, and
            exclusive content.
          </h2>
          <div className="mx-auto mt-10 items-center w-full flex justify-evenly">
            <Instagram />
            <YouTube />
            <TikTok />
            <Facebook />
            <X />
          </div>
        </div>
      </div>
    </div>
  );
}
