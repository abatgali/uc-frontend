import localFont from "next/font/local";

const oswald = localFont({src: '../styles/Oswald/Oswald-VariableFont_wght.ttf'})
const openSans = localFont({ src: '../styles/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf'})

export default function MyApp({ Component, pageProps }) {
  return (
    <main className= {`${openSans.className}`}>
      <Component {...pageProps} />
    </main>
  );
}

export {  oswald, openSans };
