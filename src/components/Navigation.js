import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  return (
    <div className='navigation'>
      <ul>
        <li>
          <Link to='/'>
            <h3>Home</h3>
          </Link>
        </li>
        <li>
          <Link to='/movielist'>
            <h3>MovieList</h3>
          </Link>
        </li>
        <li>
          <Link to='/contact'>
            <h3>Contact</h3>
          </Link>
        </li>
      </ul>
    </div>
  );
};