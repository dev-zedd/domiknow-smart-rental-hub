import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { StatusChip } from "@/components/shared/StatusChip";
import { properties } from "@/data/dummy-data";
import { Plus, Edit, Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default function PropertyManagement() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Property Listings</h1>
        <Link to="/landlord/property/new"><Button><Plus className="h-4 w-4 mr-2" />Add Property</Button></Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {properties.filter(p => p.landlord === "Juan Dela Cruz").map((p) => (
          <Card key={p.id} className="p-6">
            <div className="flex items-start gap-4">
              <PropertyIcon type={p.image} size="lg" />
              <div className="flex-1">
                <div className="flex items-start justify-between">
                  <div><h3 className="font-semibold">{p.name}</h3><p className="text-xs text-muted-foreground">{p.location}</p></div>
                  <StatusChip status="Active" />
                </div>
                <div className="grid grid-cols-3 gap-2 mt-3 text-center text-xs">
                  <div className="p-2 bg-muted/50 rounded"><p className="font-bold">{p.units}</p><p className="text-muted-foreground">Units</p></div>
                  <div className="p-2 bg-muted/50 rounded"><p className="font-bold">{p.occupied}</p><p className="text-muted-foreground">Occupied</p></div>
                  <div className="p-2 bg-muted/50 rounded"><p className="font-bold text-primary">₱{p.rent.toLocaleString()}</p><p className="text-muted-foreground">Rent</p></div>
                </div>
                <div className="flex gap-2 mt-3">
                  <Button variant="outline" size="sm"><Eye className="h-3 w-3 mr-1" />View</Button>
                  <Button variant="outline" size="sm"><Edit className="h-3 w-3 mr-1" />Edit</Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
