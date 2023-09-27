import Hero from '../components/hero'
import FAQs from '../components/faq'
import SectionHome from '../components/homesection'
import FollowSocials from '../components/followSocials'

export default function Home() {
  return (
    <>
      <Hero />
      <div className=' relative sm:top-[-275px] max-sm:top-[-295px] mb-[-295px]'>
      <SectionHome />
      <FollowSocials />
      <FAQs />
      </div>
    </>
  )
}
