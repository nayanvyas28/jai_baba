import type { Metadata } from "next";
import { Inter, Poppins, Bebas_Neue, Anton, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
});

const oswald = Oswald({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

export const metadata: Metadata = {
  title: "Jaybaba Enterprises | Premium Event Production",
  description: "Luxury sound, lighting, and event production services. Experience the future of events with Jaybaba Enterprises.",
};

import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${poppins.variable} ${bebas.variable} ${anton.variable} ${oswald.variable} antialiased`}
      >
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}
