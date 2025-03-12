import type { Metadata } from "next";

import { League_Spartan } from "next/font/google";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["100", "200", "300","400", "500", "600", "700", "800", "900"],
  variable: "--font-principal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={leagueSpartan.className}>
      <body>
        {children}
      </body>
    </html>
  );
}


