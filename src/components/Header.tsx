
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`sticky top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-teacher-primary/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Icon name="BookOpen" className="h-6 w-6 text-teacher-light" />
          <span className="font-montserrat font-semibold text-teacher-light text-lg">Кулешова Е.А.</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-8">
          {[
            { name: 'Главная', id: 'hero' },
            { name: 'Обо мне', id: 'about' },
            { name: 'Образование', id: 'education' },
            { name: 'Галерея', id: 'gallery' },
            { name: 'Контакты', id: 'contact' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-teacher-light hover:text-white focus:outline-none transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>
        
        {/* Мобильная версия */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="text-teacher-light">
            <Icon name="Menu" className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
