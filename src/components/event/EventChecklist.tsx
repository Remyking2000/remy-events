// Event Checklist Component
import { CheckCircle2, Circle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import type { EventChecklist } from "@/types/event";

interface EventChecklistProps {
  checklist: EventChecklist[];
  onToggle?: (id: string) => void;
  readOnly?: boolean;
}

export const EventChecklist = ({ checklist, onToggle, readOnly = false }: EventChecklistProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Event Checklist</CardTitle>
        <CardDescription>Stay organized with this pre-event checklist</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {checklist.map((item) => (
            <div
              key={item.id}
              className={`flex items-start gap-3 p-3 rounded-lg border transition-colors ${
                item.completed ? "bg-emerald-500/5 border-emerald-500/20" : "bg-card border-border"
              }`}
            >
              {readOnly ? (
                item.completed ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5" />
                ) : (
                  <Circle className="w-5 h-5 text-muted-foreground mt-0.5" />
                )
              ) : (
                <Checkbox
                  checked={item.completed}
                  onCheckedChange={() => onToggle?.(item.id)}
                />
              )}
              <div className="flex-1">
                <h4 className={`font-medium ${item.completed ? "line-through text-muted-foreground" : "text-foreground"}`}>
                  {item.title}
                </h4>
                {item.dueDate && (
                  <p className="text-xs text-muted-foreground mt-1">
                    Due: {new Date(item.dueDate).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
