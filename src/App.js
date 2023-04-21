import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { SignIn } from "./Components/Auth/SignIn";
import { SignUp } from "./Components/Auth/SignUp";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { NotFound } from "./Components/NotFound/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <nav>
          <h1>HiveMind</h1>
          <Link to="/">Dashboard</Link>
          <Link to="/signIn">SignIn</Link>
          <Link to="/signUp">SignUp</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
