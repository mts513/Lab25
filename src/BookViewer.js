import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "./contexts/AuthContext";
/**
 * This function will show books based on a persons authorization
 *@function BookViewer
 * @param {object} props
 */
function BookViewer(props) {
  const auth = useContext(AuthContext);
  /**
   * This is a hook that will retreive books from the database
   * @function useGetBooks
   */
  function useGetBooks() {
    const [books, setBooks] = useState([]);
    useEffect(() => {
      const get = async () => {
        setBooks(await auth.getBooks(auth.token));
      };
      get();
    });
    return books;
  }
  const books = useGetBooks();
  return (
    <div className="books">
      {books.map((val, ind) => {
        let authClass = "";
        if (val.auth) {
          authClass = val.auth.includes("admin") ? "admin" : "";
          authClass = val.auth.includes("editor") ? "editor" : "";
          authClass = val.auth.includes("user") ? "user" : "";
        }
        return (
          <div key={ind} className={authClass}>
            <p>Title: {val.title}</p>
            <p>Author: {val.author}</p>
          </div>
        );
      })}
    </div>
  );
}
export default BookViewer;
