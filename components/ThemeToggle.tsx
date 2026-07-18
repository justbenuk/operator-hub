"use client";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "lucide-react";
import { useSyncExternalStore } from "react";
import { Button } from "@/components/ui/button";

function subscribeToHydration(callback: () => void) {
  callback();

  return () => { };
}

export default function ThemeToggle() {
  const mounted = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false,
  );
  const { theme, setTheme } = useTheme();

  if (!mounted) {
    return null;
  }

  return (
    <>
      {theme === "dark" ? (
        <Button
          onClick={() => setTheme("light")}
          variant={"ghost"}
          size={"icon"}
        >
          <SunIcon className="size-4" />
        </Button>
      ) : (
        <Button
          onClick={() => setTheme("dark")}
          variant={"ghost"}
          size={"icon"}
        >
          <MoonIcon className="size-4" />
        </Button>
      )}
    </>
  );
}
