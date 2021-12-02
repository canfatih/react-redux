import * as actiontypes from "./actiontypes"

export const increasecounter=()=>({

type:actiontypes.İNCREASE_COUNTER,
payload:1  

})
export const decreasecounter=()=>({

    type:actiontypes.DECREASE_COUNTER,
    payload:1  
    
    })
   export const increasebytwocounter=()=>({
       type:actiontypes.İNCREASE_BY_TWO_COUNTER,
       payload:2
   })