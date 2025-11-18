'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Scale, ArrowLeft, ArrowRight } from 'lucide-react';
import { ASSESSMENT_QUESTIONS, calculateAssessmentResults } from '@/lib/lawwork/mock-data';

export default function AssessmentPage() {
  const router = useRouter();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const [showResults, setShowResults] = useState(false);

  const question = ASSESSMENT_QUESTIONS[currentQuestion];
  const progress = ((currentQuestion + 1) / ASSESSMENT_QUESTIONS.length) * 100;

  const handleAnswer = (value: any) => {
    setAnswers({ ...answers, [question.id]: value });
  };

  const handleNext = () => {
    if (currentQuestion < ASSESSMENT_QUESTIONS.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const results = showResults ? calculateAssessmentResults(answers) : null;

  if (showResults && results) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="bg-primary text-primary-foreground">
          <div className="container mx-auto px-8">
            <div className="flex items-center justify-between h-16">
              <Link href="/lawwork" className="flex items-center gap-2">
                <Scale className="h-6 w-6" />
                <span className="text-xl font-semibold">LawWork</span>
              </Link>
              <nav className="flex items-center gap-6 text-sm font-medium">
                <Link href="/lawwork/firm-setup" className="hover:opacity-80 transition">
                  Firm Setup
                </Link>
                <Link href="/lawwork/assessment" className="hover:opacity-80 transition">
                  Assessment
                </Link>
                <Link href="/lawwork/roles" className="hover:opacity-80 transition">
                  Roles
                </Link>
                <Link href="/lawwork/candidates" className="hover:opacity-80 transition">
                  Candidates
                </Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Results Section */}
        <section className="container mx-auto px-8 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">Your Staffing Needs Analysis</h1>
            <p className="text-muted-foreground mb-8">
              Based on your responses, here's how your firm's needs are distributed:
            </p>

            <div className="lawwork-card">
              {/* Bar Chart Results */}
              <div className="space-y-6">
                {/* Legal */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Legal Support</span>
                    <span className="text-2xl font-bold text-primary">{results.legal}%</span>
                  </div>
                  <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${results.legal}%`,
                        backgroundColor: 'hsl(var(--chart-navy))',
                      }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Your firm would benefit most from legal research support and case preparation assistance.
                  </p>
                </div>

                {/* Administrative */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Administrative Support</span>
                    <span className="text-2xl font-bold text-primary">{results.administrative}%</span>
                  </div>
                  <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${results.administrative}%`,
                        backgroundColor: 'hsl(var(--chart-light-blue))',
                      }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Streamline operations with dedicated administrative coordination and document management.
                  </p>
                </div>

                {/* Client-Facing */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Client-Facing Support</span>
                    <span className="text-2xl font-bold text-primary">{results.clientFacing}%</span>
                  </div>
                  <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${results.clientFacing}%`,
                        backgroundColor: 'hsl(var(--chart-teal))',
                      }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Enhance client relationships with proactive communication and status updates.
                  </p>
                </div>

                {/* Marketing */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Marketing Support</span>
                    <span className="text-2xl font-bold text-primary">{results.marketing}%</span>
                  </div>
                  <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{
                        width: `${results.marketing}%`,
                        backgroundColor: 'hsl(var(--chart-gray))',
                      }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Build your firm's brand and online presence with strategic marketing efforts.
                  </p>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-border flex gap-3">
                <button
                  onClick={() => {
                    setShowResults(false);
                    setCurrentQuestion(0);
                    setAnswers({});
                  }}
                  className="px-6 py-3 border border-border rounded-lg hover:bg-secondary transition text-sm font-medium"
                >
                  Retake Assessment
                </button>
                <button
                  onClick={() => router.push('/lawwork/roles')}
                  className="lawwork-button-primary flex-1"
                >
                  View Recommended Roles
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/lawwork" className="flex items-center gap-2">
              <Scale className="h-6 w-6" />
              <span className="text-xl font-semibold">LawWork</span>
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link href="/lawwork/firm-setup" className="hover:opacity-80 transition">
                Firm Setup
              </Link>
              <Link href="/lawwork/assessment" className="hover:opacity-80 transition">
                Assessment
              </Link>
              <Link href="/lawwork/roles" className="hover:opacity-80 transition">
                Roles
              </Link>
              <Link href="/lawwork/candidates" className="hover:opacity-80 transition">
                Candidates
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Assessment Section */}
      <section className="container mx-auto px-8 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium">
                Question {currentQuestion + 1} of {ASSESSMENT_QUESTIONS.length}
              </span>
              <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
            </div>
            <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="lawwork-card">
            <h2 className="text-xl font-semibold mb-6">{question.question}</h2>

            {/* Answer Options */}
            {question.type === 'slider' && (
              <div>
                <input
                  type="range"
                  min={question.min}
                  max={question.max}
                  value={answers[question.id] || question.min}
                  onChange={(e) => handleAnswer(Number(e.target.value))}
                  className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, hsl(var(--primary)) 0%, hsl(var(--primary)) ${
                      ((answers[question.id] || question.min) / (question.max || 1)) * 100
                    }%, hsl(var(--secondary)) ${
                      ((answers[question.id] || question.min) / (question.max || 1)) * 100
                    }%, hsl(var(--secondary)) 100%)`,
                  }}
                />
                <div className="flex items-center justify-between mt-3">
                  <span className="text-sm text-muted-foreground">
                    {question.min} {question.unit}
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    {answers[question.id] || question.min} {question.unit}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    {question.max} {question.unit}
                  </span>
                </div>
              </div>
            )}

            {question.type === 'checkbox' && (
              <div className="space-y-3">
                {question.options?.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-secondary/30 transition"
                  >
                    <input
                      type="checkbox"
                      checked={(answers[question.id] as string[])?.includes(option) || false}
                      onChange={(e) => {
                        const current = (answers[question.id] as string[]) || [];
                        if (e.target.checked) {
                          handleAnswer([...current, option]);
                        } else {
                          handleAnswer(current.filter((v) => v !== option));
                        }
                      }}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            )}

            {question.type === 'radio' && (
              <div className="space-y-3">
                {question.options?.map((option) => (
                  <label
                    key={option}
                    className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-secondary/30 transition"
                  >
                    <input
                      type="radio"
                      name={question.id}
                      checked={answers[question.id] === option}
                      onChange={() => handleAnswer(option)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">{option}</span>
                  </label>
                ))}
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-secondary transition disabled:opacity-30 disabled:cursor-not-allowed text-sm font-medium"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous
              </button>
              <button
                onClick={handleNext}
                disabled={!answers[question.id]}
                className="lawwork-button-primary flex items-center gap-2 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                {currentQuestion === ASSESSMENT_QUESTIONS.length - 1 ? 'View Results' : 'Next'}
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
