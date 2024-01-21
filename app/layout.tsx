import type { Metadata } from "next";
import { Stint_Ultra_Expanded } from "next/font/google";
import "./globals.css";
import "animate.css";
import "aos/dist/aos.css"; 
const inter = Stint_Ultra_Expanded({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neubrutalism Portfolio By Rohan Verma",
  description:
    "A simple neubrutalism-style portfolio website theme to create a visually appealing and responsive portfolio to showcases your achievements.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lemonade">
      <body className={inter.className}>
        {children}
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>AOS.init();</script>
      </body>
    </html>
  );
}
