import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building2, Shield, Wrench, ChevronRight } from "lucide-react";

const roles = [
  { icon: Users, title: "Tenant", desc: "Browse properties, submit applications, manage your lease, pay bills, and earn rewards.", path: "/tenant/dashboard", color: "bg-primary" },
  { icon: Building2, title: "Landlord", desc: "List properties, manage tenants, track payments, coordinate maintenance, and view reports.", path: "/landlord/dashboard", color: "bg-accent" },
  { icon: Shield, title: "Administrator", desc: "Verify users, approve properties, manage platform operations, and oversee all activities.", path: "/admin/dashboard", color: "bg-warning" },
  { icon: Wrench, title: "Maintenance Personnel", desc: "View assigned tasks, update progress, submit proof of work, and manage your schedule.", path: "/personnel/dashboard", color: "bg-destructive" },
];

export default function RoleSelection() {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="max-w-3xl w-full">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Select Your Role</h1>
          <p className="text-muted-foreground">Choose how you'd like to use DomiKnow (Demo Mode)</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {roles.map((r) => (
            <Link to={r.path} key={r.title}>
              <Card className="p-6 hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer border-2 hover:border-primary/30 h-full">
                <div className={`h-12 w-12 rounded-xl ${r.color} flex items-center justify-center mb-4`}>
                  <r.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{r.desc}</p>
                <Button variant="ghost" size="sm" className="text-primary p-0 h-auto">
                  Continue as {r.title} <ChevronRight className="ml-1 h-3 w-3" />
                </Button>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
