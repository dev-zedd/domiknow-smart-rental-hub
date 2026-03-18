import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Upload } from "lucide-react";

export default function MaintenanceRequest() {
  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold">Submit Maintenance Request</h1>
      <Card>
        <CardHeader><CardTitle className="text-lg">Describe the Issue</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2"><Label>Category</Label>
            <Select><SelectTrigger><SelectValue placeholder="Select category" /></SelectTrigger><SelectContent><SelectItem value="plumbing">Plumbing</SelectItem><SelectItem value="electrical">Electrical</SelectItem><SelectItem value="general">General Repair</SelectItem><SelectItem value="it">IT / Network</SelectItem><SelectItem value="pest">Pest Control</SelectItem></SelectContent></Select>
          </div>
          <div className="space-y-2"><Label>Priority Level</Label>
            <Select><SelectTrigger><SelectValue placeholder="Select priority" /></SelectTrigger><SelectContent><SelectItem value="low">Low</SelectItem><SelectItem value="medium">Medium</SelectItem><SelectItem value="high">High</SelectItem><SelectItem value="emergency">Emergency</SelectItem></SelectContent></Select>
          </div>
          <div className="space-y-2"><Label>Issue Title</Label><Input placeholder="Brief description..." /></div>
          <div className="space-y-2"><Label>Detailed Description</Label><Textarea placeholder="Explain the issue in detail..." rows={4} /></div>
          <div className="space-y-2"><Label>Upload Photos</Label>
            <div className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-muted/50"><Upload className="h-6 w-6 mx-auto mb-1 text-muted-foreground" /><p className="text-xs text-muted-foreground">Click or drag photos</p></div>
          </div>
          <div className="space-y-2"><Label>Preferred Schedule</Label><Input type="datetime-local" /></div>
          <Button className="w-full" size="lg">Submit Request</Button>
        </CardContent>
      </Card>
    </div>
  );
}
