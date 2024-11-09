// app/ui/nav/navbar.tsx
import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";

export default function Navbar() {
  return (
    <div className="fixed top-0 w-full z-50 px-4 sm:px-6 lg:px-8 py-4">
      <nav className="mx-auto max-w-5xl rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm shadow-lg">
        <div className="flex h-14 items-center justify-between px-6">
          <Link href="/" className="text-lg font-semibold">
            YourName
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/blog"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/spotify"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Spotify
            </Link>
            <Link
              href="/guestbook"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors"
            >
              Guestbook
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </div>
  );
}
