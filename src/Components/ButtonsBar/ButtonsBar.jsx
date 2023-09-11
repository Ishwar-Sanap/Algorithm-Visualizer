import './ButtonsBar.css'

import ArrayLengthSlider from '../Sliders/Length/ArrayLengthSlider';
import AnimationSpeedSlider from '../Sliders/Speed/AnimationSpeedSlider';

function ButtonsBar(props) {
    const generateNewArray = props.generateNewArray;
    const choiceBtn = props.choiceBtn;
    const setTarget = props.setTarget;
    const target = props.target;

    const arrayLength = props.arrayLength;
    const setArrayLength = props.setArrayLength;
    
    const animationSpeed = props.animationSpeed;
    const setAnimationSpeed = props.setAnimationSpeed;
    
    const bubbleSort = props.bubbleSort;
    const selectionSort = props.selectionSort;
    const insertationSort = props.insertationSort;
    const mergeSort = props.mergeSort;
    const quickSort = props.quickSort;

    const linearSerch = props.linearSerch;
    const binarySerch = props.binarySerch;


    // if button 1 is cliked then render sorting algorithms
    // if button 2 is clicked then render serching algoritms

    function targetChangeHandler(event)
    {
        setTarget(event.target.value);
        // console.log("target is ",event.target.value);
    }
    return (
        <div className='container'>

            <button id='generateNew' onClick={generateNewArray}>Generate <br /> New Array</button>

            <div className='size-speed'>

                <ArrayLengthSlider arrayLength= {arrayLength} setArrayLength={setArrayLength}/>
                <AnimationSpeedSlider animationSpeed={animationSpeed} setAnimationSpeed={setAnimationSpeed} />

            </div>

            {(choiceBtn === 1)? 

            <div className='algorithams-container'>
                <button className='btn' id='BubbleSortBtn' onClick={bubbleSort}>Bubble <br /> Sort</button>
                <button className='btn' id='SelectionSortBtn' onClick={selectionSort}>Selection <br /> Sort</button>
                <button className='btn' id='InsertationSortBtn' onClick={insertationSort}>Insertation <br /> Sort</button>
                <button className='btn' id='MergeSortBtn' onClick={mergeSort}>Merge <br /> Sort</button>
                <button className='btn' id='QuickSortBtn' onClick={quickSort}>Quick <br /> Sort</button>
            </div>:

            <div className='serching-Algo-container'>


                <div>
                    <input type='Number' id='take-input' placeholder='Find' onChange={targetChangeHandler} value={target}></input>
                    <div id='searchingResult' ></div>
                </div>

                <div> 
                    <button className='btn' id='linearBtn' onClick={linearSerch}>Linear<br />Search</button>
                    <button className='btn' id='binaryBtn' onClick={binarySerch}>Binary <br />Search</button>
                </div>
                
            </div>
            }
        </div>
    )
}

export default ButtonsBar;