export default function Banner({ title, description, image, alt }) {
  return (
    <section className="relative w-[80vw] my-6 flex flex-col md:flex-row items-center justify-center mx-auto">
      <div className="w-full flex justify-center md:w-1/2">
        <img
          src={image}
          alt={alt}
          className="w-full h-[60vh] md:h-auto object-cover rounded-lg max-w-[400px] md:max-w-[500px]"
        />
      </div>
      <div className="w-full md:w-1/2 flex items-center justify-center bg-white p-6 md:p-10">
        <div className="text-center md:text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            {title}
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
