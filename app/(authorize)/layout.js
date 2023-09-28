import "../globals.css";
import Link from "next/link";
import Logo from "../primary.svg";
import Image from "next/image";
export const metadata = {
  title: "UC Cup - United Chin International",
  description:
    "Unlock a universe of excitement, camaraderie, and competition with ClubConnect, your all-access pass to clubs, events, and contests. Say hello to limitless opportunities.",
};

export default function AuthorizeLayout({ children }) {
  return (
    <div className="flex min-h-full flex-1 ">
      <div className="relative hidden w-0 flex-1 lg:block">
        <img
          className="absolute inset-0 h-screen w-full object-cover"
          src="https://res.cloudinary.com/dtyw96fds/image/upload/v1695202052/registerPage_ya8bha.jpg"
          alt="people looking towards the sunset on a shoreline where waves are almost hitting their legs"
        />
        <div className="absolute inset-0 bg-black h-screen opacity-50"></div>
        <div className="absolute inset-0 p-16">
          <div className="flex ">
            <Link href="/">
              <p className={`text-white font-black text-5xl ml-4 mb-24`}>
                <Image
                  src={Logo}
                  className="w-96 h-auto"
                  alt="United Chin International - UC Cup logo"
                />
              </p>
            </Link>
          </div>
          <h2 className="mt-20 text-5xl font-extrabold text-white">
            Experience Community, Join Today!
          </h2>
          <p className="text-white mt-20 text-2xl w-2/3">
            Sign up to access events, play sports and stay up to date on UC Cup
            24™ qualification!
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col h-screen justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        {children}
      </div>
    </div>
  );
}
