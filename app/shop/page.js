import { CheckBadgeIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { kenia } from '../pages/_app'
import Link from 'next/link'
const features = [
  {
    name: 'Official Merchandise.',
    description:
      'Our products are officially licensed and designed to capture the essence of UC Cup events.',
    icon: CheckBadgeIcon,
  },
  {
    name: 'Quality Assurance.',
    description: `We prioritize quality to ensure that our merchandise stands the test of time, just like the memories you will create at UC Cup events.`,
    icon: LockClosedIcon,
  },
  {
    name: 'Support Your Teams.',
    description: 'Every purchase you make directly supports UC Cup and the teams and athletes who participate, helping us continue to promote sportsmanship and community engagement.',
    icon: ServerIcon,
  },
]

const featuredProducts = [
    {
      name: 'Team Jerseys',
      description: 'Show your allegiance with authentic UC Cup team jerseys. Available in various sizes, these jerseys are perfect for cheering on your squad or participating in style.',
    },
    {
      name: 'UC Cup Caps',
      description: 'Top off your game-day look with our stylish UC Cup caps, designed to keep you cool and comfortable while you show your support.',
    },
    {
      name: 'Event T-Shirts',
      description: 'Commemorate your participation in UC Cup events with event-specific T-shirts. These limited-edition tees are a must-have for every UC Cup enthusiast.',
    },
    {
      name: 'Sporting Accessories',
      description: "From water bottles to wristbands, we've got a range of sporting accessories that will keep you in top form while you show your UC Cup spirit.",
    },
    {
      name: 'UC Cup Souvenirs',
      description: 'Take home a piece of the action with UC Cup souvenirs, including keychains, magnets, and more. These make great gifts for friends and family who share your love for sports.',
    },
  ]

export default function Shop() {
  return (
    <>

    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:ml-auto lg:pl-4 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-amber-600">Sporting Spirit</h2>
              <div className="flex items-center">
                  <p className="mt-2 text-3xl font-bold tracking-tight text-amber-900 sm:text-4xl"><span className={`${kenia.className} text-6xl`}>UC CUP </span></p>
                  <Link href="https://uci-clubconnect.myshopify.com/" className="ml-20 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-4 rounded">
                    Go to Shop
                  </Link>
                </div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              Welcome to the UC Cup Shop, your one-stop destination for official merchandise and gear to support your favorite teams and commemorate your UC Cup experience. Explore our curated collection of high-quality products designed to elevate your sporting spirit and showcase your UC Cup pride.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-amber-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="flex items-start justify-end lg:order-first">
            <img
              src="https://res.cloudinary.com/dtyw96fds/image/upload/v1695448825/shopTshirts_gpw8as.png"
              alt="Product screenshot"
              className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
              width={2432}
              height={1442}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-gray-100 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-amber-900">Featured Products</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {featuredProducts.map((product) => (
          <div key={product.name} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="p-5">
              <h3 className="text-lg font-medium text-gray-900">{product.name}</h3>
              <p className="mt-2 text-sm text-gray-500">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-amber-900">Stay Connected</h2>
          <p className="mt-4 text-lg text-gray-600">
            Don't forget to join our mailing list and follow us on social media to stay updated on new arrivals, promotions, and exclusive offers. Your support through the UC Cup Shop not only allows you to showcase your passion for sports but also contributes to the growth of our sporting community. Shop now and elevate your UC Cup experience!
          </p>
        </div>
      </div>
  </>

  )
}
