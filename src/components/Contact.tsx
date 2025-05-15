
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-teacher-primary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-teacher-primary mb-2 text-center">
            Связаться со мной
          </h2>
          
          <p className="text-center text-muted-foreground mb-12">
            Вы можете оставить сообщение или связаться со мной напрямую
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-teacher-secondary/30">
              <CardContent className="flex flex-col items-center text-center pt-6">
                <div className="w-12 h-12 rounded-full bg-teacher-primary flex items-center justify-center mb-4">
                  <Icon name="Mail" className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-teacher-primary">Email</h3>
                <p className="text-sm text-muted-foreground mb-2">Напишите мне на почту</p>
                <a 
                  href="mailto:teacher@example.com" 
                  className="text-khaki hover:underline"
                >
                  teacher@example.com
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-teacher-secondary/30">
              <CardContent className="flex flex-col items-center text-center pt-6">
                <div className="w-12 h-12 rounded-full bg-teacher-primary flex items-center justify-center mb-4">
                  <Icon name="Phone" className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-teacher-primary">Телефон</h3>
                <p className="text-sm text-muted-foreground mb-2">Звоните в рабочее время</p>
                <a 
                  href="tel:+78001234567" 
                  className="text-khaki hover:underline"
                >
                  +7 (800) 123-45-67
                </a>
              </CardContent>
            </Card>
            
            <Card className="border-teacher-secondary/30">
              <CardContent className="flex flex-col items-center text-center pt-6">
                <div className="w-12 h-12 rounded-full bg-teacher-primary flex items-center justify-center mb-4">
                  <Icon name="MapPin" className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-teacher-primary">Адрес</h3>
                <p className="text-sm text-muted-foreground mb-2">Школа №1</p>
                <p className="text-khaki">г. Артём, ул. Примерная, д. 123</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="mt-12 border-teacher-secondary/30">
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold text-teacher-primary mb-4">
                Оставить сообщение
              </h3>
              
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Ваше имя
                    </label>
                    <Input 
                      id="name" 
                      placeholder="Введите ваше имя" 
                      className="border-teacher-secondary/30 focus-visible:ring-teacher-primary" 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="Введите ваш email" 
                      className="border-teacher-secondary/30 focus-visible:ring-teacher-primary" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Сообщение
                  </label>
                  <Textarea 
                    id="message" 
                    placeholder="Введите ваше сообщение" 
                    rows={5} 
                    className="border-teacher-secondary/30 focus-visible:ring-teacher-primary" 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-teacher-primary hover:bg-teacher-primary/90 text-white"
                >
                  Отправить сообщение
                  <Icon name="Send" className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
