import React , {useEffect,useState} from 'react'; 

export const Hello = React.memo( ({increment})=>{    
    console.log('Hell0')
    return (
    <button onClick={increment}> 
    Click
    </button>);
});