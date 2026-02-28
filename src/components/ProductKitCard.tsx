import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface ProductKitCardProps {
  title: string;
  price: string;
  img: string;
  bullet_1: string;
  bullet_2?: string;
  link: string;
  isPopular?: boolean;
}

const ProductKitCard = ({ title, price, img, bullet_1, bullet_2, link, isPopular }: ProductKitCardProps) => {
  return (
    <Card className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 ${
      isPopular ? 'ring-2 ring-primary scale-105' : ''
    }`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
          Most Popular
        </div>
      )}
      <CardContent className="p-6 text-center">
        <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted/20">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-contain hover:scale-105 transition-transform duration-300"
            loading="lazy"
            onError={(e) => {
              console.error(`Kit image failed to load: ${img}`);
              e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NzI4NSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
            }}
          />
        </div>
        <h3 className="text-xl font-bold font-montserrat mb-2">{title}</h3>
        <p className="text-2xl font-bold text-primary mb-2">{price}</p>
        <div className="space-y-1 mb-4">
          <p className="text-sm text-muted-foreground">{bullet_1}</p>
          {bullet_2 && <p className="text-sm text-muted-foreground">{bullet_2}</p>}
        </div>
        <Button
          className="w-full font-semibold"
          onClick={() => window.location.href = link}
        >
          Choose {title}
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductKitCard;