export default function HeroVids() {
  return (
    <div className="flex w-full lg:justify-evenly max-md:flex-col bg-black bg-opacity-20 relative top-[-230px] max-lg:aspect-5/8] pb-5">
          <div className="w-1/3 h-auto max-sm:mb-10 max-md:hidden  object-cover ">
            <video
              src="https://res.cloudinary.com/dtyw96fds/video/upload/v1695762146/video_540p_fh8mwb.mp4"
              autoPlay
              loop
              className=" min-h-24 sm:h-96 bg-black "
              muted
              controlsList="play nofullscreen nodownload noremoteplayback noplaybackrate foobar muted"
            ></video>
          </div>
          <div className="w-1/3 h-auto max-sm:mb-10 object-cover max-md:hidden">
            <video
              src="https://res.cloudinary.com/dtyw96fds/video/upload/v1695761381/roller_coasters_720p_ohq5ao.mp4"
              className=" bg-black sm:h-96 "
              autoPlay
              loop
              muted
              controlsList="play nofullscreen nodownload noremoteplayback noplaybackrate foobar muted"
            ></video>
          </div>
          <div className="w-1/3 max-md:w-full h-fit max-sm:mb-10 object-cover">
            <video
              src="https://res.cloudinary.com/dtyw96fds/video/upload/v1695761401/pexels-tima-miroshnichenko-5713512_2160p_1_vqnmck.mp4"
              className="bg-black w-full aspect-auto sm:h-96 "
              autoPlay
              loop
              muted
              controlsList="play nofullscreen nodownload noremoteplayback noplaybackrate foobar muted"
            ></video>
          </div>
        </div>
  )
}
