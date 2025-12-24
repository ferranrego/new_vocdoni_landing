"use client";
import { CensusCard, ResultsCard, VotingCard } from "@/components/HeroCards";
import MobileHeroScroll from "@/components/MobileHeroScroll";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

// Import logos from assets
import logo1 from "@/assets/logo1.png";
import logo2 from "@/assets/logo2.png";
import logo3 from "@/assets/logo3.png";
import logo4 from "@/assets/logo4.png";
import logo5 from "@/assets/logo5.png";

const logos = [
  { name: "Sovereign", url: logo1 },
  { name: "Trust", url: logo2 },
  { name: "Verifiable", url: logo3 },
  { name: "Secure", url: logo4 },
  { name: "Transparent", url: logo5 },
];

const words = ["easy", "secure", "simple"];

const Hero = () => {
  const { t } = useTranslation();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center pt-28 pb-12 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center w-full min-w-0">
          {/* Left Column: Content */}
          <div className="flex flex-col items-start gap-6 relative z-10 w-full min-w-0">
            <a
              href="https://app.vocdoni.io"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 sm:gap-3 p-1 rounded-3xl border border-border/40 bg-muted/20 text-xs transition-all hover:bg-muted/30 group cursor-pointer max-w-full shadow-sm"
            >
              <span className="bg-foreground text-background px-2.5 py-0.5 rounded-full font-semibold shrink-0">
                Vocdoni App
              </span>
              <span className="text-muted-foreground font-medium pr-2 leading-tight truncate flex items-center gap-1">
                <span className="hidden sm:inline">An easy-to-use platform for voting</span>
                <span className="sm:hidden">Vote easily</span>
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 shrink-0" />
              </span>
            </a>

            <h1 className="text-3xl font-bold tracking-tight sm:text-5xl lg:text-6xl max-w-2xl break-words">
              {t("hero.title")}{" "}
              <span className="inline-flex min-w-[0px] xs:min-w-[120px] text-primary">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={index}
                    initial={{ y: 20, opacity: 0, filter: "blur(4px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -20, opacity: 0, filter: "blur(4px)" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="block"
                  >
                    {words[index]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-[600px] leading-relaxed break-words">
              {t("hero.subtitle")}
            </p>

            {/* Mobile Cards - Between text and buttons */}
            <div className="lg:hidden w-full -mx-4">
              <MobileHeroScroll />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button size="lg" className="rounded-full gap-2 relative overflow-hidden group w-full sm:w-auto">
                <span className="absolute inset-0 bg-[linear-gradient(110deg,transparent,20%,rgba(255,255,255,0.3),40%,transparent)] -translate-x-full group-hover:animate-shimmer content-[''] pointer-events-none" />
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="rounded-full gap-2 w-full sm:w-auto border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10"
              >
                <a href="https://wa.me/34621501155" target="_blank" rel="noopener noreferrer">
                  <svg
                    className="inline-block mr-1 h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden
                  >
                    <path
                      d="M20.52 3.48A11.93 11.93 0 0012 0C5.37 0 .08 5.29.08 11.92.08 14.64.88 17.24 2.36 19.33L0 24l4.8-2.48A11.92 11.92 0 0012 24c6.63 0 11.92-5.29 11.92-11.92 0-3.19-1.24-6.17-3.4-8.6z"
                      fill="#25D366"
                    />
                    <path
                      d="M17.3 14.1c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.18.2-.36.22-.66.07-.3-.15-1.27-.47-2.42-1.48-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.6.13-.13.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2 0-.4-.05-.55-.05-.15-.67-1.6-.92-2.2-.24-.57-.48-.5-.67-.51-.17 0-.37 0-.57 0-.2 0-.53.08-.8.37-.27.3-1.03 1-1.03 2.43 0 1.43 1.05 2.8 1.2 3 .15.2 2.08 3.37 5.05 4.73 2.97 1.36 2.97.9 3.5.84.53-.07 1.72-.7 1.97-1.38.24-.69.24-1.28.17-1.4-.07-.12-.27-.18-.57-.33z"
                      fill="#fff"
                    />
                  </svg>
                  Chat with us
                </a>
              </Button>
            </div>

            <div className="mt-8 w-full max-w-full">
              <p className="text-sm text-muted-foreground mb-4 font-medium">Trusted by innovative organizations</p>
              <div className="relative w-full max-w-full overflow-hidden mask-gradient-x">
                {/* Gradient masks */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>

                <div className="flex w-max animate-marquee gap-12 items-center hover:paused">
                  {[...logos, ...logos, ...logos].map((logo, i) => (
                    <img
                      key={i}
                      src={logo.url}
                      alt={logo.name}
                      className="h-10 w-auto object-contain opacity-70 grayscale transition-all duration-300 hover:grayscale-0 hover:opacity-100 dark:invert"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Component (3 Steps) */}
          <div className="relative w-full lg:h-[600px] perspective-1000">
            {/* Decorative background blotches */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />

            <div className="hidden lg:block relative w-full h-full">
              {/* Step 1: Memberbase / Census (Top Right) */}
              <motion.div
                className="absolute top-0 right-10 w-72 z-10"
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <CensusCard />
              </motion.div>

              {/* Connector 1 (Census -> Voting) */}
              <svg className="absolute inset-0 pointer-events-none z-0" width="100%" height="100%">
                <motion.path
                  d="M 390 130 C 390 190, 200 150, 180 200"
                  fill="none"
                  stroke="oklch(var(--border))"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 1.0 }}
                />
              </svg>

              {/* Step 2: Voting Process (Middle Left) */}
              <motion.div
                className="absolute top-[160px] left-8 w-80 z-20"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
              >
                <VotingCard animated={true} />
              </motion.div>

              {/* Connector 2 (Voting -> Results) */}
              <svg className="absolute inset-0 pointer-events-none z-0" width="100%" height="100%">
                <motion.path
                  d="M 180 340 C 180 400, 360 380, 420 380"
                  fill="none"
                  stroke="oklch(var(--border))"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 2.5 }}
                />
              </svg>

              {/* Step 3: Verified Results (Bottom Right) */}
              <motion.div
                className="absolute top-[340px] right-4 w-72 z-10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3.0 }}
              >
                <ResultsCard animated={true} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
