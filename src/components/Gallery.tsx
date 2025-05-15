
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

const Gallery = () => {
  const classPhoto = "https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

  return (
    <section id="gallery" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-teacher-primary mb-2 text-center">
            Галерея
          </h2>
          
          <p className="text-center text-muted-foreground mb-12">
            Фотографии нашего класса
          </p>
          
          <div className="grid md:grid-cols-1 gap-8">
            <Dialog>
              <DialogTrigger asChild>
                <Card className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow group border-teacher-secondary/30">
                  <div className="relative">
                    <img 
                      src={classPhoto} 
                      alt="Фотография класса" 
                      className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-teacher-primary/0 group-hover:bg-teacher-primary/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                      <div className="w-12 h-12 rounded-full bg-white/80 flex items-center justify-center">
                        <Icon name="ZoomIn" className="h-6 w-6 text-teacher-primary" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="py-4">
                    <h3 className="text-lg font-medium text-teacher-primary">Наш класс</h3>
                    <p className="text-sm text-muted-foreground">Дружный коллектив учеников</p>
                  </CardContent>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <img 
                  src={classPhoto} 
                  alt="Фотография класса" 
                  className="w-full object-contain max-h-[80vh]"
                />
              </DialogContent>
            </Dialog>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-muted-foreground italic">
              "Каждый ребенок — это уникальная личность. 
              В нашем классе мы учимся, растем и развиваемся вместе!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
