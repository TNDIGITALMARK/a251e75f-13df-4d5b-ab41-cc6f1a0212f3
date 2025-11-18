'use client';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { AssessmentFormData, LABELS } from '@/types/assessment';

interface AvailabilityStepProps {
  formData: AssessmentFormData;
  updateFormData: (updates: Partial<AssessmentFormData>) => void;
}

export function AvailabilityStep({
  formData,
  updateFormData,
}: AvailabilityStepProps) {
  return (
    <div className="space-y-6">
      {/* Timezone Preference */}
      <div className="space-y-3">
        <Label>
          What timezone or availability do you need?{' '}
          <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          value={formData.timezonePreference}
          onValueChange={(value) =>
            updateFormData({
              timezonePreference:
                value as AssessmentFormData['timezonePreference'],
            })
          }
        >
          {Object.entries(LABELS.timezonePreference).map(([value, label]) => (
            <div key={value} className="flex items-center space-x-3">
              <RadioGroupItem value={value} id={`tzPref-${value}`} />
              <Label
                htmlFor={`tzPref-${value}`}
                className="font-normal cursor-pointer"
              >
                {label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Firm Timezone */}
      <div className="space-y-3">
        <Label>
          What time zone is your firm located in?{' '}
          <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          value={formData.firmTimezone}
          onValueChange={(value) =>
            updateFormData({
              firmTimezone: value as AssessmentFormData['firmTimezone'],
            })
          }
        >
          {Object.entries(LABELS.firmTimezone).map(([value, label]) => (
            <div key={value} className="flex items-center space-x-3">
              <RadioGroupItem value={value} id={`firmTz-${value}`} />
              <Label
                htmlFor={`firmTz-${value}`}
                className="font-normal cursor-pointer"
              >
                {label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}
