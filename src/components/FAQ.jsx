import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function FAQ() {
  const data = [
    {
      question: "What are your restaurant hours?",
      answer: "We are open daily from 11 AM to 10 PM."
    },
    {
      question: "What dishes are your favorite?",
      answer: "Our favorites include Butter Chicken, Biryani, and Paneer Tikka."
    },
    {
      question: "Do you offer pickup or delivery?",
      answer: "Yes, we offer both pickup and delivery options."
    },
    {
      question: "What rewards do you offer?",
      answer: "Join our rewards program for exclusive discounts and offers."
    }
  ];
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (i) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="py-14 px-4 md:px-20 bg-white max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
        Frequently Asked Questions
      </h2>
      <ul className="space-y-4">
        {data.map((item, i) => (
          <li key={i} className="border rounded-lg p-4 bg-gray-50 shadow-sm">
            <button
              onClick={() => toggle(i)}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="text-lg font-medium text-gray-800">
                {item.question}
              </span>
              <span className="text-xl text-orange-500">
                {activeIndex === i ? <FiChevronUp /> : <FiChevronDown />}
              </span>
            </button>
            <div
              className={`mt-2 text-gray-600 text-sm transition-all duration-300 ease-in-out ${
                activeIndex === i
                  ? "max-h-40 opacity-100"
                  : "max-h-0 overflow-hidden opacity-0"
              }`}
            >
              {item.answer}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}