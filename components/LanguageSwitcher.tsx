import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Globe, Check } from "lucide-react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "es", label: "ES", name: "Español" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const current = languages.find((l) => l.code === i18n.resolvedLanguage) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="inline-flex h-10 w-[72px] items-center justify-center gap-1.5 rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none">
          <Globe className="h-4 w-4 flex-shrink-0" />
          <span className="w-5 text-center">{current.label}</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[140px] p-1.5">
        {languages.map((lang) => {
          const isSelected = i18n.resolvedLanguage === lang.code;
          return (
            <DropdownMenuItem
              key={lang.code}
              onSelect={() => i18n.changeLanguage(lang.code)}
              className={`relative flex items-center justify-between px-3 py-2 rounded-md cursor-pointer transition-all ${
                isSelected
                  ? "bg-primary/10 text-foreground font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              <span>{lang.name}</span>
              {isSelected && (
                <Check className="h-3.5 w-3.5 ml-2 text-primary flex-shrink-0" />
              )}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
