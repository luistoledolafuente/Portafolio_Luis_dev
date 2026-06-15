import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { personalInfo } from "@/lib/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${personalInfo.name} | ${personalInfo.title}`,
    template: `%s | ${personalInfo.name}`,
  },
  description: personalInfo.description,
  metadataBase: new URL(personalInfo.siteUrl),
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.description,
    url: personalInfo.siteUrl,
    siteName: `${personalInfo.name} - Portfolio`,
    locale: "es_ES",
    type: "website",
    images: [
      {
        url: personalInfo.avatar,
        width: 1200,
        height: 630,
        alt: personalInfo.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.description,
    images: [personalInfo.avatar],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (!theme) {
                    theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  }
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                } catch(e) {}
              })();
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: personalInfo.name,
              jobTitle: personalInfo.title,
              description: personalInfo.description,
              url: personalInfo.siteUrl,
              sameAs: [personalInfo.github, personalInfo.linkedin],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
