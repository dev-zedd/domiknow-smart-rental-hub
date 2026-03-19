import { MapPin, GraduationCap, ShoppingBag, Bus, Waves } from "lucide-react";

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
  { x: 45, y: 20, label: "LSPU Campus", Icon: GraduationCap },
  { x: 60, y: 65, label: "Public Market", Icon: ShoppingBag },
  { x: 80, y: 45, label: "Transport Hub", Icon: Bus },
  { x: 15, y: 40, label: "Laguna Lake", Icon: Waves },
];

export function MockMap({ pins = defaultPins, className = "", showLandmarks = true }: MockMapProps) {
  return (
    <div className={`relative rounded-lg overflow-hidden border ${className}`} style={{ background: "#f2efe9" }}>
      {/* OSM-style base layer */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
        {/* Water body (Laguna Lake area) */}
        <ellipse cx="30" cy="140" rx="60" ry="80" fill="#aad3df" opacity="0.7" />
        <ellipse cx="15" cy="120" rx="30" ry="50" fill="#aad3df" opacity="0.5" />
        
        {/* Parks / Green areas */}
        <rect x="280" y="20" width="60" height="40" rx="8" fill="#cdebb0" opacity="0.7" />
        <rect x="100" y="200" width="80" height="50" rx="10" fill="#cdebb0" opacity="0.5" />
        <rect x="320" y="180" width="50" height="70" rx="8" fill="#cdebb0" opacity="0.6" />
        <circle cx="180" cy="80" r="20" fill="#cdebb0" opacity="0.4" />
        
        {/* Buildings / blocks */}
        <rect x="120" y="50" width="30" height="25" rx="2" fill="#d9d0c9" opacity="0.6" />
        <rect x="160" y="40" width="25" height="20" rx="2" fill="#d9d0c9" opacity="0.5" />
        <rect x="200" y="100" width="35" height="30" rx="2" fill="#d9d0c9" opacity="0.6" />
        <rect x="250" y="120" width="20" height="25" rx="2" fill="#d9d0c9" opacity="0.5" />
        <rect x="140" y="140" width="40" height="20" rx="2" fill="#d9d0c9" opacity="0.4" />
        <rect x="300" y="90" width="25" height="35" rx="2" fill="#d9d0c9" opacity="0.5" />
        
        {/* Main roads */}
        <path d="M 0 150 Q 100 145 200 150 Q 300 155 400 150" stroke="#fff" strokeWidth="6" fill="none" opacity="0.9" />
        <path d="M 0 150 Q 100 145 200 150 Q 300 155 400 150" stroke="#e8e4da" strokeWidth="5" fill="none" />
        
        <path d="M 200 0 Q 195 75 200 150 Q 205 225 200 300" stroke="#fff" strokeWidth="6" fill="none" opacity="0.9" />
        <path d="M 200 0 Q 195 75 200 150 Q 205 225 200 300" stroke="#e8e4da" strokeWidth="5" fill="none" />
        
        {/* Secondary roads */}
        <path d="M 80 0 Q 90 50 100 100 Q 110 200 120 300" stroke="#fff" strokeWidth="4" fill="none" opacity="0.8" />
        <path d="M 80 0 Q 90 50 100 100 Q 110 200 120 300" stroke="#eeead5" strokeWidth="3" fill="none" />
        
        <path d="M 300 0 Q 310 80 320 150 Q 315 220 310 300" stroke="#fff" strokeWidth="4" fill="none" opacity="0.8" />
        <path d="M 300 0 Q 310 80 320 150 Q 315 220 310 300" stroke="#eeead5" strokeWidth="3" fill="none" />
        
        <path d="M 0 80 Q 120 70 200 80 Q 320 90 400 80" stroke="#fff" strokeWidth="3" fill="none" opacity="0.7" />
        <path d="M 0 80 Q 120 70 200 80 Q 320 90 400 80" stroke="#eeead5" strokeWidth="2.5" fill="none" />
        
        <path d="M 0 220 Q 150 210 250 220 Q 350 230 400 225" stroke="#fff" strokeWidth="3" fill="none" opacity="0.7" />
        <path d="M 0 220 Q 150 210 250 220 Q 350 230 400 225" stroke="#eeead5" strokeWidth="2.5" fill="none" />
        
        {/* Minor streets */}
        <path d="M 130 50 L 130 140" stroke="#f5f1eb" strokeWidth="1.5" fill="none" />
        <path d="M 250 80 L 250 180" stroke="#f5f1eb" strokeWidth="1.5" fill="none" />
        <path d="M 150 100 L 280 100" stroke="#f5f1eb" strokeWidth="1.5" fill="none" />
        <path d="M 100 180 L 300 180" stroke="#f5f1eb" strokeWidth="1.5" fill="none" />
        <path d="M 170 50 L 170 180" stroke="#f5f1eb" strokeWidth="1.5" fill="none" />
        <path d="M 340 50 L 340 250" stroke="#f5f1eb" strokeWidth="1.5" fill="none" />
        
        {/* Road outlines for realism */}
        <path d="M 0 150 Q 100 145 200 150 Q 300 155 400 150" stroke="#c7bfb2" strokeWidth="0.5" fill="none" strokeDasharray="none" />
      </svg>

      {/* Landmark pins */}
      {showLandmarks && landmarks.map((l) => (
        <div key={l.label} className="absolute flex flex-col items-center" style={{ left: `${l.x}%`, top: `${l.y}%`, transform: "translate(-50%, -50%)" }}>
          <div className="h-6 w-6 rounded-full bg-card shadow-sm border flex items-center justify-center">
            <l.Icon className="h-3.5 w-3.5 text-muted-foreground" />
          </div>
          <span className="text-[8px] text-foreground/70 bg-card/95 px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap mt-0.5 border border-border/50">{l.label}</span>
        </div>
      ))}

      {/* Property pins */}
      {pins.map((pin) => (
        <div key={pin.label} className="absolute group cursor-pointer" style={{ left: `${pin.x}%`, top: `${pin.y}%`, transform: "translate(-50%, -100%)" }}>
          <div className={`${pin.color || "bg-primary"} text-primary-foreground rounded-full p-1.5 shadow-lg transition-transform group-hover:scale-125 ring-2 ring-white`}>
            <MapPin className="h-4 w-4" />
          </div>
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-1 bg-card shadow-lg rounded-md px-2.5 py-1.5 text-[10px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity z-10 border">
            {pin.label}
          </div>
        </div>
      ))}

      {/* OSM-style attribution */}
      <div className="absolute bottom-1 right-1 bg-card/90 rounded px-1.5 py-0.5 text-[9px] text-muted-foreground border border-border/50 flex items-center gap-1">
        <MapPin className="h-2.5 w-2.5" />
        Siniloan, Laguna
      </div>
      
      {/* Zoom controls */}
      <div className="absolute top-2 left-2 flex flex-col shadow-md rounded-md overflow-hidden border">
        <button className="bg-card hover:bg-muted px-2 py-1 text-sm font-bold text-foreground border-b">+</button>
        <button className="bg-card hover:bg-muted px-2 py-1 text-sm font-bold text-foreground">−</button>
      </div>

      {/* Scale bar */}
      <div className="absolute bottom-1 left-1 flex items-end gap-0.5">
        <div className="flex flex-col items-start">
          <span className="text-[7px] text-foreground/50 mb-0.5">200m</span>
          <div className="w-12 h-0.5 bg-foreground/40 rounded" />
        </div>
      </div>
    </div>
  );
}
