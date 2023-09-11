import { changeBackgroundColor, disableButtonsSearching, enableButtonsSearching, waitForMe } from "../../Utilities/helper";
import "../../Components/ButtonsBar/ButtonsBar.css";

const SwapBarColor = "#ff4d4d" //red
const sortedBarColor = "#2df077" // green
const originalBarColor = "#c4fffd" // light
const movingBarColor = "#faef42"  //yellow

function result(idx)
{
    if(idx !== -1)
    {
        document.getElementById("searchingResult").classList.remove("failure");
        document.getElementById("searchingResult").classList.add("success");
        document.getElementById("searchingResult").innerText = `Element is found at index ${idx}`;

    }
    else
    {
        document.getElementById("searchingResult").classList.remove("success");
        document.getElementById("searchingResult").classList.add("failure");
        document.getElementById("searchingResult").innerText = `Element not found`;

    }

}   

export default async function LinearSerch(array,target,animationSpeed)
{
    if(document.getElementById("searchingResult"))
    document.getElementById("searchingResult").style.display = "block";

    disableButtonsSearching();
    const n = array.length;
    const delay = animationSpeed*4;

    let idx = -1;

    //make the original color of each bar;
    for (let i = 0; i < n; i++) {
        changeBackgroundColor(i, originalBarColor);
    }

   
    
    target = parseInt(target);

    const promise1 = new Promise(async function(resolve,reject){
        for(let i = 0; i<n; i++)
        {
            changeBackgroundColor(i,movingBarColor);
    
            await waitForMe(delay);
    
            if(array[i] === target)
            {
                idx = i;
                changeBackgroundColor(idx,sortedBarColor);
                break;
            }
        }
        
        resolve();
    })

    promise1.then(enableButtonsSearching).then(()=>{result(idx)});
   
}