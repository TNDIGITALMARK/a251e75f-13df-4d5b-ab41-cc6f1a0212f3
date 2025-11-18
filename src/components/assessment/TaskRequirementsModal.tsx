'use client';

import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Briefcase, Plus, X } from 'lucide-react';

interface TaskRequirementsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onComplete: (tasks: string[]) => void;
}

export function TaskRequirementsModal({
  open,
  onOpenChange,
  onComplete,
}: TaskRequirementsModalProps) {
  const [tasks, setTasks] = useState<string[]>(['']);
  const [currentTaskInput, setCurrentTaskInput] = useState('');

  const handleAddTask = () => {
    if (currentTaskInput.trim()) {
      setTasks([...tasks, currentTaskInput.trim()]);
      setCurrentTaskInput('');
    }
  };

  const handleRemoveTask = (index: number) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleAddTask();
    }
  };

  const handleComplete = () => {
    const allTasks = [...tasks.filter((t) => t.trim()), currentTaskInput.trim()].filter(
      Boolean
    );
    onComplete(allTasks);
    onOpenChange(false);
  };

  const handleSkip = () => {
    onComplete([]);
    onOpenChange(false);
  };

  const hasValidTasks = tasks.some((t) => t.trim()) || currentTaskInput.trim();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <div>
              <DialogTitle className="text-xl">Task Requirements</DialogTitle>
              <DialogDescription className="mt-1">
                What specific tasks do you need help with for this role?
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-4 py-4">
          {/* Display added tasks */}
          {tasks.length > 0 && tasks.some((t) => t.trim()) && (
            <div className="space-y-2">
              <Label className="text-sm font-medium">Added Tasks:</Label>
              <div className="space-y-2 max-h-[200px] overflow-y-auto">
                {tasks.map(
                  (task, index) =>
                    task.trim() && (
                      <div
                        key={index}
                        className="flex items-start gap-2 p-3 bg-secondary rounded-lg group"
                      >
                        <div className="flex-1 text-sm">{task}</div>
                        <button
                          onClick={() => handleRemoveTask(index)}
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                          aria-label="Remove task"
                        >
                          <X className="w-4 h-4 text-muted-foreground hover:text-destructive" />
                        </button>
                      </div>
                    )
                )}
              </div>
            </div>
          )}

          {/* Task input */}
          <div className="space-y-2">
            <Label htmlFor="task-input">
              {tasks.some((t) => t.trim()) ? 'Add Another Task' : 'Enter Task'}
            </Label>
            <Textarea
              id="task-input"
              placeholder="e.g., Review and respond to client emails daily, Draft contracts and legal documents, Manage court filing deadlines..."
              value={currentTaskInput}
              onChange={(e) => setCurrentTaskInput(e.target.value)}
              onKeyDown={handleKeyDown}
              rows={3}
              className="resize-none"
            />
            <p className="text-xs text-muted-foreground">
              Press Enter to add, or Shift+Enter for a new line
            </p>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleAddTask}
            disabled={!currentTaskInput.trim()}
            className="w-full"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Task
          </Button>
        </div>

        <DialogFooter className="flex-col sm:flex-row gap-2">
          <Button variant="ghost" onClick={handleSkip} className="w-full sm:w-auto">
            Skip for Now
          </Button>
          <Button
            onClick={handleComplete}
            disabled={!hasValidTasks}
            className="w-full sm:w-auto"
          >
            Continue to Next Step
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
