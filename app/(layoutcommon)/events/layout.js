import Banner from '../../components/banner'

export default function EventsLayout({ children }) {
  return (
    <>
      <Banner />
      <div className='mx-auto w-full px-4 sm:px-6 lg:px-8 bg-white p-10'>

        <div className='mx-auto max-w-3xl'>{children}</div>
      </div>
    </>
  );
}
