import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Shandeep Jayapalan | Software Engineer Portfolio",
  description:
    "Software Engineer specialized in full-stack development, cloud solutions, and AI integration. Explore my projects in React, Node.js, Spring Boot, and Microsoft Azure.",
  keywords: [
    "Shandeep Jayapalan",
    "Software Engineer Portfolio",
    "Full-Stack Developer",
    "Web Developer",
    "React Developer",
    "Node.js Developer",
    "Java Developer",
    "Next.js Portfolio",
    "Cloud Engineer",
    "Spring Boot",
    "Azure Deployment",
    "AI Developer",
  ],
  authors: [{ name: "Shandeep Jayapalan", url: "https://shandeep.site" }],
  creator: "Shandeep Jayapalan",
  robots: "index, follow",
  openGraph: {
    title: "Shandeep Jayapalan | Software Engineer",
    description:
      "Explore the portfolio of Shandeep Jayapalan — showcasing full-stack projects, cloud deployments, and intelligent solutions.",
    url: "https://shandeep.site",
    siteName: "Shandeep Jayapalan Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shandeep Jayapalan | Software Engineer Portfolio",
    description:
      "Full-stack software engineer with expertise in modern web development, cloud platforms, and AI-driven tools.",
    creator: "@yourtwitterhandle", 
  },
};



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="HWlHGFxTFzRFWYppoP5cFcuzDGVHLDdWAJMkyFf1A2E" />
      <head />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
