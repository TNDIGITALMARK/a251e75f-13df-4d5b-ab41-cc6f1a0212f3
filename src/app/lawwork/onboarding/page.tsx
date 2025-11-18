'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Scale, CheckCircle2, Circle, Clock, FileText, Key, UserCheck } from 'lucide-react';

interface OnboardingTask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  category: 'admin' | 'access' | 'training';
}

export default function OnboardingPage() {
  const [tasks, setTasks] = useState<OnboardingTask[]>([
    {
      id: '1',
      title: 'Send offer letter',
      description: 'Email signed offer letter to candidate',
      completed: true,
      category: 'admin',
    },
    {
      id: '2',
      title: 'Collect tax documents',
      description: 'W-9, I-9, and state tax forms',
      completed: true,
      category: 'admin',
    },
    {
      id: '3',
      title: 'Create email account',
      description: 'Set up @lawfirm.com email address',
      completed: true,
      category: 'access',
    },
    {
      id: '4',
      title: 'Westlaw access',
      description: 'Provision Westlaw account and credentials',
      completed: false,
      category: 'access',
    },
    {
      id: '5',
      title: 'Case management system',
      description: 'Grant access to Clio with appropriate permissions',
      completed: false,
      category: 'access',
    },
    {
      id: '6',
      title: 'Document management',
      description: 'Set up Dropbox folders and sharing permissions',
      completed: false,
      category: 'access',
    },
    {
      id: '7',
      title: 'Firm procedures training',
      description: 'Schedule orientation session covering firm policies',
      completed: false,
      category: 'training',
    },
    {
      id: '8',
      title: 'Software training',
      description: 'Provide training on Westlaw, Clio, and internal systems',
      completed: false,
      category: 'training',
    },
  ]);

  const toggleTask = (id: string) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;
  const progress = Math.round((completedCount / totalCount) * 100);

  const categoryIcons = {
    admin: FileText,
    access: Key,
    training: UserCheck,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/lawwork" className="flex items-center gap-2">
              <Scale className="h-6 w-6" />
              <span className="text-xl font-semibold">LawWork</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/lawwork/firm-setup" className="hover:opacity-80 transition">
                Firm Setup
              </Link>
              <Link href="/lawwork/assessment" className="hover:opacity-80 transition">
                Assessment
              </Link>
              <Link href="/lawwork/roles" className="hover:opacity-80 transition">
                Roles
              </Link>
              <Link href="/lawwork/candidates" className="hover:opacity-80 transition">
                Candidates
              </Link>
              <Link href="/lawwork/onboarding" className="hover:opacity-80 transition">
                Onboarding
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Onboarding: Sarah Martinez</h1>
            <p className="text-muted-foreground">
              Senior Litigation Paralegal • Starts Monday, March 18th
            </p>
          </div>

          {/* Progress Overview */}
          <div className="lawwork-card mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Onboarding Progress</span>
              <span className="text-2xl font-bold text-primary">{progress}%</span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden mb-4">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-success"></div>
                <span>
                  {completedCount} of {totalCount} tasks completed
                </span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>Est. 2 days remaining</span>
              </div>
            </div>
          </div>

          {/* Tasks by Category */}
          <div className="space-y-6">
            {['admin', 'access', 'training'].map((category) => {
              const categoryTasks = tasks.filter((t) => t.category === category);
              const Icon = categoryIcons[category as keyof typeof categoryIcons];
              const categoryLabels = {
                admin: 'Administrative',
                access: 'System Access',
                training: 'Training & Orientation',
              };

              return (
                <div key={category} className="lawwork-card">
                  <div className="flex items-center gap-2 mb-4">
                    <Icon className="h-5 w-5 text-primary" />
                    <h2 className="text-lg font-semibold">
                      {categoryLabels[category as keyof typeof categoryLabels]}
                    </h2>
                  </div>

                  <div className="space-y-3">
                    {categoryTasks.map((task) => (
                      <div
                        key={task.id}
                        className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition ${
                          task.completed
                            ? 'border-success bg-success/5'
                            : 'border-border hover:bg-secondary/30'
                        }`}
                        onClick={() => toggleTask(task.id)}
                      >
                        {task.completed ? (
                          <CheckCircle2 className="h-5 w-5 text-success flex-shrink-0 mt-0.5" />
                        ) : (
                          <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                        )}
                        <div className="flex-1">
                          <h3
                            className={`text-sm font-medium ${
                              task.completed ? 'line-through text-muted-foreground' : ''
                            }`}
                          >
                            {task.title}
                          </h3>
                          <p className="text-xs text-muted-foreground mt-1">{task.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Actions */}
          <div className="mt-8 lawwork-card">
            <h3 className="text-base font-semibold mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <button className="lawwork-button-primary">
                Send Welcome Email
              </button>
              <button className="px-4 py-3 border border-border rounded-lg hover:bg-secondary transition text-sm font-medium">
                Schedule Check-In
              </button>
              <button className="px-4 py-3 border border-border rounded-lg hover:bg-secondary transition text-sm font-medium">
                Export Checklist
              </button>
            </div>
          </div>

          {/* Activate Button */}
          {progress === 100 && (
            <div className="mt-6 lawwork-card bg-success/10 border-success">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-success">Ready to Activate</h3>
                  <p className="text-sm text-muted-foreground">
                    All onboarding tasks completed. Activate the new hire to begin work.
                  </p>
                </div>
                <button className="lawwork-button-primary bg-success hover:bg-success/90">
                  Activate New Hire
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
