import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ShoppingCart, Star, Search, Filter, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Shop = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSort, setSelectedSort] = useState('featured');

  const products = [
    {
      id: 1,
      name: "BoostBloom Hair Growth Serum",
      price: 34.99,
      originalPrice: 49.99,
      category: "growth",
      rating: 4.8,
      reviews: 234,
      image: "/images/BoostBloom_green_card.jpg",
      description: "Advanced hair growth formula with natural botanicals",
      badge: "Best Seller",
      isNew: false
    },
    {
      id: 2,
      name: "Root Rehab Treatment",
      price: 24.99,
      category: "treatment",
      rating: 4.6,
      reviews: 189,
      image: "/images/RootRehab_bottle.jpg",
      description: "Intensive root strengthening treatment",
      badge: "Editor's Choice",
      isNew: true
    },
    {
      id: 3,
      name: "SplashFlow Hydrating Mist",
      price: 19.99,
      category: "styling",
      rating: 4.7,
      reviews: 156,
      image: "/images/SplashFlow_blue.jpg",
      description: "Lightweight hydrating styling mist",
      badge: null,
      isNew: false
    },
    {
      id: 4,
      name: "Complete Hair Growth Kit",
      price: 89.99,
      originalPrice: 119.99,
      category: "kits",
      rating: 4.9,
      reviews: 312,
      image: "/images/BoostBloom_large_pose.jpg",
      description: "Everything you need for healthy hair growth",
      badge: "Value Pack",
      isNew: false
    },
    {
      id: 5,
      name: "SplashFlow Orange Energizing Spray",
      price: 22.99,
      category: "styling",
      rating: 4.5,
      reviews: 98,
      image: "/images/SplashFlow_orange.jpg",
      description: "Vitamin-rich energizing hair spray",
      badge: null,
      isNew: true
    },
    {
      id: 6,
      name: "SplashFlow Red Repair Serum",
      price: 27.99,
      category: "treatment",
      rating: 4.6,
      reviews: 143,
      image: "/images/SplashFlow_red.jpg",
      description: "Deep repair serum for damaged hair",
      badge: "New Formula",
      isNew: true
    }
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'growth', label: 'Hair Growth' },
    { value: 'treatment', label: 'Treatment' },
    { value: 'styling', label: 'Styling' },
    { value: 'kits', label: 'Complete Kits' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest' }
  ];

  const filteredProducts = products
    .filter(product => 
      (selectedCategory === 'all' || product.category === selectedCategory) &&
      (searchTerm === '' || product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => {
      switch (selectedSort) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'newest':
          return b.isNew ? 1 : -1;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold font-montserrat text-foreground mb-4">Shop Hair Care</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Discover our complete collection of scientifically-formulated hair care products designed 
            to transform your hair journey.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <Card className="p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-4 w-full lg:w-auto">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full lg:w-48">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map(category => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={selectedSort} onValueChange={setSelectedSort}>
                  <SelectTrigger className="w-full lg:w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    {sortOptions.map(option => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative">
                  <div className="aspect-square bg-muted overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = '/placeholder.svg';
                      }}
                    />
                  </div>
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.badge && (
                      <Badge variant="secondary" className="bg-primary text-primary-foreground">
                        {product.badge}
                      </Badge>
                    )}
                    {product.isNew && (
                      <Badge className="bg-accent text-accent-foreground">New</Badge>
                    )}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 hover:bg-background"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{product.rating}</span>
                    </div>
                    <span className="text-muted-foreground text-sm">({product.reviews})</span>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xl font-bold text-primary">${product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <Button className="w-full" onClick={() => navigate('/cart')}>
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-muted-foreground text-lg mb-4">No products found</div>
            <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}

        {/* Newsletter CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16"
        >
          <Card className="p-8 text-center bg-primary/5">
            <h3 className="text-2xl font-bold font-montserrat mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Be the first to know about new products, exclusive offers, and hair care tips.
            </p>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Shop;