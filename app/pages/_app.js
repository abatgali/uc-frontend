import localFont from 'next/font/local'

const kenia = localFont({ src: './Kenia/Kenia-Regular.ttf' })

export default function MyApp({ Component, pageProps }) {
  return (
    <main className=''>
      <Component {...pageProps} />
    </main>
  )
}

export { kenia }
