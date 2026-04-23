import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/Home";
import PostPage from "./Pages/PostPage";
import Authentication from "./Pages/Authentication";
import CreatePostPage from "./Pages/CreatePostPage";

function App() {
  const [theme, setTheme] = useState<string | null>(
    localStorage.getItem("theme") ?? "dark",
  );
  function handleToggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  }
  return (
    <BrowserRouter>
      <div
        className={`${theme} bg-background min-w-full min-h-screen text-mute `}
      >
        <Header theme={theme} handleToggleTheme={handleToggleTheme} />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<PostPage />} path="/posts/:id" />
          <Route element={<CreatePostPage />} path="/create-post" />
          <Route element={<Authentication />} path="/auth" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
