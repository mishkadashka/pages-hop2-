import axios from "axios";
import Card from './card';
import { useState } from "react";
import { useEffect } from "react";
import Footer from "./Footer"

const ACCESS_TOKEN = "6374b50a2dfe8ebc0d62ee22";
const API = "  https://dummyapi.io/data/v1/user?page=1&limit=9";

const Contact = () => {
  const [dataApi, setDataApi] = useState();

  useEffect(() => {
    axios
    .get(API,{
      headers:{
        "APP-ID": ACCESS_TOKEN,        
      },
    })
    .then ((response) => {
      console.log(response);
      setDataApi(response.data.data);
    })
    .catch ((error) => {
      console.log(error);
    });
  }, []);

return (
  <div className="App" >
     <h1>Blog page</h1>
    <div style={{display: 'flex', width: '70vw', height:"1350px", flexWrap: 'wrap', marginLeft:"200px",alignContent:"space-between",justifyContent:"space-between"}} >
     {dataApi?.map((el) => {
      return <Card data={el}/>
     })}
    </div>
    <Footer/>
  </div>
)
}

export default Contact;
