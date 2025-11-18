'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Scale, FileText, Clock, DollarSign, Globe } from 'lucide-react';
import { ROLE_TEMPLATES } from '@/lib/lawwork/mock-data';
import { RoleTemplate } from '@/lib/lawwork/types';

export default function RolesPage() {
  const router = useRouter();
  const [selectedTemplate, setSelectedTemplate] = useState<RoleTemplate | null>(null);
  const [customization, setCustomization] = useState({
    skills: [] as string[],
    tools: [] as string[],
    schedule: 'full-time',
    timezone: 'EST',
    budgetMin: 0,
    budgetMax: 0,
  });

  const handleSelectTemplate = (template: RoleTemplate) => {
    setSelectedTemplate(template);
    setCustomization({
      skills: [...template.requiredSkills],
      tools: [...template.preferredTools],
      schedule: 'full-time',
      timezone: 'EST',
      budgetMin: template.hourlyRateRange[0],
      budgetMax: template.hourlyRateRange[1],
    });
  };

  const handleCreateRole = () => {
    // In production, this would save to database
    router.push('/lawwork/candidates');
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
            </nav>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Role Builder</h1>
          <p className="text-muted-foreground">
            Select a template based on your assessment results, then customize to fit your needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Template Selection */}
          <div className="lg:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Recommended Role Templates</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {ROLE_TEMPLATES.map((template) => (
                <div
                  key={template.id}
                  className={`lawwork-card cursor-pointer transition ${
                    selectedTemplate?.id === template.id
                      ? 'ring-2 ring-primary'
                      : 'hover:shadow-lg'
                  }`}
                  onClick={() => handleSelectTemplate(template)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-base font-semibold">{template.name}</h3>
                    <span className="text-xs px-2 py-1 bg-secondary rounded-full capitalize">
                      {template.experienceLevel}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {template.description}
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <FileText className="h-4 w-4" />
                      <span>{template.requiredSkills.length} Skills Required</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <DollarSign className="h-4 w-4" />
                      <span>
                        ${template.hourlyRateRange[0]}-${template.hourlyRateRange[1]}/hr
                      </span>
                    </div>
                  </div>

                  {selectedTemplate?.id === template.id && (
                    <div className="mt-3 pt-3 border-t border-border">
                      <span className="text-xs font-medium text-primary">Selected ✓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Customization Panel */}
          <div className="lg:col-span-1">
            <div className="lawwork-card sticky top-8">
              <h2 className="text-lg font-semibold mb-4">Customize Role</h2>

              {!selectedTemplate ? (
                <div className="text-center py-12 text-muted-foreground">
                  <FileText className="h-12 w-12 mx-auto mb-3 opacity-30" />
                  <p className="text-sm">Select a template to begin customization</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Skills */}
                  <div>
                    <label className="text-sm font-medium block mb-2">Required Skills</label>
                    <div className="flex flex-wrap gap-2">
                      {customization.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-3 py-1 bg-primary text-primary-foreground rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Tools */}
                  <div>
                    <label className="text-sm font-medium block mb-2">Preferred Tools</label>
                    <div className="flex flex-wrap gap-2">
                      {customization.tools.slice(0, 4).map((tool) => (
                        <span
                          key={tool}
                          className="text-xs px-3 py-1 bg-secondary text-foreground rounded-full"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Schedule */}
                  <div>
                    <label className="text-sm font-medium block mb-2">
                      <Clock className="h-4 w-4 inline mr-1" />
                      Schedule
                    </label>
                    <select
                      value={customization.schedule}
                      onChange={(e) =>
                        setCustomization({ ...customization, schedule: e.target.value })
                      }
                      className="w-full"
                    >
                      <option value="full-time">Full-Time</option>
                      <option value="part-time">Part-Time</option>
                      <option value="contract">Contract</option>
                    </select>
                  </div>

                  {/* Timezone */}
                  <div>
                    <label className="text-sm font-medium block mb-2">
                      <Globe className="h-4 w-4 inline mr-1" />
                      Timezone
                    </label>
                    <select
                      value={customization.timezone}
                      onChange={(e) =>
                        setCustomization({ ...customization, timezone: e.target.value })
                      }
                      className="w-full"
                    >
                      <option value="EST">EST (Eastern)</option>
                      <option value="CST">CST (Central)</option>
                      <option value="MST">MST (Mountain)</option>
                      <option value="PST">PST (Pacific)</option>
                    </select>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="text-sm font-medium block mb-2">
                      <DollarSign className="h-4 w-4 inline mr-1" />
                      Hourly Budget Range
                    </label>
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        value={customization.budgetMin}
                        onChange={(e) =>
                          setCustomization({
                            ...customization,
                            budgetMin: Number(e.target.value),
                          })
                        }
                        className="w-full"
                        placeholder="Min"
                      />
                      <span className="text-muted-foreground">-</span>
                      <input
                        type="number"
                        value={customization.budgetMax}
                        onChange={(e) =>
                          setCustomization({
                            ...customization,
                            budgetMax: Number(e.target.value),
                          })
                        }
                        className="w-full"
                        placeholder="Max"
                      />
                    </div>
                  </div>

                  {/* SOP Upload */}
                  <div>
                    <label className="text-sm font-medium block mb-2">
                      Standard Operating Procedures (Optional)
                    </label>
                    <div className="border-2 border-dashed border-border rounded-lg p-4 text-center cursor-pointer hover:bg-secondary/30 transition">
                      <FileText className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground">Click to upload SOPs</p>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 space-y-2">
                    <button
                      onClick={handleCreateRole}
                      className="lawwork-button-primary w-full"
                    >
                      Generate Role Card
                    </button>
                    <button className="w-full px-4 py-2 border border-border rounded-lg hover:bg-secondary transition text-sm">
                      Save as Draft
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
