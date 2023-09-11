import { changeBackgroundColor, disableButtonsSearching, enableButtonsSearching, waitForMe } from "../../Utilities/helper";

const SwapBarColor = "#ff4d4d" //red
const sortedBarColor = "#2df077" // green
const originalBarColor = "#c4fffd" // light
const movingBarColor = "#faef42"  //yellow

function result(idx , array)
{
    if(idx >= 0)
    {
        document.getElementById("searchingResult").innerText = `Element is found at index ${idx}`;
        document.getElementById("searchingResult").classList.add("success");

    }
    else
    {
        if(idx === -2) document.getElementById("searchingResult").innerText = `Array is not sorted`;
        else document.getElementById("searchingResult").innerText = `Element not found`;

        document.getElementById("searchingResult").classList.add("failure");

    }

}   

export default async function BinarySerch(array, target, animationSpeed) {

    if(document.getElementById("searchingResult"))
         document.getElementById("searchingResult").style.display = "block";

    if(!isSorted(array))
    {
        result(-2);
        return;
    }

    disableButtonsSearching();


    const n = array.length;
    const delay = animationSpeed * 4;
    let idx = -1;

    //make the original color of each bar;
    for (let i = 0; i < n; i++) {
        changeBackgroundColor(i, originalBarColor);
    }



    target =  parseInt(target);
    const promise1 = new Promise(async function (resolve, reject) {

        let s = 0, e = n - 1;
        while (s <= e) {
            changeBackgroundColor(s, movingBarColor);
            changeBackgroundColor(e, movingBarColor);
            await waitForMe(delay);

            const mid = Math.floor((s + e) / 2);

            changeBackgroundColor(mid, SwapBarColor);
            await waitForMe(delay);

            if (array[mid] === target) {
                idx = mid;
                changeBackgroundColor(mid, sortedBarColor);
                break;
            }

            if (target > array[mid]) {
                changeBackgroundColor(s, originalBarColor);
                await waitForMe(delay)

                s = mid + 1;

                if (s < n) changeBackgroundColor(s, movingBarColor);
            }

            else {
                changeBackgroundColor(e, originalBarColor);
                await waitForMe(delay)


                e = mid - 1;
                if (e >= 0) changeBackgroundColor(e, movingBarColor);
            }

            await waitForMe(delay);
            changeBackgroundColor(mid, originalBarColor);
        }

        if (idx === -1) {
            if (s < n) changeBackgroundColor(s, originalBarColor);
            if (e >= 0) changeBackgroundColor(e, originalBarColor);
        }

        resolve();

    });

    promise1.then(enableButtonsSearching).then(()=>{result(idx)});

}

function isSorted(array)
{
    const temp  = [];
    
    array.forEach(element => {
        temp.push(parseInt(element));
    });

    temp.sort((a,b) => a - b);

    for(let i = 0; i<array.length; i++)
    {
        if(temp[i] !== parseInt(array[i]))
            return false;
    }

    return true;
}