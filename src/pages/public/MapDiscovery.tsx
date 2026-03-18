import { MockMap } from "@/components/shared/MockMap";
import { Card } from "@/components/ui/card";
import { properties } from "@/data/dummy-data";
import { StatusChip } from "@/components/shared/StatusChip";
import { MapPin, Star, SlidersHorizontal } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Link } from "react-router-dom";

export default function MapDiscovery() {
  return (
    <div className="h-[calc(100vh-64px)] flex">
      {/* Sidebar */}
      <div className="w-80 border-r bg-card overflow-y-auto p-4 space-y-4 hidden md:block">
        <h2 className="font-bold text-lg">Map Discovery</h2>
        <Input placeholder="Search location..." />
        <div className="space-y-2">
          <Select defaultValue="all"><SelectTrigger className="w-full text-xs"><SelectValue placeholder="Rent Range" /></SelectTrigger><SelectContent><SelectItem value="all">Any Price</SelectItem><SelectItem value="low">Below ₱4,000</SelectItem><SelectItem value="mid">₱4,000 - ₱7,000</SelectItem><SelectItem value="high">Above ₱7,000</SelectItem></SelectContent></Select>
          <Select defaultValue="all"><SelectTrigger className="w-full text-xs"><SelectValue placeholder="Rooms" /></SelectTrigger><SelectContent><SelectItem value="all">Any</SelectItem><SelectItem value="studio">Studio</SelectItem><SelectItem value="1">1 Bedroom</SelectItem><SelectItem value="shared">Shared</SelectItem></SelectContent></Select>
          <Button variant="outline" size="sm" className="w-full"><SlidersHorizontal className="h-3 w-3 mr-2" /> More Filters</Button>
        </div>
        <div className="border-t pt-4 space-y-3">
          <p className="text-xs font-semibold text-muted-foreground uppercase">Nearby Properties</p>
          {properties.map((p) => (
            <Link to={`/property/${p.id}`} key={p.id}>
              <Card className="p-3 hover:bg-muted/50 cursor-pointer transition-colors">
                <div className="flex items-start gap-2">
                  <span className="text-2xl">{p.image}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">{p.name}</p>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />{p.location}
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-sm font-bold text-primary">₱{p.rent.toLocaleString()}/mo</span>
                      <StatusChip status={p.status} />
                    </div>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Map */}
      <div className="flex-1 relative">
        <MockMap className="h-full rounded-none" showLandmarks />
        <div className="absolute top-4 left-4 right-4 md:left-auto bg-card rounded-lg shadow-lg p-3 flex items-center gap-2 max-w-sm">
          <MapPin className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium">Siniloan, Laguna — 4 properties found</span>
        </div>
      </div>
    </div>
  );
}
