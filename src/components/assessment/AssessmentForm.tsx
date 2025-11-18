'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { AssessmentFormData } from '@/types/assessment';
import { BasicInfoStep } from './steps/BasicInfoStep';
import { SupportNeedsStep } from './steps/SupportNeedsStep';
import { AvailabilityStep } from './steps/AvailabilityStep';
import { MatchingPreferencesStep } from './steps/MatchingPreferencesStep';
import { TaskRequirementsModal } from './TaskRequirementsModal';

const STEPS = [
  {
    id: 1,
    title: 'Basic Information',
    description: 'Tell us about your law firm',
  },
  {
    id: 2,
    title: 'Support Needs',
    description: 'What type of support do you need?',
  },
  {
    id: 3,
    title: 'Availability',
    description: 'When do you need support?',
  },
  {
    id: 4,
    title: 'Matching Preferences',
    description: 'What matters most to you?',
  },
];

const initialFormData: AssessmentFormData = {
  firmName: '',
  firmSize: 'solo',
  userRole: 'attorney',
  practiceArea: 'general',
  supportNeeds: [],
  supportNeedsOther: '',
  expectedHours: 'part-time',
  softwareProficiency: [],
  timezonePreference: 'flexible',
  firmTimezone: 'ET',
  taskRequirements: [],
  personalityTraits: [],
  matchingPriorities: {
    personality: 1,
    proficiency: 2,
    communication: 3,
    training: 4,
  },
};

interface AssessmentFormProps {
  onComplete: (data: AssessmentFormData) => void;
}

export function AssessmentForm({ onComplete }: AssessmentFormProps) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<AssessmentFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showTaskModal, setShowTaskModal] = useState(false);

  const progress = (currentStep / STEPS.length) * 100;
  const currentStepInfo = STEPS[currentStep - 1];

  const updateFormData = (updates: Partial<AssessmentFormData>) => {
    setFormData((prev) => ({ ...prev, ...updates }));
  };

  const handleNext = () => {
    // Show task modal after availability step (step 3)
    if (currentStep === 3) {
      setShowTaskModal(true);
    } else if (currentStep < STEPS.length) {
      setCurrentStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleTasksComplete = (tasks: string[]) => {
    updateFormData({ taskRequirements: tasks });
    setCurrentStep((prev) => prev + 1);
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      await onComplete(formData);
    } catch (error) {
      console.error('Error submitting assessment:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.firmName.trim().length > 0;
      case 2:
        return formData.supportNeeds.length > 0;
      case 3:
        return true;
      case 4:
        return formData.personalityTraits.length > 0;
      default:
        return true;
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <BasicInfoStep formData={formData} updateFormData={updateFormData} />
        );
      case 2:
        return (
          <SupportNeedsStep formData={formData} updateFormData={updateFormData} />
        );
      case 3:
        return (
          <AvailabilityStep formData={formData} updateFormData={updateFormData} />
        );
      case 4:
        return (
          <MatchingPreferencesStep
            formData={formData}
            updateFormData={updateFormData}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-2xl font-bold text-foreground">
                Law Firm Self-Assessment
              </h1>
              <p className="text-sm text-muted-foreground mt-1">
                Step {currentStep} of {STEPS.length}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-primary">
                {Math.round(progress)}% Complete
              </div>
            </div>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Indicators */}
        <div className="flex items-center justify-between mb-8">
          {STEPS.map((step, index) => (
            <div
              key={step.id}
              className={`flex items-center ${
                index < STEPS.length - 1 ? 'flex-1' : ''
              }`}
            >
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    step.id < currentStep
                      ? 'bg-success text-white'
                      : step.id === currentStep
                      ? 'bg-primary text-white'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {step.id < currentStep ? (
                    <CheckCircle2 className="w-5 h-5" />
                  ) : (
                    step.id
                  )}
                </div>
                <div className="mt-2 text-xs text-center max-w-[80px] hidden sm:block">
                  {step.title}
                </div>
              </div>
              {index < STEPS.length - 1 && (
                <div
                  className={`h-0.5 flex-1 mx-2 transition-colors ${
                    step.id < currentStep ? 'bg-success' : 'bg-muted'
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Form Card */}
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>{currentStepInfo.title}</CardTitle>
            <CardDescription>{currentStepInfo.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {renderStep()}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t">
              <Button
                variant="outline"
                onClick={handleBack}
                disabled={currentStep === 1 || isSubmitting}
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
              <Button
                onClick={handleNext}
                disabled={!canProceed() || isSubmitting}
              >
                {currentStep === STEPS.length ? (
                  isSubmitting ? (
                    'Submitting...'
                  ) : (
                    'Complete Assessment'
                  )
                ) : (
                  <>
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Task Requirements Modal */}
      <TaskRequirementsModal
        open={showTaskModal}
        onOpenChange={setShowTaskModal}
        onComplete={handleTasksComplete}
      />
    </div>
  );
}
