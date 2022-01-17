import { createContext, useState } from "react";

const alertContext = createContext()

const AlertProvider = ({children})=>{
    const initialAlert = {
        error:false,
        success:false,
        message:''
    }
    const [alert,setAlert] = useState(initialAlert)

    const data = {alert, setAlert}

    return(
        <alertContext.Provider value={data}>{children}</alertContext.Provider>
    )
}

export {AlertProvider}
export default alertContext