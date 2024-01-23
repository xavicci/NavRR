import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Components/Pages/HomePage";
import { BlogPage } from "./Components/Pages/BlogPage";
import { ProfilePage } from "./Components/Pages/ProfilePage";
import { MenuPage } from "./Components/Pages/MenuPage";

function App() {
  return (
    <>
      <HashRouter>
        <MenuPage />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/*" element={<p>Not found</p>} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
