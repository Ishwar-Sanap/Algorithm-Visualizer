import { disableButtons, enableButtons } from "../../Utilities/helper";

const myBars = document.getElementsByClassName("my-color-bar");
const SwapBarColor = "#ff4d4d" //red
const sortedBarColor = "#2df077" // green
const originalBarColor = "#c4fffd" // light
const movingBarColor = "#faef42"  //yellow

let delay;

export default async  function MergeSort(array , animationSpeed)
{
    const n = array.length;
    delay = animationSpeed*4;
    
    disableButtons();
    document.getElementById("MergeSortBtn").classList.toggle("active");

   await ms(array,0,n-1);
   console.log("sorted array :: ", array);
    enableButtons();
    document.getElementById("MergeSortBtn").classList.toggle("active");

}

async function ms(array,s,e)
{
    if(s>=e) 
        return;

    const mid = Math.floor((s+e)/2);

    await ms(array,s,mid);
    await ms(array,mid+1,e);

    await merge(array,s,mid,e);   
}

async function merge(array , start , mid , end)
{
    const n1 = mid - start+1;
    const n2 = end - mid;

    let left = new Array(n1);
    let right = new Array(n2);

    //Left part 
    for(let i = 0; i<n1 ; i++)
    {
        await waitForMe(delay);
        myBars[start+i].style.backgroundColor = SwapBarColor;
        left[i] = myBars[start+i].style.height;
    }

    //right part
    for(let i = 0; i<n2 ; i++)
    {
        await waitForMe(delay)
        myBars[mid+1+i].style.backgroundColor = movingBarColor;
        right[i] = myBars[mid+1+i].style.height;
    }
    await waitForMe(delay)

    let i = 0,j=0,k= start;

    while (i<n1 && j<n2) 
    {
        await waitForMe(delay)
     
        if(parseInt(left[i]) <= parseInt(right[j]))
        {
            myBars[k].style.backgroundColor = sortedBarColor;
            myBars[k].style.height = left[i];
            
            const data = parseInt(left[i])/5;
            myBars[k].innerText = data;
            array[k] = data;

            i++;
            k++;
        }
        else
        {
            myBars[k].style.backgroundColor = sortedBarColor;
            myBars[k].style.height = right[j];

            const data = parseInt(right[j])/5;
            myBars[k].innerText = data;
            array[k] = data;

            j++;
            k++;
        }
    }

    while(i<n1)
    {
        await waitForMe(delay)
        myBars[k].style.backgroundColor = sortedBarColor;
        myBars[k].style.height = left[i];

        const data = parseInt(left[i])/5;
        myBars[k].innerText = data;
        array[k] = data; 

        i++;
        k++;   
    }

    while(j<n2)
    {
        await waitForMe(delay)
        myBars[k].style.backgroundColor = sortedBarColor;
        myBars[k].style.height = right[j];

        const data = parseInt(right[j])/5;
        myBars[k].innerText = data;
        array[k] = data;

        j++;
        k++;
    }

}

 function waitForMe(millisec)
{
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, millisec);
    })
}