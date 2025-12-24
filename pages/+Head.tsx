// https://vike.dev/Head

import logoUrl from "../assets/logo.svg";

export function Head() {
  return (
    <>
      <title>Vocdoni — Secure, Verifiable Online Voting Technology & Governance Platform</title>
      <meta
        name="description"
        content="Secure, verifiable, privacy-preserving online voting and governance tools for governments, organizations, and communities. SDK, integrations, custom projects."
      />
      <meta property="og:title" content="Vocdoni — Secure, Verifiable Online Voting Technology & Governance Platform" />
      <meta
        property="og:description"
        content="Secure, verifiable, privacy-preserving online voting and governance tools for governments, organizations, and communities."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://vocdoni.io/" />
      <meta property="og:image" content={logoUrl} />
      {/* Removed inline SVG favicon to force browser to use PNG/ICO favicons */}
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="canonical" href="https://vocdoni.io/" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@vocdoni" />
      <meta
        name="twitter:title"
        content="Vocdoni — Secure, Verifiable Online Voting Technology & Governance Platform"
      />
      <meta
        name="twitter:description"
        content="Secure, verifiable, privacy-preserving online voting and governance tools for governments, organizations, and communities."
      />
      <meta name="twitter:image" content={logoUrl} />
      {/* fallback for legacy browsers */}
      {/* Removed legacy logo.svg favicon fallback */}

      {/* See https://plausible.io/docs/plausible-script */}
      {/* TODO: update data-domain */}
      <script defer data-domain="vocdoni.io" src="https://plausible.io/js/script.js"></script>
    </>
  );
}
