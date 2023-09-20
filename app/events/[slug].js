import Image from "next/image"

export default function event(evt) {
  return (
    <div>evt.attributes.name</div>
    // <Image src={evt.attributes.date}/>
  )
}

export async function getStaticPaths({ params: {slug} }) {

    const res = await fetch(`${API_URL}/api/events?slug=${slug}`)
    const events = await res.json()

    return {
        props: {
            evt: events[0],
        },
        revalidate: 10,
    }
}
