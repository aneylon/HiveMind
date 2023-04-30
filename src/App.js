import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Dashboard } from "./Components/Dashboard/Dashboard";
import { NotFound } from "./Components/NotFound/NotFound";
import { About } from "./Components/About/About";
import { FAQ } from "./Components/About/FAQ";
import { Header } from "./Components/Layout/Header";
import { Tools } from "./Components/Tools/Tools";
import { Admin } from "./Components/Admin/Admin";
import { AuthTabs } from "./Components/Auth/AuthTabs";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Dashboard />} />
            <Route path="tools" element={<Tools />} />
            <Route path="about" element={<About />} />
            <Route path="faq" element={<FAQ />}>
              <Route path=":subject" element={<FAQ />} />
            </Route>
            <Route path="admin" element={<Admin />} />
            <Route path="signIn" element={<AuthTabs />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
