// Event Timeline Component
import { CheckCircle2, Clock, Circle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { EventTimelineItem } from "@/types/event";

interface EventTimelineProps {
  timeline: EventTimelineItem[];
}

export const EventTimeline = ({ timeline }: EventTimelineProps) => {
  const getStatusIcon = (status: EventTimelineItem["status"]) => {
    switch (status) {
      case "completed":
        return <CheckCircle2 className="w-5 h-5 text-emerald-500" />;
      case "in-progress":
        return <Clock className="w-5 h-5 text-accent animate-spin" />;
      default:
        return <Circle className="w-5 h-5 text-muted-foreground" />;
    }
  };

  const getStatusBadge = (status: EventTimelineItem["status"]) => {
    const variants = {
      pending: { variant: "secondary" as const, label: "Pending" },
      "in-progress": { variant: "default" as const, label: "In Progress" },
      completed: { variant: "default" as const, label: "Completed" },
    };
    const config = variants[status];
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Event Timeline</CardTitle>
        <CardDescription>Track your event progress in real-time</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="relative">
          {timeline.map((item, index) => (
            <div key={item.id} className="relative pb-8 last:pb-0">
              {index < timeline.length - 1 && (
                <div className="absolute left-5 top-10 w-0.5 h-full bg-border" />
              )}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-card border-2 border-border flex items-center justify-center">
                  {getStatusIcon(item.status)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-1">
                    <h4 className="font-semibold text-foreground">{item.title}</h4>
                    {getStatusBadge(item.status)}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span>{new Date(item.scheduledTime).toLocaleString()}</span>
                    {item.assignedTo && (
                      <>
                        <span>•</span>
                        <span>Assigned to: {item.assignedTo}</span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
