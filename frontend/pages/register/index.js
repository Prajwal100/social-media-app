import Link from "next/link";
export default function Register() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social App</h3>
          <span className="loginDesc">
            Connect with your friends all over the world.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox">
            <input placeholder="Username" required className="loginInput" />
            <input
              placeholder="Email"
              required
              className="loginInput"
              type="email"
            />
            <input
              placeholder="Password"
              required
              className="loginInput"
              type="password"
              minLength="6"
            />
            <input
              placeholder="Password Again"
              required
              className="loginInput"
              type="password"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <span className="loginForgot">Already have an account?</span>

            <Link href="/login">
              <button className="loginRegisterButton">Log into Account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
