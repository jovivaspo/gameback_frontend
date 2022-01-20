import { CHANGE_COLUMN_FRONTEND, CHANGE_ORDER_FRONTEND, LIST } from "../types";

export const list = (games)=> async(dispatch)=>{
    dispatch({type:LIST, payload:{games}})
}

export const changeColumnFrontend = (source,destination)=> async(dispatch)=>{
    dispatch({type:CHANGE_COLUMN_FRONTEND, payload:{source,destination}})
}


export const changeOrderFrontend = (source,destination)=> async(dispatch)=>{
    dispatch({type:CHANGE_ORDER_FRONTEND, payload:{source,destination}})
}



