import { Card } from "@/components/ui/card";
import { StatusChip } from "@/components/shared/StatusChip";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const units = [
  { id: "3A", type: "Studio", rent: 6500, tenant: "Angela Reyes", status: "Occupied", lease: "Jan 2025 - Jan 2026" },
  { id: "3B", type: "Studio", rent: 6500, tenant: "Mark Villanueva", status: "Occupied", lease: "Mar 2025 - Mar 2026" },
  { id: "4A", type: "Studio", rent: 6500, tenant: null, status: "Available", lease: "" },
  { id: "4B", type: "Studio", rent: 6500, tenant: null, status: "Available", lease: "" },
  { id: "5A", type: "Studio", rent: 7000, tenant: "David Santos", status: "Occupied", lease: "Jun 2025 - Jun 2026" },
  { id: "5B", type: "Studio", rent: 7000, tenant: null, status: "Available", lease: "" },
];

export default function UnitManagement() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-2xl font-bold">Unit Management</h1><p className="text-sm text-muted-foreground">Domi Residences – LSPU View</p></div>
      <div className="grid grid-cols-3 gap-3 max-w-md">
        <div className="p-3 rounded-lg bg-muted/50 text-center"><p className="text-lg font-bold">12</p><p className="text-xs text-muted-foreground">Total</p></div>
        <div className="p-3 rounded-lg bg-success/10 text-center"><p className="text-lg font-bold text-success">10</p><p className="text-xs text-muted-foreground">Occupied</p></div>
        <div className="p-3 rounded-lg bg-primary/10 text-center"><p className="text-lg font-bold text-primary">2</p><p className="text-xs text-muted-foreground">Available</p></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {units.map((u) => (
          <Card key={u.id} className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold">Unit {u.id}</span>
              <StatusChip status={u.status} />
            </div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Type</span><span>{u.type}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Rent</span><span className="font-medium text-primary">₱{u.rent.toLocaleString()}</span></div>
              {u.tenant && <div className="flex justify-between"><span className="text-muted-foreground">Tenant</span><span>{u.tenant}</span></div>}
              {u.lease && <div className="flex justify-between"><span className="text-muted-foreground">Lease</span><span className="text-xs">{u.lease}</span></div>}
            </div>
            <Button variant="outline" size="sm" className="w-full mt-3">{u.tenant ? "View Details" : "Assign Tenant"}</Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
