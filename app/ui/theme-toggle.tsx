// app/ui/theme-toggle.tsx
"use client";

import { IoMdMoon, IoMdSunny } from "react-icons/io";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Avoid hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors mr-2"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <IoMdSunny className="h-5 w-5" />
      ) : (
        <IoMdMoon className="h-5 w-5" />
      )}
    </button>
  );
}
