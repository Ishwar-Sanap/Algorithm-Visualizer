export default function getInsertationSortAnimations(array)
{
  let animations = []; //// { comparingELement1, comparingElement2, doSwap, sortedTill }

    const n = array.length;

    //animation frame for first sorted element 
    animations.push(0,0,false,0);

    for(let i = 1; i<n; i++)
    {
    let key = array[i];
        let j = i-1;
        //animation for comapiring 2 elements
        animations.push(i,j,false,i-1);
        while(j>=0 && array[j] > key)
        {
            //swap the numbers
            [array[j] , array[j+1]] = [array[j+1] , array[j]];

            //compairing 2  elements animation
            animations.push(j,j+1,false,i); // yellow

            //swappping 2 elements animation 
            animations.push(j,j+1,true,i) // red
            j--;
        }
    }

    //for knowing end of animations
    animations.push(n-1,n-1,false,n-1);

  // Push animation to know that it's the end of the animations.
  animations.push(array.length - 1, array.length - 1, false, array.length - 1);
    return animations;
    
   
}
