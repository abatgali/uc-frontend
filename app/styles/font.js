import { Playfair_Display } from 'next/font/google'

 
// define your variable fonts
const playfair = Playfair_Display({subsets: ["latin"]})
// const lora = Lora()
// // define 2 weights of a non-variable font
// const sourceCodePro400 = Source_Sans_3({ weight: '400' })
// const sourceCodePro700 = Source_Sans_3({ weight: '700' })
// // define a custom local font where GreatVibes-Regular.ttf is stored in the styles folder
// const greatVibes = localFont({ src: './GreatVibes-Regular.ttf' })
 
export { playfair }