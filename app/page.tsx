"use client";

import { useState } from "react";

const mockData = [
  "A",
  "I",
  "Q",
  "Y",
  "B",
  "J",
  "R",
  "Z",
  "C",
  "K",
  "S",
  "Æ",
  "D",
  "L",
  "T",
  "Ø",
  "E",
  "M",
  "U",
  "Å",
  "F",
  "N",
  "V",
  "G",
  "O",
  "W",
  "H",
  "P",
  "X",
];

import React, { useEffect, useRef } from "react";

function WordleInput({ length, onWordChange }) {
  const [inputs, setInputs] = useState(Array(length).fill(""));
  const inputRefs = useRef([...Array(length)].map(() => React.createRef()));

  useEffect(() => {
    // This function is called whenever 'inputs' changes.
    const word = inputs.join("");
    onWordChange(word); // Pass the full word up to the parent component
  }, [inputs, onWordChange]);

  const handleChange = (index, event) => {
    const newInputs = [...inputs];
    newInputs[index] = event.target.value.slice(-1); // Capture last entered character
    setInputs(newInputs);

    // Focus logic as previously described
    if (event.target.value && index < length - 1) {
      inputRefs.current[index + 1].current.focus();
    }
    if (!event.target.value && index > 0) {
      inputRefs.current[index - 1].current.focus();
    }
  };

  useEffect(() => {
    inputRefs.current[0].current.focus();
  }, []);

  return (
    <div>
      {inputs.map((_, index) => (
        <input
          key={index}
          ref={inputRefs.current[index]}
          type="text"
          value={inputs[index]}
          onChange={(event) => handleChange(index, event)}
          maxLength="1"
          onKeyDown={(e) => {
            if (e.key === "Backspace" && inputs[index] === "" && index > 0) {
              e.preventDefault();
              inputRefs.current[index - 1].current.focus();
            }
          }}
          style={{
            width: "40px",
            marginRight: "5px",
            textAlign: "center",
            color: "black",
          }}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const [activeInput, setActiveInput] = useState(0);
  const [inputFields, setInputFields] = useState([
    { value: "", isSubmitted: false },
    { value: "", isSubmitted: false },
    { value: "", isSubmitted: false },
    { value: "", isSubmitted: false },
    { value: "", isSubmitted: false },
    { value: "", isSubmitted: false },
  ]);

  const handleWordChange = (word) => {
    console.log("Current word:", word); // Here you can do whatever you need with the word
  };

  return (
    <main>
      <div className="w-full h-full flex justify-center">
        <WordleInput length={6} onWordChange={handleWordChange} />
        {/* <div className="h-full w-1/2">

          <div className="grid gap-10">
            {inputFields.map((item, index) => (
              <input
                key={index}
                onClick={() => {
                  const newInputFields = [...inputFields];
                  if (!newInputFields[activeInput].isSubmitted) {
                    setActiveInput(index);
                  }
                }}
                className="border-4 w-full border-black"
                type="text"
                placeholder="Wolrde dansk"
                value={item ? item.value : "wordkle Danks"}
              />
            ))}
          </div>

          <div className="grid grid-rows-3 grid-flow-col mt-3 gap-1">
            {mockData.map((item, index) => (
              <button
                key={index}
                onClick={() => {
                  const newInputFields = [...inputFields];
                  if (newInputFields[activeInput].value.length < 6) {
                    newInputFields[activeInput].value += item;
                    setInputFields(newInputFields);
                  }
                }}
                className="border-2 bg-gray-300 flex justify-center items-center"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => {
                const newInputFields = [...inputFields];
                if (newInputFields[activeInput].value.length === 6) {
                  newInputFields[activeInput].isSubmitted = true;
                  setActiveInput(activeInput + 1);
                  setInputFields(newInputFields);
                } else {
                  alert("You need to fill out the input");
                }
              }}
            >
              Submit
            </button>
          </div>
         </div>
          */}
      </div>
    </main>
  );
}
