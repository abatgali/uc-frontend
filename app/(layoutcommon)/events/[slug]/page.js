
const teamsByState = {
  "Halkha": [],
  "Thantlang": [],
  "Falam": [],
  "Mizo": [],
  "Matupi": [],
  "Tedim": [],
  "Tonzang": [],
  "Paletwa": [],
  "Mindet": [],
  "Kanpetlet": []
};



export default function EventDetails() {
  return (
    <div className={`h-auto bg-gradient-to-br from-black to-slate-400 text-white w-screen `} >
      {Object.keys(teamsByState).map((team, index) => (
        <div className={`h-screen w-screen flex flex-col items-center justify-center ${index % 2 === 0 ? 'bg-gray-500' : 'bg-gray-300'}`} style={{backgroundImage: "url('https://res.cloudinary.com/dtyw96fds/image/upload/v1696723552/soccer_gd9est.png')", opacity: 0.7, objectFit: 'cover'}}>
          <h2 className="text-2xl font-bold mb-4 z-30">{team}</h2>
          <button className="px-4 py-2 bg-black text-white z-40 ">Join Team {team}</button>
        </div>
      ))}
    </div>
  );
}
