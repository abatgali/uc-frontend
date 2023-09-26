import { Big_Shoulders_Display } from "next/font/google";
const bigShoulders = Big_Shoulders_Display({ subsets: ["latin"] });

export default function Logo() {
  return (
    <p
      className={` ${bigShoulders.className} text-xl md:text-3xl font-extrabold text-gray-100`}
    >
      United Chin International
    </p>
  );
}
