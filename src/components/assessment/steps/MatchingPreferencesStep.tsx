'use client';

import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  AssessmentFormData,
  LABELS,
  PersonalityTrait,
  MatchingPriority,
  MatchingPriorities,
} from '@/types/assessment';

interface MatchingPreferencesStepProps {
  formData: AssessmentFormData;
  updateFormData: (updates: Partial<AssessmentFormData>) => void;
}

export function MatchingPreferencesStep({
  formData,
  updateFormData,
}: MatchingPreferencesStepProps) {
  const handlePersonalityToggle = (trait: PersonalityTrait) => {
    const current = formData.personalityTraits;
    const updated = current.includes(trait)
      ? current.filter((t) => t !== trait)
      : [...current, trait];
    updateFormData({ personalityTraits: updated });
  };

  const handlePriorityChange = (
    priority: MatchingPriority,
    ranking: number
  ) => {
    updateFormData({
      matchingPriorities: {
        ...formData.matchingPriorities,
        [priority]: ranking,
      },
    });
  };

  const getUsedRankings = (exclude?: MatchingPriority): number[] => {
    const priorities = formData.matchingPriorities;
    return Object.entries(priorities)
      .filter(([key]) => key !== exclude)
      .map(([, value]) => value);
  };

  const isRankingAvailable = (
    ranking: number,
    currentPriority: MatchingPriority
  ): boolean => {
    const used = getUsedRankings(currentPriority);
    return !used.includes(ranking);
  };

  return (
    <div className="space-y-6">
      {/* Personality Traits */}
      <div className="space-y-3">
        <Label>
          Which personality traits do you value most in a contractor?{' '}
          <span className="text-destructive">*</span>
        </Label>
        <p className="text-sm text-muted-foreground">
          Select all that apply
        </p>
        <div className="space-y-3">
          {Object.entries(LABELS.personalityTrait).map(([value, label]) => (
            <div key={value} className="flex items-center space-x-3">
              <Checkbox
                id={`personality-${value}`}
                checked={formData.personalityTraits.includes(
                  value as PersonalityTrait
                )}
                onCheckedChange={() =>
                  handlePersonalityToggle(value as PersonalityTrait)
                }
              />
              <Label
                htmlFor={`personality-${value}`}
                className="font-normal cursor-pointer"
              >
                {label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      {/* Matching Priorities */}
      <div className="space-y-4">
        <div>
          <Label>
            Which matters most to you in a match?{' '}
            <span className="text-destructive">*</span>
          </Label>
          <p className="text-sm text-muted-foreground mt-1">
            Rank from 1–4 (1 = most important, 4 = least important)
          </p>
        </div>

        <div className="space-y-3">
          {(
            Object.entries(LABELS.matchingPriority) as [
              MatchingPriority,
              string
            ][]
          ).map(([priority, label]) => (
            <div
              key={priority}
              className="flex items-center justify-between gap-4 p-3 border rounded-lg"
            >
              <Label className="font-normal flex-1">{label}</Label>
              <Select
                value={formData.matchingPriorities[priority].toString()}
                onValueChange={(value) =>
                  handlePriorityChange(priority, parseInt(value))
                }
              >
                <SelectTrigger className="w-24">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4].map((rank) => {
                    const available = isRankingAvailable(rank, priority);
                    const isCurrent =
                      formData.matchingPriorities[priority] === rank;
                    return (
                      <SelectItem
                        key={rank}
                        value={rank.toString()}
                        disabled={!available && !isCurrent}
                      >
                        {rank}
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Note */}
      <div className="bg-muted/50 border border-border rounded-lg p-4">
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">Note:</strong> Your responses will
          help us match you with the best contractor for your law firm's specific
          needs and working style.
        </p>
      </div>
    </div>
  );
}
