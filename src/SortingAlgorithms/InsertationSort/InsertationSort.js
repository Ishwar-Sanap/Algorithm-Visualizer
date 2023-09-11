import getInsertationSortAnimations from "./getInsertationSortAnimations";
import {changeBackgroundColor,disableButtons,enableButtons,swapBars} from '../../Utilities/helper';

const SwapBarColor = "#ff4d4d" //red
const sortedBarColor = "#2df077" // green
const originalBarColor = "#c4fffd" // light
const movingBarColor = "#faef42"  //yellow


export default function InsertationSort(array,animationSpeed)
{ 

  disableButtons();
  document.getElementById("InsertationSortBtn").classList.toggle("active");

  console.log("buttons are disabled")

    const animations = getInsertationSortAnimations(array);
    // { comparingELement1, comparingElement2, doSwap, sortedTill }
    console.log("sorted array : :",array);
    
    const n = animations.length;
    
    let promise1 , promise2;

    for(let i = 0; i<n; i+=4)
    {
        const comparingElement1 = animations[i];
        const comparingElement2 = animations[i + 1];
        const doSwap = animations[i + 2];
        const sortedTill = animations[i + 3];

         promise1 = new Promise(function (resolve, reject) {
            setTimeout(() => {
              // Changing the color-bar of comparing elements.
              changeBackgroundColor(comparingElement1, movingBarColor);
              changeBackgroundColor(comparingElement2, movingBarColor);
      
              if (doSwap === true) {
                // Changing the color-bar of elements which has to be swapped.
                changeBackgroundColor(comparingElement1,SwapBarColor);
                changeBackgroundColor(comparingElement2, SwapBarColor);

                swapBars(comparingElement1, comparingElement2);
              }
            }, i * animationSpeed);
      
            // Resolving the promise after the setTimeout ends.
            resolve();
          });

           promise2 = new Promise(function (resolve, reject) {
            setTimeout(() => {
              // Changing the color-bars of the elements till sortedTill index.
              for (let j = 0; j <= sortedTill; j++) {
                changeBackgroundColor(j, sortedBarColor);
              }
      
              // Resolving the promise when the both the comparing elemnts are (array.length - 1).
              if (
                comparingElement1 === array.length - 1 &&
                comparingElement2 === array.length - 1
              )
                resolve();
            }, (i + 4) * animationSpeed);
          });

        }
        Promise.all([promise1,promise2]).then(enableButtons).then(()=>{document.getElementById("InsertationSortBtn").classList.toggle("active")});
    
}