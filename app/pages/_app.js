import localFont from 'next/font/local'
import { Big_Shoulders_Display } from "next/font/google";

const kenia = localFont({ src: './Kenia/Kenia-Regular.ttf' })
const bigShoulders = Big_Shoulders_Display({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className=''>
      <Component {...pageProps} />
    </main>
  )
}

export { kenia, bigShoulders }
