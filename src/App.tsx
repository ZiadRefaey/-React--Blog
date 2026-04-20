import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home";

function App() {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("theme") ?? "dark",
  );
  function changeThemeHandler() {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }
  return (
    <BrowserRouter>
      <div className={`${theme} bg-background min-w-full min-h-screen `}>
        <Header />
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
