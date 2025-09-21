import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CategoryCardProps {
  name: string;
  image: string;
  slug: string;
  description?: string;
}

const CategoryCard = ({ name, image, slug, description }: CategoryCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 anime-card hover:anime-glow">
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
          {description && (
            <p className="text-white/80 text-sm mb-3">{description}</p>
          )}
          <Link to={`/category/${slug}`}>
            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-smooth" 
              size="sm"
            >
              Explore {name} Tees
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default CategoryCard;