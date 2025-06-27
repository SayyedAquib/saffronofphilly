export default function Locations() {
  return (
    <section className="py-10 px-4 bg-gray-100">
      <h2 className="text-2xl font-semibold text-center mb-4">Our locations</h2>
      <div className="bg-white rounded shadow p-6 max-w-2xl mx-auto text-center">
        <p className="font-bold">Saffron Indian Cuisine</p>
        <p>123 Spice Road, Austin, TX</p>
        <p>Open Daily: 11am - 10pm</p>
        <button className="mt-4 bg-orange-500 hover:bg-orange-600 px-5 py-2 text-white rounded-full">
          Order Now
        </button>
      </div>
    </section>
  );
}