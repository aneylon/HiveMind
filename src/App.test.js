import { render, screen } from "@testing-library/react";
import App from "./App";
import { AuthContextProvider } from "./Context/AuthContext";

test("renders learn react link", () => {
  render(
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
  const titleElement = screen.getByText(/hivemind/i);
  expect(titleElement).toBeInTheDocument();
});
