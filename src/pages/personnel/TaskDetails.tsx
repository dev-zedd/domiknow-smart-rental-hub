import { Card } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { StatusChip } from "@/components/shared/StatusChip"; import { Link } from "react-router-dom"; import { ChevronLeft } from "lucide-react";
export default function TaskDetails() {
  return (<div className="max-w-2xl mx-auto space-y-6">
    <Link to="/personnel/tasks" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"><ChevronLeft className="h-4 w-4"/>Back to Tasks</Link>
    <div className="flex items-start justify-between"><h1 className="text-2xl font-bold">Leaking bathroom pipe</h1><StatusChip status="Assigned"/></div>
    <Card className="p-6 space-y-4">
      <div className="grid grid-cols-2 gap-4 text-sm">
        <div><p className="text-muted-foreground">Property</p><p className="font-medium">Domi Residences – LSPU View</p></div>
        <div><p className="text-muted-foreground">Unit</p><p className="font-medium">3A</p></div>
        <div><p className="text-muted-foreground">Tenant</p><p className="font-medium">Angela Reyes</p></div>
        <div><p className="text-muted-foreground">Category</p><p className="font-medium">Plumbing</p></div>
        <div><p className="text-muted-foreground">Priority</p><StatusChip status="High"/></div>
        <div><p className="text-muted-foreground">Reported</p><p className="font-medium">March 10, 2026</p></div>
      </div>
      <div><p className="text-muted-foreground text-sm">Description</p><p className="text-sm mt-1">Bathroom pipe is leaking near the sink area. Water drips continuously and has caused minor water damage to the cabinet below. Tenant reports the issue started 2 days ago.</p></div>
      <div><p className="text-muted-foreground text-sm mb-2">Attached Photos</p><div className="grid grid-cols-3 gap-2">{[1,2].map(n=>(<div key={n} className="h-24 bg-muted rounded-lg flex items-center justify-center text-muted-foreground text-xs">Photo {n}</div>))}</div></div>
    </Card>
    <div className="flex gap-2"><Link to="/personnel/update/m1"><Button>Update Progress</Button></Link><Button variant="outline">Contact Tenant</Button></div>
  </div>);
}
