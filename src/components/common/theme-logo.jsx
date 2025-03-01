"use client";
import { useTheme } from "next-themes";
import { ConversifyLogo, ConversifyWhiteLogo } from "@/constants/Icons";
import { useState, useEffect } from "react";

const ThemeLogo = ({ width, height }) => {
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Ensures we're on the client
  }, []);

  // Determine the actual theme (default to light if undefined)
  const currentTheme = theme === "system" ? systemTheme : theme;

  if (!mounted) return null; // Prevent SSR mismatch

  return (
    <span
      className={`w-[${width}] h-[${height}] transition-all group-hover:rotate-90 ease-in-out duration-300`}
    >
      {currentTheme === "dark" ? ConversifyWhiteLogo : ConversifyLogo}
    </span>
  );
};

export default ThemeLogo;
