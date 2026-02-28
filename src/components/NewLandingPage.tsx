import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Menu, X, ArrowRight, Sparkles, Leaf, Heart, Shield } from 'lucide-react';
import ProductCarousel from './ProductCarousel';
import IngredientCard from './IngredientCard';
import ProductKitCard from './ProductKitCard';
const NewLandingPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  
  // Silky smooth scroll-based animations
  const y1 = useTransform(scrollY, [0, 400], [0, -120]);
  const y2 = useTransform(scrollY, [0, 400], [0, -60]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.4]);
  const scale = useTransform(scrollY, [0, 400], [1, 0.95]);

  // Animation variants for sophisticated motion
  const fadeInUp = {
    initial: { y: 60, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
  };

  const fadeInLeft = {
    initial: { x: -60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
  };

  const fadeInRight = {
    initial: { x: 60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const scaleIn = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }
  };

  // Ultra-smooth intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { 
        threshold: 0.05, 
        rootMargin: '0px 0px -10% 0px'
      }
    );

    const sections = document.querySelectorAll('.section-animate');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);
  const productSlides = [{
    img: "/uploads/8497c971-9940-4ffc-b4f7-ae9c165ca532.png",
    caption: "Boost & Bloom Microneedle Serum – Advanced Hair Growth Formula"
  }, {
    img: "/uploads/84797220-6528-42b1-8251-051f7ca51e56.png",
    caption: "Splash & Flow Filter – Vitamin C + Lavender"
  }, {
    img: "/uploads/19ffa01c-5fbd-45e3-b05b-f1f16f980a64.png",
    caption: "Splash & Flow Filter – Vitamin C + Tangerine"
  }, {
    img: "/uploads/98510370-0923-4fe7-b522-5823e9e1e94c.png",
    caption: "Splash & Flow Filter – Vitamin C + Oud"
  }, {
    img: "/uploads/65630018-2843-4d45-ac91-c85dda73dbb3.png",
    caption: "Root Rehab Powder Shampoo – Zero-Water, Zero-Waste Formula"
  }];
  const ingredientCards = [{
    img: "/images/BoostBloom_white_ingredients.jpg",
    title: "Serum: skin‑care level actives",
    description: "Advanced peptides and vitamins for scalp health"
  }, {
    img: "/images/BoostBloom_green_card.jpg",
    title: "Serum: phyto‑silica + peptides",
    description: "Natural plant extracts with strengthening peptides"
  }];
  const kits = [{
    title: "Starter Kit",
    price: "₹2,399",
    img: "/uploads/dabc2c77-d1e9-4a10-b4aa-37904afc2a18.png",
    bullet_1: "3 Filters + Serum + Powder",
    bullet_2: "Perfect for beginners",
    link: "/cart?starter"
  }, {
    title: "Full Care Kit",
    price: "₹4,999",
    img: "/uploads/aad6e913-0bbd-4be1-aa26-b9f1bb26e90a.png",
    bullet_1: "5 Complete Products",
    bullet_2: "Maximum hair transformation",
    link: "/cart?full",
    isPopular: true
  }];
  const steps = [{
    title: "Quiz",
    body: "Answer fun questions."
  }, {
    title: "Get Plan",
    body: "See your best kit."
  }, {
    title: "Track Progress",
    body: "AI scans your strands."
  }, {
    title: "Free Mind App",
    body: "StayClear+ keeps you calm."
  }];
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth'
    });
    setIsMobileMenuOpen(false);
  };
  return <div className="min-h-screen bg-background font-display">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 animate-fade-in">
              <img src="/uploads/440cba08-26a0-439d-b977-5fa692816cdd.png" alt="Hair Dare You - Science-backed hair care solutions logo" className="h-16 md:h-20 lg:h-24 transition-transform duration-300 hover:scale-105" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block animate-fade-in">
              <div className="ml-10 flex items-center space-x-8">
                <button onClick={() => scrollToSection('why')} className="text-muted-foreground hover:text-foreground transition-all duration-300 font-medium relative group">
                  Why Us
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button onClick={() => scrollToSection('products')} className="text-muted-foreground hover:text-foreground transition-all duration-300 font-medium relative group">
                  Products
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
                <button onClick={() => scrollToSection('kits')} className="text-muted-foreground hover:text-foreground transition-all duration-300 font-medium relative group">
                  Kits
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </button>
                <Button onClick={() => navigate('/onboarding')} className="btn-primary-glow font-semibold text-base px-6 py-3 ml-4">
                  Take Quiz
                </Button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && <div className="md:hidden bg-background border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('why')} className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left">
                Why Us
              </button>
              <button onClick={() => scrollToSection('products')} className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left">
                Products
              </button>
              <button onClick={() => scrollToSection('kits')} className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left">
                Kits
              </button>
              <div className="px-3 py-2">
                <Button onClick={() => navigate('/onboarding')} className="w-full font-semibold">
                  Take Quiz
                </Button>
              </div>
            </div>
          </div>}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 min-h-screen bg-gradient-to-br from-background via-background to-accent/20 flex items-center overflow-hidden">
        <motion.div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(163,254,1,0.03),transparent_70%)]"
          style={{ y: y1, opacity }}
          animate={{ 
            scale: [1, 1.02, 1],
            rotate: [0, 0.5, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            ease: "easeInOut",
            times: [0, 0.5, 1]
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div 
              className="space-y-8 lg:space-y-10"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                ease: [0.4, 0, 0.2, 1],
                delay: 0.1
              }}
            >
              <motion.div 
                className="space-y-4 lg:space-y-6"
                variants={staggerContainer}
                initial="initial"
                animate="animate"
              >
                <motion.h1 
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[0.9] tracking-[-0.02em]"
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 1, 
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0.3
                  }}
                >
                  Happy Hair<br />
                  <motion.span 
                    className="text-primary"
                    animate={{ 
                      scale: [1, 1.01, 1],
                      textShadow: [
                        "0 0 0px rgba(163, 254, 1, 0.3)",
                        "0 0 12px rgba(163, 254, 1, 0.6)",
                        "0 0 0px rgba(163, 254, 1, 0.3)"
                      ]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      times: [0, 0.5, 1]
                    }}
                  >
                    Starts Now.
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-lg leading-relaxed"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ 
                    duration: 1, 
                    ease: [0.4, 0, 0.2, 1],
                    delay: 0.5
                  }}
                >
                  Wash clean. Feed roots. Shine bright. Transform your hair care routine with science-backed solutions.
                </motion.p>
              </motion.div>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 lg:gap-6"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                  duration: 1, 
                  ease: [0.4, 0, 0.2, 1],
                  delay: 0.7
                }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.02, 
                    y: -1,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ 
                    scale: 0.98,
                    transition: { duration: 0.1 }
                  }}
                >
                  <Button onClick={() => navigate('/onboarding')} className="btn-primary-glow text-base sm:text-lg font-bold px-8 sm:px-10 py-4 sm:py-6 group w-full sm:w-auto">
                    Take Hair Quiz
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-3 h-5 w-5" />
                    </motion.div>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button onClick={() => scrollToSection('kits')} variant="outline" size="lg" className="text-base sm:text-lg font-semibold px-8 sm:px-10 py-4 sm:py-6 border-2 hover:bg-accent/50 transition-all duration-300 w-full sm:w-auto">
                    Shop Kits
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div 
                className="flex flex-wrap items-center gap-4 lg:gap-6 text-xs sm:text-sm text-muted-foreground"
                {...fadeInUp}
                transition={{ delay: 0.6 }}
              >
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Shield className="h-4 w-4 text-primary" />
                  <span>Dermatologist Tested</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <Leaf className="h-4 w-4 text-primary" />
                  <span>100% Vegan</span>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
            >
              <motion.div 
                className="absolute -inset-6 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-3xl blur-2xl"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5]
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="/uploads/dd3fb07b-9907-4320-b789-7e9eb12dd7fe.png" 
                  alt="Hair Dare You innovative hair care products featuring dumbbell design - science-backed hair growth and health solutions" 
                  className="relative w-full h-auto max-w-lg mx-auto rounded-3xl shadow-2xl object-contain gpu-accelerated"
                  loading="lazy"
                  onError={(e) => {
                    console.error('Hero image failed to load:', e);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <motion.section 
        className="py-16 lg:py-20 bg-muted/30"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-8 lg:mb-12"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
          >
            <p className="text-sm lg:text-base text-muted-foreground font-medium">Trusted by thousands worldwide</p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              { icon: Sparkles, title: "K-Beauty", subtitle: "Advanced formulations" },
              { icon: Leaf, title: "Ayurveda", subtitle: "Natural ingredients" },
              { icon: Heart, title: "Vegan", subtitle: "Cruelty-free formula" },
              { icon: Shield, title: "Dermatologist", subtitle: "Clinically tested" }
            ].map((badge, index) => (
              <motion.div 
                key={index}
                className="group bg-card rounded-2xl lg:rounded-3xl p-4 lg:p-8 border border-border hover:border-primary/20 transition-all duration-500 gpu-accelerated"
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  boxShadow: "0 20px 40px -12px rgba(163, 254, 1, 0.15)"
                }}
                {...scaleIn}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex flex-col items-center space-y-2 lg:space-y-4">
                  <motion.div 
                    className="p-2 lg:p-4 rounded-xl lg:rounded-2xl bg-primary/5 group-hover:bg-primary/10 transition-all duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <badge.icon className="w-5 h-5 lg:w-8 lg:h-8 text-primary" />
                  </motion.div>
                  <span className="text-sm lg:text-base font-bold text-foreground">{badge.title}</span>
                  <span className="text-xs text-muted-foreground text-center hidden lg:block">{badge.subtitle}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Why Section */}
      <section id="why" className="py-16 lg:py-28 bg-gradient-to-br from-accent/40 to-background section-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="space-y-6 lg:space-y-8 lg:order-1">
              <div className="space-y-4 lg:space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-[-0.01em]">
                  Why We Care
                </h2>
                <div className="space-y-3 lg:space-y-4">
                  <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                    Hard water and dust hurt hair.
                  </p>
                  <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground leading-relaxed">
                    We clean the water and wake the roots.
                  </p>
                  <p className="text-lg sm:text-xl lg:text-2xl text-foreground font-semibold">
                    Simple steps. Big smiles.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 lg:gap-4">
                <div className="flex items-center gap-2 bg-card px-3 lg:px-4 py-2 rounded-full border">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-xs lg:text-sm font-medium">Scientific approach</span>
                </div>
                <div className="flex items-center gap-2 bg-card px-3 lg:px-4 py-2 rounded-full border">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-xs lg:text-sm font-medium">Proven results</span>
                </div>
              </div>
            </div>
            <div className="relative lg:order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-3xl blur-xl"></div>
              <img src="/uploads/c94c94d5-f6d5-4e71-924f-575c1c1b7f3b.png" alt="Benefits of Hair Dare You products - happy customers with healthy, beautiful hair transformations" className="relative w-full h-auto rounded-3xl shadow-2xl card-hover" />
            </div>
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section id="products" className="py-16 lg:py-28 bg-background section-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6 leading-tight tracking-[-0.01em]">
              Meet the Heroes
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Each product is carefully crafted with premium ingredients to transform your hair care routine
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(163,254,1,0.02),transparent_70%)]"></div>
            <ProductCarousel slides={productSlides} />
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-16 lg:py-28 bg-gradient-to-br from-background via-accent/20 to-background relative overflow-hidden section-animate">
        {/* Enhanced decorative background elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(163,254,1,0.08),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(163,254,1,0.04),transparent_60%)]"></div>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 lg:mb-16">
            
            
          </div>
          
          <div className="flex justify-center">
            <div className="relative group max-w-6xl">
              <div className="absolute -inset-4 lg:-inset-8 bg-gradient-to-r from-primary/15 via-primary/5 to-primary/15 rounded-2xl lg:rounded-[2rem] blur-xl lg:blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-70"></div>
              <div className="relative bg-card/90 backdrop-blur-md rounded-2xl lg:rounded-3xl p-6 lg:p-10 border border-border/40 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] transition-all duration-500">
                <img src="/uploads/b1c0d07a-07c4-4ec8-93be-df6e79fb8c1b.png" alt="Hair Dare You premium ingredients - scientifically selected actives, peptides, and natural extracts for optimal hair health" className="w-full h-auto rounded-xl lg:rounded-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Strip */}
      <section className="py-16 lg:py-28 bg-background section-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 rounded-2xl lg:rounded-3xl blur-xl"></div>
              <img src="/uploads/303e0699-5e3f-42d5-acd2-7bae64b834e2.png" alt="Hair Dare You week-by-week progress results - visible improvements in scalp health and hair density over 8 weeks" className="relative w-full h-auto rounded-2xl lg:rounded-3xl shadow-2xl card-hover" />
            </div>
            <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
              <div className="space-y-4 lg:space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-[-0.01em]">
                  Week‑by‑Week Results
                </h2>
                <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed">
                  Real users see calmer scalp by Week 2 and denser hair by Week 8. Track your progress with measurable improvements.
                </p>
              </div>
              <div className="space-y-3 lg:space-y-4">
                <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-card rounded-xl lg:rounded-2xl border">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-lg lg:rounded-xl flex items-center justify-center">
                    <span className="text-primary font-bold text-sm lg:text-base">2</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm lg:text-base">Week 2</p>
                    <p className="text-xs lg:text-sm text-muted-foreground">Calmer, healthier scalp</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 lg:gap-4 p-3 lg:p-4 bg-card rounded-xl lg:rounded-2xl border">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 bg-primary/10 rounded-lg lg:rounded-xl flex items-center justify-center">
                    <span className="text-primary font-bold text-sm lg:text-base">8</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm lg:text-base">Week 8</p>
                    <p className="text-xs lg:text-sm text-muted-foreground">Visibly denser hair</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-28 bg-gradient-to-br from-accent/30 to-accent/10 section-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6 leading-tight tracking-[-0.01em]">
              Your Easy 4‑Step Plan
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Simple steps designed for busy lifestyles, maximum results with minimal effort
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {steps.map((step, index) => <Card key={index} className="relative text-center border-0 shadow-xl bg-card/80 backdrop-blur-sm hover:bg-card transition-all duration-500 card-hover group">
                <CardContent className="p-6 lg:p-8">
                  <div className="relative mb-4 lg:mb-6">
                    <div className="w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-xl lg:rounded-2xl flex items-center justify-center text-lg lg:text-2xl font-black mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                      {index + 1}
                    </div>
                    {index < steps.length - 1 && <div className="hidden lg:block absolute top-6 lg:top-8 left-full w-full">
                        <div className="w-6 lg:w-8 h-0.5 bg-gradient-to-r from-primary/30 to-transparent"></div>
                      </div>}
                  </div>
                  <h3 className="text-lg lg:text-2xl font-bold mb-2 lg:mb-3 text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">{step.body}</p>
                </CardContent>
              </Card>)}
          </div>
          <div className="text-center">
            <Button onClick={() => navigate('/onboarding')} className="btn-primary-glow text-base lg:text-lg font-bold px-10 lg:px-12 py-5 lg:py-6 group">
              Start Quiz
              <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </section>

      {/* Kits Section */}
      <section id="kits" className="py-16 lg:py-28 bg-background section-animate">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6 leading-tight tracking-[-0.01em]">
              Pick Your Kit
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Choose the perfect combination for your hair goals. Each kit is designed for specific needs and results.
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(163,254,1,0.02),transparent_70%)]"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
              {kits.map((kit, index) => <div key={index} className="transform transition-all duration-500 hover:scale-[1.02]">
                  <ProductKitCard {...kit} />
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* Club Banner */}
      <section className="py-16 lg:py-28 bg-gradient-to-br from-foreground via-foreground to-foreground/90 text-background relative overflow-hidden section-animate">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(163,254,1,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(163,254,1,0.05),transparent_70%)]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-background mb-4 lg:mb-6 leading-tight tracking-[-0.01em]">
              Join Dare Club
            </h2>
            <p className="text-lg sm:text-xl mb-8 lg:mb-10 opacity-90 max-w-3xl mx-auto leading-relaxed">
              Earn points. Get refills. Shine on. Unlock exclusive benefits and save on every order.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center items-center">
              <Button variant="secondary" size="lg" className="text-base lg:text-lg font-bold px-10 lg:px-12 py-5 lg:py-6 bg-background text-foreground hover:bg-background/90 transition-all duration-300 hover:scale-105 w-full sm:w-auto" onClick={() => window.location.href = '/club'}>
                Join Free
              </Button>
              <div className="flex flex-wrap justify-center items-center gap-3 lg:gap-4 text-background/80">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-xs lg:text-sm">No membership fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-xs lg:text-sm">Instant rewards</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 lg:py-16 bg-muted/50 border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 lg:space-y-6">
            <div className="animate-fade-in">
              <img src="/uploads/440cba08-26a0-439d-b977-5fa692816cdd.png" alt="Hair Dare You brand logo - transforming hair care with science" className="h-8 lg:h-10 mx-auto transition-transform duration-300 hover:scale-105" />
            </div>
            <div className="flex flex-wrap justify-center gap-4 lg:gap-8 text-xs lg:text-sm text-muted-foreground">
              <span className="hover:text-foreground transition-colors cursor-pointer">Privacy Policy</span>
              <span className="hover:text-foreground transition-colors cursor-pointer">Terms of Service</span>
              <span className="hover:text-foreground transition-colors cursor-pointer">Contact</span>
            </div>
            <p className="text-muted-foreground text-xs lg:text-sm leading-relaxed">
              © 2024 Hair Dare You. All rights reserved. Crafted with care for your hair.
            </p>
          </div>
        </div>
      </footer>

    </div>;
};
export default NewLandingPage;
