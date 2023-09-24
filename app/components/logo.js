import { playfair } from "../pages/_app"
import { Grenze_Gotisch } from "next/font/google"
const grenze = Grenze_Gotisch({ subsets: ['latin'] })


export default function Logo() {
  
  return (
    
    <p className={` ${grenze.className} text-xl md:text-3xl font-semibold text-amber-500`}>United Chin International</p>

  )
}
