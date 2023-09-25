import localFont from "next/font/local";

// Font files can be colocated inside of `pages`

const kenia = localFont({ src: "./Kenia/Kenia-Regular.ttf" });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className="">
      <Component {...pageProps} />
    </main>
  );
}

export { kenia };
