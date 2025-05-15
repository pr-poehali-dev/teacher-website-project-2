
import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-teacher-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Icon name="BookOpen" className="h-6 w-6" />
              <span className="font-montserrat font-semibold text-lg">Кулешова Елизавета Александровна</span>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="ВКонтакте"
              >
                <Icon name="MessageCircle" className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Telegram"
              >
                <Icon name="Send" className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Email"
              >
                <Icon name="Mail" className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-6 text-center text-sm text-white/70">
            <p>© {new Date().getFullYear()} Кулешова Е.А. Учитель начальных классов.</p>
            <p className="mt-2">
              Все права защищены. Сайт создан для образовательных целей.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
