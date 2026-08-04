import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// Poppins is the single site typeface — body copy through to display headings.
// Regular/medium weights are included for body text alongside the bold weights.
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.geniianalytics.com"),
  title: {
    default:
      "Genii — Beyond Automated QA | Root-Cause Intelligence for Contact Centres",
    template: "%s | Genii",
  },
  description:
    "Genii takes contact centres from guessing to knowing what truly drives performance. We turn QA into agent, operational, customer and business intelligence — with evidence, workflow and measurable outcomes.",
  keywords: [
    "contact centre QA",
    "AI quality assurance",
    "root cause intelligence",
    "interaction analytics",
    "customer experience",
    "Genii",
  ],
  openGraph: {
    title: "Genii — Beyond Automated QA",
    description:
      "We don't just score conversations. We turn QA into agent, operational, customer and business intelligence.",
    type: "website",
    siteName: "Genii",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} h-full antialiased`}
    >
      <head>
        {/* Without JS, scroll-reveal elements must still be fully visible. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
