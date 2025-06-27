import { FaCar, FaFire, FaUtensils } from "react-icons/fa";

const features = [
  { icon: FaCar, title: "Fast Delivery" },
  { icon: FaFire, title: "Hot & Fresh" },
  { icon: FaUtensils, title: "Top Quality" },
];

const Features = () => {
  return (
    <section className="py-12 text-center bg-gray-50">
      <h2 className="text-3xl font-bold mb-8 text-gray-800">Featuring</h2>
      <div className="flex flex-wrap justify-center gap-10">
        {features.map((f, i) => (
          <div
            key={i}
            className="flex flex-col items-center p-4 bg-white shadow-md rounded-lg w-32 h-32 justify-center hover:bg-gray-100 transition"
          >
            <div className="text-4xl text-orange-500">
              <f.icon />
            </div>
            <p className="mt-3 text-sm font-medium text-gray-700">{f.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
