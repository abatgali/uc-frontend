import {
  CalendarIcon,
  TrophyIcon,
  UserGroupIcon,
  BanknotesIcon,
  FlagIcon,
  ClockIcon,
  EnvelopeIcon,
  HeartIcon,
  UserPlusIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline'

const tournamentDetails = [
  {
    name: '10 Teams',
    description: 'Head-to-head competition representing 10 different Chin cities.',
    icon: UserGroupIcon,
  },
  {
    name: 'Prize Pool',
    description: '1st Place: $5,000, 2nd Place: $1,500, 3rd Place: $1,000',
    icon: TrophyIcon,
  },
  {
    name: 'Entry Fee',
    description: '$1,200 per team with a $300 deposit required to reserve your spot.',
    icon: BanknotesIcon,
  },
  {
    name: 'Tournament Dates',
    description: 'August 2025, Saturday and Sunday. Exact kick-off time to be announced.',
    icon: CalendarIcon,
  },
  {
    name: 'Community Building',
    description: 'Strengthening the Chin community by bringing people together through sports.',
    icon: HeartIcon,
  },
  {
    name: 'Team Representation',
    description: 'Each team represents one of the 10 Chin cities with their respective flags.',
    icon: FlagIcon,
  },
]

const registrationSteps = [
  {
    name: 'Step 1: Team Formation',
    description: 'Form your team with players representing your Chin city.',
    icon: UserGroupIcon,
  },
  {
    name: 'Step 2: Reserve Your Spot',
    description: 'Make a $300 deposit to secure your team\'s place in the tournament.',
    icon: BanknotesIcon,
  },
  {
    name: 'Step 3: Complete Registration',
    description: 'Pay the remaining $900 entry fee before the registration deadline.',
    icon: UserPlusIcon,
  },
  {
    name: 'Step 4: Confirmation',
    description: 'Receive confirmation and tournament details via email.',
    icon: EnvelopeIcon,
  },
]

export default function Tournament() {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-16 sm:pt-24">
        <div className="mx-auto max-w-2xl text-center mt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            <span className="block text-indigo-600">UC Cup</span>
            <span className="block mt-2">Soccer Tournament 2025</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Join the United Chin Association's premier soccer event bringing together 10 teams
            representing different Chin cities for competition, community, and celebration.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#register"
              className="rounded-md bg-indigo-600 px-6 py-3 text-lg font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              How to Register
            </a>
            <a href="#details" className="text-lg font-semibold leading-6 text-gray-900 flex items-center">
              Tournament Details <ArrowRightIcon className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative overflow-hidden pt-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <img
            alt="UC Cup Soccer Tournament 2025"
            src="https://storage.googleapis.com/allprojectsdata/UCA/tournament_page.jpeg"
            width={2432}
            height={1442}
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>

      <div id="details" className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Tournament Details</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to know about UC Cup 2025
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            The United Chin Soccer Tournament is more than just a competition. It&apos;s a celebration of our heritage, 
            an opportunity to strengthen community bonds, and a chance to showcase the talent within the Chin community.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3">
            {tournamentDetails.map((detail) => (
              <div key={detail.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <detail.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {detail.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{detail.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <div className="bg-indigo-700">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our Purpose</h2>
            <p className="mt-6 text-lg leading-8 text-indigo-200">
              The UC Cup Soccer Tournament was established with a clear vision: to strengthen the Chin community, 
              bring all people together, and provide an opportunity for relaxation and entertainment. 
              Through the universal language of soccer, we aim to:
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-indigo-200 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                <strong className="font-semibold text-white">Strengthen Community Bonds.</strong> By bringing together teams from 10 different Chin cities, 
                we create opportunities for networking, friendship, and unity across our diverse community.
              </p>
              <p className="mt-8">
                <strong className="font-semibold text-white">Preserve Cultural Heritage.</strong> The tournament celebrates our shared identity 
                while honoring the unique characteristics of each Chin city through team representation.
              </p>
            </div>
            <div>
              <p>
                <strong className="font-semibold text-white">Promote Physical Activity.</strong> Encouraging active lifestyles through competitive sports 
                contributes to the overall health and wellbeing of our community members.
              </p>
              <p className="mt-8">
                <strong className="font-semibold text-white">Create Lasting Memories.</strong> The tournament provides a platform for creating shared experiences 
                and memories that will be cherished for years to come.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div id="register" className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Registration Process</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              How to Register Your Team
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              The tournament is limited to 10 teams, each representing a different Chin city. 
              Secure your team's spot by following these simple steps:
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2">
              {registrationSteps.map((step) => (
                <div key={step.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                      <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {step.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{step.description}</dd>
                </div>
              ))}
            </dl>
          </div>
          
          <div className="mt-16 flex items-center justify-center">
            <div className="rounded-md bg-indigo-50 px-8 py-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <EnvelopeIcon className="h-5 w-5 text-indigo-600" aria-hidden="true" />
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-indigo-800">Contact for Registration</h3>
                  <p className="mt-2 text-sm text-indigo-700">
                    For more information or to register your team, please contact us at{' '}
                    <a href="mailto:unitedchin.uci@gmail.com" className="font-medium underline">
                      unitedchin.uci@gmail.com
                    </a>
                    {' '}or follow us on Instagram{' '}
                    <a href="https://www.instagram.com/unitedchin/" className="font-medium underline">
                      @unitedchin
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900">
        <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a href="https://www.instagram.com/unitedchin/" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="mailto:unitedchin.uci@gmail.com" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">Email</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-gray-400">
              &copy; 2024 United Chin Association. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
  