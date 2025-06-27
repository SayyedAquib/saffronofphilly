const dishes = [
  {
    name: "Butter Chicken",
    img: "https://static-content.owner.com/funnel/images/c44feb58-64ce-4619-a383-48db3357e2c8?v=2222715488&w=640&q=80&auto=format",
  },
  {
    name: "Paneer Tikka",
    img: "https://static-content.owner.com/funnel/images/e46f265e-0346-4380-a9eb-f6fe741e67f2?v=3554305536&w=640&q=80&auto=format",
  },
  {
    name: "Gulab Jamun",
    img: "https://static-content.owner.com/funnel/images/19e32454-4f82-4080-963b-f83f790bf53c?v=7596945030&w=640&q=80&auto=format",
  },
  {
    name: "Dal Makhani",
    img: "https://static-content.owner.com/funnel/images/7f34291b-a456-4485-9e04-5d1c4b6c4fd5?v=4346514943&w=640&q=80&auto=format",
  },
  {
    name: "Tandoori Chicken",
    img: "https://static-content.owner.com/funnel/images/43affc98-602f-4400-b3cf-5f2c38bee115?v=5212649697&w=640&q=80&auto=format",
  },
  {
    name: "Samosa",
    img: "https://static-content.owner.com/funnel/images/e1744252-08cd-4f86-8df3-89d780e9e1a4?v=1244943571&w=640&q=80&auto=format",
  },
];

export default function PopularItems() {
  return (
    <section className="py-14 bg-white text-center">
      <h2 className="text-4xl font-semibold text-black">
        See our most popular items
      </h2>
      <p className="text-sm text-gray-600 mt-2">
        Here’s a sneak peek of the items our customers can’t stop talking about
      </p>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 max-w-5xl mx-auto">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden shadow-md hover:scale-105 transition-transform duration-300"
          >
            <img
              src={dish.img}
              alt={dish.name}
              className="w-full h-60 object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
