export default function FollowSocials() {
  return (
    <div className='mx-auto w-full px-4 sm:px-6 lg:px-8 text-center bg-white pt-8'>
      <h2 className='text-4xl font-bold tracking-tight text-orange-600 sm:text-4xl'>
        Follow our Socials
      </h2>
      <p className='text-md font-semibold text-gray mt-4 relative leading-8 text-gray-600 mx-auto'></p>
      <div className='bg-white py-24 sm:py-32'>
        <div className='mx-auto max-w-7xl px-6 lg:px-8'>
          <h2 className='text-center text-lg font-semibold leading-8 text-gray-900'>
            Stay in the game and never miss a moment by following UC Cup on
            social media for the latest updates, behind-the-scenes action, and
            exclusive content.
          </h2>
          <div className='mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-4'>
            <img
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='https://res.cloudinary.com/dtyw96fds/image/upload/v1695414689/Asset_1_hlfxdg.svg'
              alt='Instagram'
              width={158}
              height={48}
            />
            <img
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='https://res.cloudinary.com/dtyw96fds/image/upload/v1695415063/Asset_1_xmgiqu.svg'
              alt='Transistor'
              width={158}
              height={48}
            />
            <img
              className='col-span-2 max-h-12 w-full object-contain lg:col-span-1'
              src='https://res.cloudinary.com/dtyw96fds/image/upload/v1695414361/Asset_1_t09gxb.svg'
              alt='Tuple'
              width={158}
              height={48}
            />
            <img
              className='col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1'
              src='https://res.cloudinary.com/dtyw96fds/image/upload/v1695415481/facebook_vokxv5.png'
              alt='SavvyCal'
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
