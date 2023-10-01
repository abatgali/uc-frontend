import brandicon from "../youtube.svg";
import Image from "next/image";
import facebook from "../Facebook_Logo_Primary.png";
import rumble from "../rumble.svg";
import insta from "../Instagram_Glyph_Gradient.svg";
import tiktok from "../TikTok_Icon_Black_Circle.png";

export function YouTube() {
  return (
    <Image
      src={brandicon}
      className="w-auto h-16 max-sm:h-10"
      alt="youtube logo"
    />
  );
}

export function Facebook() {
  return (
    <Image
      src={facebook}
      className="w-auto h-16 max-sm:h-10 max-sm:w-auto"
      alt="facebook logo"
    />
  );
}

export function Rumble() {
  return (
    <Image src={rumble} className="w-auto h-16 max-sm:h-10" alt="Rumble logo" />
  );
}

export function Instagram() {
  return (
    <Image
      src={insta}
      className="w-auto h-16 max-sm:h-10"
      alt="Instagram logo"
    />
  );
}

export function TikTok() {
  return (
    <Image src={tiktok} className="w-auto h-16 max-sm:h-10" alt="TikTok logo" />
  );
}
