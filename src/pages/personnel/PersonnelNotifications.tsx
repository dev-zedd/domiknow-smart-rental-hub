import { Card } from "@/components/ui/card"; import { Wrench, CheckCircle2, Calendar, AlertTriangle } from "lucide-react"; import { cn } from "@/lib/utils";
const notifs = [
  { message: "New task assigned: Leaking bathroom pipe at Domi 3A", time: "2 hours ago", icon: Wrench, read: false },
  { message: "Task completed: Slow internet router issue marked as resolved", time: "1 day ago", icon: CheckCircle2, read: true },
  { message: "Schedule reminder: General inspection at GreenNest tomorrow", time: "1 day ago", icon: Calendar, read: false },
  { message: "High priority: Broken door lock at Maharlika 7B needs attention", time: "2 days ago", icon: AlertTriangle, read: false },
  { message: "Task update approved by admin", time: "3 days ago", icon: CheckCircle2, read: true },
];
export default function PersonnelNotifications() {
  return (<div className="max-w-2xl mx-auto space-y-6"><h1 className="text-2xl font-bold">Notifications</h1>
    <div className="space-y-2">{notifs.map((n,i)=>(<Card key={i} className={cn("p-4 flex items-start gap-3",!n.read && "bg-primary/5 border-primary/20")}><div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0"><n.icon className="h-4 w-4 text-primary"/></div><div className="flex-1"><p className={cn("text-sm",!n.read && "font-medium")}>{n.message}</p><p className="text-xs text-muted-foreground">{n.time}</p></div>{!n.read && <div className="h-2 w-2 rounded-full bg-primary mt-2"/>}</Card>))}</div></div>);
}
