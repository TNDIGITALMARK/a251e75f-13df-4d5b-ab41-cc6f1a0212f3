'use client';

import Link from 'next/link';
import { Scale, FileText, Users, CheckCircle } from 'lucide-react';

export default function LawWorkHome() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Scale className="h-6 w-6" />
              <span className="text-xl font-semibold">LawWork</span>
            </div>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/lawwork/firm-setup" className="hover:opacity-80 transition">
                Firm Setup
              </Link>
              <Link href="/lawwork/self-assessment" className="hover:opacity-80 transition">
                Self-Assessment
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

      {/* Hero Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-8">
          <div className="max-w-3xl">
            <h1 className="text-[32px] font-bold leading-tight mb-4">
              Connect with Elite Legal Talent.
              <br />
              Effortlessly
            </h1>
            <p className="text-base opacity-90">
              Streamline your hiring process and build your dream legal team
            </p>
          </div>
        </div>
      </section>

      {/* Three-Card Overview Section */}
      <section className="container mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: Firm Profile Setup */}
          <Link href="/lawwork/firm-setup">
            <div className="lawwork-card hover:shadow-lg transition cursor-pointer h-full">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Firm Profile Setup</h3>
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-4">
                  <Scale className="h-6 w-6 text-primary" />
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-muted"></div>
                  <span>Upload Logo</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-muted"></div>
                  <span>Complete Law</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-muted"></div>
                  <span>Litigation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-accent"></div>
                  <span>Real Estate</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border flex items-center justify-between">
                <span className="text-xs text-muted-foreground">Profile Completion</span>
                <span className="text-sm font-semibold text-primary">75%</span>
              </div>
            </div>
          </Link>

          {/* Card 2: Needs Assessment */}
          <Link href="/lawwork/self-assessment">
            <div className="lawwork-card hover:shadow-lg transition cursor-pointer h-full">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Needs Assessment</h3>
              </div>

              {/* Donut Chart Representation */}
              <div className="flex items-center justify-center py-8">
                <div className="relative w-44 h-44">
                  {/* Simple donut chart using conic gradient */}
                  <div
                    className="w-full h-full rounded-full"
                    style={{
                      background: `conic-gradient(
                        hsl(var(--chart-navy)) 0% 45%,
                        hsl(var(--chart-light-blue)) 45% 80%,
                        hsl(var(--chart-teal)) 80% 95%,
                        hsl(var(--chart-gray)) 95% 100%
                      )`,
                    }}
                  >
                    <div className="absolute inset-4 bg-card rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-2xl font-bold">45%</div>
                        <div className="text-xs text-muted-foreground">Legal Needs</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: 'hsl(var(--chart-navy))' }}></div>
                  <span>Legal (45%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: 'hsl(var(--chart-light-blue))' }}></div>
                  <span>Admin (35%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: 'hsl(var(--chart-teal))' }}></div>
                  <span>Client (15%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-sm" style={{ backgroundColor: 'hsl(var(--chart-gray))' }}></div>
                  <span>Marketing (5%)</span>
                </div>
              </div>

              <button className="w-full mt-4 lawwork-button-primary text-sm">
                Start Assessment
              </button>
            </div>
          </Link>

          {/* Card 3: Candidate Matching */}
          <Link href="/lawwork/candidates">
            <div className="lawwork-card hover:shadow-lg transition cursor-pointer h-full">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Candidate Matching</h3>
              </div>

              {/* Candidate List Preview */}
              <div className="space-y-3">
                {[
                  { name: 'Sarah Martinez', match: 92 },
                  { name: 'Michael Lee', match: 88 },
                  { name: 'Dr. Anya Sharma', match: 85 },
                ].map((candidate, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-2 bg-secondary/30 rounded-lg">
                    <img
                      src={`/images/candidates/placeholder-${(idx % 3) + 1}.svg`}
                      alt={candidate.name}
                      className="lawwork-avatar"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium truncate">{candidate.name}</div>
                      <div className="text-xs text-muted-foreground">
                        {candidate.match}% Match
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className={`w-1.5 h-1.5 rounded-full ${
                            i < 4 ? 'bg-chart-gold' : 'bg-muted'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-4 lawwork-button-primary text-sm">
                View Shortlist
              </button>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm text-muted-foreground">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Solutions</h4>
              <p>Legal Talent</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Company</h4>
              <p>About Us</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Discovery</h4>
              <p>Research</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Contact</h4>
              <p>Help</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border text-xs text-muted-foreground text-center">
            © 2024 LawWork. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
