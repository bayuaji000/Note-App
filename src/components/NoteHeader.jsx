import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

const NoteHeader = () => {
  return (
    <header>
      <h1>
        <Link to="/">Notes App</Link>
      </h1>
      <Navigation />
    </header>
  );
};

export default NoteHeader;
