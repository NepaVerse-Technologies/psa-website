import type { Metadata } from "next";
import "./globals.css";
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
        <NavBar />
        {children}
      </body>
    </html>
  );
}
