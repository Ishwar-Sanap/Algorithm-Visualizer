import './ArrayBar.css'
function ArrayBar(props)
{
    const array = props.array;

    return(
        <div className='bar-container'>
                {
                array.map((value,idx)=>{
                    return (
                        <div key={idx} 
                        className='array-bar my-color-bar' 
                        style={
                            { height: `${value*5}px`}
                            }>
                            {value}
                        </div>
                    )
                })
                }            
        </div>
    )
}

export default ArrayBar;