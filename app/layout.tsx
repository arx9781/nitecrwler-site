// app/layout.tsx
import { Geist } from "next/font/google";
import { Providers } from "./providers";
import Navbar from "./ui/nav/navbar";
import "@/app/styles/globals.css";

const geist = Geist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={geist.className}>
        <Providers attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="pt-16 min-h-screen bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100">
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
