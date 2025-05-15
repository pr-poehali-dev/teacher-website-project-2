import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex items-center leaf-pattern"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-teacher-primary/90 to-khaki/80 mix-blend-multiply" />

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="max-w-3xl animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Кулешова Елизавета Александровна
            </h1>

            <h2 className="text-xl md:text-2xl text-teacher-light font-light mb-8">
              Учитель начальных классов
            </h2>

            <p className="text-white/90 text-lg mb-8 max-w-2xl">
              Моя задача — помочь каждому ребенку раскрыть свой потенциал и
              создать комфортную образовательную среду, где каждый ученик может
              расти и развиваться.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                onClick={() =>
                  document
                    .getElementById("about")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="bg-khaki hover:bg-khaki/90 text-white"
              >
                Узнать больше
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>

              <Button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                Связаться со мной
              </Button>
            </div>
          </div>

          <div className="hidden md:flex justify-center animate-fade-in">
            <div className="relative rounded-lg overflow-hidden border-4 border-white/30 shadow-xl max-w-md">
              <img
                src="https://cdn.poehali.dev/files/a14c556b-67e7-4098-86eb-5ba121f811c7.jpg"
                alt="Кулешова Елизавета Александровна"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button
          variant="ghost"
          size="icon"
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="text-white hover:bg-white/10 rounded-full"
        >
          <Icon name="ChevronsDown" className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
