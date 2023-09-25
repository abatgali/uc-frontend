import brandicon from "../logo.svg"
import Image from "next/image"

export default function LogoIcon() {
  return (
    <Image
          src={brandicon}
          className="w-10 h-10 mt-20"
          alt="United Chin International - UC Cup logo"
        />
  )
}
