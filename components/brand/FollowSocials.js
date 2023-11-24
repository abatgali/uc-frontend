import {
  YouTube,
  Facebook,
  Instagram,
  TikTok,
  X,
} from "@/components/brand/LivePlatformLogos";
export default function FollowSocials() {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 text-center pt-20 bg-white ">
      <h2 className={`text-4xl font-bold tracking-tight sm:text-4xl`}>
        Follow our Socials
      </h2>
      <p className="text-md font-semibold text-gray relative leading-8 text-gray-600 mx-auto"></p>
      <div className="bg-white pt-10 pb-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg  leading-8 text-gray-900 sm:w-4/5 mx-auto">
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
