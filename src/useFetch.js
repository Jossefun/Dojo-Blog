import { useState, useEffect } from "react";


//This is a Custom Hook it must start with the word "use"
const useFatch = (url) => {  //here we getting th url from home component
    

    const [data, setData] = useState (null);
    const [isPending, setIsPending] = useState(true); //this state is for creaing "Loading" message till we fetch the data 
    const [error, setError] = useState(null);

    //useEffect Use for changes when reloading

    useEffect(() => {
        const abortCont = new AbortController();    //aborting the fetch or associate it with specific handling after we fetch
        
           setTimeout (() => {   
                    fetch(url, { signal: abortCont.signal })
                        .then(res => {
                            if(!res.ok){
                                throw Error ('Cant Find this Server right now');
                            }
                            return res.json();   //first step after we getting th data
                        })
                        .then(res =>{            //second step after we getting th data
                            setData(res)
                            setIsPending(false)
                            setError(null)
                        })
                        .catch(err =>{          //if we didnt get the data
                            if(err.message === 'AbortError'){  //if its abort error
                                console.log('fetch aborted');
                            } else {
                              setError(err.message)
                              setIsPending(false)
                            } 
                        })
            },1000)     

            return () => abortCont.abort();
    
    },[url]);   //everytime we call or change whats inside this array, we rerun the useEffect hook 
    return { data, isPending, error } ;
}


export default useFatch

