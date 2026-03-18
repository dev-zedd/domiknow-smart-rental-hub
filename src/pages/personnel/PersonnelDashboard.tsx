import { KPICard } from "@/components/shared/KPICard"; import { Card } from "@/components/ui/card"; import { StatusChip } from "@/components/shared/StatusChip"; import { ClipboardList, Clock, CheckCircle2, Calendar } from "lucide-react";
export default function PersonnelDashboard() {
  return (<div className="space-y-6"><div><h1 className="text-2xl font-bold">Welcome, Noel! 🔧</h1><p className="text-sm text-muted-foreground">Your task overview for today</p></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <KPICard icon={ClipboardList} title="Assigned Tasks" value="2" subtitle="1 high priority"/>
      <KPICard icon={Clock} title="In Progress" value="1" subtitle="Flickering lights"/>
      <KPICard icon={CheckCircle2} title="Completed Today" value="1" subtitle="Router fix"/>
      <KPICard icon={Calendar} title="Next Schedule" value="Mar 19" subtitle="Domi Residences 3A"/>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="p-6"><h3 className="font-semibold mb-4">Active Tasks</h3>
        <div className="space-y-3">{[
          { issue: "Flickering hallway lights", property: "Lakeside Boarding Hub", priority: "Medium", status: "In Progress" },
          { issue: "Leaking bathroom pipe", property: "Domi Residences 3A", priority: "High", status: "Assigned" },
        ].map(t=>(<div key={t.issue} className="flex items-center justify-between p-3 rounded-lg border"><div><p className="text-sm font-medium">{t.issue}</p><p className="text-xs text-muted-foreground">{t.property}</p></div><div className="flex gap-2"><StatusChip status={t.priority}/><StatusChip status={t.status}/></div></div>))}</div>
      </Card>
      <Card className="p-6"><h3 className="font-semibold mb-4">Upcoming Schedule</h3>
        <div className="space-y-3">{[
          { date: "Mar 19", task: "Bathroom pipe repair", location: "Domi Residences 3A" },
          { date: "Mar 20", task: "General inspection", location: "GreenNest Residences" },
          { date: "Mar 22", task: "AC maintenance", location: "Maharlika Unit 2B" },
        ].map(s=>(<div key={s.task} className="flex items-center gap-3 p-3 rounded-lg border"><div className="h-10 w-10 rounded bg-primary/10 flex items-center justify-center text-xs font-bold text-primary">{s.date.split(" ")[1]}</div><div><p className="text-sm font-medium">{s.task}</p><p className="text-xs text-muted-foreground">{s.location}</p></div></div>))}</div>
      </Card>
    </div></div>);
}
