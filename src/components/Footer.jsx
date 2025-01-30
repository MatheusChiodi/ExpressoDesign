import { motion } from 'framer-motion';
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

export default function Footer() {
  return (
    <motion.footer
      className="relative w-full bg-[#3E2723] text-[#f1f0ee] px-6 py-8 shadow-2xl"
      initial={{ y: 50, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 0.6, ease: 'easeOut' },
      }}
    >
      <div className="max-w-[1920px] mx-auto flex flex-wrap justify-between items-start gap-6">
        <motion.div
          className="w-full md:w-1/3 flex flex-col justify-center items-center"
          whileHover={{ scale: 1.02 }}
        >
          <img src="./logo.png" alt="Logo" className="w-20 h-20 mb-3" />
          <p className="text-[#CDAF95] text-sm text-center">
            The perfect place for coffee lovers! Enjoy the best flavors and cozy
            atmosphere.
          </p>
        </motion.div>

        <div className="flex flex-col gap-2 mx-auto">
          <h3 className="text-lg font-semibold text-[#CDAF95] text-center">
            Quick Links
          </h3>
          <motion.a
            href="/"
            className="text-[#F5EBDC] hover:text-[#CDAF95] transition text-center"
            whileHover={{ scale: 1.05 }}
          >
            Home
          </motion.a>
          <motion.a
            href="/menu"
            className="text-[#F5EBDC] hover:text-[#CDAF95] transition text-center"
            whileHover={{ scale: 1.05 }}
          >
            Menu
          </motion.a>
          <motion.a
            href="/about"
            className="text-[#F5EBDC] hover:text-[#CDAF95] transition text-center"
            whileHover={{ scale: 1.05 }}
          >
            About Us
          </motion.a>
          <motion.a
            href="/contact"
            className="text-[#F5EBDC] hover:text-[#CDAF95] transition text-center"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </div>

        <div className="w-full md:w-1/3 flex flex-col gap-3">
          <h3 className="text-lg font-semibold text-[#CDAF95] md:text-left text-center">
            Contact
          </h3>
          <motion.div
            className="flex items-center gap-2 text-[#F5EBDC] md:justify-start justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Mail size={18} className="text-[#CDAF95]" /> mchiodidev@gmail.com
          </motion.div>
          <motion.div
            className="flex items-center gap-2 text-[#F5EBDC] md:justify-start justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <Phone size={18} className="text-[#CDAF95]" /> +99 99 99999-9999
          </motion.div>
          <motion.div
            className="flex items-center gap-2 text-[#F5EBDC] md:justify-start justify-center"
            whileHover={{ scale: 1.05 }}
          >
            <MapPin size={18} className="text-[#CDAF95]" /> São Paulo, Brasil
          </motion.div>
        </div>
      </div>

      <div className="w-full mt-6 flex justify-center gap-6">
        <motion.a
          href="#"
          className="text-[#F5EBDC] hover:text-[#CDAF95] transition"
          whileHover={{ scale: 1.2 }}
        >
          <Facebook size={24} className="hover:text-[#CDAF95]" />
        </motion.a>
        <motion.a
          href="#"
          className="text-[#F5EBDC] hover:text-[#CDAF95] transition"
          whileHover={{ scale: 1.2 }}
        >
          <Instagram size={24} className="hover:text-[#CDAF95]" />
        </motion.a>
        <motion.a
          href="#"
          className="text-[#F5EBDC] hover:text-[#CDAF95] transition"
          whileHover={{ scale: 1.2 }}
        >
          <Twitter size={24} className="hover:text-[#CDAF95]" />
        </motion.a>
      </div>

      <div className="w-full text-center text-[#CDAF95] text-sm mt-4">
        © 2025 Expresso Design. All rights reserved.
      </div>
    </motion.footer>
  );
}
