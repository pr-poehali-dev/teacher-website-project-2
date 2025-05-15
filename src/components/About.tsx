
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const About = () => {
  return (
    <section id="about" className="py-16 bg-teacher-light/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-teacher-primary mb-8 text-center">
            Обо мне
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="space-y-4">
              <p className="text-foreground">
                Я — учитель начальных классов с творческим подходом к образованию. 
                Каждый ребёнок уникален, и моя цель — помочь ему найти собственный 
                путь к знаниям и развитию.
              </p>
              
              <p className="text-foreground">
                В своей работе я стремлюсь создать увлекательную и безопасную 
                среду обучения, где каждый ученик может раскрыть свои таланты и 
                приобрести необходимые навыки для будущего.
              </p>
              
              <p className="text-foreground">
                Постоянно совершенствуюсь как специалист, изучаю новые методики 
                преподавания и внедряю современные образовательные технологии 
                в учебный процесс.
              </p>
            </div>
            
            <div className="md:hidden lg:flex justify-center">
              <img 
                src="https://cdn.poehali.dev/files/77e4e56a-ae83-441b-883e-bb305e55fa60.jpg" 
                alt="Кулешова Елизавета Александровна" 
                className="rounded-lg shadow-md max-h-80 object-cover hidden md:block"
              />
            </div>
          </div>
          
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: "Users",
                title: "Индивидуальный подход",
                description: "Учитываю особенности каждого ребенка при построении учебного процесса"
              },
              {
                icon: "BookOpen",
                title: "Современные методики",
                description: "Использую эффективные образовательные технологии и методы обучения"
              },
              {
                icon: "Heart",
                title: "Забота и внимание",
                description: "Создаю комфортную атмосферу, где каждый ребенок чувствует себя важным"
              }
            ].map((item, index) => (
              <Card key={index} className="border-teacher-secondary/30 hover:border-teacher-primary transition-colors">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 rounded-full bg-teacher-primary flex items-center justify-center mb-4">
                      <Icon name={item.icon} className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-teacher-primary">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
