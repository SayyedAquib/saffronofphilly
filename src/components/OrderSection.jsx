export default function OrderSection({ title, para, button }) {
  return (
    <section className="relative w-[95vw] h-[90vh] overflow-hidden rounded-2xl flex items-center justify-center mx-auto">
      <img
        src="https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&w=1920&q=80&auto=format"
        alt="Order dishes"
        className="object-cover h-full w-full absolute inset-0 brightness-75"
      />
      <div className="absolute inset-0 flex items-center px-6">
        <div className="max-w-sm bg-white/30 backdrop-blur-md p-6 rounded-xl text-black shadow-lg">
          <h2 className="text-2xl md:text-3xl font-semibold mb-2">{title}</h2>
          <p className="text-sm mb-4">{para}</p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
            {button}
          </button>
        </div>
      </div>
    </section>
  );
}
