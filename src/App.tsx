import { HashRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./Components/Pages/HomePage";
import { BlogPage } from "./Components/Pages/BlogPage";
import { ProfilePage } from "./Components/Pages/ProfilePage";
import { MenuPage } from "./Components/Pages/MenuPage";
import { BlogPost } from "./Components/Pages/BlogPost";
import LoginPage from "./Components/Pages/LoginPage";
import LogOutPage from "./Components/Pages/LogOutPage";
import { AuthProvider } from "./Components/Pages/auth";

function App() {
  return (
    <>
      <HashRouter>
        <AuthProvider>
          <MenuPage />
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/blog" element={<BlogPage />}>
              <Route path=":slug" element={<BlogPost />} />
            </Route>

            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<LogOutPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/*" element={<p>Not found.</p>} />
          </Routes>
        </AuthProvider>
      </HashRouter>
    </>
  );
}

export default App;
