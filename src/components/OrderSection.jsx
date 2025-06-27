export default function OrderSection() {
  return (
    <section className="relative">
      <img
        src="https://static-content.owner.com/brands/funnel/menu-section-images/zRqmL53Fyb3GYw2CFpu0t4uHYtbPqox2/z3bmHvIJ8sYZtfb4jOFYsnfj.png?v=4541398766&w=640&q=80&auto=format"
        alt="Order dishes"
        className="w-full h-[60vh] object-cover"
      />
      <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white">
        <h2 className="text-3xl font-bold">Order From Our Website</h2>
        <p className="my-2">Quick delivery & easy checkout</p>
        <button className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-full">
          Start Order
        </button>
      </div>
    </section>
  );
}