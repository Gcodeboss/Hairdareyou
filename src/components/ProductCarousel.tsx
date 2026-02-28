import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

interface ProductSlide {
  img: string;
  caption: string;
}

interface ProductCarouselProps {
  slides: ProductSlide[];
}

const ProductCarousel = ({ slides }: ProductCarouselProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Carousel className="w-full">
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <Card className="border-0 shadow-soft hover:shadow-lg transition-all duration-300 hover:scale-105 rounded-3xl bg-card">
                <CardContent className="p-0">
                  <div className="aspect-square overflow-hidden rounded-3xl">
                    <img
                      src={slide.img}
                      alt={slide.caption}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="text-sm font-medium text-center text-foreground">
                      {slide.caption}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProductCarousel;