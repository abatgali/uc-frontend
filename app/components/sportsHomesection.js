import Link from "next/link";
import { oswald } from "../pages/_app";

export default function MobileHero() {
  return (
    <div className="w-full px-2 h-auto py-10">
      <div className="pb-5 text-center">
        <h2 className={`text-3xl font-bold ${oswald.className}`}>
          Connect through Events
        </h2>
        <p className="py-2 text-sm">
          Feel the adrenaline rush. Connect, compete, and conquer!
        </p>
      </div>
      <div className="flex flex-wrap justify-around">
        <div className="w-auto">
          <div className="bg-yellow-900 w-[11rem] h-[11rem] max-sm:w-[23rem]">
            <img
              src="https://res.cloudinary.com/dtyw96fds/image/upload/v1695499027/medium_soccer_f95972066c.jpg"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <p className="text-center py-3 font-semibold">Soccer</p>
        </div>
        <div className="w-auto">
          <div className="bg-yellow-900 w-[11rem] h-[11rem]">
            <img
              src="https://res.cloudinary.com/dtyw96fds/image/upload/v1696043444/medium_pexels_marvin_malmis_ponce_13080981_f9d891161b.jpg"
              className="w-full h-full object-cover object-top opacity-70"
            />
          </div>
          <p className="text-center py-3 font-semibold">Miss</p>
        </div>
        <div className="w-auto">
          <div className="bg-yellow-900 w-[11rem] h-[11rem]">
            <img
              src="https://res.cloudinary.com/dtyw96fds/image/upload/v1696043444/medium_mister_723507ac98.jpg"
              className="w-full h-full object-cover object-top opacity-70"
            />
          </div>
          <p className="text-center py-3 font-semibold">Mister</p>
        </div>
        <div className="w-auto">
          <div className="bg-yellow-900 w-[11rem] h-[11rem] max-sm:w-[23rem]">
            <img
              src="https://res.cloudinary.com/dtyw96fds/image/upload/v1695156454/medium_idol_3aea1d1f22.jpg"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <p className="text-center py-3 font-semibold">Chin Idol</p>
        </div>
        <div className="w-auto">
          <div className="bg-yellow-900 w-[11rem] h-[11rem]">
            <img
              src="https://res.cloudinary.com/dtyw96fds/image/upload/v1695499912/thumbnail_steven_abraham_WYJ_Nl4_D_H7_Y_unsplash_92e3b03a32.jpg"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <p className="text-center py-3 font-semibold">Volleyball</p>
        </div>
        <div className="w-auto">
          <div className="bg-yellow-900 w-[11rem] h-[11rem]">
            <img
              src="https://res.cloudinary.com/dtyw96fds/image/upload/v1695156456/thumbnail_wrestling_cdae7afd34.jpg"
              className="w-full h-full object-cover opacity-70 "
            />
          </div>
          <p className="text-center py-3 font-semibold">Lai Wrestling</p>
        </div>
        <div className="w-auto">
          <div className="bg-yellow-900 w-[11rem] h-[11rem]">
            <img
              src="https://res.cloudinary.com/dtyw96fds/image/upload/v1695499026/thumbnail_badminton_95851d4596.jpg"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <p className="text-center py-3 font-semibold">Badminton</p>
        </div>
        <div className="w-auto">
          <div className="bg-yellow-900 w-[11rem] h-[11rem]">
            <img
              src="https://res.cloudinary.com/dtyw96fds/image/upload/v1696024063/thumbnail_pexels_lebih_dari_ini_5908430_aa9caa08b9.jpg"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <p className="text-center py-3 font-semibold">Tennis</p>
        </div>
        <div className="w-auto">
          <div className="bg-yellow-900 w-[11rem] h-[11rem]">
            <img
              src="https://res.cloudinary.com/dtyw96fds/image/upload/v1696024297/thumbnail_pexels_josh_sorenson_976873_7248639e98.jpg"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <p className="text-center py-3 font-semibold">Ping Pong</p>
        </div>
        <div className="w-auto">
          <div className="bg-yellow-900 w-[11rem] h-[11rem]">
            <img
              src="https://res.cloudinary.com/dtyw96fds/image/upload/v1695499912/small_pexels_andrea_piacquadio_3764011_d207c87973.jpg"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <p className="text-center py-3 font-semibold">Track Race</p>
        </div>
        <div className="w-auto">
          <div className="bg-yellow-900 w-[11rem] h-[11rem]">
            <img
              src="https://res.cloudinary.com/dtyw96fds/image/upload/v1695499912/thumbnail_hermes_rivera_ubb_N_Kj_L_Bvnc_unsplash_c8163dd75f.jpg"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <p className="text-center py-3 font-semibold">Boxing</p>
        </div>
      </div>
      <div className="py-5">
        <h2 className={`text-2xl  text-center ${oswald.className}`}>
          Sign Up to Register. View Details.
        </h2>
        <div className="p-2 mx-auto bg-black text-white my-3 w-fit">
          <Link href="/signup" className="py-2 text-sm">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
