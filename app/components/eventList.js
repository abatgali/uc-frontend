export default function Eventlist({ events }) {
  
  return (
    <>
    {/* {console.log(events)} */}
    
    <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6 my-5">
      <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap">
        <div className="ml-4 mt-2">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Event Name</h3>
        </div>
        <div className="ml-4 mt-2 flex-shrink-0">
          <button
            type="button"
            className="relative inline-flex items-center rounded-md bg-amber-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            View Details
          </button>
        </div>
      </div>
      <div className="p-2">
        <span>Date </span>
        &nbsp; 
        <span>Time</span>

      </div>
    </div>

    </>
  )
}

export async function getServerSideProps() {
    const res = await fetch(`${API_URL}/api/events?_sort=date:ASC&_limit=3`)
    const events = res.json()
  
    return {
      props: { events: events },
      revalidate: 1,
    }
  }