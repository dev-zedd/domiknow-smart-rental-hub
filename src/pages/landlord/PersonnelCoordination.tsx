import { Card } from "@/components/ui/card";
import { StatusChip } from "@/components/shared/StatusChip";
import { personnel } from "@/data/dummy-data";

export default function PersonnelCoordination() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Personnel Coordination</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {personnel.map((p) => (
          <Card key={p.id} className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">{p.name.split(" ").map(n => n[0]).join("")}</div>
              <div><p className="font-semibold text-sm">{p.name}</p><p className="text-xs text-muted-foreground">{p.specialty}</p></div>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Status</span><StatusChip status={p.status} /></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Active Tasks</span><span className="font-medium">{p.activeTasks}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Completed</span><span className="font-medium">{p.tasksCompleted}</span></div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
