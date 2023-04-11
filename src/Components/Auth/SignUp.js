export const SignUp = () => {
  return (
    <div>
      <h1>Sign Up</h1>
      <form>
        <input type="email" name="email" id="email" placeholder="email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Abc123!*"
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};
