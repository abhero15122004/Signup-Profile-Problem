import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../store/authSlice";

export default function Profile() {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogout() {
    dispatch(logout());
    navigate("/signup", { replace: true });
  }

  if (!user) return null;

  return (
    <div className="page">
      <header className="header">
        <span>Header</span>
        <nav>
          <a href="/signup">Signup</a>
          <a href="/profile">Profile</a>
        </nav>
      </header>

      <main className="profile-content">
        <h1>Profile</h1>
        <p>Full Name : {user.fullName}</p>
        <p>Email : {user.email}</p>
        <p>Password : {"•".repeat(user.password.length)}</p>

        <button onClick={handleLogout}>Logout</button>
      </main>
    </div>
  );
}