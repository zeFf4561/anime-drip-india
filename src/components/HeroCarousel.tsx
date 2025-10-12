import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Unleash the Dream.",
    subtitle: "Wear Your Anime.",
    description: "Exclusive anime T-shirts from your favorite universes. Limited drops, endless hype.",
    cta: "Shop Anime",
    link: "/categories",
    gradient: "from-primary/20 via-accent/20 to-primary/20"
  },
  {
    title: "Express Yourself.",
    subtitle: "Beyond Anime.",
    description: "Memes, minimalist designs, vintage vibes & more. Your style, your statement.",
    cta: "Explore Collections",
    link: "/collections",
    gradient: "from-accent/20 via-secondary/20 to-accent/20"
  }
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative hero-gradient py-20 px-4 overflow-hidden">
      <div className="container mx-auto text-center relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`transition-all duration-700 ${
              index === currentSlide
                ? "opacity-100 translate-x-0"
                : "opacity-0 absolute inset-0 translate-x-full"
            }`}
          >
            <div className={`max-w-4xl mx-auto bg-gradient-to-r ${slide.gradient} rounded-3xl p-12`}>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent animate-fade-in">
                {slide.title}
                <br />
                {slide.subtitle}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
                {slide.description}
              </p>
              <Link to={slide.link}>
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 rounded-full font-semibold animate-glow-pulse transition-smooth"
                >
                  {slide.cta}
                </Button>
              </Link>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card p-3 rounded-full transition-smooth z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-card/80 hover:bg-card p-3 rounded-full transition-smooth z-10"
          aria-label="Next slide"
        >
          <ChevronRight className="h-6 w-6" />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide
                  ? "w-8 bg-primary"
                  : "w-2 bg-muted-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCarousel;
