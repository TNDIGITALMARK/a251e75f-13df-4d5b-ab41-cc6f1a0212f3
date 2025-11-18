import { Scale } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="border-t border-border bg-card mt-auto">
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
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Scale className="h-5 w-5" />
            <span className="font-semibold">LawWork</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img
              src="/logo-powered-by-stafi.png"
              alt="Powered by Stafi"
              className="h-12 w-auto"
            />
            <div className="text-sm text-muted-foreground text-center">
              © 2025 LawWork. All rights reserved. Empowering legal teams worldwide.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
