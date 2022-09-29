import React, { Component } from "react";

const MoviesForm = ({ match }) => {
  return <h1>Movies Form {match.params.id}</h1>;
};

export default MoviesForm;
