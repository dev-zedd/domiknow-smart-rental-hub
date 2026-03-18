import { Card } from "@/components/ui/card";
import { StatusChip } from "@/components/shared/StatusChip";
import { maintenanceRequests } from "@/data/dummy-data";
import { cn } from "@/lib/utils";

const statusOrder = ["Submitted", "Under Review", "Assigned", "In Progress", "Resolved", "Closed"];

export default function MaintenanceTracking() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Maintenance Tracking</h1>
      <div className="space-y-4">
        {maintenanceRequests.map((m) => {
          const stepIndex = statusOrder.indexOf(m.status);
          return (
            <Card key={m.id} className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-semibold">{m.issue}</h3>
                  <p className="text-sm text-muted-foreground">{m.property} • {m.unit} • {m.date}</p>
                </div>
                <StatusChip status={m.status} />
              </div>
              <div className="flex items-center gap-1">
                {statusOrder.map((s, i) => (
                  <div key={s} className="flex items-center gap-1 flex-1">
                    <div className={cn("h-2 flex-1 rounded-full", i <= stepIndex ? "bg-primary" : "bg-muted")} />
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-1">
                {statusOrder.map((s, i) => (
                  <span key={s} className={cn("text-[8px]", i <= stepIndex ? "text-primary font-medium" : "text-muted-foreground")}>{s}</span>
                ))}
              </div>
              {m.assignedTo && <p className="text-xs text-muted-foreground mt-3">Assigned to: {m.assignedTo}</p>}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
