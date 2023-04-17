import { createContext, useEffect, useState } from 'react';
import { fakeFetch } from '../pages/DataFromServer';

export const dataContext = createContext(null)

export const DataContextProvider = ({children}) =>{

    const [data, setData] = useState([]);

    const getData = async () =>{
        try{
            const response = await fakeFetch('https://example.com/api/questions')
            if(response.status === 200){
                setData(response.data.questions)
            }
            
        }
        catch(error){
            console.log('not getting server data');
        }
    }

    useEffect(() =>{
        getData()
    }, [])

    return(
        <dataContext.Provider value={{data}}>
            {children}
        </dataContext.Provider>
    )
}