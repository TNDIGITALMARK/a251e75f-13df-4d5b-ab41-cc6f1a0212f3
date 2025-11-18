'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { getAssessmentById } from '@/lib/supabase/assessments';
import { Assessment, LABELS } from '@/types/assessment';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  CheckCircle2,
  FileText,
  Users,
  Clock,
  MapPin,
  Star,
  ArrowLeft,
  Download,
} from 'lucide-react';

export default function AssessmentResultsPage() {
  const params = useParams();
  const router = useRouter();
  const [assessment, setAssessment] = useState<Assessment | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadAssessment = async () => {
      if (!params.id || typeof params.id !== 'string') return;

      try {
        const data = await getAssessmentById(params.id);
        setAssessment(data);
      } catch (error) {
        console.error('Error loading assessment:', error);
      } finally {
        setLoading(false);
      }
    };

    loadAssessment();
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading your assessment...</p>
        </div>
      </div>
    );
  }

  if (!assessment) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader>
            <CardTitle>Assessment Not Found</CardTitle>
            <CardDescription>
              The assessment you're looking for doesn't exist.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => router.push('/lawwork/self-assessment')}>
              Start New Assessment
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getPriorityLabel = (rank: number): string => {
    const labels = ['Most Important', '2nd Priority', '3rd Priority', 'Least Important'];
    return labels[rank - 1] || '';
  };

  const sortedPriorities = Object.entries(assessment.matchingPriorities)
    .sort(([, a], [, b]) => a - b)
    .map(([key, rank]) => ({
      key: key as keyof typeof LABELS.matchingPriority,
      rank,
      label: LABELS.matchingPriority[key as keyof typeof LABELS.matchingPriority],
    }));

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => router.push('/lawwork')}
            className="mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="w-8 h-8 text-success" />
                <h1 className="text-3xl font-bold text-foreground">
                  Assessment Complete
                </h1>
              </div>
              <p className="text-muted-foreground">
                Here's a summary of your law firm's needs and preferences
              </p>
            </div>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Results Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                <CardTitle>Basic Information</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Firm Name
                </label>
                <p className="text-lg font-semibold">{assessment.firmName}</p>
              </div>
              <Separator />
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Firm Size
                </label>
                <p className="text-base">
                  {LABELS.firmSize[assessment.firmSize]}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Your Role
                </label>
                <p className="text-base">
                  {LABELS.userRole[assessment.userRole]}
                </p>
              </div>
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Practice Area
                </label>
                <p className="text-base">
                  {LABELS.practiceArea[assessment.practiceArea]}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Support Needs */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <CardTitle>Support Needs</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Required Support
                </label>
                <div className="flex flex-wrap gap-2">
                  {assessment.supportNeeds.map((need) => (
                    <Badge key={need} variant="secondary">
                      {LABELS.supportNeed[need]}
                    </Badge>
                  ))}
                </div>
                {assessment.supportNeedsOther && (
                  <p className="text-sm mt-2 text-muted-foreground">
                    Other: {assessment.supportNeedsOther}
                  </p>
                )}
              </div>
              <Separator />
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Expected Hours
                </label>
                <p className="text-base">
                  {LABELS.expectedHours[assessment.expectedHours]}
                </p>
              </div>
              {assessment.softwareProficiency.length > 0 && (
                <div>
                  <label className="text-sm font-medium text-muted-foreground mb-2 block">
                    Software Proficiency
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {assessment.softwareProficiency.map((software) => (
                      <Badge key={software} variant="outline">
                        {LABELS.softwareProficiency[software]}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Availability */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" />
                <CardTitle>Availability Preferences</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Timezone Preference
                </label>
                <p className="text-base">
                  {LABELS.timezonePreference[assessment.timezonePreference]}
                </p>
              </div>
              <Separator />
              <div>
                <label className="text-sm font-medium text-muted-foreground">
                  Firm Timezone
                </label>
                <div className="flex items-center gap-2 mt-1">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <p className="text-base">
                    {LABELS.firmTimezone[assessment.firmTimezone]}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Matching Preferences */}
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-primary" />
                <CardTitle>Matching Preferences</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-2 block">
                  Personality Traits
                </label>
                <div className="flex flex-wrap gap-2">
                  {assessment.personalityTraits.map((trait) => (
                    <Badge key={trait} variant="secondary">
                      {LABELS.personalityTrait[trait]}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <label className="text-sm font-medium text-muted-foreground mb-3 block">
                  Priority Rankings
                </label>
                <div className="space-y-2">
                  {sortedPriorities.map(({ key, rank, label }) => (
                    <div
                      key={key}
                      className="flex items-center justify-between p-2 bg-muted/50 rounded"
                    >
                      <span className="text-sm">{label}</span>
                      <Badge variant="outline">{getPriorityLabel(rank)}</Badge>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Steps */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>
              Here's what happens next with your assessment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Profile Analysis</h4>
                  <p className="text-sm text-muted-foreground">
                    Our system will analyze your firm's needs and preferences to
                    create an ideal contractor profile.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Contractor Matching</h4>
                  <p className="text-sm text-muted-foreground">
                    We'll match you with qualified contractors who align with your
                    specific requirements and working style.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Review Candidates</h4>
                  <p className="text-sm text-muted-foreground">
                    You'll receive a curated list of top candidates to review and
                    contact based on your assessment results.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <Button
                onClick={() => router.push('/lawwork/candidates')}
                size="lg"
                className="w-full sm:w-auto"
              >
                View Matched Candidates
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
