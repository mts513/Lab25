import React, { useState } from "react";
import fetch from "node-fetch";
export const AuthContext = React.createContext();
/**
 * This is the AuthProvider that provides Context for the rest of the functions
 * @function AuthProvider
 * @param {object} props
 */
function AuthProvider(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
    email: "",
    token: "",
    role: "",
    roleEntry: "",
    /**
     *
     * @method update
     * @param {} key
     * @param {} val
     */
    update: (key, val) => {
      setState(state => {
        let newState = { ...state };
        newState[key] = val;
        return newState;
      });
    },
    clear: () => {
      setState({ ...state });
    },
    /**
     * Checks a user's credentials against the database
     * @method signin
     * @param {string} username
     * @param {string} password
     *
     */
    signin: async (username, password) => {
      const basicAuth =
        "Basic " + Buffer.from(username + ":" + password).toString("base64");
      const api = "http://localhost:3000/signin";

      let response = await fetch(api, {
        method: "POST",
        headers: {
          Authorization: basicAuth
        }
      });
      let body = await response.json();
      setState(state => ({
        ...state,
        token: body.token,
        role: body.role,
        password: ""
      }));
      console.log(body);
    },
    /**
     * Signs up a new user and inputs to the database
     * @method signup
     * @param {} username
     * @param {} password
     * @param {} email
     * @param {} role
     */
    signup: async (username, password, email, role) => {
      const api = "http://localhost:3000/signup";
      const body = {
        username: username,
        password: password,
        email: email,
        role: role
      };

      let response = await fetch(api, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        }
      });
      let json = await response.json();
      setState(state => ({
        ...state,
        token: json.token,
        role: json.role,
        password: ""
      }));
    },
    /**
     * This method will get books from the database
     * @method getBooks
     * @param {} token
     */
    getBooks: async token => {
      const api = "http://localhost:3000/books";
      let response = await fetch(api, {
        method: "GET",
        headers: {
          Authorization: token
        }
      });
      let json = await response.json();
      return json;
    },
    /**
     * This method will add books to the database
     * @method addBook
     * @param {} title
     * @param {} author
     * @param {} role
     * @param {} token
     */
    addBook: async (title, author, role, token) => {
      const api = "http://localhost:3000/books";
      const body = {
        title: title,
        author: author,
        auth: role
      };
      console.log(body);
      await fetch(api, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          Authorization: token,
          "Content-Type": "application/json"
        }
      });
    }
  });
  return (
    <AuthContext.Provider value={state}>{props.children}</AuthContext.Provider>
  );
}
export default AuthProvider;
