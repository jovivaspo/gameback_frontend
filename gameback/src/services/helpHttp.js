export const helpHttp= () =>{

    const customFetch =  (endpoint, options) => {

        console.log(endpoint)
        /*Cabecera por defecto*/
        const defaultHeaders = {
            accept: "application/json"
        }

        /*Manejador de errores si el endpoint no responde*/
        const controller = new AbortController()
        options.signal = controller.signal
        /***********************************************/

        /*Filtro de opciones*/
        options.method = options.method || 'GET'
        options.headers = options.headers? {...defaultHeaders,...options.headers} : defaultHeaders
        options.body = JSON.stringify(options.body) || false
        if(!options.body) delete options.body
        
        
        /*Abortar la petición con el controller */
        setTimeout(()=>{
            controller.abort()
        },3500)

        /*Realizamos el fetch*/
        return fetch(endpoint,options)
        .then(res => res.ok? res.json() : Promise.reject({
            err:true,
            status:res.status || '00',
            statusText: res.statusText || 'Something is wrong',
        }))
        .catch(error=>error)
    }

    const get = (url,options = {}) =>  customFetch(url,options)

    
    const post = (url,options = {}) => {
        options.method= 'POST'
        return customFetch(url,options)
    
    }
    
    const put = (url, options = {}) => {
        options.method = "PUT"
        return customFetch(url, options)
    }

    const del = (url, options = {}) => {
        options.method = "DELETE"
        return customFetch(url, options)
    }


    return{
        get,
        post,
        del,
        put
    }

}