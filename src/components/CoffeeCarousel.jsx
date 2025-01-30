import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';

import Button from './Button';
import coffees from '../data/coffees';

export default function CoffeeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? coffees.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === coffees.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto py-10 px-2 bg-[#f1f0ee]">
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
                <p className="text-lg font-bold my-2">Rs. {coffee.price}</p>
                <Button title="Order Now" />
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
