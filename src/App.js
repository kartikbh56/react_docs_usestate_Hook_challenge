import { useState } from "react";
import { sculptureList } from "./data";

export default function App() {
  const [index, setIndex] = useState(0);
  const [toggledetails, settoggleDetails] = useState(false);
  function handleNext() {
    index < sculptureList.length - 1 && setIndex(index + 1);
  }
  function handlePrevious() {
    index > 0 && setIndex(index - 1);
  }
  function handleDetails() {
    settoggleDetails(!toggledetails);
  }
  let sculpture = sculptureList[index];
  return (
    <>
      <div style={{ whiteSpace: "nowrap" }}>
        <button
          onClick={handlePrevious}
          style={{ display: "inline-block", marginRight: "10px" }}
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          style={{ display: "inline-block", marginRight: "10px" }}
        >
          Next
        </button>
      </div>
      <h1>{sculpture.name}</h1>
      <h2>{sculpture.artist}</h2>
      <button onClick={handleDetails}>Show details</button>
      {toggledetails && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
      <div>
        {index + 1} of {sculptureList.length}
      </div>
    </>
  );
}
