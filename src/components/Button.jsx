import { motion } from 'framer-motion';

export default function Button({ title }) {
  return (
    <motion.button
      className=" bg-[#986b56] text-white font-bold py-2 px-5 rounded-lg shadow-lg hover:bg-[#81411d] transition-all cursor-pointer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {title}
    </motion.button>
  );
}
