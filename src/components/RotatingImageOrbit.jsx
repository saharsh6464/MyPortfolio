export default function HorizontalCarousel() {
  const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
  ];

  const imageList = [...images, ...images];

  return (
    <>
      <div className="text-center py-6">
        <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-lg animate-fadeInUp tracking-wide">
          Hackathon Projects Wins
        </h2>
        <p className="text-gray-300 text-sm md:text-base mt-2">
          A quick showcase of award-winning tech projects and innovation. 🚀
        </p>
      </div>

      <div className="w-full overflow-hidden bg-transparent py-8">
        <div className="whitespace-nowrap flex animate-smoothMarquee gap-6">
          {imageList.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`carousel-${index}`}
              className="w-[280px] h-[180px] object-cover rounded-xl shadow-md shadow-blue-500/10 hover:scale-105 transition-transform duration-500"
            />
          ))}
        </div>
      </div>
    </>
  );
}
