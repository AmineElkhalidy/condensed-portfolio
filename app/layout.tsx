import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import ToastProvider from "@/components/ToastProvider";
import Preloader from "@/components/Preloader";

const rubik = Rubik({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-primary",
});

export const metadata: Metadata = {
  title: "Amine Elkhalidy - Portfolio",
  description:
    "I am a Full Stack Web Developer specialized in creating stunning and user-friendly websites. Explore my work, where I combine design and technology to build responsive, modern web experiences.",

  openGraph: {
    type: "website",
    url: "https://amineelkhalidy.com",
    title: "Amine Elkhalidy - Portfolio",
    siteName: "Amine Elkhalidy's Portfolio",
    description:
      "I am a Full Stack Web Developer specialized in creating stunning and user-friendly websites. Explore my work, where I combine design and technology to build responsive, modern web experiences.",
    images: [
      "https://github.com/AmineElkhalidy/condensed-portfolio/blob/main/public/assets/meta.jpg",
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://amineelkhalidy.com",
    creator: "@amineelkhalidy",
    title: "Amine Elkhalidy - Portfolio",
    description:
      "I am a Full Stack Web Developer specialized in creating stunning and user-friendly websites. Explore my work, where I combine design and technology to build responsive, modern web experiences.",
    images: [
      "https://github.com/AmineElkhalidy/condensed-portfolio/blob/main/public/assets/meta.jpg",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={rubik.variable}>
        <Preloader>
          <Header />
          <ToastProvider />
          <main className="w-full h-full overflow-hidden">{children}</main>
        </Preloader>
      </body>
    </html>
  );
}
