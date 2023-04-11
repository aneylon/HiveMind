import { SignIn } from "./Components/Auth/SignIn";
import { SignUp } from "./Components/Auth/SignUp";
import { News } from "./Components/News/News";

function App() {
  return (
    <div>
      <h1>HiveMind</h1>
      <SignIn />
      <SignUp />
      <News />
    </div>
  );
}

export default App;
