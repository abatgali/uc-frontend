import Image from "next/image";

const people = [
  {
    name: "Chairman",
    role: "United Chin International Ltd",
    imageUrl:
      "https://storage.googleapis.com/uci-public/Branding/transparentonblack/1x/transparent.png",
  },
  {
    name: "CEO",
    role: "",
    imageUrl: "",
  },
  {
    name: "Marketing Executive",
    role: "",
    imageUrl: "",
  },
  {
    name: "Marketing Assistant",
    role: "",
    imageUrl: "",
  },
  {
    name: "Finance Executive",
    role: "",
    imageUrl: "",
  },
  {
    name: "Finance Assistant",
    role: "",
    imageUrl: "",
  },
  {
    name: "HR Executive",
    role: "",
    imageUrl: "",
  },
  {
    name: "Event Manager",
    role: "",
    imageUrl: "",
  },
  {
    name: "Sports Director",
    role: "",
    imageUrl: "",
  },
  {
    name: "Assistant Sports Director",
    role: "",
    imageUrl: "",
  },
  {
    name: "IDoL Director",
    role: "",
    imageUrl: "",
  },
  {
    name: "Assistant IDoL Director",
    role: "",
    imageUrl: "",
  },
  {
    name: "Pageant Director",
    role: "",
    imageUrl: "",
  },
  {
    name: "Assistant Pageant Director",
    role: "",
    imageUrl: "",
  },
];

export default function MeetBoardMembers() {
  return (
    <div className="bg-transparent py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2
            className={`text-3xl font-bold tracking-tight text-gray-200 sm:text-4xl`}
          >
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Here you can learn more about the leadership team that drives our
            organization forward. Our Board Members are dedicated to upholding
            our mission and values, and work tirelessly to ensure that United
            Chin continues to bring our community closer.
          </p>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2 bg-white rounded-lg shadow-lg overflow-hidden p-5 bg-opacity-80 backdrop-blur-md"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <div className="object-cover">
                  {person.imageUrl ? (
                    <Image
                      width={64}
                      height={64}
                      className="h-16 w-16 rounded-full "
                      src={person.imageUrl}
                      alt="Profile Picture"
                    />
                  ) : (
                    <div
                      className={`h-16 w-16 rounded-full bg-gray-950 flex items-center justify-center text-white text-2xl font-bold`}
                    >
                      {person.name.charAt(0)}
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                    {person.name}
                  </h3>
                  <p className="text-sm font-semibold leading-6 text-orange-800">
                    {person.role}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
