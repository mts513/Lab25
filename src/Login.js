import React, { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
import FormInput from "./forminput";
import AuthViewer from "./AuthViewer";
/**
 * This is the login function that displays the login form and takes user input
 * @function Login
 * @param {object} props
 */
function Login(props) {
  const auth = useContext(AuthContext);
  console.log(auth);
  return (
    <div className="form-group">
      <AuthViewer invert={true}>
        <h1>Login</h1>
        <FormInput
          placeholder="Username"
          type="text"
          label="Username"
          id="username"
          value={auth.username}
          onChange={e => {
            auth.update("username", e.target.value);
          }}
        />
        <FormInput
          type="text"
          label="Password"
          id="password"
          value={auth.password}
          onChange={e => {
            auth.update("password", e.target.value);
          }}
        />
        <FormInput
          type="text"
          label="Email"
          id="email"
          value={auth.email}
          onChange={e => {
            auth.update("email", e.target.value);
          }}
        />
        <FormInput
          type="text"
          label="Role"
          id="role"
          value={auth.roleEntry}
          onChange={e => {
            auth.update("roleEntry", e.target.value);
          }}
        />
        <button
          className="btn btn-primary btn-lg"
          onClick={() => {
            auth.signin(auth.username, auth.password);
          }}
        >
          SIGN IN
        </button>
        <button
          className="btn btn-primary btn-lg"
          onClick={() => {
            auth.signup(
              auth.username,
              auth.password,
              auth.email,
              auth.roleEntry
            );
          }}
        >
          SIGN UP
        </button>
      </AuthViewer>
      <AuthViewer>
        <div>
          {" "}
          <h1>Logged in</h1>
          <button className="btn btn-primary btn-lg" onClick={auth.clear}>
            log out
          </button>
        </div>
      </AuthViewer>
    </div>
  );
}

export default Login;
