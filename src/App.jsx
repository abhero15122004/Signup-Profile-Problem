import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

export default function App() {
  const token = useSelector((state) => state.auth.token);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Navigate to={token ? "/profile" : "/signup"} replace />
        }
      />

      <Route
        path="/signup"
        element={token ? <Navigate to="/profile" replace /> : <Signup />}
      />

      <Route
        path="/profile"
        element={token ? <Profile /> : <Navigate to="/signup" replace />}
      />

      <Route
        path="*"
        element={
          <Navigate to={token ? "/profile" : "/signup"} replace />
        }
      />
    </Routes>
  );
}