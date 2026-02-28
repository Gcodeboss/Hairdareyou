import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface IngredientCardProps {
  img: string;
  title: string;
  description?: string;
}

const IngredientCard = ({ img, title, description }: IngredientCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden">
          <img
            src={img}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <h3 className="font-semibold text-foreground">{title}</h3>
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-foreground" />
            ) : (
              <ChevronDown className="h-5 w-5 text-foreground" />
            )}
          </div>
          {isExpanded && description && (
            <p className="mt-2 text-sm text-muted-foreground animate-fade-in">
              {description}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default IngredientCard;