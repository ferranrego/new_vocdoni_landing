import gdprLogo from "@/assets/gdpr.png";
import isoLogo from "@/assets/iso-27001.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Github, Globe, Send, Twitter } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Logo } from "./Logo";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="w-full bg-background border-t border-border/50 pt-16 pb-8 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand & Description */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <Logo />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">{t("footer.mission")}</p>
            <div className="flex gap-4">
              <a
                href="https://github.com/vocdoni"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/vocdoni"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://t.me/vocdoni"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Send className="h-5 w-5" />
              </a>
              <a
                href="https://vocdoni.io"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Globe className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">{t("footer.product.title")}</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.product.links.0")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.product.links.1")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.product.links.2")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.product.links.3")}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">{t("footer.company.title")}</h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.company.links.0")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.company.links.1")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.company.links.2")}
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  {t("footer.company.links.3")}
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h4 className="font-bold text-sm mb-6 uppercase tracking-wider">{t("footer.newsletter.title")}</h4>
            <div className="flex glass-effect rounded-full p-1 border border-border/50 mb-6 group focus-within:border-primary/50 transition-colors">
              <Input
                type="email"
                placeholder={t("footer.newsletter.placeholder")}
                className="border-0 bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 text-sm h-10 px-4 flex-1"
              />
              <Button size="icon" className="rounded-full h-10 w-10 shrink-0">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="h-px w-full bg-border/40 mb-8" />

        {/* Bottom Bar: Security & Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-1 items-center md:items-start order-2 md:order-1">
            <p className="text-xs text-muted-foreground">{t("footer.copyright", { year: new Date().getFullYear() })}</p>
            <p className="text-[10px] text-muted-foreground/60">{t("footer.rights")}</p>
          </div>

          <div className="flex flex-wrap items-center gap-6 order-1 md:order-2">
            <div className="flex items-center gap-3 border border-border/50 rounded-lg px-3 py-1.5 bg-muted/5">
              <img src={isoLogo} alt="ISO 27001" className="h-6 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="text-[8px] text-muted-foreground uppercase font-bold tracking-tight">
                  {t("footer.certified")}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 border border-border/50 rounded-lg px-3 py-1.5 bg-muted/5">
              <img src={gdprLogo} alt="GDPR" className="h-6 w-auto object-contain" />
              <div className="flex flex-col">
                <span className="text-[8px] text-muted-foreground uppercase font-bold tracking-tight">
                  {t("footer.gdpr")}
                </span>
              </div>
            </div>

            {/* Removed SECURE ARCHITECTURE badge */}
          </div>
        </div>
      </div>
    </footer>
  );
}
