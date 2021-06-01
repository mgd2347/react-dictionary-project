import React from "react";
import "./Meaning.css"

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h4 className="part-of-speech">{props.meaning.partOfSpeech}</h4>
      {props.meaning.definitions.map((definition, index) => {
        return (
          <div key={index}>
            <p>{definition.definition}</p>
            <p className="example">Example: <em>{definition.example}</em></p>
          </div>
        );
      })}
    </div>
  );
}