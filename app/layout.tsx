import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mercy Gordon",
  description: "Worship music from the California Bay Area. Listen on Spotify, Apple Music, and YouTube.",
  openGraph: {
    title: "Mercy Gordon",
    description: "Worship music from the California Bay Area.",
    images: ["https://i.scdn.co/image/ab6761610000517411582769681c8d47f9758137"]
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght,SOFT,WONK@9..144,200..900,0..100,0..1&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
