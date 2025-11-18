'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AssessmentForm } from '@/components/assessment/AssessmentForm';
import { createAssessment } from '@/lib/supabase/assessments';
import { AssessmentFormData } from '@/types/assessment';
import { toast } from 'sonner';

export default function SelfAssessmentPage() {
  const router = useRouter();

  const handleComplete = async (formData: AssessmentFormData) => {
    try {
      const assessment = await createAssessment(formData);
      toast.success('Assessment completed successfully!');
      router.push(`/lawwork/self-assessment/results/${assessment.id}`);
    } catch (error) {
      console.error('Error saving assessment:', error);
      toast.error('Failed to save assessment. Please try again.');
    }
  };

  return <AssessmentForm onComplete={handleComplete} />;
}
