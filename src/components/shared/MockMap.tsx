import { MapPin } from "lucide-react";

interface Pin {
  x: number;
  y: number;
  label: string;
  color?: string;
}

interface MockMapProps {
  pins?: Pin[];
  className?: string;
  showLandmarks?: boolean;
}

const defaultPins: Pin[] = [
  { x: 35, y: 30, label: "Domi Residences", color: "bg-primary" },
  { x: 55, y: 50, label: "Lakeside Boarding", color: "bg-accent" },
  { x: 70, y: 35, label: "Maharlika Homes", color: "bg-warning" },
  { x: 25, y: 60, label: "GreenNest", color: "bg-success" },
];

const landmarks = [
  { x: 45, y: 20, label: "LSPU Campus", icon: "🏫" },
  { x: 60, y: 65, label: "Public Market", icon: "🏪" },
  { x: 80, y: 45, label: "Transport Hub", icon: "🚌" },
  { x: 15, y: 40, label: "Laguna Lake", icon: "🌊" },
];

export function MockMap({ pins = defaultPins, className = "", showLandmarks = true }: MockMapProps) {
  return (
    <div className={`relative rounded-lg overflow-hidden bg-gradient-to-br from-success/5 via-primary/5 to-accent/5 border ${className}`}>
      {/* Grid pattern for map feel */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Roads */}
      <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path d="M 10 50 Q 30 45 50 50 Q 70 55 90 50" stroke="hsl(var(--foreground))" strokeWidth="0.8" fill="none" />
        <path d="M 50 10 Q 45 30 50 50 Q 55 70 50 90" stroke="hsl(var(--foreground))" strokeWidth="0.8" fill="none" />
        <path d="M 20 20 Q 40 35 60 30 Q 80 25 90 35" stroke="hsl(var(--foreground))" strokeWidth="0.5" fill="none" />
      </svg>

      {/* Water body */}
      <div className="absolute left-0 top-1/3 w-1/5 h-1/3 bg-primary/8 rounded-r-full" />

      {/* Landmark pins */}
      {showLandmarks && landmarks.map((l) => (
        <div key={l.label} className="absolute flex flex-col items-center" style={{ left: `${l.x}%`, top: `${l.y}%`, transform: "translate(-50%, -50%)" }}>
          <span className="text-lg">{l.icon}</span>
          <span className="text-[8px] text-muted-foreground bg-card/90 px-1 rounded whitespace-nowrap">{l.label}</span>
        </div>
      ))}

      {/* Property pins */}
      {pins.map((pin) => (
        <div key={pin.label} className="absolute group cursor-pointer" style={{ left: `${pin.x}%`, top: `${pin.y}%`, transform: "translate(-50%, -100%)" }}>
          <div className={`${pin.color || "bg-primary"} text-primary-foreground rounded-full p-1 shadow-lg transition-transform group-hover:scale-125`}>
            <MapPin className="h-4 w-4" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 bg-card shadow-lg rounded px-2 py-1 text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10 border">
            {pin.label}
          </div>
        </div>
      ))}

      {/* Map label */}
      <div className="absolute bottom-2 right-2 bg-card/90 rounded px-2 py-1 text-[10px] text-muted-foreground border">
        📍 Siniloan, Laguna
      </div>
    </div>
  );
}
