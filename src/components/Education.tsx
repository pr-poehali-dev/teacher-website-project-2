
import Icon from "@/components/ui/icon";
import { Card, CardContent } from "@/components/ui/card";

const Education = () => {
  return (
    <section id="education" className="py-16 bg-teacher-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-teacher-primary mb-2 text-center">
            Образование
          </h2>
          
          <p className="text-center text-muted-foreground mb-12">
            Профессиональная подготовка и квалификация
          </p>
          
          <div className="relative border-l-2 border-teacher-secondary pl-6 ml-4 md:ml-12 space-y-12 mb-12">
            <Card className="relative border-teacher-secondary/30">
              <div className="absolute -left-[43px] top-6 w-8 h-8 rounded-full bg-teacher-primary flex items-center justify-center border-4 border-teacher-light/50">
                <Icon name="GraduationCap" className="h-4 w-4 text-white" />
              </div>
              
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-teacher-primary mb-1">
                  Высшее педагогическое образование
                </h3>
                <p className="text-khaki font-medium mb-2">
                  Филиал ВВГУ в г. Артёме
                </p>
                <p className="text-sm text-muted-foreground mb-1">
                  Специальность: "Педагогика и методика начального образования"
                </p>
                <p className="text-sm text-muted-foreground">
                  Квалификация: Учитель начальных классов
                </p>
              </CardContent>
            </Card>
            
            <Card className="relative border-teacher-secondary/30">
              <div className="absolute -left-[43px] top-6 w-8 h-8 rounded-full bg-teacher-primary flex items-center justify-center border-4 border-teacher-light/50">
                <Icon name="Award" className="h-4 w-4 text-white" />
              </div>
              
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold text-teacher-primary mb-1">
                  Повышение квалификации
                </h3>
                <p className="text-khaki font-medium mb-2">
                  Современные технологии обучения
                </p>
                <p className="text-sm text-muted-foreground">
                  Курсы по инновационным методикам преподавания в начальной школе, 
                  использованию информационных технологий в учебном процессе.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-teacher-light/30 p-6 rounded-lg border border-teacher-secondary/20">
            <h3 className="text-xl font-semibold text-teacher-primary mb-4 flex items-center gap-2">
              <Icon name="FileText" className="h-5 w-5" />
              Профессиональные навыки
            </h3>
            
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
              {[
                "Методическая грамотность",
                "Современные образовательные технологии",
                "Индивидуальный подход к обучению",
                "Организация внеклассных мероприятий",
                "Работа с родителями",
                "Использование ИКТ в обучении",
                "Проектная деятельность",
                "Создание учебных материалов"
              ].map((skill, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-khaki flex items-center justify-center">
                    <Icon name="Check" className="h-3 w-3 text-white" />
                  </span>
                  <span className="text-foreground">{skill}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
