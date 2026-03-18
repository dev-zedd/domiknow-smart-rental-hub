import { Card } from "@/components/ui/card";
import { notifications } from "@/data/dummy-data";
import { Bell, CreditCard, Wrench, FileText, Gift, Megaphone } from "lucide-react";
import { cn } from "@/lib/utils";

const icons: Record<string, any> = { payment: CreditCard, maintenance: Wrench, application: FileText, billing: CreditCard, reward: Gift, announcement: Megaphone };

export default function TenantNotifications() {
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Notifications</h1>
      <div className="space-y-2">
        {notifications.map((n) => {
          const Icon = icons[n.type] || Bell;
          return (
            <Card key={n.id} className={cn("p-4 flex items-start gap-3", !n.read && "bg-primary/5 border-primary/20")}>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Icon className="h-4 w-4 text-primary" />
              </div>
              <div className="flex-1">
                <p className={cn("text-sm", !n.read && "font-medium")}>{n.message}</p>
                <p className="text-xs text-muted-foreground">{n.time}</p>
              </div>
              {!n.read && <div className="h-2 w-2 rounded-full bg-primary mt-2" />}
            </Card>
          );
        })}
      </div>
    </div>
  );
}
