import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StatusChip } from "./StatusChip";
import { PropertyIcon } from "./PropertyIcon";
import { MapPin, Star, Heart } from "lucide-react";
import { Link } from "react-router-dom";

interface PropertyCardProps {
  id: string;
  name: string;
  location: string;
  type: string;
  rent: number;
  status: string;
  amenities: string[];
  image: string;
  rating: number;
  trustScore: number;
  showScore?: boolean;
  scores?: { preference: number; location: number; reliability: number };
}

export function PropertyCard({ id, name, location, type, rent, status, amenities, image, rating, trustScore, showScore, scores }: PropertyCardProps) {
  return (
    <Link to={`/property/${id}`}>
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
        <div className="h-40 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center relative">
          <PropertyIcon type={image} size="xl" />
          <div className="absolute top-2 right-2">
            <StatusChip status={status} />
          </div>
          <button className="absolute top-2 left-2 p-1.5 rounded-full bg-card/80 opacity-0 group-hover:opacity-100 transition-opacity" onClick={(e) => e.preventDefault()}>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
        <div className="p-4 space-y-2">
          <h3 className="font-semibold text-foreground text-sm leading-tight">{name}</h3>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            {location}
          </div>
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-primary">₱{rent.toLocaleString()}<span className="text-xs font-normal text-muted-foreground">/mo</span></span>
            <div className="flex items-center gap-1">
              <Star className="h-3.5 w-3.5 fill-warning text-warning" />
              <span className="text-xs font-medium">{rating}</span>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Badge variant="secondary" className="text-[10px] px-1.5 py-0">{type}</Badge>
            <div className="flex items-center gap-0.5 ml-auto">
              <div className="h-5 w-5 rounded-full bg-accent/20 flex items-center justify-center">
                <span className="text-[9px] font-bold text-accent">{trustScore}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-1">
            {amenities.slice(0, 3).map((a) => (
              <span key={a} className="text-[10px] text-muted-foreground bg-muted px-1.5 py-0.5 rounded">{a}</span>
            ))}
          </div>
          {showScore && scores && (
            <div className="pt-2 border-t space-y-1">
              <div className="flex justify-between text-[10px]"><span className="text-muted-foreground">Preference Match</span><span className="font-semibold text-primary">{scores.preference}%</span></div>
              <div className="flex justify-between text-[10px]"><span className="text-muted-foreground">Location Relevance</span><span className="font-semibold text-accent">{scores.location}%</span></div>
              <div className="flex justify-between text-[10px]"><span className="text-muted-foreground">Reliability</span><span className="font-semibold text-success">{scores.reliability}%</span></div>
            </div>
          )}
        </div>
      </Card>
    </Link>
  );
}
