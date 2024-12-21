import { useState } from "react";

function Test1(){
    const [city, setCity]=useState("Warangal");
    if(city==="Warangal")
    {
        setCity("Hasnparthi");
    }
   
return(
    <div>
        {city}
    </div>
)
}
export default Test1;