export const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <form>
        <input type="email" name="email" id="signInEmail" placeholder="email" />
        <input
          type="password"
          name="password"
          id="signInPassword"
          placeholder="Abc123!*"
        />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};
