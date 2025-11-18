/**
 * LawWork Platform - Type Definitions
 * Data structures for the legal talent-matching platform
 */

// Assessment Types
export interface AssessmentQuestion {
  id: string;
  question: string;
  type: 'slider' | 'checkbox' | 'radio';
  options?: string[];
  min?: number;
  max?: number;
  unit?: string;
}

export interface AssessmentAnswer {
  questionId: string;
  value: number | string | string[];
}

export interface AssessmentResult {
  administrative: number;
  legal: number;
  clientFacing: number;
  marketing: number;
  insights: string;
}

// Role Types
export interface RoleTemplate {
  id: string;
  name: string;
  category: 'administrative' | 'legal' | 'client-facing' | 'marketing';
  requiredSkills: string[];
  preferredTools: string[];
  experienceLevel: 'junior' | 'mid' | 'senior';
  hourlyRateRange: [number, number];
  description: string;
}

export interface RoleCard {
  id: string;
  templateId: string;
  name: string;
  skills: string[];
  tools: string[];
  schedule: string;
  timezone: string;
  experienceLevel: 'junior' | 'mid' | 'senior';
  hourlyBudget: [number, number];
  description: string;
  sopFiles?: File[];
  createdAt: Date;
}

// Candidate Types
export interface Candidate {
  id: string;
  name: string;
  title: string;
  avatar: string;
  experienceLevel: 'junior' | 'mid' | 'senior';
  availability: 'immediate' | 'two-weeks' | 'one-month';
  hourlyRate: number;
  location: string;
  timezone: string;
  rating: number;
  reviewCount: number;
  skills: SkillScore[];
  bio: string;
  matchPercentage: number;
}

export interface SkillScore {
  skill: string;
  score: number; // 0-100
}

// Firm Setup Types
export interface FirmProfile {
  id: string;
  name: string;
  size: 'solo' | 'small' | 'medium' | 'large';
  practiceAreas: string[];
  toolsUsed: string[];
  partners: Partner[];
  attorneys: Attorney[];
}

export interface Partner {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface Attorney {
  id: string;
  name: string;
  email: string;
  practiceAreas: string[];
}

// Interview Types
export interface Interview {
  id: string;
  candidateId: string;
  roleId: string;
  scheduledDate: Date;
  interviewers: string[];
  status: 'scheduled' | 'completed' | 'cancelled';
  feedback?: InterviewFeedback[];
}

export interface InterviewFeedback {
  interviewerId: string;
  rating: number;
  notes: string;
  recommendation: 'strong-yes' | 'yes' | 'maybe' | 'no';
}

// Onboarding Types
export interface OnboardingChecklist {
  id: string;
  candidateId: string;
  roleId: string;
  tasks: OnboardingTask[];
  status: 'pending' | 'in-progress' | 'completed';
}

export interface OnboardingTask {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  dueDate?: Date;
  assignedTo?: string;
}
