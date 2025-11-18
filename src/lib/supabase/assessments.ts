import { supabase } from './client';
import { Assessment, AssessmentFormData } from '@/types/assessment';

const TENANT_ID = 'VfCRr0gRgJbqKphSDH3hdNzGIEk1';
const PROJECT_ID = 'a251e75f-13df-4d5b-ab41-cc6f1a0212f3';

export interface AssessmentRecord {
  id: string;
  tenantid: string;
  projectid: string;
  firm_name: string;
  firm_size: string;
  user_role: string;
  practice_area: string;
  support_needs: string[];
  support_needs_other: string | null;
  expected_hours: string;
  software_proficiency: string[];
  timezone_preference: string;
  firm_timezone: string;
  personality_traits: string[];
  matching_priorities: Record<string, number>;
  completed_at: string | null;
  score: Record<string, number> | null;
  created_at: string;
  updated_at: string;
}

function convertToDbFormat(
  formData: AssessmentFormData
): Omit<AssessmentRecord, 'id' | 'created_at' | 'updated_at'> {
  return {
    tenantid: TENANT_ID,
    projectid: PROJECT_ID,
    firm_name: formData.firmName,
    firm_size: formData.firmSize,
    user_role: formData.userRole,
    practice_area: formData.practiceArea,
    support_needs: formData.supportNeeds,
    support_needs_other: formData.supportNeedsOther || null,
    expected_hours: formData.expectedHours,
    software_proficiency: formData.softwareProficiency,
    timezone_preference: formData.timezonePreference,
    firm_timezone: formData.firmTimezone,
    personality_traits: formData.personalityTraits,
    matching_priorities: formData.matchingPriorities,
    completed_at: new Date().toISOString(),
    score: null,
  };
}

function convertFromDbFormat(record: AssessmentRecord): Assessment {
  return {
    id: record.id,
    tenantid: record.tenantid,
    projectid: record.projectid,
    firmName: record.firm_name,
    firmSize: record.firm_size as any,
    userRole: record.user_role as any,
    practiceArea: record.practice_area as any,
    supportNeeds: record.support_needs as any[],
    supportNeedsOther: record.support_needs_other || undefined,
    expectedHours: record.expected_hours as any,
    softwareProficiency: record.software_proficiency as any[],
    timezonePreference: record.timezone_preference as any,
    firmTimezone: record.firm_timezone as any,
    personalityTraits: record.personality_traits as any[],
    matchingPriorities: record.matching_priorities as any,
    completedAt: record.completed_at || undefined,
    score: record.score || undefined,
    createdAt: record.created_at,
    updatedAt: record.updated_at,
  };
}

export async function createAssessment(
  formData: AssessmentFormData
): Promise<Assessment> {
  const dbData = convertToDbFormat(formData);

  const { data, error } = await supabase
    .from('assessments')
    .insert(dbData)
    .select()
    .single();

  if (error) {
    console.error('Error creating assessment:', error);
    throw new Error('Failed to create assessment');
  }

  return convertFromDbFormat(data as AssessmentRecord);
}

export async function getAssessments(): Promise<Assessment[]> {
  const { data, error } = await supabase
    .from('assessments')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching assessments:', error);
    throw new Error('Failed to fetch assessments');
  }

  return (data as AssessmentRecord[]).map(convertFromDbFormat);
}

export async function getAssessmentById(id: string): Promise<Assessment | null> {
  const { data, error } = await supabase
    .from('assessments')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    console.error('Error fetching assessment:', error);
    return null;
  }

  return convertFromDbFormat(data as AssessmentRecord);
}

export async function updateAssessment(
  id: string,
  updates: Partial<AssessmentFormData>
): Promise<Assessment> {
  const { data, error } = await supabase
    .from('assessments')
    .update({
      ...updates,
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .single();

  if (error) {
    console.error('Error updating assessment:', error);
    throw new Error('Failed to update assessment');
  }

  return convertFromDbFormat(data as AssessmentRecord);
}

export async function deleteAssessment(id: string): Promise<void> {
  const { error } = await supabase.from('assessments').delete().eq('id', id);

  if (error) {
    console.error('Error deleting assessment:', error);
    throw new Error('Failed to delete assessment');
  }
}
