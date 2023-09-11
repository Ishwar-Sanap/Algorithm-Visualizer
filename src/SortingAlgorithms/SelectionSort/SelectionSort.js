import getSelectionSortAnimations from "./getSelectionSortAnimations" 
import {changeBackgroundColor,disableButtons,enableButtons,swapBars} from '../../Utilities/helper';

const SwapBarColor = "#ff4d4d" //red
const sortedBarColor = "#2df077" // green
const originalBarColor = "#c4fffd" // light
const movingBarColor = "#faef42"  //yellow

export default function SelectionSort(array,animationSpeed)
{   

    disableButtons();

    const animations = getSelectionSortAnimations(array); 
    //// { currElement, comparingElement, minIndex, doSwap, isFinalElement, finalElement }
    const n = animations.length;
    // console.log("sorted arary: :",array);

    let promise1 ,promise2;
    for(let i = 0; i<n; i+=6)
    {
        const comparingElement1 = animations[i];
        const comparingElement2 = animations[i + 1];
        const minIndexElement = animations[i + 2];
        const doSwap = animations[i + 3];
        const isFinalElement = animations[i + 4];
        const finalElement = animations[i + 5];

        promise1 = new Promise((resolve,reject)=>{

            setTimeout(()=>{
                
                changeBackgroundColor(minIndexElement,SwapBarColor);   // minIndex th element
                changeBackgroundColor(comparingElement1,SwapBarColor); // ith element

                changeBackgroundColor(comparingElement2,movingBarColor); // jth element color


                if(doSwap === true)
                {
                    changeBackgroundColor(minIndexElement,SwapBarColor);   // minIndex th element
                    changeBackgroundColor(comparingElement1,SwapBarColor); // ith element

                    swapBars(comparingElement1,minIndexElement);
                }

            },i*animationSpeed);

            resolve();

        });

        promise2 = new Promise((resolve,reject)=>{

            setTimeout(()=>{

                if(isFinalElement === true)
                {
                    changeBackgroundColor(finalElement,sortedBarColor);
                }
                else
                {
                    // Changing the color-bar of elements which has not taken its final sorted position yet.
                    changeBackgroundColor(comparingElement2,originalBarColor);
                    changeBackgroundColor(minIndexElement,originalBarColor);

                }
                resolve();

            }, (i+6)*animationSpeed);
        });
    }   
    Promise.all([promise1,promise2]).then(enableButtons);
}