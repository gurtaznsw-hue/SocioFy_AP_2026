import { Link } from 'react-router-dom';
import { GraduationCap, CheckCircle2, ShieldCheck, Users, Sparkles } from 'lucide-react';

/**
 * AuthLayout Component
 * Common wrapper for Login, Signup, and Forgot Password pages.
 * Provides consistent university branding, responsive 2-column layout on desktop,
 * and standard aesthetic alignment with the SocioFy design system.
 *
 * @param {Object} props
 * @param {string} props.heading - Card header title
 * @param {string} props.subtitle - Descriptive sentence below heading
 * @param {React.ReactNode} props.children - Form body content
 * @param {string} [props.maxWidth='max-w-md'] - Custom width constraint for card
 */
const AuthLayout = ({
  heading,
  subtitle,
  children,
  maxWidth = 'max-w-md',
}) => {
  return (
    <div className="min-h-screen bg-[#F8F9FC] text-[#17233B] flex flex-col justify-between selection:bg-[#5277D9] selection:text-white">
      {/* Top Header / Minimal Nav */}
      <header className="w-full border-b border-[#E5E7EB]/80 bg-white/70 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="SocioFy Home"
          >
            <div className="w-9 h-9 rounded-xl bg-[#17233B] flex items-center justify-center text-white shadow-xs group-hover:bg-[#5277D9] transition-colors duration-200">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-extrabold tracking-tight text-[#17233B]">
                Socio<span className="text-[#5277D9]">Fy</span>
              </span>
              <span className="text-[9px] font-semibold text-[#667085] tracking-wider uppercase -mt-1 hidden sm:block">
                Campus Network
              </span>
            </div>
          </Link>

          <Link
            to="/"
            className="text-xs font-semibold text-[#667085] hover:text-[#5277D9] transition-colors"
          >
            ← Back to Campus Home
          </Link>
        </div>
      </header>

      {/* Main Auth Content Area */}
      <main className="flex-1 flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Hero Sidebar (visible on desktop) */}
          <div className="hidden lg:flex lg:col-span-5 flex-col justify-between space-y-8 pr-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EDF7] text-[#5277D9] text-xs font-semibold mb-6">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Exclusively for College Students</span>
              </div>

              <h1 className="text-3xl font-extrabold text-[#17233B] tracking-tight leading-tight">
                Your Campus.{' '}
                <span className="text-[#5277D9] block">Your People.</span>
                <span>Your Community.</span>
              </h1>

              <p className="mt-4 text-sm text-[#667085] leading-relaxed">
                Connect exclusively with verified peers, find hackathon teammates by skill, and stay updated with every event across departments.
              </p>
            </div>

            {/* Platform Guarantees */}
            <div className="space-y-3 pt-4 border-t border-[#E5E7EB]">
              <div className="flex items-start gap-2.5 text-xs text-[#17233B]">
                <ShieldCheck className="w-4 h-4 text-[#5277D9] shrink-0 mt-0.5" />
                <span>Verified university campus email required</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#17233B]">
                <Users className="w-4 h-4 text-[#5277D9] shrink-0 mt-0.5" />
                <span>Direct access to student-led clubs and study hubs</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-[#17233B]">
                <CheckCircle2 className="w-4 h-4 text-[#5277D9] shrink-0 mt-0.5" />
                <span>Zero spam, zero non-college advertisers</span>
              </div>
            </div>

            {/* University Tag */}
            <div className="p-3.5 rounded-xl bg-white border border-[#E5E7EB] text-xs text-[#667085] flex items-center gap-3 shadow-2xs">
              <div className="w-8 h-8 rounded-lg bg-[#E8EDF7] text-[#5277D9] flex items-center justify-center font-bold">
                🎓
              </div>
              <p className="leading-snug">
                Building India's most connected, vibrant, and collaborative student network.
              </p>
            </div>
          </div>

          {/* Right Column: Centered Form Card */}
          <div className="lg:col-span-7 flex justify-center">
            <div
              className={`w-full ${maxWidth} bg-white rounded-2xl border border-[#E5E7EB] p-6 sm:p-8 shadow-sm`}
            >
              {/* Card Header */}
              <div className="text-center mb-6">
                <div className="inline-flex lg:hidden items-center justify-center w-11 h-11 rounded-xl bg-[#17233B] text-white mb-3 shadow-xs">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#17233B] tracking-tight">
                  {heading}
                </h2>
                {subtitle && (
                  <p className="mt-1.5 text-xs sm:text-sm text-[#667085] leading-relaxed">
                    {subtitle}
                  </p>
                )}
              </div>

              {/* Form Content */}
              {children}
            </div>
          </div>
        </div>
      </main>

      {/* Minimal Footer */}
      <footer className="w-full py-4 text-center text-xs text-[#667085] border-t border-[#E5E7EB]/60">
        © 2026 SocioFy. Built for college communities.
      </footer>
    </div>
  );
};

export default AuthLayout;

