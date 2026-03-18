import { Card } from "@/components/ui/card"; import { StatusChip } from "@/components/shared/StatusChip";
const completed = [
  { issue: "Slow internet router issue", property: "GreenNest 2C", date: "Mar 5, 2026", resolution: "Replaced router firmware", time: "2 hours" },
  { issue: "Clogged drain", property: "Domi Residences 2A", date: "Feb 28, 2026", resolution: "Cleared drainage pipe", time: "1.5 hours" },
  { issue: "Light switch replacement", property: "Lakeside Rm 3", date: "Feb 20, 2026", resolution: "Replaced faulty switch", time: "30 mins" },
  { issue: "Water heater repair", property: "Maharlika 5A", date: "Feb 15, 2026", resolution: "Fixed thermostat wiring", time: "3 hours" },
];
export default function CompletedWork() {
  return (<div className="space-y-6"><h1 className="text-2xl font-bold">Completed Work Log</h1>
    <Card className="p-6"><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b text-muted-foreground"><th className="text-left py-2 font-medium">Issue</th><th className="text-left py-2 font-medium">Property</th><th className="text-left py-2 font-medium">Date</th><th className="text-left py-2 font-medium">Resolution</th><th className="text-left py-2 font-medium">Time Spent</th><th className="text-left py-2 font-medium">Status</th></tr></thead>
    <tbody>{completed.map(c=>(<tr key={c.issue} className="border-b last:border-0"><td className="py-3 font-medium">{c.issue}</td><td>{c.property}</td><td className="text-muted-foreground">{c.date}</td><td>{c.resolution}</td><td>{c.time}</td><td><StatusChip status="Completed"/></td></tr>))}</tbody></table></div></Card></div>);
}
