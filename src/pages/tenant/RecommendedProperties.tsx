import { PropertyCard } from "@/components/shared/PropertyCard";
import { properties } from "@/data/dummy-data";

const scores = [
  { preference: 95, location: 88, reliability: 92 },
  { preference: 78, location: 92, reliability: 85 },
  { preference: 85, location: 72, reliability: 95 },
  { preference: 60, location: 95, reliability: 78 },
];

export default function RecommendedProperties() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Recommended for You</h1>
        <p className="text-sm text-muted-foreground">Properties matched based on your preferences and browsing history</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {properties.map((p, i) => (
          <PropertyCard key={p.id} {...p} showScore scores={scores[i]} />
        ))}
      </div>
    </div>
  );
}
