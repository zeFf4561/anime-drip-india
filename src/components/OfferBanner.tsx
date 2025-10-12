import { Gift } from "lucide-react";

const OfferBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_100%] animate-[gradient_3s_ease_infinite] py-3 px-4 text-center">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <Gift className="h-5 w-5 animate-bounce" />
        <p className="text-sm md:text-base font-bold text-primary-foreground">
          🎉 Special Offer: Buy Any 3 T-Shirts & Get a Surprise Gift! 🎉
        </p>
        <Gift className="h-5 w-5 animate-bounce" />
      </div>
    </div>
  );
};

export default OfferBanner;
