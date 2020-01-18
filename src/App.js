import React from "react";
import "./styles/styles.scss";
import AuthProvider from "./contexts/AuthContext";
import Login from "./Login";
import AuthViewer from "./AuthViewer";
import BookViewer from "./BookViewer";
import BookAdder from "./BookAdder";
/**
 * This is the primary app function
 * @function App
 */
export default function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Login />
        <AuthViewer>
          <h1>Welcome</h1>
          <BookViewer />
        </AuthViewer>
        <AuthViewer role="admin">
          <BookAdder />
        </AuthViewer>
      </AuthProvider>
    </div>
  );
}
