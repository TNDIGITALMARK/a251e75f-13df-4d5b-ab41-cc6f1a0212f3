'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { TaskRequirementsModal } from './TaskRequirementsModal';

export function TestTaskModal() {
  const [open, setOpen] = useState(false);
  const [tasks, setTasks] = useState<string[]>([]);

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-2xl font-bold">Task Requirements Modal Test</h1>
      <Button onClick={() => setOpen(true)}>Open Task Modal</Button>

      {tasks.length > 0 && (
        <div className="mt-4 p-4 bg-secondary rounded-lg">
          <h2 className="font-semibold mb-2">Submitted Tasks:</h2>
          <ul className="list-disc pl-5 space-y-1">
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      )}

      <TaskRequirementsModal
        open={open}
        onOpenChange={setOpen}
        onComplete={(completedTasks) => {
          setTasks(completedTasks);
          console.log('Tasks completed:', completedTasks);
        }}
      />
    </div>
  );
}
