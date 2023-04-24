import { Link, Outlet } from "react-router-dom";

export const Header = () => {
  return (
    <>
      <nav>
        <h1>HiveMind</h1>
        <Link to="/">Dashboard</Link>
        <Link to="tools">Tools</Link>
        <Link to="about">About</Link>
        <Link to="faq">FAQ</Link>
        <Link to="admin">Admin</Link>
        <Link to="signIn">SignIn</Link>
        <Link to="signUp">SignUp</Link>
        <span>SignOut</span>
      </nav>
      <Outlet />
    </>
  );
};
