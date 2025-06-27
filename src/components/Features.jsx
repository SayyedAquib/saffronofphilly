const features = [
  { icon: "🚗", title: "Fast Delivery" },
  { icon: "🔥", title: "Hot & Fresh" },
  { icon: "🍴", title: "Top Quality" }
];

export default function Features() {
  return (
    <section className="py-10 text-center">
      <h2 className="text-2xl font-semibold mb-6">Featuring</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {features.map((f, i) => (
          <div key={i} className="flex flex-col items-center">
            <div className="text-4xl">{f.icon}</div>
            <p className="mt-2">{f.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
}