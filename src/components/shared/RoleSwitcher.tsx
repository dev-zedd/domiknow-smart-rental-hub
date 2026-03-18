import { useNavigate, useLocation } from "react-router-dom";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Building2, Shield, Wrench, Globe } from "lucide-react";

const roles = [
  { value: "public", label: "Public / Guest", icon: Globe, path: "/" },
  { value: "tenant", label: "Tenant", icon: Users, path: "/tenant/dashboard" },
  { value: "landlord", label: "Landlord", icon: Building2, path: "/landlord/dashboard" },
  { value: "admin", label: "Administrator", icon: Shield, path: "/admin/dashboard" },
  { value: "personnel", label: "Personnel", icon: Wrench, path: "/personnel/dashboard" },
];

export function RoleSwitcher() {
  const navigate = useNavigate();
  const location = useLocation();
  const currentRole = roles.find((r) => r.value !== "public" && location.pathname.startsWith(`/${r.value}`))?.value || "public";

  return (
    <div className="space-y-1">
      <label className="text-[10px] uppercase tracking-wider text-sidebar-muted font-semibold">Demo Role</label>
      <Select value={currentRole} onValueChange={(v) => navigate(roles.find((r) => r.value === v)?.path || "/")}>
        <SelectTrigger className="h-8 text-xs bg-sidebar-accent border-sidebar-border text-sidebar-foreground">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {roles.map((r) => (
            <SelectItem key={r.value} value={r.value}>
              <div className="flex items-center gap-2">
                <r.icon className="h-3.5 w-3.5" />
                {r.label}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
