
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Star, Info } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  type: string;
  price: string;
  rating: string;
  image: string;
  description: string;
  whyRecommended: string;
  ingredients: string[];
  benefits: string[];
}

interface ProductCardProps {
  product: Product;
  onAdd: (productId: string) => void;
  isAdded?: boolean;
}

const ProductCard = ({ product, onAdd, isAdded = false }: ProductCardProps) => {
  return (
    <Card className="p-4 rounded-2xl bg-white border border-blush-rose shadow-soft hover:shadow-soft-lg transition-all duration-300">
      <div className="flex items-start space-x-3 mb-3">
        <div className="text-3xl">{product.image}</div>
        <div className="flex-1">
          <div className="font-semibold text-deep-mocha text-sm">{product.name}</div>
          <div className="text-xs text-deep-mocha/70 font-medium">{product.type}</div>
          <div className="flex items-center space-x-2 mt-1">
            <span className="text-sm font-bold text-deep-mocha">{product.price}</span>
            <div className="flex items-center space-x-1">
              <Star className="w-3 h-3 fill-honey-gold text-honey-gold" />
              <span className="text-xs text-deep-mocha/60 font-medium">{product.rating}</span>
            </div>
          </div>
        </div>
        <Button 
          size="sm" 
          variant={isAdded ? "default" : "outline"}
          className={`text-xs rounded-2xl font-medium active:animate-tap-scale ${
            isAdded 
              ? 'bg-botanical-green text-white hover:bg-botanical-green/90' 
              : 'border-soft-terracotta text-soft-terracotta hover:bg-soft-terracotta hover:text-white'
          }`}
          onClick={() => onAdd(product.id)}
        >
          {isAdded ? 'Added' : 'Add'}
        </Button>
      </div>
      
      <div className="space-y-2">
        <div className="bg-lavender-mist/50 p-3 rounded-xl">
          <div className="flex items-center space-x-2 mb-2">
            <Info className="w-4 h-4 text-deep-mocha" />
            <span className="text-xs font-bold text-deep-mocha">Why we recommend this</span>
          </div>
          <p className="text-xs text-deep-mocha/80 font-medium leading-relaxed">{product.whyRecommended}</p>
        </div>
        
        <div className="grid grid-cols-2 gap-2">
          <div>
            <div className="text-xs font-semibold text-deep-mocha mb-1">Key Ingredients</div>
            <div className="space-y-1">
              {product.ingredients.slice(0, 2).map((ingredient, index) => (
                <div key={index} className="text-xs text-deep-mocha/70 bg-blush-rose/50 px-2 py-1 rounded-lg font-medium">
                  {ingredient}
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-xs font-semibold text-deep-mocha mb-1">Benefits</div>
            <div className="space-y-1">
              {product.benefits.slice(0, 2).map((benefit, index) => (
                <div key={index} className="text-xs text-deep-mocha/70 bg-botanical-green/20 px-2 py-1 rounded-lg font-medium">
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
