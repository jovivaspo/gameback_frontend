import { LIST } from "../types/index"

export default function gamesReducer (state={},action){
    switch(action.type){
        case LIST :{

            return {gamesUser:action.payload}
        }
        
        default:
            return state
                
    }
}