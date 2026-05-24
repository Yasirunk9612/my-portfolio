import "./globals.css";

export const metadata = {
  title: "Yasiru Nisal | Full-Stack Developer",
  description:
    "Futuristic portfolio of Yasiru Nisal - Full-Stack Developer, AI Enthusiast, Software Engineering Undergraduate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
