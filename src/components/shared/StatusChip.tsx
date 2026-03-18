import { cn } from "@/lib/utils";

const statusStyles: Record<string, string> = {
  "Available": "bg-success/10 text-success border-success/20",
  "Active": "bg-success/10 text-success border-success/20",
  "Verified": "bg-success/10 text-success border-success/20",
  "Resolved": "bg-success/10 text-success border-success/20",
  "Completed": "bg-success/10 text-success border-success/20",
  "Closed": "bg-success/10 text-success border-success/20",
  "Published": "bg-success/10 text-success border-success/20",
  "Approved": "bg-success/10 text-success border-success/20",
  "Paid": "bg-success/10 text-success border-success/20",
  "Pending": "bg-warning/10 text-warning border-warning/20",
  "Pending Verification": "bg-warning/10 text-warning border-warning/20",
  "Under Review": "bg-warning/10 text-warning border-warning/20",
  "In Progress": "bg-info/10 text-info border-info/20",
  "Assigned": "bg-info/10 text-info border-info/20",
  "On Task": "bg-info/10 text-info border-info/20",
  "Submitted": "bg-primary/10 text-primary border-primary/20",
  "2 Units Left": "bg-warning/10 text-warning border-warning/20",
  "Limited Slots": "bg-destructive/10 text-destructive border-destructive/20",
  "Overdue": "bg-destructive/10 text-destructive border-destructive/20",
  "Rejected": "bg-destructive/10 text-destructive border-destructive/20",
  "Denied": "bg-destructive/10 text-destructive border-destructive/20",
  "Open": "bg-warning/10 text-warning border-warning/20",
  "Draft": "bg-muted text-muted-foreground border-border",
  "Suspended": "bg-destructive/10 text-destructive border-destructive/20",
};

interface StatusChipProps {
  status: string;
  className?: string;
}

export function StatusChip({ status, className }: StatusChipProps) {
  const style = statusStyles[status] || "bg-muted text-muted-foreground border-border";
  return (
    <span className={cn("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold", style, className)}>
      {status}
    </span>
  );
}
