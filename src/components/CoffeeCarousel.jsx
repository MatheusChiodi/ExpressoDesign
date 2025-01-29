import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const coffees = [
  {
    id: 1,
    name: 'Lungo Coffee',
    description: 'An espresso coffee drink, topped with a small layer of foam.',
    price: '199',
    image: './coffees/coffee1.png',
  },
  {
    id: 2,
    name: 'Dalgona Coffee',
    description: 'Whipped coffee made using instant coffee.',
    price: '159',
    image: './coffees/coffee2.png',
  },
  {
    id: 3,
    name: 'Iced Coffee',
    description: 'Iced coffee is a coffee beverage served cold.',
    price: '149',
    image: './coffees/coffee3.png',
  },
  {
    id: 4,
    name: 'Filter Coffee',
    description: '70% coffee and 30% chicory freshly roasted.',
    price: '59',
    image: './coffees/coffee4.png',
  },
];

export default function CoffeeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? coffees.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === coffees.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto py-10 px-2">
      <h2 className="text-2xl font-bold mb-6 text-center">
        OUR SPECIAL COFFEE
      </h2>
      <div className="relative flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition cursor-pointer"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex overflow-x-auto scroll-smooth px-4 md:px-5 no-scrollbar">
          {coffees.map((coffee, index) => (
            <motion.div
              key={coffee.id}
              className={`relative flex flex-col rounded-lg shadow-lg w-64 min-w-[250px] transition-transform ${
                index === currentIndex ? 'scale-100' : 'scale-90 opacity-50'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={coffee.image}
                alt={coffee.name}
                className="rounded-lg w-full h-56 object-cover"
              />
              <button className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md hover:scale-110 transition cursor-pointer">
                <Heart size={20} className="text-gray-500" />
              </button>
              <div className="p-4">
                <h3 className="text-lg font-semibold">{coffee.name}</h3>
                <p className="text-sm text-gray-600 mt-2">
                  {coffee.description}
                </p>
                <p className="text-lg font-bold mt-2">Rs. {coffee.price}</p>
                <button className="mt-2 px-4 py-2 bg-[#6F432A] text-white rounded-lg shadow-md hover:scale-105 transition">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition cursor-pointer"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
}
