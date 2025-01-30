import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import feedbacks from '../data/feedbacks';

export default function FeedBack() {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleSelectFeedback = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto py-10 px-4 text-center bg-white">
      <h3 className="text-lg italic text-gray-600">Come and join</h3>
      <h2 className="text-3xl font-bold mb-6">OUR HAPPY CUSTOMERS</h2>
      <div className="relative flex items-center justify-center w-full overflow-hidden">
        <div className="flex gap-4 w-full px-4 md:px-10 overflow-x-auto scroll-smooth no-scrollbar py-5">
          {feedbacks.map((feedback, index) => (
            <motion.div
              key={feedback.id}
              className={`relative flex flex-col items-center bg-[#fff] rounded-lg shadow-lg p-2 w-full md:w-120 min-w-[280px] transition-transform mx-auto cursor-pointer ${
                index === currentIndex
                  ? 'scale-100 border-gray-700'
                  : 'scale-90 opacity-50'
              }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => handleSelectFeedback(index)}
            >
              <div className="w-full flex justify-between">
                <div className="flex gap-2">
                  <img
                    src={feedback.image}
                    alt={feedback.name}
                    className="w-14 h-14 rounded-full mb-3 object-cover border-2 border-gray-300"
                  />
                  <div>
                    <h4 className="font-semibold">{feedback.name}</h4>
                    <p className="text-sm text-gray-500 mb-2 text-left">
                      {feedback.role}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center gap-1 text-yellow-500">
                  {'★'.repeat(feedback.rating)}
                  {'☆'.repeat(5 - feedback.rating)}
                </div>
              </div>

              <p className="text-sm text-gray-700 mb-2 text-justify px-2">
                {feedback.review}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-4">
        {feedbacks.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${
              index === currentIndex ? 'bg-[#81411d]' : 'bg-gray-300'
            }`}
            onClick={() => handleSelectFeedback(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}
