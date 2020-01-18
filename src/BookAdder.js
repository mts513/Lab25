import React, { useState, useContext } from "react";
import FormInput from "./forminput";
import { AuthContext } from "./contexts/AuthContext";
/**
 * This function will add books to the database
 * @function BookAdder
 * @param {object} props
 */
function BookAdder(props) {
  const auth = useContext(AuthContext);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [roleEntry, setRoleEntry] = useState("");

  return (
    <div>
      <h3>Add a Book</h3>
      <FormInput
        type="text"
        label="title"
        value={title}
        id="title"
        onChange={e => {
          setTitle(e.target.value);
        }}
      />
      <FormInput
        type="text"
        label="author"
        id="author"
        value={author}
        onChange={e => {
          setAuthor(e.target.value);
        }}
      />
      <FormInput
        type="text"
        label="role"
        id="roleEntry"
        value={roleEntry}
        onChange={e => {
          setRoleEntry(e.target.value);
        }}
      />
      <button
        className="btn btn-primary btn-lg"
        onClick={() => {
          let role = [];
          if (roleEntry === "user") {
            role = ["user", "editor", "admin"];
          }
          if (roleEntry === "editor") {
            role = ["editor", "admin"];
          }
          if (roleEntry === "admin") {
            role = ["admin"];
          }
          auth.addBook(title, author, role, auth.token);
        }}
      >
        Save
      </button>
    </div>
  );
}
export default BookAdder;
