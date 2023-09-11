import React, { useEffect, useState } from 'react';
import Header from './Components/Header/Header.jsx';
import ButtonsBar from './Components/ButtonsBar/ButtonsBar.jsx';
import ArrayBar from './Components/ArrayBar/ArrayBar.jsx';
import BubbleSort from './SortingAlgorithms/BubbleSort/BubbleSort.js';
import SelectionSort from './SortingAlgorithms/SelectionSort/SelectionSort.js';
import InsertationSort from './SortingAlgorithms/InsertationSort/InsertationSort.js';

import { changeBackgroundColor, resetTheArray } from './Utilities/helper.js';
import './App.css';
import MergeSort from './SortingAlgorithms/MergeSort/MergeSort.js';
import QuickSort from './SortingAlgorithms/QuickSort/QuickSort.js';
import LinearSerch from './SearchingAlgorithms/LinerSerch/LinearSerch.js';
import BinarySerch from './SearchingAlgorithms/BinarySerch/BinarySerch.js';

const originalBarColor = "#c4fffd" // light
function App() 
{
  // eslint-disable-next-line
  const [array , setArray] = useState([]);
  const [animationSpeed , setAnimationSpeed] = useState(50);
  const [arrayLength , setArrayLength] = useState(20);
  const [choiceBtn , setChoiceBtn] = useState(1);
  const [target , setTarget] = useState([]);
  //Only run the effect on the initial render:

  useEffect(()=>{
    generateNewArray();
  },[])

  useEffect(() => {
    
    // console.log("Updated array:", array);
     //setting the color to new array
     resetTheArray(array);
  }, [array]);

  function generateNewArray()
  {
     let randomArray =[];
     for(let i = 0; i<arrayLength; i++)
     {
        randomArray.push(randomIntFromInterval(5, 100))
     }

     //setting the new array
     setArray(randomArray);
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  //=================================SORTING ALGORITHMS=================================

  function bubbleSort()
  {
    BubbleSort(array,animationSpeed);

  }

  function selectionSort()
  {
    SelectionSort(array,animationSpeed);
  }

  function insertationSort()
  {
    InsertationSort(array,animationSpeed);
  }

  function mergeSort()
  {
    MergeSort(array,animationSpeed);
  }
  function quickSort()
  {
    QuickSort(array,animationSpeed);
  }

   //=================================SEARCHING ALGORITHMS=================================

   function linearSerch()
   {
      LinearSerch(array,target,animationSpeed);
   }
   
   function binarySerch()
   {
    BinarySerch(array,target,animationSpeed);
   }
  const handleButtonClick = (buttonId) => {
    setChoiceBtn(buttonId);

    if(buttonId === 1)
    {
        document.getElementById("btn2").classList.remove("active");
        document.getElementById("btn1").classList.add("active");
    }
    else if(buttonId === 2)
    {
      document.getElementById("btn1").classList.remove("active");
      document.getElementById("btn2").classList.add("active");
    }
  };

  return (
    <div className="main-container">
        <Header></Header>
        
        <div id='algorithmChoice'>
            <button className='btn-sorting active' id='btn1' onClick={()=> handleButtonClick(1)} >Sorting <br/>  Algorithms</button>
            <button className='btn-searching' id='btn2' onClick={()=> handleButtonClick(2)} >Searching Algorithms</button>
        </div>

        <ButtonsBar 
          generateNewArray={generateNewArray}
          choiceBtn = {choiceBtn}
          setTarget = {setTarget}
          target = {target}
          arrayLength={arrayLength}
          setArrayLength={setArrayLength}

          animationSpeed={animationSpeed}
          setAnimationSpeed={setAnimationSpeed}

          bubbleSort={bubbleSort}
          selectionSort={selectionSort}
          insertationSort={insertationSort}
          mergeSort = {mergeSort}
          quickSort = {quickSort}
          linearSerch={linearSerch}
          binarySerch={binarySerch}

        />

        <ArrayBar array={array}></ArrayBar>
    </div>
  );
}

export default App;
