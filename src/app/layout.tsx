import type { Metadata } from "next";
import "./globals.css";
import { Mail, Phone } from "lucide-react";
import NavBar from "@/components/NavBar";

export const metadata: Metadata = {
  title: "PSA - Dark Unto Light",
  description: "Pinnacle Sprach Akademie",
  icons: {
    icon: "/PSA_LOGO.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`antialiased`}>
        {/* blue info bar START*/}
        <header
          id="info-header"
          className="bg-highlight-blue text-right py-2 text-white px-2 md:px-16 text-xs md:text-sm flex  md:flex-row justify-end gap-2 md:gap-12 items-end md:items-center"
        >
          <div className="flex items-center gap-1">
            <Mail size={16} className="mt-[2px]" />
            <span>example@abcd.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Phone size={16} className="mt-[2px]" />
            <span>021-460322</span>
          </div>
        </header>
        {/* blue info bar END*/}
        {/* Nav menu START */}
        <NavBar />
        {/* Nav menu END */}
        {children}
      </body>
    </html>
  );
}
