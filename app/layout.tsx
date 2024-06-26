import type { Metadata } from "next";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import "./globals.css";

import { Analytics } from "@vercel/analytics/react";

import { background } from "@/public";

import NAVBAR from "@/components/navbar";
import FOOTER from "@/components/footer";
import PAGEWRAPPER from "./pageWrapper";

const montserrat = Montserrat({ subsets: ["cyrillic-ext"] });

export const metadata: Metadata = {
  title: "Pravah | SKIT Jaipur",
  description: "Website for Pravah 2024",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="w-full min-h-screen object-cover object-center fixed -z-50">
          <Image
            src={background}
            alt="background"
            className="w-full min-h-screen opacity-30 "
          />
        </div>
        <div>
          <PAGEWRAPPER>
            <NAVBAR />
            {children}
            <FOOTER />
          </PAGEWRAPPER>
        </div>
      </body>
    </html>
  );
}
