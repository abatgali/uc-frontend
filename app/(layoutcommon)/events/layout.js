import Banner from '../../components/banner'

export default function EventsLayout({children}){
  return (
    <>
    <Banner/>    
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 bg-white p-10">
      {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
      <div className="mx-auto max-w-3xl">{ children }</div>
    </div>
    </>
  )
}
