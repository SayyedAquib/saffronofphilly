import { useEffect, useRef } from "react";

const dishes = [
  {
    name: "Tandoori Chicken",
    desc: "Spring chicken marinated in masala yogurt for 24 hrs and baked in tandoor.",
    img: "https://static-content.owner.com/funnel/images/43affc98-602f-4400-b3cf-5f2c38bee115?v=5212649697&w=640&q=80&auto=format",
  },
  {
    name: "Chicken Kathi Roll",
    desc: "Thin Indian homemade bread wrapped around charcoal-grilled chicken tikka.",
    img: "https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&w=1080&q=80&auto=format",
  },
  {
    name: "Chatpata Murg Tikka",
    desc: "Chicken tenders, marinated in hung yogurt spiced with coriander, ginger, garlic.",
    img: "https://static-content.owner.com/funnel/images/43affc98-602f-4400-b3cf-5f2c38bee115?v=5212649697&w=640&q=80&auto=format",
  },
  {
    name: "Garlic Naan",
    desc: "Leavened bread with garlic and cilantro.",
    img: "https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&w=1080&q=80&auto=format",
  },
  {
    name: "Tandoori Lamb Chops",
    desc: "French rack of lamb, marinated with sour cream, and spices, grilled in the tandoor.",
    img: "https://static-content.owner.com/brands/banner-images/z3bmHvIJ8sYZtfb4jOFYsnfj.jpg?v=2385320605&w=1080&q=80&auto=format",
  },
  {
    name: "Vegetable Samosa (2 Pieces)",
    desc: "Homemade turnovers stuffed with diced potatoes and peas, flavored with Indian spices.",
    img: "https://static-content.owner.com/funnel/images/e1744252-08cd-4f86-8df3-89d780e9e1a4?v=1244943571&w=640&q=80&auto=format",
  },
  {
    name: "Navratan Korma",
    desc: "Nine sliced vegetables with nuts, cooked in a creamy cashew sauce.",
    img: "https://static-content.owner.com/funnel/images/c44feb58-64ce-4619-a383-48db3357e2c8?v=2222715488&w=640&q=80&auto=format",
  },
  {
    name: "Chicken Tikka Masala",
    desc: "Tandoori chicken tenders cooked in a delightful delicate, tangy tomato sauce.",
    img: "https://static-content.owner.com/funnel/images/e46f265e-0346-4380-a9eb-f6fe741e67f2?v=3554305536&w=640&q=80&auto=format",
  },
];

export default function Carousel() {
  const scrollRef = useRef(null);
  const isHovered = useRef(false);

  useEffect(() => {
    const el = scrollRef.current;

    // Clone content to allow infinite scroll effect
    el.innerHTML += el.innerHTML;

    const scroll = () => {
      if (!isHovered.current) {
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0; // reset to start of first set
        } else {
          el.scrollLeft += 1;
        }
      }
    };

    const interval = setInterval(scroll, 20);

    const handleMouseEnter = () => (isHovered.current = true);
    const handleMouseLeave = () => (isHovered.current = false);

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(interval);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-12 bg-white text-center">
      <h2 className="text-4xl font-bold">Try our most popular items</h2>
      <p className="text-sm text-gray-600 mt-2">
        Treat yourself to our must-try list that has everyone talking
      </p>

      <button className="mt-4 px-5 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition">
        View Full Menu
      </button>

      <div
        className="mt-10 overflow-x-auto whitespace-nowrap scroll-smooth px-6 no-scrollbar"
        ref={scrollRef}
      >
        <div className="flex gap-6 inline-flex w-fit">
          {[...dishes, ...dishes].map((dish, index) => (
            <div
              key={index}
              className="bg-gradient-to-t from-gray-100 to-white rounded-xl shadow-md w-64 flex-shrink-0 overflow-hidden text-left"
            >
              <img
                src={dish.img}
                alt={dish.name}
                className="h-40 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-md font-semibold">{dish.name}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {dish.desc}
                </p>
                <button className="mt-3 w-full py-2 bg-black text-white text-sm rounded-md hover:bg-gray-800 transition">
                  Add Item
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
