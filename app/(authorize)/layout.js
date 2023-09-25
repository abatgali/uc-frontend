import "../globals.css";
import LogoIcon from "../components/logoIcon";
import Link from "next/link";
export const metadata = {
  title: "UC Cup - United Chin International",
  description:
    "Unlock a universe of excitement, camaraderie, and competition with ClubConnect, your all-access pass to clubs, events, and contests. Say hello to limitless opportunities.",
};

export default function AuthorizeLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="company icon" type="image/x-icon" href="../favicon.ico" />
      </head>
      <body className="flex min-h-full flex-1 bg-white">
        <div className="relative hidden w-0 flex-1 lg:block ">
          <img
            className="absolute inset-0 h-screen w-full object-cover"
            src="https://res.cloudinary.com/dtyw96fds/image/upload/v1695202052/registerPage_ya8bha.jpg"
            alt=""
          />
          <div className="absolute inset-0 p-16">
            <Link href="/">
              <div className="flex items-baseline">
                <LogoIcon />
                <p className="text-white font-extrabold text-3xl ml-4 mb-24">
                  {" "}
                  United Chin International
                </p>
              </div>
            </Link>
            <h2 className="mt-20 text-5xl font-extrabold text-white">
              Experience Community, Join Today!
            </h2>
            <p className="text-white mt-20 text-2xl w-2/3">
              Sign up to access events, play sports and stay up to date on UC
              Cup 24™ qualification!
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          {children}
        </div>
      </body>
    </html>
  );
}
