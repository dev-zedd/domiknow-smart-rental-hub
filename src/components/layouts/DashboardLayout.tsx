import { Link, Outlet, useLocation } from "react-router-dom";
import { Building2, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { RoleSwitcher } from "@/components/shared/RoleSwitcher";
import { useState } from "react";
import { LucideIcon } from "lucide-react";

export interface MenuItem {
  label: string;
  path: string;
  icon: LucideIcon;
}

interface DashboardLayoutProps {
  role: string;
  roleLabel: string;
  menuItems: MenuItem[];
  userName: string;
  userEmail: string;
}

export function DashboardLayout({ role, roleLabel, menuItems, userName, userEmail }: DashboardLayoutProps) {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen flex bg-background">
      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 flex flex-col bg-sidebar text-sidebar-foreground transition-all duration-300 border-r border-sidebar-border",
        collapsed ? "w-16" : "w-64"
      )}>
        {/* Logo */}
        <div className="h-16 flex items-center gap-2 px-4 border-b border-sidebar-border shrink-0">
          <div className="h-8 w-8 rounded-lg bg-sidebar-primary flex items-center justify-center shrink-0">
            <Building2 className="h-5 w-5 text-sidebar-primary-foreground" />
          </div>
          {!collapsed && <span className="font-bold text-base">DomiKnow</span>}
        </div>

        {/* Role label */}
        {!collapsed && (
          <div className="px-4 py-3 border-b border-sidebar-border">
            <span className="text-[10px] uppercase tracking-wider text-sidebar-muted font-semibold">{roleLabel}</span>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto py-2 px-2 space-y-0.5 scrollbar-thin">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors",
                  isActive
                    ? "bg-sidebar-primary text-sidebar-primary-foreground font-medium"
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
                title={collapsed ? item.label : undefined}
              >
                <item.icon className="h-4 w-4 shrink-0" />
                {!collapsed && <span className="truncate">{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Role Switcher + Collapse */}
        <div className="p-3 border-t border-sidebar-border space-y-3">
          {!collapsed && <RoleSwitcher />}
          {!collapsed && (
            <div className="flex items-center gap-2 px-1">
              <div className="h-7 w-7 rounded-full bg-sidebar-primary/20 flex items-center justify-center text-xs font-semibold text-sidebar-primary">
                {userName.split(" ").map(n => n[0]).join("")}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium truncate">{userName}</p>
                <p className="text-[10px] text-sidebar-muted truncate">{userEmail}</p>
              </div>
            </div>
          )}
        </div>

        {/* Collapse toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-20 h-6 w-6 bg-card border rounded-full flex items-center justify-center shadow-sm hover:bg-muted transition-colors"
        >
          {collapsed ? <ChevronRight className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
        </button>
      </aside>

      {/* Main Content */}
      <div className={cn("flex-1 transition-all duration-300", collapsed ? "ml-16" : "ml-64")}>
        <main className="p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
