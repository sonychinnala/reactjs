import { useState, useEffect} from "react";

function Test1(){
    const [city, setCity]=useState("Warangal")
    useEffect(()=>{
        if(city==="Warangal")
        {
            setCity("Telangana")
        }
        else
        {
            setCity("Bangaluru")
        }
    },[])
    return(
        <div>
            {city}
        </div>
    )
}
export default Test1;