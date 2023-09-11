const SwapBarColor = "#ff4d4d" //red
const sortedBarColor = "#2df077" // green
const originalBarColor = "#c4fffd" // light
const movingBarColor = "#faef42"  //yellow

const myColorBars = document.getElementsByClassName("my-color-bar");

export function resetTheArray(array)
{   
    const n = array.length;

     if(myColorBars && myColorBars.length >0)
     {
       for(let i = 0; i<n; i++)
       {
            myColorBars[i].style.backgroundColor = originalBarColor;
       }
    }

    if(document.getElementById("searchingResult"))
    {
        document.getElementById("searchingResult").style.display = "none";
        document.getElementById("searchingResult").className = " ";

    }
}

export  function changeBackgroundColor(index , color)
{
    myColorBars[index].style.backgroundColor = color;
}
export  function swapBars(index1 , index2)
{

      [myColorBars[index1].style.height , myColorBars[index2].style.height] = [myColorBars[index2].style.height , myColorBars[index1].style.height]

      const myBar = document.getElementsByClassName("my-color-bar");
      [myBar[index1].innerText , myBar[index2].innerText] = [myBar[index2].innerText , myBar[index1].innerText]
}

export function enableButtons()
{
    document.getElementById("generateNew").disabled = false;
    document.getElementById("BubbleSortBtn").disabled = false;
    document.getElementById("SelectionSortBtn").disabled = false;
    document.getElementById("InsertationSortBtn").disabled = false;
    document.getElementById("MergeSortBtn").disabled = false;
    document.getElementById("QuickSortBtn").disabled = false;
    document.getElementById("LengthRang").disabled = false;
    document.getElementById("delayRange").disabled = false;
    
}

export function disableButtons()
{
    document.getElementById("generateNew").disabled = true;
    document.getElementById("BubbleSortBtn").disabled = true;
    document.getElementById("SelectionSortBtn").disabled = true;
    document.getElementById("InsertationSortBtn").disabled = true;
    document.getElementById("MergeSortBtn").disabled = true;
    document.getElementById("QuickSortBtn").disabled = true;
    document.getElementById("LengthRang").disabled = true;
    document.getElementById("delayRange").disabled = true;
   

}

export function disableButtonsSearching()
{
    document.getElementById("generateNew").disabled = true;
    document.getElementById("LengthRang").disabled = true;
    document.getElementById("delayRange").disabled = true;
    document.getElementById("linearBtn").disabled = true;
    document.getElementById("binaryBtn").disabled = true;

}

export function enableButtonsSearching()
{
    document.getElementById("generateNew").disabled = false;
    document.getElementById("LengthRang").disabled = false;
    document.getElementById("delayRange").disabled = false;
    document.getElementById("linearBtn").disabled = false;
    document.getElementById("binaryBtn").disabled = false;
}

export function  waitForMe(millisec)
{
    return new Promise(resolve => {
        setTimeout(() => { resolve('') }, millisec);
    })
}

