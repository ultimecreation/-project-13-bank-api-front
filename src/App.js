import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequireAuth from "./components/RequireAuth";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import Logout from "./pages/Logout";
import Signin from "./pages/Signin";
import UserDisplayProfile from "./pages/UserDisplayProfile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/logout" element={<Logout />}/>
          <Route path="/sign-in" element={<Signin />}/>
          <Route path="/profile" element={<RequireAuth><UserDisplayProfile/></RequireAuth>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
