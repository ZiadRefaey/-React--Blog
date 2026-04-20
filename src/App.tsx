import { useState } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("theme") ?? "dark",
  );
  function changeThemeHandler() {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }
  return <div className={`${theme} `}></div>;
}

export default App;
