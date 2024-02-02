"use client"

import { useState } from "react";

const mockData =[
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
  "X"
]


const numberedArray = Array.from({ length: 6 }, (_, i) => i + 1);

export default function Home() {

  const [activeInput, setActiveInput] = useState(0)
  const [inputFields, setInputFields] = useState([
    {value:"", isSubmitted:false},
    {value:"", isSubmitted:false},
    {value:"", isSubmitted:false},
    {value:"", isSubmitted:false},
    {value:"", isSubmitted:false},
    {value:"", isSubmitted:false},

  ])

 

  return (
    <main>
      <div className="w-full h-full flex justify-center">
        <div className="h-full w-1/2">

        <div className="grid gap-10">          
          {inputFields.map((item, index) => (
            <input key={index}
            onClick={()=> {

              const newInputFields = [...inputFields]
              if(!newInputFields[activeInput].isSubmitted){
                setActiveInput(index)
              }
              
            }
            
            } className="border-4 w-full border-black" type="text"  placeholder="Wolrde dansk" value={item?item.value:"wordkle Danks"}/>

          ))}
        </div> 

        <div className="grid grid-rows-3 grid-flow-col mt-3 gap-1">
          {mockData.map((item, index) => (
            <button key={index} 
            onClick={()=> {
              const newInputFields = [...inputFields]
              if(newInputFields[activeInput].value.length < 6){
                newInputFields[activeInput].value += item
                setInputFields(newInputFields)
              }
            }}
            className="border-2 bg-gray-300 flex justify-center items-center">
              {item}
            </button>
          ))}
          <button  onClick={
            ()=>{
              const newInputFields = [...inputFields]
              if(newInputFields[activeInput].value.length === 6){
                newInputFields[activeInput].isSubmitted=true
                setActiveInput(activeInput+1)
                setInputFields(newInputFields)
              }
              else{
                alert("You need to fill out the input")
              }
          }}>Submit</button>
        </div>
      </div>

      </div>
    </main> );
}
