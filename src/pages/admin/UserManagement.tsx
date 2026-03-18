import { Card } from "@/components/ui/card"; import { StatusChip } from "@/components/shared/StatusChip"; import { Input } from "@/components/ui/input"; import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; import { Search } from "lucide-react";
const users = [
  { name: "Angela Reyes", email: "angela@email.com", role: "Tenant", status: "Active", joined: "Jan 15, 2025" },
  { name: "Mark Villanueva", email: "mark@email.com", role: "Tenant", status: "Active", joined: "Mar 1, 2025" },
  { name: "Juan Dela Cruz", email: "juan@domiknow.ph", role: "Landlord", status: "Verified", joined: "Aug 15, 2024" },
  { name: "Maria Santos", email: "maria@domiknow.ph", role: "Landlord", status: "Verified", joined: "Nov 2, 2024" },
  { name: "Cedric Ramos", email: "cedric@domiknow.ph", role: "Landlord", status: "Pending", joined: "Jan 20, 2025" },
  { name: "Noel Aquino", email: "noel@domiknow.ph", role: "Personnel", status: "Active", joined: "Sep 5, 2024" },
  { name: "Carla Mendoza", email: "carla@email.com", role: "Tenant", status: "Pending", joined: "Mar 15, 2026" },
];
export default function UserManagement() {
  return (<div className="space-y-6"><h1 className="text-2xl font-bold">User Management</h1>
    <div className="flex gap-3"><div className="relative flex-1"><Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/><Input placeholder="Search users..." className="pl-9"/></div>
    <Select defaultValue="all"><SelectTrigger className="w-36"><SelectValue/></SelectTrigger><SelectContent><SelectItem value="all">All Roles</SelectItem><SelectItem value="tenant">Tenant</SelectItem><SelectItem value="landlord">Landlord</SelectItem><SelectItem value="personnel">Personnel</SelectItem></SelectContent></Select></div>
    <Card className="p-6"><div className="overflow-x-auto"><table className="w-full text-sm"><thead><tr className="border-b text-muted-foreground"><th className="text-left py-2 font-medium">Name</th><th className="text-left py-2 font-medium">Email</th><th className="text-left py-2 font-medium">Role</th><th className="text-left py-2 font-medium">Joined</th><th className="text-left py-2 font-medium">Status</th></tr></thead>
    <tbody>{users.map((u) => (<tr key={u.email} className="border-b last:border-0"><td className="py-3 font-medium">{u.name}</td><td className="text-muted-foreground">{u.email}</td><td>{u.role}</td><td className="text-muted-foreground">{u.joined}</td><td><StatusChip status={u.status}/></td></tr>))}</tbody></table></div></Card></div>);
}
