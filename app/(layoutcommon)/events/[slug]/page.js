const teamsByState = {
  1: "Halkha",
  2: "Thantlang",
  3: "Falam",
  4: "Mizo",
  5: "Matupi",
  6: "Tedim",
  7: "Tonzang",
  8: "Paletwa",
  9: "Mindet",
  10: "Kanpetlet",
};

export default function EventDetails() {
  return (
    <div
      className={`h-auto bg-gradient-to-br from-black to-slate-400 text-white w-screen `}
    >
      {Object.keys(teamsByState).map((teamId, index) => (
        <div
          className={`h-screen w-screen flex flex-col items-center justify-center ${
            index % 2 === 0 ? "bg-indigo-500" : "bg-red-300"
          }`}
          style={{
            backgroundImage:
              "url('https://res.cloudinary.com/dtyw96fds/image/upload/v1696724261/another_sample_tuvpc1.png')",
            opacity: 0.7,
            backgroundBlendMode: "multiply",
            backgroundPosition: "center",
          }}
        >
          <h2
            className="text-4xl font-extrabold mb-4 z-30"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            {teamsByState[teamId]}
          </h2>
          <button
            className="px-4 py-2 bg-black text-white z-40 hover:bg-white hover:text-gray-900"
            style={{ fontFamily: "Merriweather, serif" }}
          >
            Join Team {teamsByState[teamId]}
          </button>
        </div>
      ))}
    </div>
  );
}
