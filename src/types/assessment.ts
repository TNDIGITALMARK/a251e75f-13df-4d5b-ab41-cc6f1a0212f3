// Law Firm Self-Assessment Types

export type FirmSize = 'solo' | 'small' | 'medium' | 'large';

export type UserRole =
  | 'attorney'
  | 'paralegal'
  | 'office-manager'
  | 'marketing'
  | 'finance'
  | 'solo-practitioner'
  | 'consultant';

export type PracticeArea =
  | 'business'
  | 'civil'
  | 'criminal'
  | 'general'
  | 'immigration'
  | 'personal-injury';

export type SupportNeed =
  | 'client-intake'
  | 'document-prep'
  | 'admin'
  | 'marketing'
  | 'other';

export type ExpectedHours = 'part-time' | 'full-time';

export type SoftwareProficiency =
  | 'case-management'
  | 'crm'
  | 'communication'
  | 'billing'
  | 'project-management';

export type TimezonePreference = 'exact' | 'partial' | 'flexible';

export type FirmTimezone = 'ET' | 'CT' | 'MT' | 'PT' | 'AT' | 'HAT';

export type PersonalityTrait = 'independent' | 'structured';

export type MatchingPriority =
  | 'personality'
  | 'proficiency'
  | 'communication'
  | 'training';

export interface MatchingPriorities {
  personality: number; // 1-4 ranking
  proficiency: number;
  communication: number;
  training: number;
}

export interface AssessmentFormData {
  // Step 1: Basic Firm Information
  firmName: string;
  firmSize: FirmSize;
  userRole: UserRole;
  practiceArea: PracticeArea;

  // Step 2: Support Needs
  supportNeeds: SupportNeed[];
  supportNeedsOther?: string;
  expectedHours: ExpectedHours;
  softwareProficiency: SoftwareProficiency[];

  // Step 3: Availability
  timezonePreference: TimezonePreference;
  firmTimezone: FirmTimezone;
  taskRequirements?: string[]; // Tasks needed for the job

  // Step 4: Personality & Matching
  personalityTraits: PersonalityTrait[];
  matchingPriorities: MatchingPriorities;
}

export interface Assessment extends AssessmentFormData {
  id: string;
  tenantid: string;
  projectid: string;
  completedAt?: string;
  score?: Record<string, number>;
  createdAt: string;
  updatedAt: string;
}

// Form step configuration
export interface FormStep {
  id: number;
  title: string;
  description: string;
  fields: string[];
}

// Display labels for enum values
export const LABELS = {
  firmSize: {
    solo: 'Solo practitioner (1 attorney)',
    small: 'Small Firm (2-5 attorneys)',
    medium: 'Medium Firm (6-10 attorneys)',
    large: 'Large Firm (11+ attorneys)',
  },
  userRole: {
    attorney: '⚖️ Attorney / Partner',
    paralegal: '👩‍💼 Paralegal / Legal Assistant',
    'office-manager': '🧾 Office or Operations Manager',
    marketing: '📈 Marketing / Business Development',
    finance: '💳 Finance / HR / Admin',
    'solo-practitioner': '👤 Solo Practitioner / Firm Owner',
    consultant: '🌐 Consultant / Other',
  },
  practiceArea: {
    business: 'Business',
    civil: 'Civil',
    criminal: 'Criminal',
    general: 'General',
    immigration: 'Immigration',
    'personal-injury': 'Personal Injury',
  },
  supportNeed: {
    'client-intake': 'Client intake and communication / People Facing',
    'document-prep': 'Document preparation and filing / Legal research',
    admin: 'Calendar management, emails, billing and invoicing / Admin',
    marketing: 'Social Media / Marketing',
    other: 'Other',
  },
  expectedHours: {
    'part-time': 'Part-time',
    'full-time': 'Full-time (40+ hours)',
  },
  softwareProficiency: {
    'case-management':
      '⚖️ Case Management (e.g., Clio, MyCase, Filevine)',
    crm: '👥 CRM (e.g., Lawmatics, HubSpot, Salesforce)',
    communication:
      '💬 Communication & Collaboration (e.g., Outlook, Teams, Slack, Zoom)',
    billing: '💳 Billing & Accounting (e.g., QuickBooks, TimeSolv, LeanLaw)',
    'project-management':
      '🗓️ Project / Task Management (e.g., Asana, Trello, ClickUp, Notion)',
  },
  timezonePreference: {
    exact: 'Exact overlap with your office hours',
    partial: 'Partial overlap',
    flexible: 'Flexible / asynchronous',
  },
  firmTimezone: {
    ET: 'Eastern Time (ET)',
    CT: 'Central Time (CT)',
    MT: 'Mountain Time (MT)',
    PT: 'Pacific Time (PT)',
    AT: 'Alaska Time (AT)',
    HAT: 'Hawaii–Aleutian Time (HAT)',
  },
  personalityTrait: {
    independent: 'Independent / Proactive',
    structured: 'Structured / Process-Oriented',
  },
  matchingPriority: {
    personality: 'Personality alignment',
    proficiency: 'Task proficiency',
    communication: 'Communication style',
    training: 'Training and score results',
  },
};
