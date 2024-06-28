import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import StairTransition from "@/components/StairTransition";
import ToastProvider from "@/components/ToastProvider";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "Amine Elkhalidy - Portfolio",
  description:
    "I am a Full Stack Web Developer specialized in creating stunning and user-friendly websites. Explore my work, where I combine design and technology to build responsive, modern web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.variable}>
        <Header />
        <ToastProvider />
        <StairTransition />
        {children}
      </body>
    </html>
  );
}
