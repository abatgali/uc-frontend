import localFont from 'next/font/local'
 
// Font files can be colocated inside of `pages`
const playfair = localFont({ src: './Playfair_Display/PlayfairDisplay-VariableFont_wght.ttf' })
const kenia = localFont({src: './Kenia/Kenia-Regular.ttf'})
 
export default function MyApp({ Component, pageProps }) {
  return (
    <main className={playfair.className }  >
      <Component {...pageProps} />
    </main>
  )
}

export { playfair, kenia }