import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { CheckCircle2, Clock, FileSearch, UserCheck, Home } from "lucide-react";

const steps = [
  { icon: FileSearch, label: "Application Submitted", date: "March 10, 2026", done: true },
  { icon: Clock, label: "Under Review", date: "March 11, 2026", done: true },
  { icon: UserCheck, label: "Landlord Approved", date: "March 13, 2026", done: true },
  { icon: CheckCircle2, label: "Admin Verified", date: "March 14, 2026", done: true },
  { icon: Home, label: "Lease Activated", date: "March 15, 2026", done: true },
];

export default function ApplicationTracking() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Application Status</h1>
        <p className="text-sm text-muted-foreground">Tracking your application for Domi Residences – Unit 3A</p>
      </div>

      <Card className="p-6">
        <div className="space-y-0">
          {steps.map((s, i) => (
            <div key={s.label} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className={cn("h-10 w-10 rounded-full flex items-center justify-center", s.done ? "bg-success text-success-foreground" : "bg-muted text-muted-foreground")}>
                  <s.icon className="h-5 w-5" />
                </div>
                {i < steps.length - 1 && <div className={cn("w-0.5 h-12", s.done ? "bg-success" : "bg-muted")} />}
              </div>
              <div className="pb-12">
                <p className={cn("font-medium", s.done ? "" : "text-muted-foreground")}>{s.label}</p>
                <p className="text-xs text-muted-foreground">{s.date}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
