# Law Firm Self-Assessment System

A comprehensive self-assessment application for law firms to identify their contractor needs and get matched with qualified candidates.

## Features

### 📋 Multi-Step Assessment Form
- **Step 1: Basic Information**
  - Law firm name
  - Firm size (Solo, Small, Medium, Large)
  - User role (Attorney, Paralegal, Office Manager, etc.)
  - Practice area (Business, Civil, Criminal, etc.)

- **Step 2: Support Needs**
  - Required support types (Client intake, Document prep, Admin, Marketing, Other)
  - Expected hours (Part-time / Full-time)
  - Software proficiency requirements (Case Management, CRM, Communication, Billing, Project Management)

- **Step 3: Availability**
  - Timezone preference (Exact overlap, Partial, Flexible)
  - Firm timezone (ET, CT, MT, PT, AT, HAT)

- **Step 4: Matching Preferences**
  - Personality traits valued (Independent/Proactive, Structured/Process-Oriented)
  - Priority rankings (Personality alignment, Task proficiency, Communication style, Training and score results)

### 🎨 User Experience
- Visual progress indicator with percentage completion
- Step-by-step navigation with visual indicators
- Form validation to ensure all required fields are completed
- Mobile-responsive design
- Clean, professional LawWork design system

### 💾 Database Integration
- Full Supabase integration with RLS (Row Level Security)
- Automatic tenant/project isolation
- Assessment data persistence
- Query functions for CRUD operations

### 📊 Results Display
- Comprehensive results page showing all assessment data
- Organized by category (Basic Info, Support Needs, Availability, Matching Preferences)
- Visual badges and labels for easy scanning
- Next steps guidance
- Link to view matched candidates

## Technical Architecture

### File Structure

```
src/
├── app/
│   └── lawwork/
│       └── self-assessment/
│           ├── page.tsx                    # Main assessment form page
│           └── results/
│               └── [id]/
│                   └── page.tsx            # Results display page
├── components/
│   └── assessment/
│       ├── AssessmentForm.tsx              # Main form orchestrator
│       └── steps/
│           ├── BasicInfoStep.tsx           # Step 1: Basic firm info
│           ├── SupportNeedsStep.tsx        # Step 2: Support requirements
│           ├── AvailabilityStep.tsx        # Step 3: Timezone/availability
│           └── MatchingPreferencesStep.tsx # Step 4: Preferences & priorities
├── lib/
│   └── supabase/
│       ├── client.ts                       # Supabase client configuration
│       └── assessments.ts                  # Assessment CRUD operations
└── types/
    └── assessment.ts                       # TypeScript type definitions

```

### Database Schema

The `assessments` table includes:
- **Identification**: id, tenantid, projectid
- **Basic Info**: firm_name, firm_size, user_role, practice_area
- **Support Needs**: support_needs[], support_needs_other, expected_hours, software_proficiency[]
- **Availability**: timezone_preference, firm_timezone
- **Matching**: personality_traits[], matching_priorities (JSON)
- **Metadata**: completed_at, score (JSON), created_at, updated_at

### Type Safety

All form data is fully typed with TypeScript:
- Enum types for all dropdown/radio selections
- Interface definitions for form data and database records
- Type-safe query functions
- Display labels object for consistent UI text

## Usage

### Starting a New Assessment

1. Navigate to `/lawwork/self-assessment`
2. Complete all 4 steps of the form
3. Click "Complete Assessment" on the final step
4. View results and next steps

### Viewing Results

- Results are automatically displayed after completing the assessment
- Direct URL: `/lawwork/self-assessment/results/[assessment-id]`
- Results page includes all assessment data organized by category
- "View Matched Candidates" button to proceed to matching

### Navigation

- Main LawWork dashboard: `/lawwork`
- Self-Assessment link in main navigation
- "Needs Assessment" card on dashboard

## Environment Variables

Required environment variables (see `.env.example`):

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
NEXT_PUBLIC_SUPABASE_SCOPED_TOKEN=your-scoped-token
```

## Development

### Running Locally

```bash
npm run dev
```

Navigate to `http://localhost:4006/lawwork/self-assessment`

### Database Setup

The assessments table is already configured with:
- RLS policies for tenant/project isolation
- Foreign key constraints
- Indexes for common queries
- JSONB fields for flexible data storage

### Testing Database Connectivity

```bash
npx tsx scripts/check-assessment-table.ts
```

## Design System

The assessment uses the LawWork design system:
- **Primary Color**: Navy Blue (#2d4a6f)
- **Accent Color**: Bright Blue (#3b82f6)
- **Typography**: Inter font family
- **Components**: Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens

### Key UI Components Used
- Card, CardHeader, CardContent
- Button (Primary, Outline, Ghost variants)
- Progress bar
- Radio buttons
- Checkboxes
- Select dropdowns
- Badge
- Separator
- Icons (Lucide React)

## Future Enhancements

Potential improvements:
- Save draft progress (auto-save as user completes steps)
- Edit completed assessments
- Compare multiple assessments
- PDF export of results
- Email results summary
- Assessment analytics dashboard
- Contractor matching algorithm based on assessment data
- Assessment templates for different firm types

## Support

For issues or questions, refer to the main project documentation or contact the development team.
