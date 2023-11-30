import {
  CheckBadgeIcon,
  LockClosedIcon,
  ServerIcon,
} from "@heroicons/react/20/solid";
import { getSEOTags } from "@/libs/seo";

import Link from "next/link";
import Image from "next/image";

export const metadata = getSEOTags({
  title: "Shop",
  description: "Shop United Myanmar",
  canonicalUrlRelative: "/shop",
});

const features = [
  {
    name: "Official Merchandise.",
    description:
      "Our products are officially licensed and designed to capture the essence of UC Cup events.",
    icon: CheckBadgeIcon,
  },
  {
    name: "Quality Assurance.",
    description: `We prioritize quality to ensure that our merchandise stands the test of time, just like the memories you will create at UC Cup events.`,
    icon: LockClosedIcon,
  },
  {
    name: "Support Your Teams.",
    description:
      "Every purchase you make directly supports UC Cup and the teams and athletes who participate, helping us continue to promote sportsmanship and community engagement.",
    icon: ServerIcon,
  },
];

const featuredProducts = [
  {
    name: "Team Jerseys",
    description:
      "Show your allegiance with authentic UC Cup team jerseys. Available in various sizes, these jerseys are perfect for cheering on your squad or participating in style.",
  },
  {
    name: "UC Cup Caps",
    description:
      "Top off your game-day look with our stylish UC Cup caps, designed to keep you cool and comfortable while you show your support.",
  },
  {
    name: "Event T-Shirts",
    description:
      "Commemorate your participation in UC Cup events with event-specific T-shirts. These limited-edition tees are a must-have for every UC Cup enthusiast.",
  },
  {
    name: "Sporting Accessories",
    description:
      "From water bottles to wristbands, we have got a range of sporting accessories that will keep you in top form while you show your UC Cup spirit.",
  },
  {
    name: "UC Cup Souvenirs",
    description:
      "Take home a piece of the action with UC Cup souvenirs, including keychains, magnets, and more. These make great gifts for friends and family who share your love for sports.",
  },
];

export default function Shop() {
  return (
    <>
      <div className="w-full h-screen bg-gradient-to-b from-black to-gray-600 object-cover">
        <Image
          src="https://storage.googleapis.com/uci-public/shop_hero.png"
          alt="Product screenshot"
          className="w-full h-full object-cover opacity-80"
          width={1920}
          height={1080}
        />
      </div>
      <div className="text-center p-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
        <h2 className="text-base leading-7 text-white font-bold max-sm:hidden">
          Sporting Spirit
        </h2>
        <div className="">
          <p className="mt-2 text-5xl font-bold tracking-tight text-white md:text-7xl">
            <span className={``}>Represent your Community</span>
          </p>
        </div>

        <div className="my-10">
          <Link
            // href="https://uci-clubconnect.myshopify.com/"
            href="#"
            className="bg-black h-15  w-auto text-white font-semibold py-2 px-4 hover:bg-orange-500"
            aria-disabled="true"
          >
            Coming Soon
          </Link>
        </div>
      </div>
      <div className=" text-center p-10 w-full  bg-white">
        <p className="mt-6 text-lg leading-8 md:w-2/3 mx-auto">
          Welcome to the UC Cup Shop, your one-stop destination for official
          merchandise and gear to support your favorite teams and commemorate
          your UC Cup experience.
          <span>
            {" "}
            Explore our curated collection of high-quality products designed to
            elevate your sporting spirit and showcase your UC Cup pride.
          </span>
        </p>
      </div>
      <div className="bg-white  p-8  mx-auto">
        <dl className="mt-10 max-w-xl w-2/3 mx-auto pb-5 space-y-8 text-base leading-7 max-sm:w-full lg:max-w-none">
          {features.map((feature) => (
            <div key={feature.name} className="relative pl-9">
              <dt className="inline font-semibold ">
                <feature.icon
                  className="absolute left-1 top-1 h-5 w-5 text-amber-600"
                  aria-hidden="true"
                />
                {feature.name}
              </dt>{" "}
              <dd className="inline">{feature.description}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className=" py-12 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-extrabold `}>Featured Products</h2>
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {featuredProducts.map((product) => (
              <div
                key={product.name}
                className="bg-white overflow-hidden shadow "
              >
                <div className="p-5">
                  <h3 className="text-lg font-medium text-gray-900">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="text-center py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-extrabold`}>Stay Connected</h2>
          <p className="mt-4 text-lg text-gray-600">
            Don&apos;t forget to join our mailing list and follow us on social
            media to stay updated on new arrivals, promotions, and exclusive
            offers. Your support through the UC Cup Shop not only allows you to
            showcase your passion for sports but also contributes to the growth
            of our sporting community. Shop now and elevate your UC Cup
            experience!
          </p>
        </div>
      </div>
    </>
  );
}
