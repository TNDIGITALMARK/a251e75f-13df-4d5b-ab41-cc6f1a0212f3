/**
 * LawWork Platform - Mock Data
 * Realistic sample data for demonstration
 */

import { AssessmentQuestion, RoleTemplate, Candidate } from './types';

// Assessment Questions
export const ASSESSMENT_QUESTIONS: AssessmentQuestion[] = [
  {
    id: 'q1',
    question: 'How many hours per week do partners spend on administrative tasks?',
    type: 'slider',
    min: 0,
    max: 20,
    unit: 'hours',
  },
  {
    id: 'q2',
    question: 'Which practice areas generate the most client complaints?',
    type: 'checkbox',
    options: [
      'Litigation delays',
      'Communication gaps',
      'Document turnaround',
      'Billing disputes',
    ],
  },
  {
    id: 'q3',
    question: 'How many active cases does your firm currently handle?',
    type: 'slider',
    min: 0,
    max: 200,
    unit: 'cases',
  },
  {
    id: 'q4',
    question: 'What percentage of cases require extensive legal research?',
    type: 'slider',
    min: 0,
    max: 100,
    unit: '%',
  },
  {
    id: 'q5',
    question: 'How often do clients request status updates?',
    type: 'radio',
    options: ['Daily', 'Weekly', 'Monthly', 'As needed'],
  },
  {
    id: 'q6',
    question: 'Which marketing activities does your firm currently perform?',
    type: 'checkbox',
    options: [
      'Social media',
      'Content marketing',
      'Email campaigns',
      'Events/Networking',
      'None',
    ],
  },
  {
    id: 'q7',
    question: 'How many hours per week are spent on client intake processes?',
    type: 'slider',
    min: 0,
    max: 20,
    unit: 'hours',
  },
];

// Role Templates
export const ROLE_TEMPLATES: RoleTemplate[] = [
  {
    id: 'template-1',
    name: 'Senior Litigation Paralegal',
    category: 'legal',
    requiredSkills: [
      'Westlaw',
      'Case Management',
      'Legal Research',
      'Document Preparation',
      'Court Filing',
    ],
    preferredTools: ['Westlaw', 'Clio', 'Adobe Acrobat', 'Microsoft Office'],
    experienceLevel: 'senior',
    hourlyRateRange: [65, 85],
    description:
      'Experienced paralegal to support litigation practice with case preparation, research, and document management.',
  },
  {
    id: 'template-2',
    name: 'Client Relations Specialist',
    category: 'client-facing',
    requiredSkills: [
      'Client Communication',
      'CRM Management',
      'Scheduling',
      'Conflict Resolution',
      'Status Reporting',
    ],
    preferredTools: ['Salesforce', 'Calendly', 'Slack', 'Microsoft Teams'],
    experienceLevel: 'mid',
    hourlyRateRange: [45, 65],
    description:
      'Dedicated specialist to manage client relationships, communications, and ensure exceptional service delivery.',
  },
  {
    id: 'template-3',
    name: 'Legal Research Assistant',
    category: 'legal',
    requiredSkills: [
      'Legal Research',
      'Westlaw/LexisNexis',
      'Case Law Analysis',
      'Memorandum Writing',
      'Citation Management',
    ],
    preferredTools: ['Westlaw', 'LexisNexis', 'Zotero', 'Microsoft Word'],
    experienceLevel: 'junior',
    hourlyRateRange: [35, 50],
    description:
      'Detail-oriented researcher to support attorneys with comprehensive legal research and analysis.',
  },
  {
    id: 'template-4',
    name: 'Administrative Coordinator',
    category: 'administrative',
    requiredSkills: [
      'Calendar Management',
      'Document Organization',
      'Billing Support',
      'Office Coordination',
      'Email Management',
    ],
    preferredTools: ['Microsoft Office', 'Google Workspace', 'Dropbox', 'QuickBooks'],
    experienceLevel: 'mid',
    hourlyRateRange: [35, 50],
    description:
      'Organized professional to handle administrative tasks, scheduling, and office coordination.',
  },
  {
    id: 'template-5',
    name: 'Legal Marketing Manager',
    category: 'marketing',
    requiredSkills: [
      'Content Creation',
      'Social Media',
      'SEO',
      'Email Marketing',
      'Analytics',
    ],
    preferredTools: ['HubSpot', 'Hootsuite', 'Google Analytics', 'Canva'],
    experienceLevel: 'senior',
    hourlyRateRange: [75, 100],
    description:
      'Strategic marketer to build firm brand, manage digital presence, and generate leads.',
  },
];

