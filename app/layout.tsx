import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CV | Portfolio",
  description: "Personal CV website",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "CV | Portfolio",
    description: "Personal CV website",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" className="bg-ink-950">
      <body className="min-h-screen bg-ink-950 text-paper-100 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
