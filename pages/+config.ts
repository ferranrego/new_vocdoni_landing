import vikeReact from "vike-react/config";
import type { Config } from "vike/types";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/head-tags
  title: "Vocdoni — Secure, Verifiable Online Voting Technology & Governance Platform",
  description:
    "Secure, verifiable, privacy-preserving online voting and governance tools for governments, organizations, and communities.",

  extends: [vikeReact],
} satisfies Config;
