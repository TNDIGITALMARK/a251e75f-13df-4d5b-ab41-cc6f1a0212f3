'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { AssessmentFormData, LABELS, SupportNeed, SoftwareProficiency } from '@/types/assessment';

interface SupportNeedsStepProps {
  formData: AssessmentFormData;
  updateFormData: (updates: Partial<AssessmentFormData>) => void;
}

export function SupportNeedsStep({
  formData,
  updateFormData,
}: SupportNeedsStepProps) {
  const handleSupportNeedToggle = (need: SupportNeed) => {
    const current = formData.supportNeeds;
    const updated = current.includes(need)
      ? current.filter((n) => n !== need)
      : [...current, need];
    updateFormData({ supportNeeds: updated });
  };

  const handleSoftwareToggle = (software: SoftwareProficiency) => {
    const current = formData.softwareProficiency;
    const updated = current.includes(software)
      ? current.filter((s) => s !== software)
      : [...current, software];
    updateFormData({ softwareProficiency: updated });
  };

  return (
    <div className="space-y-6">
      {/* Support Needs */}
      <div className="space-y-3">
        <Label>
          What legal admin support do you need most?{' '}
          <span className="text-destructive">*</span>
        </Label>
        <div className="space-y-3">
          {Object.entries(LABELS.supportNeed).map(([value, label]) => (
            <div key={value} className="flex items-start space-x-3">
              <Checkbox
                id={`supportNeed-${value}`}
                checked={formData.supportNeeds.includes(value as SupportNeed)}
                onCheckedChange={() =>
                  handleSupportNeedToggle(value as SupportNeed)
                }
              />
              <Label
                htmlFor={`supportNeed-${value}`}
                className="font-normal cursor-pointer leading-tight"
              >
                {label}
              </Label>
            </div>
          ))}
        </div>

        {/* Other field */}
        {formData.supportNeeds.includes('other') && (
          <div className="ml-7 mt-2">
            <Input
              value={formData.supportNeedsOther || ''}
              onChange={(e) =>
                updateFormData({ supportNeedsOther: e.target.value })
              }
              placeholder="Please specify..."
              className="max-w-md"
            />
          </div>
        )}
      </div>

      {/* Expected Hours */}
      <div className="space-y-3">
        <Label>
          Contractor's expected weekly hours{' '}
          <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          value={formData.expectedHours}
          onValueChange={(value) =>
            updateFormData({
              expectedHours: value as AssessmentFormData['expectedHours'],
            })
          }
        >
          {Object.entries(LABELS.expectedHours).map(([value, label]) => (
            <div key={value} className="flex items-center space-x-3">
              <RadioGroupItem value={value} id={`expectedHours-${value}`} />
              <Label
                htmlFor={`expectedHours-${value}`}
                className="font-normal cursor-pointer"
              >
                {label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Software Proficiency */}
      <div className="space-y-3">
        <Label>Do you need specific software proficiency?</Label>
        <p className="text-sm text-muted-foreground">
          Select all that apply (optional)
        </p>
        <div className="space-y-3">
          {Object.entries(LABELS.softwareProficiency).map(([value, label]) => (
            <div key={value} className="flex items-start space-x-3">
              <Checkbox
                id={`software-${value}`}
                checked={formData.softwareProficiency.includes(
                  value as SoftwareProficiency
                )}
                onCheckedChange={() =>
                  handleSoftwareToggle(value as SoftwareProficiency)
                }
              />
              <Label
                htmlFor={`software-${value}`}
                className="font-normal cursor-pointer leading-tight"
              >
                {label}
              </Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
