import { useParams, Link } from "react-router-dom";
import { properties } from "@/data/dummy-data";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatusChip } from "@/components/shared/StatusChip";
import { MockMap } from "@/components/shared/MockMap";
import { PropertyIcon } from "@/components/shared/PropertyIcon";
import { MapPin, Star, Shield, User, ChevronLeft, Wifi, Droplets, Car, Home, CheckCircle2 } from "lucide-react";

const amenityIcons: Record<string, any> = { "WiFi Ready": Wifi, "Internet Ready": Wifi, "Water Included": Droplets, "Parking": Car, "Furnished": Home };

export default function PropertyDetails() {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id) || properties[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link to="/search" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground mb-6">
        <ChevronLeft className="h-4 w-4" /> Back to Search
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Photo Gallery */}
          <div className="h-64 md:h-80 bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl flex items-center justify-center relative">
            <PropertyIcon type={property.image} size="xl" className="!h-32 !w-32" />
            <div className="absolute top-4 right-4"><StatusChip status={property.status} /></div>
          </div>

          {/* Info */}
          <div>
            <h1 className="text-2xl font-bold mb-2">{property.name}</h1>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1"><MapPin className="h-4 w-4" />{property.location}</span>
              <span className="flex items-center gap-1"><Star className="h-4 w-4 fill-warning text-warning" />{property.rating} rating</span>
              <Badge variant="secondary">{property.type}</Badge>
            </div>
            <p className="text-muted-foreground">{property.description}</p>
          </div>

          {/* Amenities */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Amenities & Features</h3>
            <div className="grid grid-cols-2 gap-3">
              {property.amenities.map((a) => (
                <div key={a} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-success" />
                  {a}
                </div>
              ))}
            </div>
          </Card>

          {/* Map */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Location</h3>
            <MockMap className="h-48" pins={[{ x: 50, y: 50, label: property.name, color: "bg-primary" }]} />
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          <Card className="p-6">
            <p className="text-3xl font-bold text-primary mb-1">₱{property.rent.toLocaleString()}<span className="text-sm font-normal text-muted-foreground">/month</span></p>
            <p className="text-sm text-muted-foreground mb-6">Minimum 6-month lease</p>
            <Link to="/login">
              <Button className="w-full mb-3" size="lg">Apply for This Unit</Button>
            </Link>
            <Button variant="outline" className="w-full" size="lg">Contact Landlord</Button>
          </Card>

          {/* Trust Score */}
          <Card className="p-6">
            <h3 className="font-semibold mb-3 flex items-center gap-2"><Shield className="h-4 w-4 text-primary" />Trust Score</h3>
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-16">
                <svg viewBox="0 0 36 36" className="h-16 w-16 -rotate-90">
                  <circle cx="18" cy="18" r="15" fill="none" stroke="hsl(var(--muted))" strokeWidth="3" />
                  <circle cx="18" cy="18" r="15" fill="none" stroke="hsl(var(--primary))" strokeWidth="3" strokeDasharray={`${property.trustScore} ${100 - property.trustScore}`} strokeLinecap="round" />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">{property.trustScore}</span>
              </div>
              <div className="text-sm space-y-1">
                <p className="text-muted-foreground">Verified Landlord</p>
                <p className="text-muted-foreground">Admin Approved</p>
                <p className="text-muted-foreground">{property.rating} avg rating</p>
              </div>
            </div>
          </Card>

          {/* Landlord */}
          <Card className="p-6">
            <h3 className="font-semibold mb-3">Property Owner</h3>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-medium text-sm">{property.landlord}</p>
                <p className="text-xs text-muted-foreground">Verified Landlord</p>
              </div>
            </div>
          </Card>

          {/* Units Info */}
          <Card className="p-6">
            <h3 className="font-semibold mb-3">Availability</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Total Units</span><span className="font-medium">{property.units}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Occupied</span><span className="font-medium">{property.occupied}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Available</span><span className="font-medium text-success">{property.units - property.occupied}</span></div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
