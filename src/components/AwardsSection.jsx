import Lottie from "lottie-react";
import awardAnimation from "../../public/award.json"; // replace with your actual Lottie JSON

export default function AwardsSection() {
  const awards = [
    {
      title: "Best Innovation Award",
      event: "VVCE State-Level Hackathon",
      location: "VVCE, India",
      date: "2024",
    },
    {
      title: "1st Place",
      event: "GSSSTU Mini Project Expo",
      location: "GSSSTU, India",
      date: "2024",
    },
    {
      title: "1st Place",
      event: "Vaidyuthak Project Exhibition",
      location: "NIE, Mysore",
      date: "2024",
    },
    {
      title: "Consolation Prize",
      event: "VVCE Mini Project Expo",
      location: "VVCE, India",
      date: "2025",
    },
    {
      title: "Best Innovation Award",
      event: "Symbiot Hackathon",
      location: "Mysore, India",
      date: "2025",
    },
    {
      title: "Multiple Wins",
      event: "Project Exhibitions",
      location: "Karnataka, India",
      date: "2023–2025",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-16 bg-black/20 text-white" id="awards">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-right md:text-left">
        🏅 Achievements & Awards
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-12 max-w-7xl mx-auto">
        {/* Left Animation */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
          <div className="max-w-[250px] md:max-w-[400px]">
            <Lottie animationData={awardAnimation} loop={true} />
          </div>
        </div>

        {/* Right Awards List */}
        <div className="w-full md:w-1/2">
          <div className="flex flex-col gap-2">
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-center bg-black/20 border border-[#2c2f3a] rounded-md px-3 py-2 shadow-sm hover:shadow-pink-400/10 transition-shadow text-xs text-center md:text-left"
              >
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-pink-400">
                    {award.title}
                  </h3>
                  <p className="text-gray-300">
                    {award.event}
                    <span className="text-xs text-gray-500">
                      {" "}
                      • {award.location}
                    </span>
                  </p>
                </div>
                <div className="text-xs text-gray-400 mt-2 md:mt-0 md:ml-4 whitespace-nowrap">
                  {award.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
