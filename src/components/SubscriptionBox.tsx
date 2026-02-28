
import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Package, ShoppingBag, Calendar, Star, Info, Leaf, Sparkles } from 'lucide-react';

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

interface SubscriptionBoxProps {
  products: Product[];
}

const SubscriptionBox = ({ products }: SubscriptionBoxProps) => {
  const [frequency, setFrequency] = useState('monthly');
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const basePrice = 49.99;
  const frequencies = [
    { id: 'monthly', label: 'Monthly', price: basePrice, discount: 0, popular: true },
    { id: 'bimonthly', label: 'Every 2 Months', price: basePrice * 0.9, discount: 10, popular: false },
    { id: 'quarterly', label: 'Quarterly', price: basePrice * 0.85, discount: 15, popular: false }
  ];

  const selectedFreq = frequencies.find(f => f.id === frequency)!;

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Here you would integrate with Stripe or your payment processor
    setTimeout(() => {
      setIsCheckingOut(false);
      alert('Checkout functionality would be implemented here with Stripe!');
    }, 2000);
  };

  return (
    <Card className="p-6 mb-6 rounded-3xl bg-card border border-border shadow-soft">
      {/* Header */}
      <div className="flex items-center space-x-3 mb-4">
        <Package className="w-6 h-6 text-primary" />
        <div>
          <h2 className="text-lg font-bold text-foreground">Your Personalized Hair Box</h2>
          <p className="text-sm text-muted-foreground">Curated specifically for your hair type and goals</p>
        </div>
      </div>

      {/* Box Contents */}
      <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-4 rounded-2xl mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <ShoppingBag className="w-4 h-4 text-foreground" />
          <span className="text-sm font-bold text-foreground">What's in your box:</span>
        </div>
        <div className="space-y-4">
          {products.map((product) => (
            <div key={product.id} className="bg-card/80 p-4 rounded-xl border border-border">
              <div className="flex items-start space-x-3 mb-3">
                <div className="text-2xl">{product.image}</div>
                <div className="flex-1">
                  <div className="text-sm font-semibold text-foreground">{product.name}</div>
                  <div className="text-xs text-muted-foreground mb-1">{product.type}</div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 fill-primary text-primary" />
                      <span className="text-xs text-muted-foreground">{product.rating}</span>
                    </div>
                    <div className="text-xs font-bold text-foreground">{product.price}</div>
                  </div>
                </div>
              </div>
              
              {/* Why Recommended */}
              <div className="bg-primary/10 p-3 rounded-xl mb-3">
                <div className="flex items-center space-x-2 mb-2">
                  <Info className="w-3 h-3 text-foreground" />
                  <span className="text-xs font-bold text-foreground">Why we picked this for you</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{product.whyRecommended}</p>
              </div>

              {/* Benefits and Ingredients */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="flex items-center space-x-1 mb-2">
                    <Sparkles className="w-3 h-3 text-primary" />
                    <span className="text-xs font-bold text-foreground">Key Benefits</span>
                  </div>
                  <div className="space-y-1">
                    {product.benefits.slice(0, 2).map((benefit, index) => (
                      <div key={index} className="text-xs text-muted-foreground bg-primary/10 px-2 py-1 rounded-lg">
                        • {benefit}
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="flex items-center space-x-1 mb-2">
                    <Leaf className="w-3 h-3 text-primary" />
                    <span className="text-xs font-bold text-foreground">Active Ingredients</span>
                  </div>
                  <div className="space-y-1">
                    {product.ingredients.slice(0, 2).map((ingredient, index) => (
                      <div key={index} className="text-xs text-muted-foreground bg-primary/20 px-2 py-1 rounded-lg">
                        • {ingredient}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Subscription Frequency */}
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <Calendar className="w-4 h-4 text-primary" />
          <span className="text-sm font-bold text-foreground">Delivery Frequency</span>
        </div>
        <RadioGroup value={frequency} onValueChange={setFrequency} className="space-y-2">
          {frequencies.map((freq) => (
            <div key={freq.id} className="flex items-center space-x-3">
              <RadioGroupItem value={freq.id} id={freq.id} />
              <label htmlFor={freq.id} className="flex-1 cursor-pointer">
                <div className={`p-3 rounded-xl border-2 transition-all ${
                  frequency === freq.id 
                    ? 'border-primary bg-primary/10' 
                    : 'border-border hover:border-primary/50'
                }`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-semibold text-foreground">{freq.label}</span>
                        {freq.popular && (
                          <span className="text-xs bg-primary text-primary-foreground px-2 py-0.5 rounded-full font-medium">
                            Most Popular
                          </span>
                        )}
                      </div>
                      {freq.discount > 0 && (
                        <div className="text-xs text-primary font-medium">
                          Save {freq.discount}%
                        </div>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-foreground">${freq.price.toFixed(2)}</div>
                      <div className="text-xs text-muted-foreground">per delivery</div>
                    </div>
                  </div>
                </div>
              </label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Pricing Summary */}
      <div className="bg-primary/10 p-4 rounded-2xl mb-4 border border-primary/30">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-foreground">Subscription Price:</span>
          <span className="text-lg font-bold text-foreground">${selectedFreq.price.toFixed(2)}</span>
        </div>
        {selectedFreq.discount > 0 && (
          <div className="flex items-center justify-between text-xs text-primary">
            <span>You save {selectedFreq.discount}%</span>
            <span>-${((basePrice - selectedFreq.price)).toFixed(2)}</span>
          </div>
        )}
        <div className="text-xs text-muted-foreground mt-2">
          • Free shipping • Cancel anytime • Skip deliveries easily
        </div>
      </div>

      {/* Checkout Button */}
      <Button
        onClick={handleCheckout}
        disabled={isCheckingOut}
        className="w-full py-4 text-lg bg-primary hover:bg-primary/90 text-primary-foreground rounded-3xl shadow-soft transition-all duration-300 transform hover:scale-105 font-semibold active:animate-tap-scale"
      >
        {isCheckingOut ? 'Processing...' : `Subscribe for $${selectedFreq.price.toFixed(2)}/${frequency === 'monthly' ? 'month' : frequency === 'bimonthly' ? '2 months' : 'quarter'}`}
      </Button>
    </Card>
  );
};

export default SubscriptionBox;
