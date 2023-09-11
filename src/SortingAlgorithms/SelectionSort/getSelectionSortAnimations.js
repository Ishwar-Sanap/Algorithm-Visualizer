
export default function getSelectionSortAnimations(array)
{
    let animations = [];// { currElement, comparingElement, minIndex, doSwap, isFinalElement, finalElement }
    const n = array.length;

    for(let i = 0; i<n; i++)
    {
        //one animation frame for the current iTh elements
        let miniIndex = i;
        animations.push(i,i,miniIndex,false,false,-1);

        for(let j = i+1; j<n; j++)
        {
            //one animation frame for moving element
            animations.push(i,j,miniIndex,false,false,-1);
            
            if(array[j] < array[miniIndex])
            {
                miniIndex = j;

                //one animation frame for the changing miniIndex element
                animations.push(i,j,miniIndex,false,false,-1);
            }
        }

        if(i !== miniIndex)
        {

            // do swap of current element and minIndex elements
            //we got the the one elements correct postion..
            const temp = array[i];
            array[i] = array[miniIndex];
            array[miniIndex] = temp;

            //animation for swapping the ith and minIndex elements
            animations.push(i,i,miniIndex,true,false,-1);
        }

        //the ith element is sorted at every iteration so we add frame
        animations.push(i,i,i,false,true,i);

    }

    return animations;
}