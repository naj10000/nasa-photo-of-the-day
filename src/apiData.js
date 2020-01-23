import React, {useState, useEffect} from "react";
import axios from "axios";
import Body from "./body";


function Data ()  {
    const [dataS , setData] = useState([])
  useEffect( () => {
    axios 
      .get('https://api.nasa.gov/planetary/apod?api_key=6EA6bFu7wHedDqrgOw8Y9dhd2A9Ffog7BOcYwbga')
      .then(response => {
        console.log(response);
        setData(response.data)
        
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <div>
<Body data ={dataS} />
  </div>
    
  );

}

export default Data