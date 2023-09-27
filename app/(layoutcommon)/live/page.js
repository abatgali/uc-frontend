export const channelUrl = ''

export default function Live() {
  return (
    <>
        <div className='w-full h-screen object-cover'>
          <img
            src='https://res.cloudinary.com/dtyw96fds/image/upload/v1695776983/pexels-harrison-haines-3696395_f81rd2.jpg'
            alt=''
            className='h-full w-full  bg-gray-900/5 object-cover shadow-lg object-center'
          />
          <div className='absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center'>
            <h2 className='text-5xl font-bold tracking-tight text-white sm:text-4xl'>
              Watch Live
            </h2>
            <p className='mt-4 text-lg text-white'>
              Welcome to the heart of the action! Tune in to watch all the UC Cup events live and immerse yourself in the excitement of our sporting competitions. Simply click on the platform icons below to access the live streams.
            </p>
           
          </div>
          </div>
        
    </>
  )
}
