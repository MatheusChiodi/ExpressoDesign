import { useEffect } from 'react';

export default function Loading() {
  
  useEffect(() => {
    setTimeout(() => {
      document.querySelector('img').style.transform = 'translateY(-100%)';
      document.querySelector('img').style.opacity = '0';
    }, 1000);
  }, []);

  return (
    <div className="absolute z-[100] w-full flex justify-center items-center h-screen bg-gray-950">
      <img src={`./logo.png`} alt="Loading" className="w-72 h-62" />
    </div>
  );
}
