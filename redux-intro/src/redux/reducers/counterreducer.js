import * as actiontypes from "../actions/actiontypes"

const counterreducer=(state=0,action)=>{
    let newstate;
    switch (action.type) {

        case actiontypes.İNCREASE_COUNTER:
            return(newstate=state+action.payload)

            case actiontypes.DECREASE_COUNTER:
             return(newstate=state-action.payload)
            
             case actiontypes.İNCREASE_BY_TWO_COUNTER:
              return(newstate=state+action.payload)
    
        default:
            return state;
    }
}
export default counterreducer;