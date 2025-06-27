import React from "react";

const testimonials = [
  {
    name: "John D.",
    text: "Food, service, and spacing are excellent... Our favorite Indian restaurant!",
    stars: 5,
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    name: "Nikki P",
    text: "Saffron is a haven for those seeking authentic Indian cuisine... you won't be disappointed!",
    stars: 5,
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "Chad M.",
    text: "Saffron is definitely an unexpected gem right on Butler Ave in downtown Ambler...",
    stars: 5,
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-100 py-12 rounded-3xl px-4 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          What our guests are saying
        </h2>
        <p className="text-gray-600">Check out our most recent reviews!</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-md">
            <div className="flex items-center mb-4 text-yellow-500 text-lg">
              {"★".repeat(t.stars)}
            </div>
            <p className="text-gray-700 mb-6">{t.text}</p>
            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-8 h-8 rounded-full"
              />
              <p className="font-medium text-gray-800">{t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
