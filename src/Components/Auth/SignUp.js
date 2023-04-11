export const SignUp = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <input type="email" name="email" id="signUpEmail" placeholder="email" />
        <input
          type="password"
          name="password"
          id="signUpPassword"
          placeholder="Abc123!*"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
