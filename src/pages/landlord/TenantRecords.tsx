import { Card } from "@/components/ui/card";
import { StatusChip } from "@/components/shared/StatusChip";
import { tenants } from "@/data/dummy-data";

export default function TenantRecords() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Tenant Records</h1>
      <Card className="p-6">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead><tr className="border-b text-muted-foreground"><th className="text-left py-2 font-medium">Name</th><th className="text-left py-2 font-medium">Email</th><th className="text-left py-2 font-medium">Unit</th><th className="text-left py-2 font-medium">Lease Start</th><th className="text-left py-2 font-medium">Lease End</th><th className="text-left py-2 font-medium">Points</th><th className="text-left py-2 font-medium">Status</th></tr></thead>
            <tbody>
              {tenants.map((t) => (
                <tr key={t.id} className="border-b last:border-0">
                  <td className="py-3 font-medium">{t.name}</td>
                  <td className="text-muted-foreground">{t.email}</td>
                  <td>{t.unit}</td>
                  <td>{t.leaseStart || "—"}</td>
                  <td>{t.leaseEnd || "—"}</td>
                  <td>{t.rewardPoints}</td>
                  <td><StatusChip status={t.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
