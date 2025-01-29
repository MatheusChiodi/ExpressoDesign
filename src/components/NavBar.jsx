import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import Button from './Button';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
      }}
    >
      <div className="max-w-[1920px] bg-[#3E2723] text-[#F5EBDC] shadow-2xl  mx-auto flex lg:justify-between justify-between items-center h-16 px-4 lg:px-10 rounded-b-3xl">
        {/* Logo com efeito 3D */}
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{
            scale: 1.1,
            rotateY: [0, 10, -10, 0],
            transition: { duration: 0.4 },
          }}
        >
          <motion.img
            src={`./logo.png`}
            alt="Logo"
            className="w-12 h-12 cursor-pointer drop-shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: { duration: 0.6, ease: 'easeOut' },
            }}
          />
          <span className="text-xl font-semibold lg:hidden">
            Expresso Design
          </span>
        </motion.div>

        {/* Links para Desktop */}
        <div className="hidden lg:flex items-center space-x-8 w-[100%] mx-auto justify-between">
          <motion.input
            type="text"
            className="bg-[#F5EBDC] text-[#3E2723] p-3 rounded-lg shadow-inner w-[320px] placeholder-gray-500 focus:ring-2 focus:ring-[#CDAF95] focus:outline-none transition"
            placeholder="Search for products..."
          />

          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.6 } }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.6 } }}
            >
              <Link
                to=""
                className="relative text-lg font-semibold tracking-wider text-white hover:text-[#e6dde0] transition duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.6 } }}
              >
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-[#986b56] transition-all duration-300 group-hover:w-full"></span>
                Shop
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.7 } }}
            >
              <Link
                to=""
                className="relative text-lg font-semibold tracking-wider text-white hover:text-[#e6dde0] transition duration-300"
              >
                About
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.8 } }}
            >
              <Link
                to=""
                className="relative text-lg font-semibold tracking-wider text-white hover:text-[#e6dde0] transition duration-300"
              >
                Contact
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="flex items-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.9 } }}
          >
            <Button title="Register / Login" />

            <motion.div
              whileHover={{ scale: 1.2 }}
              className="p-2 rounded-full bg-white text-gray-800 shadow-lg cursor-pointer"
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                transition: { delay: 1 },
              }}
            >
              <ShoppingCart size={24} />
            </motion.div>
          </motion.div>
        </div>

        <motion.button
          className="lg:hidden p-2 rounded-full bg-[#986b56] text-white shadow-lg hover:bg-[#81411d] transition-all cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </motion.button>
      </div>

      {/* Menu Mobile */}
      <motion.div
        className={`lg:hidden flex flex-col items-center bg-[#3E2723] text-[#F5EBDC] transition-all duration-300 rounded-3xl overflow-hidden ${
          menuOpen ? 'h-auto opacity-100' : 'h-0 opacity-0'
        }`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: menuOpen ? 1 : 0, height: menuOpen ? 'auto' : 0 }}
      >
        <div className="py-4 w-full text-center text-lg border-b border-gray-700 gap-5 flex flex-col items-center">
          <div className="flex justify-center items-center gap-4 border-b border-gray-100 w-full py-4">
            <Link
              to="/shop"
              className="text-xl font-semibold tracking-wide hover:text-[#e6dde0] transition duration-300"
            >
              Shop
            </Link>

            <Link
              to="/about"
              className="text-xl font-semibold tracking-wide hover:text-[#e6dde0] transition duration-300"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-xl font-semibold tracking-wide hover:text-[#e6dde0] transition duration-300"
            >
              Contact
            </Link>
          </div>

          <Button title="Register / Login" />

          <motion.div
            whileHover={{ scale: 1.2 }}
            className="mt-2 p-3 rounded-full bg-white text-gray-800 shadow-lg cursor-pointer"
          >
            <ShoppingCart size={24} />
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
}
