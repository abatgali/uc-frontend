// import video from "https://asset.cloudinary.com/dtyw96fds/5dc74c3381e2d61bfca4be3fdd96d179"

export default function Hero() {
  

  return (
    <div className="w-full">
      <video className="z-0" src="https://res.cloudinary.com/dtyw96fds/video/upload/v1695156461/soccer_net_89176b6663.mp4" autoPlay loop controlsList="play nofullscreen nodownload noremoteplayback noplaybackrate foobar">
      </video> 
        <div className="mx-auto max-w-2xl -mt-[180px] sm:-py-56 lg:-mt-[300px]">
        
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-6xl">
            Unearth Your Passion
            </h1>
            <p className="mt-6 hidden leading-8 text-gray-100 md:text-4xl">
            Unlock a universe of excitement, camaraderie, and competition with United Chin International, your all-access pass to clubs, events, and contests. 
              Say hello to limitless opportunities.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="z-10 rounded-md bg-amber-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
              >
                Get started
              </a>
              <a href="#" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      
    </div>
  )
}
