import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Fraunces } from "next/font/google";
import { SmoothScrollProvider } from "@/components/providers/scroll-provider";
import { CustomCursor } from "@/components/cursor/CustomCursor";
import { Navbar } from "@/components/navigation/Navbar";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Mawj Digital Agency | Riding the Wave of Digital Excellence",
  description:
    "Award-winning web design & development studio based in Casablanca. We craft digital waves that move the world.",
  keywords: ["web design", "web development", "digital agency", "Casablanca", "creative agency"],
  authors: [{ name: "Mawj Digital Agency" }],
  openGraph: {
    title: "Mawj Digital Agency",
    description: "Riding the Wave of Digital Excellence",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1F44",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ocean text-pearl overflow-x-hidden">
        <SmoothScrollProvider>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main className="flex-1">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
