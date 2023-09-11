function getBubbleSortAnimation(array)
{
    const animations = []; // { comparingElement1, comparingElement2, doSwap, isFinalElement, finalElement }

    const n = array.length;

    for(let i = 0; i<n-1; i++)
    {
        for(let j = 0; j<n-1-i; j++)
        {
              // Push animation for comparing 2 elements / i,e add one animation frame 
              animations.push(j,j+1,false,false,-1);

            if(array[j] > array[j+1])
            {
                //swap the values in array
                
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                animations.push(j,j+1,true,false,-1); // another animation frame

            }
        }
        //For each pass the one element of the array is sorted so make the one animation frame to Make green color bar
        animations.push(n-1-i , n-1-i ,false,true,n-1-i);
    }
      // Push animation to know that it's the end of the animation.
  animations.push(0, 0, false, true, 0);

  return animations;
}
export default getBubbleSortAnimation;