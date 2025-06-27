export default function HeroSection() {
  return (
    <section className="relative p-4 ">
      <img
        src="https://static-content.owner.com/funnel/images/c6d426ad-c841-441d-9e82-98fa6354c6fe?v=4558772693&w=1920&q=80&auto=format"
        alt="Restaurant Interior"
        className="w-full h-[50vh] md:h-[90vh] object-cover rounded-4xl"
      />
      <div className="absolute inset-0 flex flex-col justify-center items-start px-8 md:px-20 bg-black/30 rounded-4xl m-4 text-white">
        <p className="text-sm md:text-base mb-2">
          Best Indian food in Philadelphia, PA
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Authentic Indian Cuisine
        </h1>
        <button className="bg-orange-500 hover:bg-orange-600 px-6 py-2 text-lg rounded-md">
          Order Online
        </button>
      </div>
    </section>
  );
}
