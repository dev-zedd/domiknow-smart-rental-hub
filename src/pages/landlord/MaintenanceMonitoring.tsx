import { Card } from "@/components/ui/card";
import { StatusChip } from "@/components/shared/StatusChip";
import { maintenanceRequests } from "@/data/dummy-data";

export default function MaintenanceMonitoring() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Maintenance Monitoring</h1>
      <div className="grid grid-cols-4 gap-3 max-w-md">
        {[
          { label: "Total", value: 4 },
          { label: "Active", value: 2 },
          { label: "Assigned", value: 1 },
          { label: "Resolved", value: 1 },
        ].map((s) => (
          <div key={s.label} className="p-3 rounded-lg bg-muted/50 text-center">
            <p className="text-lg font-bold">{s.value}</p>
            <p className="text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b text-muted-foreground"><th className="text-left py-2 font-medium">Issue</th><th className="text-left py-2 font-medium">Category</th><th className="text-left py-2 font-medium">Property</th><th className="text-left py-2 font-medium">Unit</th><th className="text-left py-2 font-medium">Priority</th><th className="text-left py-2 font-medium">Assigned To</th><th className="text-left py-2 font-medium">Status</th></tr></thead>
            <tbody>
              {maintenanceRequests.map((m) => (
                <tr key={m.id} className="border-b last:border-0">
                  <td className="py-3 font-medium">{m.issue}</td><td>{m.category}</td><td>{m.property}</td><td>{m.unit}</td>
                  <td><StatusChip status={m.priority} /></td><td>{m.assignedTo || "—"}</td><td><StatusChip status={m.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
