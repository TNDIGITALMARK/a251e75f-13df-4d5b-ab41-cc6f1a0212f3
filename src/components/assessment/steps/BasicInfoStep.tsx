'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { AssessmentFormData, LABELS } from '@/types/assessment';

interface BasicInfoStepProps {
  formData: AssessmentFormData;
  updateFormData: (updates: Partial<AssessmentFormData>) => void;
}

export function BasicInfoStep({ formData, updateFormData }: BasicInfoStepProps) {
  return (
    <div className="space-y-6">
      {/* Firm Name */}
      <div className="space-y-2">
        <Label htmlFor="firmName">
          Law Firm Name <span className="text-destructive">*</span>
        </Label>
        <Input
          id="firmName"
          value={formData.firmName}
          onChange={(e) => updateFormData({ firmName: e.target.value })}
          placeholder="Enter your law firm name"
          className="max-w-md"
        />
      </div>

      {/* Firm Size */}
      <div className="space-y-3">
        <Label>
          Firm Size <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          value={formData.firmSize}
          onValueChange={(value) =>
            updateFormData({ firmSize: value as AssessmentFormData['firmSize'] })
          }
        >
          {Object.entries(LABELS.firmSize).map(([value, label]) => (
            <div key={value} className="flex items-center space-x-3">
              <RadioGroupItem value={value} id={`firmSize-${value}`} />
              <Label
                htmlFor={`firmSize-${value}`}
                className="font-normal cursor-pointer"
              >
                {label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* User Role */}
      <div className="space-y-3">
        <Label>
          Select your role <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          value={formData.userRole}
          onValueChange={(value) =>
            updateFormData({ userRole: value as AssessmentFormData['userRole'] })
          }
        >
          {Object.entries(LABELS.userRole).map(([value, label]) => (
            <div key={value} className="flex items-center space-x-3">
              <RadioGroupItem value={value} id={`userRole-${value}`} />
              <Label
                htmlFor={`userRole-${value}`}
                className="font-normal cursor-pointer"
              >
                {label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      {/* Practice Area */}
      <div className="space-y-3">
        <Label>
          Practice area <span className="text-destructive">*</span>
        </Label>
        <RadioGroup
          value={formData.practiceArea}
          onValueChange={(value) =>
            updateFormData({
              practiceArea: value as AssessmentFormData['practiceArea'],
            })
          }
        >
          {Object.entries(LABELS.practiceArea).map(([value, label]) => (
            <div key={value} className="flex items-center space-x-3">
              <RadioGroupItem value={value} id={`practiceArea-${value}`} />
              <Label
                htmlFor={`practiceArea-${value}`}
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
