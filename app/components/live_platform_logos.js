import brandicon from "../youtube.svg";
import Image from "next/image";
import facebook from "../Facebook_Logo_Primary.png";
import rumble from "../rumble.svg";

export default function YouTube() {
  return <Image src={brandicon} className="w-24 h-24" alt="youtube logo" />;
}

export function Facebook() {
  return <Image src={facebook} className="w-24 h-24" alt="facebook logo" />;
}

export function Rumble() {
  return <Image src={rumble} className="w-auto h-24" alt="Rumble logo" />;
}
