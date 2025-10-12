import { Gift } from "lucide-react";
import { Link } from "react-router-dom";

const OfferBanner = () => {
  return (
    <Link to="/collections">
      <div className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradient_3s_ease_infinite] py-3 px-4 text-center cursor-pointer hover:opacity-90 transition-opacity">
        <div className="container mx-auto flex items-center justify-center gap-2">
          <Gift className="h-5 w-5 animate-bounce" />
          <p className="text-sm md:text-base font-bold text-primary-foreground">
            🎉 Special Offer: Buy Any 3 T-Shirts & Get a Surprise Gift! 🎉
          </p>
          <Gift className="h-5 w-5 animate-bounce" />
        </div>
      </div>
    </Link>
  );
};

export default OfferBanner;
