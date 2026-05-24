import "./globals.css";

export const metadata = {
  title: {
    default: "Yasiru Nisal | Full-Stack Developer",
    template: "%s | Yasiru Nisal",
  },
  description:
    "Futuristic portfolio of Yasiru Nisal - Full-Stack Developer, AI Enthusiast, Software Engineering Undergraduate.",
  applicationName: "Yasiru Nisal Portfolio",
  authors: [{ name: "Yasiru Nisal" }],
  creator: "Yasiru Nisal",
  keywords: [
    "Yasiru Nisal",
    "Full-Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Cypex Technologies",
  ],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/yk.ico", type: "image/x-icon" },
      { url: "/yk.png", type: "image/png", sizes: "320x320" },
    ],
    shortcut: "/yk.ico",
    apple: [{ url: "/yk.png", type: "image/png", sizes: "320x320" }],
  },
  openGraph: {
    title: "Yasiru Nisal | Full-Stack Developer",
    description:
      "Futuristic portfolio of Yasiru Nisal - Full-Stack Developer, AI Enthusiast, Software Engineering Undergraduate.",
    type: "website",
    siteName: "Yasiru Nisal Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Yasiru Nisal | Full-Stack Developer",
    description:
      "Full-Stack Developer, AI Enthusiast, and Software Engineering Undergraduate.",
  },
};

export const viewport = {
  colorScheme: "dark",
  themeColor: "#020617",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
