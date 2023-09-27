export default function EventsLayout({ children }) {
  return (
    <>
    <div className='w-full h-[300px] object-cover bg-black'>
        <img
          src='https://res.cloudinary.com/dtyw96fds/image/upload/v1695784610/ticket-2974645_1280_araaqu.jpg'
          alt=''
          className='h-full w-full  bg-gray-900/5 object-cover shadow-lg object-center'
        />
      </div>
      <div className='mx-auto w-full px-4 sm:px-6 lg:px-8 bg-white p-10'>

        <div className='mx-auto w-2/3'>{children}</div>
      </div>
    </>
  );
}
