import { useState } from "react";
import { PropertyCard } from "@/components/shared/PropertyCard";
import { MockMap } from "@/components/shared/MockMap";
import { properties } from "@/data/dummy-data";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, SlidersHorizontal } from "lucide-react";

export default function PropertySearch() {
  const [search, setSearch] = useState("");
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-2xl font-bold mb-6">Search Properties</h1>
      
      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-6">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search by name or location..." className="pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <Select defaultValue="all"><SelectTrigger className="w-40"><SelectValue placeholder="Unit Type" /></SelectTrigger><SelectContent><SelectItem value="all">All Types</SelectItem><SelectItem value="studio">Studio</SelectItem><SelectItem value="1br">1 Bedroom</SelectItem><SelectItem value="boarding">Boarding</SelectItem><SelectItem value="bedspace">Bedspace</SelectItem></SelectContent></Select>
        <Select defaultValue="all"><SelectTrigger className="w-40"><SelectValue placeholder="Price Range" /></SelectTrigger><SelectContent><SelectItem value="all">Any Price</SelectItem><SelectItem value="low">Below ₱4,000</SelectItem><SelectItem value="mid">₱4,000 - ₱7,000</SelectItem><SelectItem value="high">Above ₱7,000</SelectItem></SelectContent></Select>
        <Button variant="outline" size="icon"><SlidersHorizontal className="h-4 w-4" /></Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Property List */}
        <div className="space-y-4">
          <p className="text-sm text-muted-foreground">{properties.length} properties found</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {properties.map((p) => (
              <PropertyCard key={p.id} {...p} />
            ))}
          </div>
        </div>

        {/* Map Panel */}
        <div className="lg:sticky lg:top-24 h-[500px]">
          <MockMap className="h-full" />
        </div>
      </div>
    </div>
  );
}
