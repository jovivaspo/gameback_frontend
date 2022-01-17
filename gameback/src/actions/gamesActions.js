import { LIST } from "../types";

export const list = (games)=> async(dispatch)=>{
    dispatch({type:LIST, payload:{games}})
}

