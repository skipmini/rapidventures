import type { Metadata } from "next";
import { Prompt } from "next/font/google";
import "./globals.css";

// Figma design uses "Sukhumvit Set" (a proprietary AIS font, not publicly
// distributed). Prompt is a Google Font that closely matches its geometric,
// rounded-sans look and fully supports Thai + Latin glyphs. Swap this out
// for the licensed Sukhumvit Set font files if/when you have them.
const prompt = Prompt({
  variable: "--font-prompt",
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "RapidVentures",
  description:
    "ปลดล็อกทุกขีดจำกัดและสเกลธุรกิจ SME ของคุณด้วยทีมคู่คิดด้านเทคโนโลยี",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${prompt.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-page text-foreground">
        {children}
      </body>
    </html>
  );
}
