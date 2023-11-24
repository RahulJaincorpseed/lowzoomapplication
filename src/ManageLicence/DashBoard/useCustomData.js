import React, { useEffect, useState } from "react";
import { getQuery } from "../../Api/getQuery";

const useCustomData = (url) => {
    const [allData, setAllData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(()=>{
        getApiData();
    },[])
    
    async function getApiData(){
        try{    
            const apiResponse = await getQuery(url);
            setAllData(apiResponse.data);
        }catch(err){
            console.log("Err", err);
            if(err.response.status === 500){
                setError(true)
            }
            setError(true)
        }
    }
  
    return {allData, error};
};

export default useCustomData;
