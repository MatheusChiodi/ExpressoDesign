import { useState, useEffect } from 'react';

import Loading from '../components/Loading';
import NavBar from '../components/NavBar';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Footer from '../components/Footer';
import SlideWallpaper from '../components/SlideWallpaper';
import Benefits from '../components/Benefits';
import CoffeeCarousel from '../components/CoffeeCarousel';
import Divider from '../components/Divider';
import FeedBack from '../components/FeedBack';

function HomePage() {
  const [visibleLoading, setVisibleLoading] = useState(false);
  const [visibleContent, setVisibleContent] = useState(false);

  useEffect(() => {
    const lastVisit = localStorage.getItem('lastVisit');
    const now = Date.now();
    const oneHour = 60 * 60 * 1000;

    if (!lastVisit || now - parseInt(lastVisit, 10) > oneHour) {
      setVisibleLoading(true);
      localStorage.setItem('lastVisit', now);

      setTimeout(() => {
        setVisibleLoading(false);
        setVisibleContent(true);
      }, 1300);
    } else {
      setVisibleContent(true);
    }
  }, []);

  return (
    <div className="mx-auto max-w-[1920px]">
      {visibleLoading && <Loading />}
      {visibleContent && (
        <>
          <NavBar />
          <SlideWallpaper />
          <Benefits />
          <CoffeeCarousel />
          <Divider />
          <FeedBack />
          <Footer />
          <ScrollToTopButton />
        </>
      )}
    </div>
  );
}

export default HomePage;
