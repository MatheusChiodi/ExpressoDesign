import { motion } from 'framer-motion';
import Button from './Button';

export default function SlideWallpaper() {
  return (
    <motion.div
      className="relative w-full shadow-2xl border-b border-white/10 rounded-b-3xl overflow-hidden z-30 mt-0"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      <motion.img
        src={`./wallpaper.png`}
        alt="wallpaper"
        className="w-full h-screen max-h-[920px] object-cover brightness-50"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.5 }}
      >
        <motion.h1
          className="md:text-4xl text-2xl font-bold drop-shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 1 }}
        >
          "The energy you need, one coffee at a time!"
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mt-3 font-light drop-shadow-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 1.2 }}
        >
          Intense flavors and special moments in every cup.
        </motion.p>
        <motion.button
          className="mt-6 bg-[#fff] text-[#3E2723] px-6 py-3 rounded-3xl shadow-lg hover:shadow-xl transition font-semibold cursor-pointer hover:bg-[#81411d] hover:text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut', delay: 1.4 }}
        >
          Order Now
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
