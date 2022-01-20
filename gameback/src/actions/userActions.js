
import { LOGOUT, SIGN, LOGIN } from "../types";
import { helpHttp } from "../services/helpHttp";




export const sign = (name, email, password, setAlert, setForm, initialForm) => async (dispatch) => {
    try {


        const res = await helpHttp().post('http://localhost:8000/api/users/create', {
            headers: {
                "Content-Type": "application/json"
            },
            body: { name, email, password }
        })

        if (res.error) {
            throw res.error

        } else {
            const { id, email, token } = res
            dispatch({ type: SIGN, payload: { id, email, token } })
            localStorage.setItem('userInfo', JSON.stringify({ id, email, token }))
            setAlert({ success: true, message: `Welcome to GameBack ${email}` })
            setForm(initialForm)
          //  dispatch(list(id,token))
        }


    } catch (err) {
        setAlert({ error: true, message: err})
    }
}



export const login = ( email, password, setAlert, setForm, initialForm) => async (dispatch) => {
    try{
        const res = await helpHttp().post('http://localhost:8000/api/users/login',{
            headers:{"Content-Type": "application/json"},
            body:{email,password}
          })
          console.log(res)
          if (res.error) {
            throw res.error
        } else {
            const {id,email,token} = res
            dispatch({type:LOGIN, payload:{id,email, token}})
            localStorage.setItem('userInfo',JSON.stringify({id,email,token}))
            setAlert({success:true, message:`Sign In ${email}`})
            setForm(initialForm)
           // dispatch(list(id,token))
        }
    
    } catch (err) {
        
        setAlert({ error: true, message: err })
    }}
   

export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT })
}
