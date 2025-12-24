import { ArrowRightIcon, BriefcaseIcon, CodeIcon, VoteIcon } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";

const Features = () => {
  const { t } = useTranslation();
  return (
    <section className="py-8 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 space-y-4 sm:mb-16 lg:mb-24">
          <p className="text-primary text-sm font-medium uppercase">{t("features.eyebrow")}</p>

          <h2 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">{t("features.title")}</h2>

          <p className="text-muted-foreground text-xl max-w-3xl">{t("features.description")}</p>
        </div>

        {/* Feature Cards Grid */}
        <div className="flex gap-6 max-lg:flex-col">
          {/* Card 1 */}
          <Card className="group hover:border-primary hover:bg-muted flex-1 transition-all duration-500 hover:flex-2 h-full">
            <CardContent className="flex p-6 h-full min-h-[400px]">
              <div className="flex flex-col justify-between flex-1">
                <div className="space-y-6">
                  <Avatar className="size-10 shadow-sm">
                    <AvatarFallback className="bg-card text-primary">
                      <VoteIcon className="size-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <CardTitle className="text-primary text-lg font-semibold">
                      {t("features.cards.app.title")}
                    </CardTitle>
                    <CardDescription>{t("features.cards.app.description")}</CardDescription>
                  </div>
                </div>
                <Button
                  className="group text-primary group-hover:bg-primary group-hover:text-primary-foreground rounded-full bg-transparent text-base transition-all duration-300 has-[>svg]:px-6 mt-6"
                  size="lg"
                  asChild
                >
                  <a href="#">
                    {t("features.cards.app.cta")}
                    <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </Button>
              </div>
              <div className="flex items-center ml-4">
                <img
                  src="https://images.unsplash.com/photo-1569705460033-cfaa4bf9f822?w=400&h=400&fit=crop"
                  alt="Vocdoni app for secure online voting"
                  className="mx-auto hidden w-40 shrink-0 object-contain group-hover:inline sm:size-56"
                />
              </div>
            </CardContent>
          </Card>

          {/* Card 2 */}
          <Card className="group flex-1 border-amber-600/30 transition-all duration-500 hover:flex-2 hover:border-amber-600 hover:bg-amber-600/10 dark:border-amber-400/30 dark:hover:border-amber-400 dark:hover:bg-amber-400/10 h-full">
            <CardContent className="flex p-6 h-full min-h-[400px]">
              <div className="flex flex-col justify-between flex-1">
                <div className="space-y-6">
                  <Avatar className="size-10 shadow-sm">
                    <AvatarFallback className="bg-card text-amber-600 dark:text-amber-400">
                      <CodeIcon className="size-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <CardTitle className="text-lg font-semibold text-amber-600 dark:text-amber-400">
                      {t("features.cards.integrations.title")}
                    </CardTitle>
                    <CardDescription>{t("features.cards.integrations.description")}</CardDescription>
                  </div>
                </div>
                <Button
                  className="group rounded-full bg-transparent text-base text-amber-600 transition-all duration-300 group-hover:bg-amber-600 group-hover:text-white has-[>svg]:px-6 dark:text-amber-400 dark:group-hover:bg-amber-400 dark:group-hover:text-white mt-6"
                  size="lg"
                  asChild
                >
                  <a href="#">
                    {t("features.cards.integrations.cta")}
                    <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </Button>
              </div>
              <div className="flex items-center ml-4">
                <img
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400&h=400&fit=crop"
                  alt="Developer integrations and SDK"
                  className="mx-auto hidden w-40 shrink-0 object-contain group-hover:inline sm:size-56"
                />
              </div>
            </CardContent>
          </Card>

          {/* Card 3 */}
          <Card className="group flex-1 border-sky-600/30 transition-all duration-500 hover:flex-2 hover:border-sky-600 hover:bg-sky-600/10 dark:border-sky-400/30 dark:hover:border-sky-400 dark:hover:bg-sky-400/10 h-full">
            <CardContent className="flex p-6 h-full min-h-[400px]">
              <div className="flex flex-col justify-between flex-1">
                <div className="space-y-6">
                  <Avatar className="size-10 shadow-sm">
                    <AvatarFallback className="bg-card text-sky-600 dark:text-sky-400">
                      <BriefcaseIcon className="size-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="space-y-2">
                    <CardTitle className="text-lg font-semibold text-sky-600 dark:text-sky-400">
                      {t("features.cards.projects.title")}
                    </CardTitle>
                    <CardDescription>{t("features.cards.projects.description")}</CardDescription>
                  </div>
                </div>
                <Button
                  className="group rounded-full bg-transparent text-base text-sky-600 transition-all duration-300 group-hover:bg-sky-600 group-hover:text-white has-[>svg]:px-6 dark:text-sky-400 dark:group-hover:bg-sky-400 dark:group-hover:text-white mt-6"
                  size="lg"
                  asChild
                >
                  <a href="#">
                    {t("features.cards.projects.cta")}
                    <ArrowRightIcon className="transition-transform duration-200 group-hover:translate-x-0.5" />
                  </a>
                </Button>
              </div>
              <div className="flex items-center ml-4">
                <img
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=400&fit=crop"
                  alt="Custom governance projects and solutions"
                  className="mx-auto hidden w-40 shrink-0 object-contain group-hover:inline sm:size-56"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Features;
