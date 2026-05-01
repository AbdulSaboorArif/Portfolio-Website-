import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdul Saboor Arif | Full-Stack Developer & Agentic AI Specialist",
  description: "Full-Stack Developer specializing in Agentic AI, Web Development, Python, and modern automation technologies. Building intelligent web applications with Next.js, React, FastAPI, and AI agents.",
  keywords: ["Full-Stack Developer", "Agentic AI", "Web Development", "Python", "Next.js", "React", "FastAPI", "AI Chatbots", "Automation"],
  authors: [{ name: "Abdul Saboor Arif" }],
  openGraph: {
    title: "Abdul Saboor Arif | Full-Stack Developer & Agentic AI Specialist",
    description: "Building the agentic web one system at a time",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" className={`${inter.variable} h-full`} suppressHydrationWarning>
      <body className="min-h-full bg-white dark:bg-slate-950 text-gray-900 dark:text-white transition-colors" suppressHydrationWarning>
        {/*
          Script to prevent flash of unstyled theme on page load.
          This runs BEFORE React hydration, so the theme is applied immediately.
          Without this, users would see a flash of the wrong theme when the page loads.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const savedTheme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const theme = savedTheme || (prefersDark ? 'dark' : 'light');

                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              })();
            `,
          }}
        />
        {children}
      </body>
    </html>
  );
}
