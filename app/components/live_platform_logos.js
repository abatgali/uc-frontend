import brandicon from "../youtube.svg";
import Image from "next/image";
import facebook from "../Facebook_Logo_Primary.png";
import rumble from "../rumble.svg";
import insta from "../Instagram_Glyph_Gradient.svg";
import tiktok from "../TikTok_Icon_Black_Circle.png";
import x from "../x.svg";

export function YouTube() {
  return (
    <a href="https://www.youtube.com/@UnitedChin/featured">
      <Image
        src={brandicon}
        className="w-auto h-16 max-sm:h-10"
        alt="youtube logo"
      />
    </a>
  );
}

export function Facebook() {
  return (
    <a href="https://www.instagram.com/unitedchin/">
      <Image
        src={facebook}
        className="w-auto h-16 max-sm:h-10 max-sm:w-auto"
        alt="facebook logo"
      />
    </a>
  );
}

export function Rumble() {
  return (
    <a href="https://www.rumble.com/unitedchin/">
      <Image
        src={rumble}
        className="w-auto h-16 max-sm:h-10"
        alt="Rumble logo"
      />
    </a>
  );
}

export function Instagram() {
  return (
    <a href="https://www.instagram.com/unitedchin/">
      <Image
        src={insta}
        className="w-auto h-16 max-sm:h-10"
        alt="Instagram logo"
      />
    </a>
  );
}

export function TikTok() {
  return (
    <a href="https://www.tiktok.com/@unitedchin/">
      <Image
        src={tiktok}
        className="w-auto h-16 max-sm:h-10"
        alt="TikTok logo"
      />
    </a>
  );
}

export function X() {
  return (
    <a href="https://twitter.com/UnitedChin">
      <Image src={x} className="w-auto h-16 max-sm:h-10" alt="X logo" />
    </a>
  );
}
