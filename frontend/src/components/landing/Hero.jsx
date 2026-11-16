import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import PrimaryButton from '../common/PrimaryButton';
import IntroVideo from './IntroVideo';

/**
 * Hero Section
 * Main headline, value proposition, primary CTAs, and a clean,
 * refined product introduction video presenting SocioFy features.
 */
const Hero = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section id="top" className="relative overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24">
      {/* Subtle decorative background gradient circles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-[#E8EDF7]/70 via-[#F8F9FC]/40 to-transparent blur-3xl -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Headline, Description & CTAs (6 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="lg:col-span-6 flex flex-col text-left"
          >
            {/* College Exclusive Badge */}
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#E8EDF7] border border-[#5277D9]/20 text-[#5277D9] text-xs font-semibold tracking-wide uppercase mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Exclusively for College Students</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold text-[#17233B] tracking-tight leading-[1.2]">
              Your Campus.{' '}
              <span className="text-[#5277D9]">Your Community.</span>{' '}
              <span className="block sm:inline lg:block text-[#17233B]">Your Opportunities.</span>
            </h1>

            {/* Description */}
            <p className="mt-5 text-base sm:text-lg text-[#667085] leading-relaxed max-w-xl">
              Connect with students, discover communities, collaborate on projects, and stay updated with everything happening around your campus.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <PrimaryButton
                size="md"
                variant="primary"
                to="/signup"
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Join Your Campus
              </PrimaryButton>
              <PrimaryButton
                size="md"
                variant="secondary"
                onClick={() => scrollToSection('features')}
              >
                Explore Features
              </PrimaryButton>
            </div>

            {/* Trust Indicators */}
            <div className="mt-9 pt-5 border-t border-[#E5E7EB] flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#667085]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified .edu student IDs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Zero spam, 100% college-focused</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Free for all enrolled students</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Direct SocioFy Introduction Video (6 cols on lg) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
            className="lg:col-span-6 w-full"
          >
            <IntroVideo />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
