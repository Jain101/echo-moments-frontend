import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import LoginPage from "./pages/LoginPage";
import { SignupPage } from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import EchoMoments from "./components/test";
import Pricings from "./pages/Pricings";
import Home from "./pages/Home";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    localStorage.getItem("authToken") ? true : false
  );
  // useEffect(() => {
  //   const token = localStorage.getItem("authToken");
  //   console.log("toekn", token);
  //   if (token) {
  //     // navigate("/");
  //     setIsAuthenticated(true);
  //     // <Navigate to="/" replace />;
  //   }
  // }, [isAuthenticated]);
  // console.log("isAuthenticated", isAuthenticated);

  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6366f1",
          borderRadius: 6,
        },
      }}
    >
      {/* pass this state down to all the components, I think I should use ContextAPI here */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/posts"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route
            path="/signup"
            element={<SignupPage setIsAuthenticated={setIsAuthenticated} />}
          />
          <Route path="/test" element={<EchoMoments />} />
          <Route path="/myposts" element={<h1>My Posts</h1>} />
          <Route path="/pricings" element={<Pricings />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
};

export default App;
