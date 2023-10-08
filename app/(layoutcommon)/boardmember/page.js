export default function Pitch() {
  return (
    <div className="h-auto w-full bg-gray-900 ">
      <div className="text-center pt-64 w-2/3 mx-auto">
        <h2 className="text-4xl font-bold text-white mb-4">Join Our Team</h2>
        <p className="text-xl text-white">
          We are looking for dedicated board members to join the United Chin
          International organization and UC Cup committee. If you are passionate
          about our cause and want to make a difference, don't hesitate to join
          us.
        </p>
        {/* <button className="mt-4 bg-white text-black px-6 py-2 rounded shadow">Apply Now</button> */}
      </div>
      <div className="h-screen mx-auto flex items-center justify-center py-10">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeoO8lqzYXItHzYr8E_wcd6bHmpZRAZVu259C128RTSRmLxfA/viewform?embedded=true"
          width="778"
          height="876"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
}
