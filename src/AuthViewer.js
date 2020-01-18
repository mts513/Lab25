import React, { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";
/**
 * This is our Auth viewer that has logic that will determine if a user is authorized or not to view content
 * @function AuthViewer
 * @param {object} props
 */
function AuthViewer(props) {
  const auth = useContext(AuthContext);
  let shouldShow = auth.token !== "";
  if (props.role) {
    shouldShow &= auth.role === props.role;
  }
  if (props.invert) shouldShow = !shouldShow;
  return shouldShow ? <div>{props.children}</div> : "";
}

export default AuthViewer;
