"use client";

import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import * as React from "react";
import { useTranslation } from "react-i18next";

// Example data
const buildProductFeatures = (t: (key: string) => string) => [
  {
    title: t("navbar.productFeatures.digitalVotingPlatform.title"),
    href: "/product/voting-platform",
    description: t("navbar.productFeatures.digitalVotingPlatform.description"),
  },
  {
    title: t("navbar.productFeatures.sdk.title"),
    href: "/product/sdk",
    description: t("navbar.productFeatures.sdk.description"),
  },
  {
    title: t("navbar.productFeatures.customProjects.title"),
    href: "/product/custom",
    description: t("navbar.productFeatures.customProjects.description"),
  },
];

const buildTechnologyItems = (t: (key: string) => string) => [
  {
    title: t("navbar.technologyItems.blockchainProtocol.title"),
    href: "/technology/protocol",
    description: t("navbar.technologyItems.blockchainProtocol.description"),
  },
  {
    title: t("navbar.technologyItems.zkp.title"),
    href: "/technology/zkp",
    description: t("navbar.technologyItems.zkp.description"),
  },
  {
    title: t("navbar.technologyItems.openSource.title"),
    href: "https://github.com/vocdoni",
    description: t("navbar.technologyItems.openSource.description"),
  },
];

const buildAboutItems = (t: (key: string) => string) => [
  {
    title: t("navbar.aboutItems.mission.title"),
    href: "/about/mission",
    description: t("navbar.aboutItems.mission.description"),
  },
  {
    title: t("navbar.aboutItems.team.title"),
    href: "/about/team",
    description: t("navbar.aboutItems.team.description"),
  },
  {
    title: t("navbar.aboutItems.careers.title"),
    href: "/about/careers",
    description: t("navbar.aboutItems.careers.description"),
  },
];

const buildResourcesItems = (t: (key: string) => string) => [
  {
    title: t("navbar.resourcesItems.blog.title"),
    href: "/blog",
    description: t("navbar.resourcesItems.blog.description"),
  },
  {
    title: t("navbar.resourcesItems.successStories.title"),
    href: "/success-stories",
    description: t("navbar.resourcesItems.successStories.description"),
  },
  {
    title: t("navbar.resourcesItems.guides.title"),
    href: "/guides",
    description: t("navbar.resourcesItems.guides.description"),
  },
  {
    title: t("navbar.resourcesItems.docs.title"),
    href: "/docs",
    description: t("navbar.resourcesItems.docs.description"),
  },
];

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";

export function Navbar() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = React.useState(false);

  const productFeatures = React.useMemo(() => buildProductFeatures(t), [t]);
  const technologyItems = React.useMemo(() => buildTechnologyItems(t), [t]);
  const aboutItems = React.useMemo(() => buildAboutItems(t), [t]);
  const resourcesItems = React.useMemo(() => buildResourcesItems(t), [t]);

  return (
    <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 w-full cursor-none pointer-events-none">
      <header className="pointer-events-auto flex items-center justify-between gap-4 rounded-full border border-border/40 bg-background/80 px-4 py-2 shadow-sm backdrop-blur-md md:gap-8">
        {/* Logo */}
        <div>
          <Logo />
        </div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {/* About Us */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>{t("navbar.about")}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {aboutItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Solutions (formerly Product) */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>{t("navbar.solutions")}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {productFeatures.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Technology */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>{t("navbar.technology")}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {technologyItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Resources (replaces Success stories) */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>{t("navbar.resources")}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {resourcesItems.map((item) => (
                    <ListItem key={item.title} title={item.title} href={item.href}>
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <a href="/contact" className={navigationMenuTriggerStyle()}>
                {t("navbar.contact")}
              </a>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Side: App Button, Language Switcher & Mobile Menu */}
        <div className="flex items-center gap-2 pr-2">
          <LanguageSwitcher />
          {/* Mobile Menu Trigger */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] p-0">
              <div className="flex flex-col h-full bg-background">
                {/* Header inside Sheet */}
                <div className="p-6 border-b">
                  <Logo />
                </div>

                {/* Menu Items */}
                <div className="flex-1 overflow-auto py-6 px-4">
                  <Accordion type="single" collapsible className="w-full">
                    {/* About Us */}
                    <AccordionItem value="about">
                      <AccordionTrigger className="text-sm font-medium">{t("navbar.about")}</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 pl-4">
                          {aboutItems.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="text-sm text-muted-foreground hover:text-foreground py-2 block"
                            >
                              {item.title}
                            </a>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Product */}
                    {/* Solutions (mobile) */}
                    <AccordionItem value="product">
                      <AccordionTrigger className="text-sm font-medium">{t("navbar.solutions")}</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 pl-4">
                          {productFeatures.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="text-sm text-muted-foreground hover:text-foreground py-2 block"
                            >
                              {item.title}
                            </a>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    {/* Resources (mobile) */}
                    <AccordionItem value="resources">
                      <AccordionTrigger className="text-sm font-medium">{t("navbar.resources")}</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 pl-4">
                          {resourcesItems.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="text-sm text-muted-foreground hover:text-foreground py-2 block"
                            >
                              {item.title}
                            </a>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Technology */}
                    <AccordionItem value="technology">
                      <AccordionTrigger className="text-sm font-medium">{t("navbar.technology")}</AccordionTrigger>
                      <AccordionContent>
                        <div className="flex flex-col space-y-2 pl-4">
                          {technologyItems.map((item) => (
                            <a
                              key={item.title}
                              href={item.href}
                              className="text-sm text-muted-foreground hover:text-foreground py-2 block"
                            >
                              {item.title}
                            </a>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Static Links */}
                  <div className="mt-4 flex flex-col space-y-4">
                    <a
                      href="/resources"
                      className="text-sm font-medium hover:text-primary transition-colors py-2 border-b border-border/40"
                    >
                      {t("navbar.resources")}
                    </a>
                    <a
                      href="/contact"
                      className="text-sm font-medium hover:text-primary transition-colors py-2 border-b border-border/40"
                    >
                      {t("navbar.contact")}
                    </a>
                  </div>
                </div>

                {/* Footer App Button - Keeping it here as well for easy access if menu is open */}
                <div className="p-6 border-t mt-auto">
                  <Button asChild className="w-full rounded-full">
                    <a href="https://app.vocdoni.io" target="_blank" rel="noopener noreferrer">
                      App
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>

          {/* App Button (Visible on all screens now) */}
          <Button asChild className="rounded-full px-6">
            <a href="https://app.vocdoni.io" target="_blank" rel="noopener noreferrer">
              {t("navbar.appButton")}
            </a>
          </Button>
        </div>
      </header>
    </div>
  );
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            {...props}
          >
            <div className="text-sm font-medium leading-none">{title}</div>
            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
