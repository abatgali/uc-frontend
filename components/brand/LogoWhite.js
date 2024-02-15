import Link from "next/link";
import Image from "next/image";
import logo from "@/public/uca-white.png";
export default function LogoWhite() {
  return (
    <Link href={"/"}>
      <Image src={logo} alt="UCA Logo" width={150} />
    </Link>
  );
}
