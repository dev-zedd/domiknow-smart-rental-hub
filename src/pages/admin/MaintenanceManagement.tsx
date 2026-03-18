import { Card } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { StatusChip } from "@/components/shared/StatusChip"; import { maintenanceRequests, personnel } from "@/data/dummy-data"; import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
export default function MaintenanceManagement() {
  return (<div className="space-y-6"><h1 className="text-2xl font-bold">Maintenance Management</h1>
    <Card className="p-6"><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b text-muted-foreground"><th className="text-left py-2 font-medium">Issue</th><th className="text-left py-2 font-medium">Property</th><th className="text-left py-2 font-medium">Tenant</th><th className="text-left py-2 font-medium">Priority</th><th className="text-left py-2 font-medium">Assigned To</th><th className="text-left py-2 font-medium">Status</th><th className="text-left py-2 font-medium">Action</th></tr></thead>
    <tbody>{maintenanceRequests.map((m) => (<tr key={m.id} className="border-b last:border-0">
      <td className="py-3 font-medium">{m.issue}</td><td>{m.property}</td><td>{m.tenant}</td><td><StatusChip status={m.priority}/></td>
      <td>{m.assignedTo || <Select><SelectTrigger className="h-8 w-32 text-xs"><SelectValue placeholder="Assign"/></SelectTrigger><SelectContent>{personnel.map(p=>(<SelectItem key={p.id} value={p.id}>{p.name}</SelectItem>))}</SelectContent></Select>}</td>
      <td><StatusChip status={m.status}/></td><td><Button size="sm" variant="outline" className="text-xs">Manage</Button></td>
    </tr>))}</tbody></table></div></Card></div>);
}
