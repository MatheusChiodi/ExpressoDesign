import { motion } from 'framer-motion';
import { Martini, CupSoda, Coffee, Beer } from 'lucide-react';

const benefits = [
  {
    id: 1,
    icon: <Coffee size={32} />,
    text: 'Specialty coffees for all tastes.',
  },
  {
    id: 2,
    icon: <CupSoda size={32} />,
    text: 'Refreshing and Chinese drinks.',
  },
  {
    id: 3,
    icon: <Beer size={32} />,
    text: 'Craft beers for special moments.',
  },
  {
    id: 4,
    icon: <Martini size={32} />,
    text: 'Exclusive and well-prepared drinks.',
  },
];

export default function Benefits() {
  return (
    <motion.div
      className="w-[98%] ms-[1%] p-6"
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
      }}
    >
      <div className="flex gap-6 justify-between gap-4 overflow-x-auto overflow-y-hidden scroll-smooth px-1 py-4 no-scrollbar">
        {benefits.map((benefit) => (
          <motion.div
            key={benefit.id}
            className="flex flex-col items-center justify-center gap-4 border border-gray-300 rounded-2xl p-6 w-full min-w-[200px] min-h-[220px] bg-[#F5EBDC] relative cursor-pointer shadow-lg"
            whileHover={{
              scale: 1.05,
            }}
          >
            <motion.div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#6F432A] to-[#CDAF95] text-white rounded-full shadow-md">
              {benefit.icon}
            </motion.div>

            <p className="text-center text-[14px] md:text-[16px] lg:text-[18px] font-semibold text-[#3E2723]">
              {benefit.text}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
