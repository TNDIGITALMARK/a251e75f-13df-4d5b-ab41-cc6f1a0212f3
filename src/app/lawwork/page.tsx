'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Scale, Sparkles, Target, TrendingUp, Users, ChevronRight } from 'lucide-react';
import { AuthModal } from '@/components/auth/AuthModal';

export default function LawWorkHome() {
  const [showAuthModal, setShowAuthModal] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header Navigation */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Scale className="h-6 w-6 text-primary" />
              <span className="text-xl font-semibold text-foreground">LawWork</span>
            </div>
            <nav className="flex items-center gap-6">
              <button
                onClick={() => setShowAuthModal(true)}
                className="px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition"
              >
                Log In
              </button>
              <Link
                href="/lawwork/self-assessment"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition"
              >
                Start Assessment
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-[hsl(210,42%,26%)] text-primary-foreground">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-8 py-24 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-8">
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Talent Matching</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Hire the Best Matching Talent
              <br />
              <span className="text-white/90">for Your Law Firm</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto">
              Connect with elite legal professionals who perfectly match your firm's needs.
              Our AI-powered assessment finds the right talent in minutes, not months.
            </p>

            {/* Two CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/lawwork/self-assessment"
                className="w-full sm:w-auto group px-8 py-4 bg-white text-primary rounded-lg text-base font-semibold hover:bg-white/95 transition shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Find Your Perfect Match
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition" />
              </Link>

              <Link
                href="/lawwork/self-assessment"
                className="w-full sm:w-auto group px-8 py-4 bg-primary-foreground/10 backdrop-blur-sm text-white border-2 border-white/30 rounded-lg text-base font-semibold hover:bg-white/20 transition flex items-center justify-center gap-2"
              >
                Start Free Assessment
                <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition" />
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="mt-16 pt-8 border-t border-white/20">
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div>
                  <div className="text-3xl font-bold mb-1">500+</div>
                  <div className="text-sm text-white/70">Law Firms</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">95%</div>
                  <div className="text-sm text-white/70">Match Success</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-1">48hrs</div>
                  <div className="text-sm text-white/70">Avg. Hire Time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="container mx-auto px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Three simple steps to find your ideal legal talent
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="relative">
            <div className="lawwork-card text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <h3 className="text-lg font-semibold mb-3">Define Your Needs</h3>
              <p className="text-sm text-muted-foreground">
                Complete our quick assessment to specify your firm's requirements and ideal candidate profile
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <div className="lawwork-card text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-accent/10 rounded-full flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-accent" />
              </div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <h3 className="text-lg font-semibold mb-3">AI Matching</h3>
              <p className="text-sm text-muted-foreground">
                Our AI analyzes thousands of profiles to find candidates who perfectly match your criteria
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <div className="lawwork-card text-center">
              <div className="w-16 h-16 mx-auto mb-6 bg-success/10 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-success" />
              </div>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 bg-success text-success-foreground rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <h3 className="text-lg font-semibold mb-3">Connect & Hire</h3>
              <p className="text-sm text-muted-foreground">
                Review curated matches, schedule interviews, and make your hire with confidence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-secondary/30 py-20">
        <div className="container mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Law Firms Choose LawWork</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Transform your hiring process with intelligent matching technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="bg-card p-6 rounded-xl border border-border">
              <TrendingUp className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-semibold mb-2">Higher Quality Hires</h3>
              <p className="text-sm text-muted-foreground">
                Data-driven matching ensures better cultural and skill fit
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <Target className="h-8 w-8 text-accent mb-4" />
              <h3 className="font-semibold mb-2">Save Time</h3>
              <p className="text-sm text-muted-foreground">
                Reduce hiring time from months to days with smart filtering
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <Users className="h-8 w-8 text-success mb-4" />
              <h3 className="font-semibold mb-2">Diverse Talent Pool</h3>
              <p className="text-sm text-muted-foreground">
                Access thousands of pre-vetted legal professionals
              </p>
            </div>

            <div className="bg-card p-6 rounded-xl border border-border">
              <Sparkles className="h-8 w-8 text-chart-gold mb-4" />
              <h3 className="font-semibold mb-2">AI-Powered Insights</h3>
              <p className="text-sm text-muted-foreground">
                Get intelligent recommendations based on success patterns
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-8 py-20">
        <div className="lawwork-card max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Find Your Perfect Match?</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of law firms who have transformed their hiring process.
            Start your free assessment today and discover top talent in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/lawwork/self-assessment"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-lg text-base font-semibold hover:bg-primary/90 transition shadow-md hover:shadow-lg flex items-center justify-center gap-2"
            >
              Start Your Assessment
              <ChevronRight className="h-5 w-5" />
            </Link>

            <button
              onClick={() => setShowAuthModal(true)}
              className="w-full sm:w-auto px-8 py-4 bg-secondary text-secondary-foreground rounded-lg text-base font-medium hover:bg-secondary/80 transition"
            >
              Sign In to Continue
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <h4 className="font-semibold text-foreground mb-3">Solutions</h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="hover:text-foreground cursor-pointer">Talent Matching</p>
                <p className="hover:text-foreground cursor-pointer">Assessment Tools</p>
                <p className="hover:text-foreground cursor-pointer">Onboarding</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Company</h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="hover:text-foreground cursor-pointer">About Us</p>
                <p className="hover:text-foreground cursor-pointer">Careers</p>
                <p className="hover:text-foreground cursor-pointer">Contact</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Resources</h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="hover:text-foreground cursor-pointer">Blog</p>
                <p className="hover:text-foreground cursor-pointer">Case Studies</p>
                <p className="hover:text-foreground cursor-pointer">Help Center</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-3">Legal</h4>
              <div className="space-y-2 text-muted-foreground">
                <p className="hover:text-foreground cursor-pointer">Privacy Policy</p>
                <p className="hover:text-foreground cursor-pointer">Terms of Service</p>
                <p className="hover:text-foreground cursor-pointer">Cookie Policy</p>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Scale className="h-5 w-5" />
              <span className="font-semibold">LawWork</span>
            </div>
            <div className="text-sm text-muted-foreground text-center">
              © 2025 LawWork. All rights reserved. Empowering legal teams worldwide.
            </div>
          </div>
        </div>
      </footer>

      {/* Authentication Modal */}
      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
      />
    </div>
  );
}
