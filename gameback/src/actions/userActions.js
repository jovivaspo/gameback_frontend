
import { LOGOUT, SIGN } from "../types";

export const sign = (id,email,token)=> async(dispatch)=>{
    dispatch({type:SIGN, payload:{id,email,token}})
}


export const logout = ()=> async(dispatch)=>{
    dispatch({type:LOGOUT})
}
