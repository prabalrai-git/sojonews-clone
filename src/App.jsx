import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import {
  Bookmarks,
  Category,
  Home,
  Layout,
  Login,
  News,
  NotFound,
} from "./pages";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const darkMode = useSelector((state) => state.darkMode.value);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#2A2D35" : "white";
    document.body.style.color = darkMode ? "white" : "black";
  }, [darkMode]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/news/:id" element={<News />} />
          <Route path="/news/category/:id" element={<Category />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
