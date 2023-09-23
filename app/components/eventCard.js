export default function EventCard() {
    
    return (
      <div className="flex ">
        <div className="mr-4 flex-shrink-0 ">
          <svg
            className="h-full w-36 border border-gray-300 bg-white text-gray-300"
            preserveAspectRatio="none"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 200 200"
            aria-hidden="true"
          >
            <path vectorEffect="non-scaling-stroke" strokeWidth={1} d="M0 0l200 200M0 200L200 0" />
          </svg>
        </div>
        <div className="">
          <h4 className="text-lg font-bold pt-4">Event Name</h4>
          <p className="mt-3">
            Date | Time
          </p>
        </div>
      </div>
    )
  }
  