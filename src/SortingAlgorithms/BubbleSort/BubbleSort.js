import getBubbleSortAnimations from './getBubbleSortAnimation'
import {changeBackgroundColor,disableButtons,enableButtons,swapBars} from '../../Utilities/helper';

const SwapBarColor = "#ff4d4d" //red
const sortedBarColor = "#2df077" // green
const originalBarColor = "#c4fffd" // light
const movingBarColor = "#faef42"  //yellow

function BubbleSort(array,animationSpeed)
{
  // console.log("buttons are disbled");
  disableButtons();
  document.getElementById("BubbleSortBtn").classList.toggle("active");

  const animations = getBubbleSortAnimations(array);
      // animationsArray = [comparingElement1, comparingElement2, doSwap, isFinalElement, finalElement]

      // console.log("Sorted array :  ..",array);

      const n = animations.length;
 
      let promise1, promise2;

      for(let i = 0; i<n; i+=5)
      {
        const comparingElement1 = animations[i];
        const comparingElement2 = animations[i + 1];
        const doSwap = animations[i + 2];
        const isFinalElement = animations[i + 3];
        const finalElement = animations[i + 4];
        
         promise1 = new Promise((resolve,reject)=>{

            setTimeout(()=>{
                
                changeBackgroundColor(comparingElement1,movingBarColor);
                changeBackgroundColor(comparingElement2,movingBarColor);
                
                if(doSwap === true)
                {
                    changeBackgroundColor(comparingElement1,SwapBarColor);
                    changeBackgroundColor(comparingElement2,SwapBarColor);
                    
                    // console.log("swapping done")
                    swapBars(comparingElement1,comparingElement2);

                }
                
            },i*animationSpeed)

            resolve();
        });
        

       promise2 = new Promise(function (resolve, reject) {
        setTimeout(() => {
          if (isFinalElement === true) {
            // Changing the color-bar of finalElement index which has taken its final sorted position.
            changeBackgroundColor(finalElement, sortedBarColor);
        
          } else {
            // Changing the color-bar of element which has not taken its final sorted position yet.
            changeBackgroundColor(comparingElement1, originalBarColor);
          }
          // Resolving the promise when the finalElement index is 0.
          if (finalElement === 0) resolve();
        }, (i + 5) * animationSpeed);
      });
      
    }
    Promise.all([promise1,promise2]).then(enableButtons).then(()=>{document.getElementById("BubbleSortBtn").classList.toggle("active")});
  
}
export default BubbleSort;