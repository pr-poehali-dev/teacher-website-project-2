
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const HomePage = () => {
  useEffect(() => {
    // Функция для анимации элементов при скролле
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight * 0.8) {
          element.classList.add('visible');
        }
      });
    };
    
    // Вызываем функцию при первой загрузке
    setTimeout(handleScroll, 100);
    
    // Добавляем слушатель события скролла
    window.addEventListener('scroll', handleScroll);
    
    // Очищаем слушатель при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        
        <div className="animate-on-scroll">
          <About />
        </div>
        
        <div className="animate-on-scroll">
          <Education />
        </div>
        
        <div className="animate-on-scroll">
          <Gallery />
        </div>
        
        <div className="animate-on-scroll">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