// Mock Candidates
export const MOCK_CANDIDATES: Candidate[] = [
  {
    id: 'candidate-1',
    name: 'Sarah Martinez',
    title: 'Senior Litigation Paralegal',
    avatar: '/images/candidates/placeholder-1.svg',
    experienceLevel: 'senior',
    availability: 'immediate',
    hourlyRate: 75,
    location: 'Remote',
    timezone: 'EST',
    rating: 4.8,
    reviewCount: 47,
    matchPercentage: 92,
    bio: 'Experienced litigation paralegal with 8+ years supporting complex commercial litigation. Expert in Westlaw, case management, and court filing procedures.',
    skills: [
      { skill: 'Westlaw', score: 95 },
      { skill: 'Case Management', score: 88 },
      { skill: 'Legal Research', score: 90 },
      { skill: 'Document Prep', score: 85 },
      { skill: 'Court Filing', score: 92 },
    ],
  },
  {
    id: 'candidate-2',
    name: 'Michael Lee',
    title: 'Legal Research Specialist',
    avatar: '/images/candidates/placeholder-2.svg',
    experienceLevel: 'mid',
    availability: 'two-weeks',
    hourlyRate: 55,
    location: 'Remote',
    timezone: 'PST',
    rating: 4.9,
    reviewCount: 32,
    matchPercentage: 88,
    bio: 'Dedicated legal researcher with JD and 5 years experience in appellate research. Skilled in Westlaw, LexisNexis, and comprehensive legal analysis.',
    skills: [
      { skill: 'Westlaw', score: 92 },
      { skill: 'Case Management', score: 75 },
      { skill: 'Legal Research', score: 95 },
      { skill: 'Document Prep', score: 80 },
      { skill: 'Court Filing', score: 70 },
    ],
  },
  {
    id: 'candidate-3',
    name: 'Dr. Anya Sharma',
    title: 'Legal Operations Specialist',
    avatar: '/images/candidates/placeholder-3.svg',
    experienceLevel: 'senior',
    availability: 'one-month',
    hourlyRate: 85,
    location: 'Remote',
    timezone: 'CST',
    rating: 5.0,
    reviewCount: 28,
    matchPercentage: 85,
    bio: 'Legal operations expert with 10+ years experience optimizing law firm processes. Specializes in case management systems and workflow automation.',
    skills: [
      { skill: 'Westlaw', score: 85 },
      { skill: 'Case Management', score: 98 },
      { skill: 'Legal Research', score: 82 },
      { skill: 'Document Prep', score: 88 },
      { skill: 'Court Filing', score: 80 },
    ],
  },
  {
    id: 'candidate-4',
    name: 'Jennifer Torres',
    title: 'Client Relations Manager',
    avatar: '/images/candidates/placeholder-1.svg',
    experienceLevel: 'senior',
    availability: 'immediate',
    hourlyRate: 65,
    location: 'Remote',
    timezone: 'EST',
    rating: 4.7,
    reviewCount: 41,
    matchPercentage: 90,
    bio: 'Client-focused professional with 7 years managing high-value client relationships. Expert in CRM systems and client communication strategies.',
    skills: [
      { skill: 'Client Communication', score: 95 },
      { skill: 'CRM Management', score: 90 },
      { skill: 'Scheduling', score: 88 },
      { skill: 'Problem Solving', score: 92 },
      { skill: 'Status Reporting', score: 87 },
    ],
  },
];

// Practice Areas
export const PRACTICE_AREAS = [
  'Corporate Law',
  'Litigation',
  'Real Estate',
  'Family Law',
  'Criminal Defense',
  'Intellectual Property',
  'Employment Law',
  'Immigration',
  'Tax Law',
  'Estate Planning',
];

// Common Legal Tools
export const LEGAL_TOOLS = [
  'Westlaw',
  'LexisNexis',
  'Clio',
  'MyCase',
  'PracticePanther',
  'Adobe Acrobat',
  'Microsoft Office',
  'Google Workspace',
  'Salesforce',
  'HubSpot',
  'Dropbox',
  'Box',
  'Slack',
  'Microsoft Teams',
  'Zoom',
];

// Assessment Calculation Logic
export function calculateAssessmentResults(
  answers: Record<string, number | string | string[]>
): {
  administrative: number;
  legal: number;
  clientFacing: number;
  marketing: number;
} {
  // Simple mock calculation - can be enhanced with actual logic
  const adminHours = (answers['q1'] as number) || 0;
  const activeСases = (answers['q3'] as number) || 0;
  const researchPercentage = (answers['q4'] as number) || 0;
  const intakeHours = (answers['q7'] as number) || 0;
  const marketingActivities = (answers['q6'] as string[])?.length || 0;

  // Weighted calculation
  const administrative = Math.min(100, (adminHours * 5 + intakeHours * 4));
  const legal = Math.min(100, (activeСases * 0.4 + researchPercentage * 0.6));
  const clientFacing = Math.min(100, (intakeHours * 3 + activeСases * 0.2));
  const marketing = Math.min(100, (5 - marketingActivities) * 20);

  // Normalize to percentages that add up logically
  const total = administrative + legal + clientFacing + marketing;

  return {
    administrative: Math.round((administrative / total) * 100),
    legal: Math.round((legal / total) * 100),
    clientFacing: Math.round((clientFacing / total) * 100),
    marketing: Math.round((marketing / total) * 100),
  };
}
