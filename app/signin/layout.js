import config from "@/config";
import { getSEOTags } from "@/libs/seo";
import Link from "next/link";
import Image from "next/image";

export const metadata = getSEOTags({
  title: `Sign-in to ${config.appName}`,
  canonicalUrlRelative: "/auth/signin",
});

export default function Layout({ children }) {
  return (
    <>
      <div className="flex min-h-full flex-1 ">
        <div className="relative hidden w-0 flex-1 lg:block">
          <Image
            className="absolute inset-0 h-screen w-full object-cover"
            src="https://storage.googleapis.com/uci-public/registerPage.jpg"
            alt="people looking towards the sunset on a shoreline where waves are almost hitting their legs"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-black h-screen opacity-10"></div>
          <div className="absolute inset-0 p-16 flex h-full flex-col justify-between">
            <div className="flex h-fit">
              <Link href="/">
                <p className={`text-white font-black text-5xl ml-4`}>
                  <Image
                    src={`https://storage.googleapis.com/uci-public/umaa/white-logo%403x.png`}
                    className="w-48 h-auto"
                    alt="United Chin International - UC Cup logo"
                    height={48}
                    width={256}
                  />
                </p>
              </Link>
            </div>
            <div>
              <h2 className={` text-5xl font-extrabold text-white`}>
                Experience Community, Join Today!
              </h2>
              <p className="text-white mt-20 text-2xl w-2/3">
                Sign up to access events, play sports and stay up to date on UC
                Cup 24™ qualification!
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 flex-col h-screen justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          {children}
        </div>
      </div>
    </>
  );
}
