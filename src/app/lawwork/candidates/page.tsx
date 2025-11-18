'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Scale, Star, MapPin, Clock, DollarSign, Check } from 'lucide-react';
import { MOCK_CANDIDATES } from '@/lib/lawwork/mock-data';
import { Candidate } from '@/lib/lawwork/types';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

export default function CandidatesPage() {
  const [shortlist, setShortlist] = useState<Set<string>>(new Set());
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null);

  const toggleShortlist = (candidateId: string) => {
    const newShortlist = new Set(shortlist);
    if (newShortlist.has(candidateId)) {
      newShortlist.delete(candidateId);
    } else {
      newShortlist.add(candidateId);
    }
    setShortlist(newShortlist);
  };

  const getRadarData = (candidate: Candidate) => {
    return candidate.skills.map((s) => ({
      skill: s.skill,
      value: s.score,
    }));
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
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Candidate Matches</h1>
            <p className="text-muted-foreground">
              {MOCK_CANDIDATES.length} candidates matched to your role requirements
            </p>
          </div>
          <div>
            <button className="lawwork-button-primary">
              View Shortlist ({shortlist.size})
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {MOCK_CANDIDATES.map((candidate) => (
            <div
              key={candidate.id}
              className={`lawwork-card cursor-pointer transition ${
                selectedCandidate?.id === candidate.id
                  ? 'ring-2 ring-primary'
                  : 'hover:shadow-lg'
              }`}
              onClick={() => setSelectedCandidate(candidate)}
            >
              <div className="flex items-start gap-4 mb-4">
                {/* Avatar */}
                <img
                  src={candidate.avatar}
                  alt={candidate.name}
                  className="lawwork-avatar"
                />

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-1">
                    <div>
                      <h3 className="text-lg font-semibold">{candidate.name}</h3>
                      <p className="text-sm text-muted-foreground">{candidate.title}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-primary">
                        {candidate.matchPercentage}%
                      </div>
                      <div className="text-xs text-muted-foreground">Match</div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3 w-3 ${
                            i < Math.floor(candidate.rating)
                              ? 'fill-chart-gold text-chart-gold'
                              : 'text-muted'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      {candidate.rating} ({candidate.reviewCount} reviews)
                    </span>
                  </div>

                  {/* Details */}
                  <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      <span>
                        {candidate.location} ({candidate.timezone})
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span className="capitalize">{candidate.availability.replace('-', ' ')}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />
                      <span>${candidate.hourlyRate}/hr</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="capitalize">{candidate.experienceLevel} Level</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Radar Chart */}
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Skill Match Analysis</h4>
                <div className="bg-secondary/30 rounded-lg p-4">
                  <ResponsiveContainer width="100%" height={180}>
                    <RadarChart data={getRadarData(candidate)}>
                      <PolarGrid stroke="hsl(var(--border))" />
                      <PolarAngleAxis
                        dataKey="skill"
                        tick={{ fontSize: 11, fill: 'hsl(var(--muted-foreground))' }}
                      />
                      <Radar
                        dataKey="value"
                        stroke="hsl(var(--chart-blue))"
                        fill="hsl(var(--chart-blue))"
                        fillOpacity={0.3}
                        strokeWidth={2}
                      />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              {/* Bio */}
              <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{candidate.bio}</p>

              {/* Actions */}
              <div className="flex gap-2 pt-4 border-t border-border">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleShortlist(candidate.id);
                  }}
                  className={`flex-1 px-4 py-2 rounded-lg text-sm font-medium transition ${
                    shortlist.has(candidate.id)
                      ? 'bg-primary text-primary-foreground'
                      : 'border border-border hover:bg-secondary'
                  }`}
                >
                  {shortlist.has(candidate.id) ? (
                    <>
                      <Check className="h-4 w-4 inline mr-1" />
                      Shortlisted
                    </>
                  ) : (
                    'Add to Shortlist'
                  )}
                </button>
                <button className="lawwork-button-primary px-6">View Profile</button>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Section */}
        {shortlist.size > 1 && (
          <div className="mt-8 lawwork-card">
            <h2 className="text-lg font-semibold mb-4">Compare Shortlisted Candidates</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 font-medium">Candidate</th>
                    <th className="text-left py-3 font-medium">Match</th>
                    <th className="text-left py-3 font-medium">Rate</th>
                    <th className="text-left py-3 font-medium">Availability</th>
                    <th className="text-left py-3 font-medium">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_CANDIDATES.filter((c) => shortlist.has(c.id)).map((candidate) => (
                    <tr key={candidate.id} className="border-b border-border">
                      <td className="py-3">
                        <div className="flex items-center gap-2">
                          <img
                            src={candidate.avatar}
                            alt={candidate.name}
                            className="w-8 h-8 rounded-full"
                          />
                          <span className="font-medium">{candidate.name}</span>
                        </div>
                      </td>
                      <td className="py-3">
                        <span className="font-semibold text-primary">
                          {candidate.matchPercentage}%
                        </span>
                      </td>
                      <td className="py-3">${candidate.hourlyRate}/hr</td>
                      <td className="py-3 capitalize">
                        {candidate.availability.replace('-', ' ')}
                      </td>
                      <td className="py-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 fill-chart-gold text-chart-gold" />
                          <span>{candidate.rating}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 flex gap-2">
              <button className="lawwork-button-primary">Schedule Interviews</button>
              <button className="px-6 py-3 border border-border rounded-lg hover:bg-secondary transition text-sm font-medium">
                Export Comparison
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
