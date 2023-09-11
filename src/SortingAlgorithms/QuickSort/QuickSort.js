import { changeBackgroundColor, disableButtons, enableButtons, swapBars, waitForMe } from "../../Utilities/helper";

const myBars = document.getElementsByClassName("my-color-bar");

const SwapBarColor = "#ff4d4d" //red
const sortedBarColor = "#2df077" // green
const originalBarColor = "#c4fffd" // light
const movingBarColor = "#faef42"  //yellow

let delay;

export default async function QuickSort(array , animationSpeed)
{
    const n = array.length;
    delay = animationSpeed*4;

    disableButtons();
    document.getElementById("QuickSortBtn").classList.toggle("active");

    await qs(array, 0, n - 1);

    enableButtons();
    document.getElementById("QuickSortBtn").classList.toggle("active");
    console.log("sorted array :: ", array);
    

}

async function qs(array,low,high)
{
    if(low == high)
        changeBackgroundColor(low,sortedBarColor);

    if(low < high)
    {
        let pi = await getPartitionIndex(array,low,high);

        console.log("parition index ",pi)
        changeBackgroundColor(pi,sortedBarColor);

       await qs(array,low,pi-1);
       await qs(array,pi+1,high);


    }
}

async function getPartitionIndex(array,low,high)
{
    myBars[low].style.backgroundColor = SwapBarColor;
    myBars[high].style.backgroundColor = SwapBarColor;
    
    await waitForMe(delay);

    myBars[low].style.backgroundColor = originalBarColor;
    myBars[high].style.backgroundColor = originalBarColor;

    let pivot = array[low];
    let i = low;
    let j = high;

    while(i < j)
    {
        // get the firs max element than pivot
        while(i<= high && array[i] <= pivot)
        {
            i++;
        }

        // get the first smallest than pivot from the right
        while(j >= low && array[j] > pivot )
        {
            j--;
        }

        if(i < j)
        {
            myBars[i].style.backgroundColor = movingBarColor;
            myBars[j].style.backgroundColor = movingBarColor;

            await waitForMe(delay);

            [array[i] , array[j]] = [ array[j] , array[i]];
            swapBars(i,j);

            myBars[i].style.backgroundColor = originalBarColor;
            myBars[j].style.backgroundColor = originalBarColor;

        }
    }

    // swapping the pivot element to it's correct position
    [array[low] , array[j]] = [ array[j] , array[low]];
    swapBars(low,j);

    return j;
}   

