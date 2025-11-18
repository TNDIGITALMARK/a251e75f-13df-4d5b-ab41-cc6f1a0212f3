'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Scale, Building2, Users, Briefcase, Tool } from 'lucide-react';
import { PRACTICE_AREAS, LEGAL_TOOLS } from '@/lib/lawwork/mock-data';

export default function FirmSetupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firmName: '',
    size: 'small',
    practiceAreas: [] as string[],
    tools: [] as string[],
    partners: [{ name: '', email: '', role: 'Partner' }],
  });

  const togglePracticeArea = (area: string) => {
    if (formData.practiceAreas.includes(area)) {
      setFormData({
        ...formData,
        practiceAreas: formData.practiceAreas.filter((a) => a !== area),
      });
    } else {
      setFormData({ ...formData, practiceAreas: [...formData.practiceAreas, area] });
    }
  };

  const toggleTool = (tool: string) => {
    if (formData.tools.includes(tool)) {
      setFormData({ ...formData, tools: formData.tools.filter((t) => t !== tool) });
    } else {
      setFormData({ ...formData, tools: [...formData.tools, tool] });
    }
  };

  const addPartner = () => {
    setFormData({
      ...formData,
      partners: [...formData.partners, { name: '', email: '', role: 'Partner' }],
    });
  };

  const handleSave = () => {
    // In production, save to database
    router.push('/lawwork/assessment');
  };

  const completionPercentage = Math.round(
    ((formData.firmName ? 25 : 0) +
      (formData.practiceAreas.length > 0 ? 25 : 0) +
      (formData.tools.length > 0 ? 25 : 0) +
      (formData.partners[0].name ? 25 : 0))
  );

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
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Firm Profile Setup</h1>
            <p className="text-muted-foreground">
              Complete your firm profile to get personalized role recommendations
            </p>
          </div>

          {/* Progress */}
          <div className="lawwork-card mb-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">Profile Completion</span>
              <span className="text-2xl font-bold text-primary">{completionPercentage}%</span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-500"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>

          {/* Firm Information */}
          <div className="lawwork-card mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Building2 className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Firm Information</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium block mb-2">Firm Name</label>
                <input
                  type="text"
                  value={formData.firmName}
                  onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                  placeholder="Enter your firm name"
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium block mb-2">Firm Size</label>
                <select
                  value={formData.size}
                  onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                  className="w-full"
                >
                  <option value="solo">Solo Practitioner</option>
                  <option value="small">Small (2-10 attorneys)</option>
                  <option value="medium">Medium (11-50 attorneys)</option>
                  <option value="large">Large (50+ attorneys)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Practice Areas */}
          <div className="lawwork-card mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Practice Areas</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {PRACTICE_AREAS.map((area) => (
                <label
                  key={area}
                  className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition ${
                    formData.practiceAreas.includes(area)
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:bg-secondary/30'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.practiceAreas.includes(area)}
                    onChange={() => togglePracticeArea(area)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">{area}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Tools Used */}
          <div className="lawwork-card mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Tool className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Tools & Software</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {LEGAL_TOOLS.slice(0, 12).map((tool) => (
                <label
                  key={tool}
                  className={`flex items-center gap-2 p-3 border rounded-lg cursor-pointer transition ${
                    formData.tools.includes(tool)
                      ? 'border-primary bg-primary/5'
                      : 'border-border hover:bg-secondary/30'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.tools.includes(tool)}
                    onChange={() => toggleTool(tool)}
                    className="w-4 h-4"
                  />
                  <span className="text-sm">{tool}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Partners & Attorneys */}
          <div className="lawwork-card mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Users className="h-5 w-5 text-primary" />
              <h2 className="text-lg font-semibold">Partners & Attorneys</h2>
            </div>

            <div className="space-y-3">
              {formData.partners.map((partner, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input
                    type="text"
                    value={partner.name}
                    onChange={(e) => {
                      const newPartners = [...formData.partners];
                      newPartners[idx].name = e.target.value;
                      setFormData({ ...formData, partners: newPartners });
                    }}
                    placeholder="Name"
                    className="w-full"
                  />
                  <input
                    type="email"
                    value={partner.email}
                    onChange={(e) => {
                      const newPartners = [...formData.partners];
                      newPartners[idx].email = e.target.value;
                      setFormData({ ...formData, partners: newPartners });
                    }}
                    placeholder="Email"
                    className="w-full"
                  />
                  <input
                    type="text"
                    value={partner.role}
                    onChange={(e) => {
                      const newPartners = [...formData.partners];
                      newPartners[idx].role = e.target.value;
                      setFormData({ ...formData, partners: newPartners });
                    }}
                    placeholder="Role"
                    className="w-full"
                  />
                </div>
              ))}
              <button
                onClick={addPartner}
                className="text-sm text-primary hover:underline font-medium"
              >
                + Add Another Partner/Attorney
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleSave}
              className="lawwork-button-primary flex-1"
            >
              Save & Continue to Assessment
            </button>
            <button className="px-6 py-3 border border-border rounded-lg hover:bg-secondary transition text-sm font-medium">
              Save as Draft
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
