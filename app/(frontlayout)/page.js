import { getSEOTags } from "@/libs/seo";
import {
  Facebook,
  Instagram,
  TikTok,
  X,
  YouTube,
} from "@/components/brand/LivePlatformLogos";

export const metadata = getSEOTags({
  title: "UMAA Home",
  canonicalUrlRelative: "/",
});

export default function Home() {
  return (
    <>
      <div className="w-full h-max relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 text-center mt-10 border-solid border-s-white border-1">
          <h2
            className={` text-5xl font-bold text-white sm:text-4xl `}
          >
            UNITED MYANMAR AMERICAN ASSOCIATION
          </h2>
          <p className="mt-4 text-2xl text-white max-sm:hidden ">
            Celebrating and Empowering Burmese Community
          </p>
        </div>
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
            src="https://storage.googleapis.com/uci-public/umaa/homepagevidUMAA.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="sm:w-4/5 w-full text-center py-12 h-max mx-auto">
        <h1 className={``}>Our Mission</h1>
        <div className="flex justify-between mt-10 max-sm:flex-col">
          <div className="w-[300px] h-48 text-center mt-5 border-solid border-2 border-amber-600 max-md:w-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-16 mx-auto h-auto my-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
              />
            </svg>

            <h2>Cultural Preservation</h2>
          </div>
          <div className="w-[300px] h-48 text-center mt-5 border-solid border-2 border-amber-600 max-md:w-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-16 mx-auto h-auto my-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>
            <h2>Education</h2>
          </div>
          <div className="w-[300px] h-48 text-center mt-5 border-solid border-2 border-amber-600 max-md:w-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-16 mx-auto h-auto my-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
              />
            </svg>
            <h2>Personal Growth</h2>
          </div>
          <div className="w-[300px] h-48 text-center mt-5 border-solid border-2 border-amber-600 max-md:w-full shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-16 mx-auto h-auto my-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64"
              />
            </svg>

            <h2>Social Services</h2>
          </div>
        </div>
      </div>
      <div className="w-full text-center py-12 h-max">
        <h1 className={``}>Who We Are</h1>
        <p className="p-2 my-5 md:w-3/4 mx-auto lg:w-1/2">
          The United Myanmar American Association (UMAA) is a non-profit
          organization that is committed to fostering a vibrant and connected
          Burmese community. The UMAA&apos;s primary goal is to promote cultural
          preservation, education, personal growth within the Myanmar community,
          and to provide a commonplace for resources and guidance on employment
          opportunities & social benefits.
        </p>
      </div>
      <div
        className="w-full h-96 object-cover bg-image-donate relative flex items-center justify-center"
        objectfit="cover"
      >
        <div className="z-20 text-center mt-10 bg-white backdrop-blur-md w-3/4 h-fit mx-auto py-5 bg-opacity-30 ">
          <h1 className={``}>Support the Community</h1>
          <p className="my-5 w-3/4 mx-auto">
            Your donation will help us continue to provide resources and
            services to the American Burmese community and expand our reach.
          </p>
          <div className="mx-auto">
            <script async src="https://js.stripe.com/v3/buy-button.js"></script>

            <stripe-buy-button
              buy-button-id="buy_btn_1O2gajAkvwHnCGKIrk2sKWOa"
              publishable-key="pk_live_51NzC35AkvwHnCGKIPiIwJhBZZ9jL5QtpAE8UCjJXY74tnz26BeGQddkjSZbSTw9FcE6ZtAT5A8CF35UljCbkdVfw006qJjDcCA"
            ></stripe-buy-button>
          </div>
        </div>
      </div>
      <div className="p-10">
        <h1 className={`text-center my-5`}>Follow Our Journey</h1>
        <p className="mx-auto w-fit text-center">
          Follow us on social media to stay updated on our latest events and
          news.
        </p>
        <div className="flex justify-around md:w-1/2 mx-auto my-24">
          <YouTube />
          <X />
          <TikTok />
          <Instagram />
          <Facebook />
        </div>
      </div>
    </>
  );
}
