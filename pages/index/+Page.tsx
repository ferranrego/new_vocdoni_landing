import AlternativeHero from "@/components/AlternativeHero";
import ComparisonSection from "@/components/ComparisonSection";
import Footer from "@/components/Footer";
import Features from "@/components/shadcn-studio/blocks/features-section-10/features-section-10";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Page() {
  const comparisonOptions = [
    {
      name: "comparison.options.vocdoni.name",
      features: {
        privacySecurity: { status: "positive" as const, text: "comparison.options.vocdoni.privacySecurity" },
        remoteAccessibility: { status: "positive" as const, text: "comparison.options.vocdoni.remoteAccessibility" },
        transparency: { status: "positive" as const, text: "comparison.options.vocdoni.transparency" },
        scalability: { status: "positive" as const, text: "comparison.options.vocdoni.scalability" },
        cost: { status: "positive" as const, text: "comparison.options.vocdoni.cost" },
        sustainability: { status: "positive" as const, text: "comparison.options.vocdoni.sustainability" },
      },
      isHighlighted: true,
    },
    {
      name: "comparison.options.traditional.name",
      features: {
        privacySecurity: { status: "positive" as const, text: "comparison.options.traditional.privacySecurity" },
        remoteAccessibility: {
          status: "negative" as const,
          text: "comparison.options.traditional.remoteAccessibility",
        },
        transparency: { status: "negative" as const, text: "comparison.options.traditional.transparency" },
        scalability: { status: "negative" as const, text: "comparison.options.traditional.scalability" },
        cost: { status: "negative" as const, text: "comparison.options.traditional.cost" },
        sustainability: { status: "negative" as const, text: "comparison.options.traditional.sustainability" },
      },
    },
    {
      name: "comparison.options.otherDigital.name",
      features: {
        privacySecurity: { status: "negative" as const, text: "comparison.options.otherDigital.privacySecurity" },
        remoteAccessibility: {
          status: "positive" as const,
          text: "comparison.options.otherDigital.remoteAccessibility",
        },
        transparency: { status: "negative" as const, text: "comparison.options.otherDigital.transparency" },
        scalability: { status: "negative" as const, text: "comparison.options.otherDigital.scalability" },
        cost: { status: "negative" as const, text: "comparison.options.otherDigital.cost" },
        sustainability: { status: "positive" as const, text: "comparison.options.otherDigital.sustainability" },
      },
    },
  ];

  const featureKeys = [
    "privacySecurity",
    "remoteAccessibility",
    "transparency",
    "scalability",
    "cost",
    "sustainability",
  ];

  const featureLabels = [
    "comparison.featureLabels.0",
    "comparison.featureLabels.1",
    "comparison.featureLabels.2",
    "comparison.featureLabels.3",
    "comparison.featureLabels.4",
    "comparison.featureLabels.5",
  ];

  return (
    <>
      <AlternativeHero />
      <Features />
      <ComparisonSection options={comparisonOptions} featureKeys={featureKeys} featureLabels={featureLabels} />
      <TestimonialsSection />
      <Footer />
    </>
  );
}
