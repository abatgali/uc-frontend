import brandicon from "../youtube.svg";
import Image from "next/image";
import facebook from "../Facebook_Logo_Primary.png";
import rumble from "../rumble.svg";

export function YouTube() {
  return <Image src={brandicon} className="w-auto h-16 max-sm:h-10" alt="youtube logo" />;
}

export function Facebook() {
  return <Image src={facebook} className="w-auto h-16 max-sm:h-10 max-sm:w-auto" alt="facebook logo" />;
}

export function Rumble() {
  return <Image src={rumble} className="w-auto h-16 max-sm:h-10" alt="Rumble logo" />;
}
