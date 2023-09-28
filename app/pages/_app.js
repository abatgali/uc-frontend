import localFont from "next/font/local";
import { Big_Shoulders_Display } from "next/font/google";
import { Oswald } from "next/font/google";
const bigShoulders = Big_Shoulders_Display({ subsets: ["latin"] });
const oswald = Oswald({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className="">
      <Component {...pageProps} />
    </main>
  );
}

export { bigShoulders, oswald };
