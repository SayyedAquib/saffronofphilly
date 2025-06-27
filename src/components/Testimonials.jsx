const testimonials = [
  {
    name: "John D.",
    text: "Food, service, and spacing are excellent... What sets Saffron apart is that it is very attractive and well-decorated. Parking on the premises and reasonable prices. We ordered vegetable samosas (2, served with sauces), Chicken Tikka Masala, Saag Paneer, Naan, and raita. Saffron is BYOB and we brought a nice dry Riesling, which was a good match. Everything was served hot and well-timed. Our favorite Indian restaurant!",
    stars: 5,
    avatar: "https://i.pravatar.cc/40?img=1",
  },
  {
    name: "Nikki P",
    text: "Saffron is a haven for those seeking authentic Indian cuisine, offering a rich variety of dishes that capture the essence of dining in India. The exquisite South Indian delicacies, every dish is meticulously crafted to perfection. Don't miss out on their carefully flavored teas, adding an extra touch of delight to your dining experience. Give it a try, you won't be disappointed!",
    stars: 5,
    avatar: "https://i.pravatar.cc/40?img=2",
  },
  {
    name: "Chad M.",
    text: "Saffron is definitely an unexpected gem right on Butler Ave in downtown Ambler. I'm glad that we decided to go in person instead of ordering delivery. We ate on the street and their presentation was fantastic.",
    stars: 5,
    avatar: "https://i.pravatar.cc/40?img=3",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-200 py-12 px-4 md:px-20 rounded-3xl">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold mb-2 text-black">
          What our guests are saying
        </h2>
        <p className="text-gray-600">Check out our most recent reviews!</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {testimonials.map((t, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-md">
            <div className="flex items-center mb-4 text-yellow-400 text-lg">
              {"★".repeat(t.stars)}
            </div>
            <p className="text-gray-800 mb-6">{t.text}</p>
            <div className="flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full"
              />
              <p className="font-medium text-gray-900">{t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
