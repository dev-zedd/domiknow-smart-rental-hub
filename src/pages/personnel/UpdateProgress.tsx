import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; import { Button } from "@/components/ui/button"; import { Label } from "@/components/ui/label"; import { Textarea } from "@/components/ui/textarea"; import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"; import { Upload } from "lucide-react";
export default function UpdateProgress() {
  return (<div className="max-w-xl mx-auto space-y-6"><h1 className="text-2xl font-bold">Update Task Progress</h1>
    <Card><CardHeader><CardTitle className="text-lg">Leaking bathroom pipe</CardTitle><p className="text-sm text-muted-foreground">Domi Residences • Unit 3A</p></CardHeader>
    <CardContent className="space-y-4">
      <div className="space-y-2"><Label>Update Status</Label><Select defaultValue="in-progress"><SelectTrigger><SelectValue/></SelectTrigger><SelectContent><SelectItem value="in-progress">In Progress</SelectItem><SelectItem value="resolved">Resolved</SelectItem><SelectItem value="need-parts">Need Parts/Materials</SelectItem><SelectItem value="reschedule">Reschedule Required</SelectItem></SelectContent></Select></div>
      <div className="space-y-2"><Label>Progress Notes</Label><Textarea placeholder="Describe work done or current status..." rows={4}/></div>
      <div className="space-y-2"><Label>Upload Proof of Work</Label><div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-muted/50"><Upload className="h-6 w-6 mx-auto mb-1 text-muted-foreground"/><p className="text-xs text-muted-foreground">Upload before/after photos</p></div></div>
      <div className="space-y-2"><Label>Estimated Completion</Label><input type="date" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"/></div>
      <Button className="w-full" size="lg">Submit Update</Button>
    </CardContent></Card></div>);
}
