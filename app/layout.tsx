import type { Metadata } from "next";
import { Header, Footer } from "@/components/chrome";
import "./globals.css";
const origin = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
export const metadata: Metadata = {
  metadataBase: new URL(origin),
  title: "Ojasvi Energy Group — Powering Progress. Shaping Tomorrow.",
  description:
    "Meet Ojasvi Energy Group: our executive summary, company positioning, mission, vision, and core principles. Headquartered in Pekajangan, Central Java, Indonesia.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "Ojasvi Energy Group",
    title: "Ojasvi Energy Group — Powering Progress. Shaping Tomorrow.",
    images: ["/energy-landscape.svg"],
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Ojasvi Energy Group",
              url: origin,
              address: {
                "@type": "PostalAddress",
                addressLocality: "Pekajangan",
                addressRegion: "Central Java",
                addressCountry: "ID",
              },
            }).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
