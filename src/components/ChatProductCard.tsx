import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ChatProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
}

const ChatProductCard = ({ id, name, price, image }: ChatProductCardProps) => {
  return (
    <Card className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      <CardContent className="p-3">
        <h4 className="font-semibold text-sm mb-1 text-card-foreground line-clamp-2">{name}</h4>
        <p className="text-lg font-bold text-primary mb-2">₹{price}</p>
        <Link to={`/product/${id}`} className="w-full">
          <Button 
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold transition-smooth" 
            size="sm"
          >
            View Product
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ChatProductCard;
