import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="login-container">

      <div className="login-box">

        <h2 className="login-title">Login</h2>

        <input
          type="text"
          placeholder="Username"
          className="login-input"
        />

        <input
          type="password"
          placeholder="Password"
          className="login-input"
        />

        <button className="login-button">
          Login
        </button>

      </div>

    </div>
  );
}

export default LoginForm;