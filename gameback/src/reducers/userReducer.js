import { SIGN, LOGOUT } from "../types/index"

export default function userReducer (state={},action){
    switch(action.type){
        case SIGN :{

            return {userInfo:action.payload}
        }

        case LOGOUT :{
            return {userInfo:null}
        }
        
        default:
            return state
                
    }
}