import { useContext, useEffect } from "react";

import { Context } from "@/Context/ContextProvider";

export * from "./ToggleTheme";

export default function Index() {
  const { theme, setTheme } = useContext(Context);

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
      .matches
      ? "dark"
      : "light";
    const isDarkTheme =
      userTheme === "dark-github" || (!userTheme && systemTheme === "dark");

    document.documentElement.classList.toggle("dark", isDarkTheme);
    setTheme(isDarkTheme ? "dark" : "light");
  }, [setTheme]);

  const themeSwitch = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    document.documentElement.classList.toggle("dark");
    setTheme(newTheme);
  };

  return { themeSwitch };
}
