export default function Eventlist({ events }) {
  return (
    <>
    {console.log(events)}
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