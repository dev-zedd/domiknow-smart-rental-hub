import { Card } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { StatusChip } from "@/components/shared/StatusChip"; import { Link } from "react-router-dom";
const tasks = [
  { id: "m1", issue: "Leaking bathroom pipe", property: "Domi Residences", unit: "3A", category: "Plumbing", priority: "High", status: "Assigned", date: "Mar 10, 2026" },
  { id: "m2", issue: "Flickering hallway lights", property: "Lakeside Boarding Hub", unit: "Common Area", category: "Electrical", priority: "Medium", status: "In Progress", date: "Mar 12, 2026" },
];
export default function AssignedTasks() {
  return (<div className="space-y-6"><h1 className="text-2xl font-bold">Assigned Tasks</h1>
    <div className="space-y-4">{tasks.map(t=>(<Card key={t.id} className="p-6">
      <div className="flex items-start justify-between mb-3"><div><h3 className="font-semibold">{t.issue}</h3><p className="text-xs text-muted-foreground">{t.property} • Unit {t.unit} • {t.date}</p></div><div className="flex gap-2"><StatusChip status={t.priority}/><StatusChip status={t.status}/></div></div>
      <p className="text-sm text-muted-foreground mb-3">Category: {t.category}</p>
      <div className="flex gap-2"><Link to={`/personnel/tasks/${t.id}`}><Button size="sm" variant="outline">View Details</Button></Link><Link to={`/personnel/update/${t.id}`}><Button size="sm">Update Progress</Button></Link></div>
    </Card>))}</div></div>);
}
