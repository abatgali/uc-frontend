export default function eventsBanner() {
  return (
    <div className="flex w-full h-min  justify-evenyl max-md:flex-col bg-black bg-opacity-20 relative top-[-70px]">
      <div className="w-auto h-auto max-sm:mb-10  object-cover ">
        <video
          src="https://res.cloudinary.com/dtyw96fds/video/upload/v1695156461/pexels_cottonbro_5738571_2160p_32cfbc912b.mp4"
          autoPlay
          loop
          className=" h-96 "
          muted
          controlsList="play nofullscreen nodownload noremoteplayback noplaybackrate foobar"
        ></video>
      </div>
      <div className="w-auto h-auto max-sm:mb-10 object-cover ">
        <video
          src="https://res.cloudinary.com/dtyw96fds/video/upload/v1695156454/idol_d0f879a274.mp4"
          className="  h-96"
          autoPlay
          loop
          muted
          controlsList="play nofullscreen nodownload noremoteplayback noplaybackrate foobar"
        ></video>
      </div>
      <div className="w-auto h-auto max-sm:mb-10 object-cover">
        <video
          src="https://res.cloudinary.com/dtyw96fds/video/upload/v1695156456/pingpong_cf17267782.mp4"
          className=" h-96"
          autoPlay
          loop
          muted
          controlsList="play nofullscreen nodownload noremoteplayback noplaybackrate foobar"
        ></video>
      </div>
    </div>
  );
}
