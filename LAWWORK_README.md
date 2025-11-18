# LawWork - Legal Talent Matching Platform

A modern, self-service platform that helps law firms identify their staffing needs and match with pre-vetted legal professionals in under 30 minutes.

## ✨ Features Implemented

### 🏠 Homepage (`/lawwork`)
- Hero section with brand messaging
- Three-card overview showing:
  - Firm Profile Setup progress
  - Needs Assessment results (donut chart)
  - Candidate Matching preview
- Professional navigation and footer

### 🏢 Firm Setup (`/lawwork/firm-setup`)
- Firm profile configuration
- Practice areas selection (10+ options)
- Legal tools/software tracking
- Partner and attorney management
- Real-time completion progress tracking

### 📊 Needs Assessment (`/lawwork/assessment`)
- Interactive 7-question assessment
- Multiple question types (sliders, checkboxes, radio buttons)
- Progress tracking with visual indicator
- Dynamic results calculation
- Beautiful horizontal bar chart results showing:
  - Legal Support needs
  - Administrative Support needs
  - Client-Facing Support needs
  - Marketing Support needs
- Personalized insights and recommendations

### 🎯 Role Builder (`/lawwork/roles`)
- 5 pre-built role templates:
  - Senior Litigation Paralegal
  - Client Relations Specialist
  - Legal Research Assistant
  - Administrative Coordinator
  - Legal Marketing Manager
- Template selection with full details
- Customization panel for:
  - Required skills
  - Preferred tools
  - Schedule preferences
  - Timezone selection
  - Hourly budget range
  - SOP file uploads
- Generate comprehensive Role Cards

### 👥 Candidate Matching (`/lawwork/candidates`)
- 4 mock candidate profiles with:
  - Profile photos
  - Experience level
  - Availability status
  - Hourly rates
  - Location and timezone
  - Star ratings and review counts
  - **Radar skill charts** (using Recharts)
  - Match percentage calculation
- Shortlist functionality
- Side-by-side candidate comparison table
- Filter and sort capabilities

### ✅ Onboarding (`/lawwork/onboarding`)
- Comprehensive onboarding checklist
- Tasks organized by category:
  - Administrative tasks
  - System access provisioning
  - Training and orientation
- Visual progress tracking
- Interactive task completion
- Quick action buttons
- "Ready to Activate" state when complete

## 🎨 Design System

### Colors (Exact HSL values from reference)
- **Primary Navy**: `hsl(210 42% 31%)` - #2d4a6f
- **Background**: `hsl(210 15% 91%)` - #e8ecf1
- **Accent Blue**: `hsl(217 91% 60%)` - #3b82f6
- **Success Green**: `hsl(160 84% 39%)` - #10b981
- **Chart Colors**: Navy, Light Blue, Teal, Gray, Gold

### Typography
- **Font Family**: Inter (imported from Google Fonts)
- **Sizes**: 12px-32px scale
- **Weights**: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Components
- **Cards**: 12px border-radius, 24px padding, subtle shadows
- **Buttons**: 8px border-radius, primary navy background
- **Avatars**: 48px circles with borders
- **Progress Bars**: 8px height, smooth animations

## 📁 Project Structure

```
src/
├── app/
│   ├── lawwork/
│   │   ├── page.tsx              # Homepage with overview
│   │   ├── layout.tsx            # Layout wrapper
│   │   ├── firm-setup/page.tsx   # Firm profile setup
│   │   ├── assessment/page.tsx   # Needs assessment flow
│   │   ├── roles/page.tsx        # Role builder
│   │   ├── candidates/page.tsx   # Candidate matching
│   │   └── onboarding/page.tsx   # Onboarding checklist
│   ├── globals.css               # Design system styles
│   └── page.tsx                  # Redirect to /lawwork
├── lib/
│   └── lawwork/
│       ├── types.ts              # TypeScript interfaces
│       └── mock-data.ts          # Sample data & logic
└── public/
    └── images/
        └── candidates/           # Profile avatars (SVG)
```

## 🚀 Getting Started

The application is already configured and ready to run:

```bash
npm run dev
```

Visit `http://localhost:4006` to see the platform in action.

## 🎯 User Flow

1. **Start**: Homepage overview of the platform
2. **Setup**: Complete firm profile with practice areas and tools
3. **Assess**: Take the 7-question needs assessment
4. **Build**: Select and customize a role template based on results
5. **Match**: Review auto-generated candidate matches with radar charts
6. **Hire**: Shortlist candidates and compare side-by-side
7. **Onboard**: Complete onboarding checklist and activate new hire

## 🛠 Technologies Used

- **Framework**: Next.js 15.5.2 (App Router)
- **Styling**: Tailwind CSS 4 + Custom CSS Variables
- **Charts**: Recharts (radar charts, responsive)
- **Icons**: Lucide React
- **TypeScript**: Full type safety
- **Font**: Inter (Google Fonts)

## 📊 Data & State Management

- Mock data stored in `src/lib/lawwork/mock-data.ts`
- Type definitions in `src/lib/lawwork/types.ts`
- Local state management with React hooks (useState)
- Assessment calculation algorithm included
- Ready for backend integration (Supabase structure prepared)

## 🎨 Design Fidelity

The implementation matches the reference design with:
- ✅ Exact color palette (HSL values)
- ✅ Precise typography (Inter font, exact sizes)
- ✅ Component styling (border radius, shadows, spacing)
- ✅ Layout structure (card-based, responsive grid)
- ✅ Visual effects (charts, progress bars, avatars)

## 🔄 Next Steps for Production

1. **Backend Integration**: Connect to Supabase database
2. **Authentication**: Add user login and session management
3. **Real Candidates**: Replace mock data with actual candidate profiles
4. **Interview Scheduling**: Implement calendar integration
5. **File Uploads**: Add SOP and document management
6. **Email Notifications**: Send updates to candidates and partners
7. **Payment Processing**: Integrate billing for hired candidates
8. **Analytics Dashboard**: Track hiring metrics and success rates

## 📝 Notes

- All pages are fully functional with interactive elements
- Smooth transitions and hover effects throughout
- Responsive design works on mobile, tablet, and desktop
- Professional legal aesthetic with modern UI patterns
- Clean, maintainable code with TypeScript safety
- Component-based architecture for easy expansion
