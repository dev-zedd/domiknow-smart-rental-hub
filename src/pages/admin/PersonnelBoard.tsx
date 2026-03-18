import { Card } from "@/components/ui/card"; import { StatusChip } from "@/components/shared/StatusChip"; import { maintenanceRequests } from "@/data/dummy-data";
const columns = [
  { title: "Unassigned", status: "Submitted", color: "bg-muted" },
  { title: "Assigned", status: "Assigned", color: "bg-info/10" },
  { title: "In Progress", status: "In Progress", color: "bg-warning/10" },
  { title: "Completed", status: "Resolved", color: "bg-success/10" },
];
export default function PersonnelBoard() {
  return (<div className="space-y-6"><h1 className="text-2xl font-bold">Personnel Assignment Board</h1>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">{columns.map((col) => {
      const tasks = maintenanceRequests.filter(m => m.status === col.status);
      return (<div key={col.title} className="space-y-3">
        <div className={`p-2 rounded-lg ${col.color} text-center`}><p className="text-sm font-semibold">{col.title}</p><p className="text-xs text-muted-foreground">{tasks.length} tasks</p></div>
        {tasks.map((t) => (<Card key={t.id} className="p-3"><p className="text-sm font-medium">{t.issue}</p><p className="text-xs text-muted-foreground">{t.property} • {t.unit}</p>{t.assignedTo && <p className="text-xs text-primary mt-1">→ {t.assignedTo}</p>}<div className="mt-2"><StatusChip status={t.priority}/></div></Card>))}
        {tasks.length === 0 && <div className="p-4 border-2 border-dashed rounded-lg text-center text-xs text-muted-foreground">No tasks</div>}
      </div>);
    })}</div></div>);
}
