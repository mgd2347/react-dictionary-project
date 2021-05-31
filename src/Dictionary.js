import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  
  function handleResponse(response) {
    console.log(response.data);
  }
  function search(event) {
    event.preventDefault();
    let apiKey = `https://api.dictionaryapi.dev/api/v2/entries/en_GB/${keyword}`;
    axios.get(apiKey).then(handleResponse);
  }
  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form className="search" onSubmit={search}>
        <input type="search" placeholder="Search a word..." onChange={handleChange} />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}