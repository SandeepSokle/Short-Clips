





import { useContext, useEffect } from "react";
import {  useHistory } from "react-router-dom";
import { userContext } from "./App";
import { auth } from "./firebase";
import "./CSS/Home.css"
import VideoCard from "./VideoCard";


let Home = ()=>{
  
let user = useContext(userContext);
const history = useHistory()

useEffect(()=>{
    if(!user){
       history.push("/login");
    }
},[user])

   
    return (
        <div className = "homeContainer">

         <VideoCard videoCardStatus = "all"/>
         <VideoCard videoCardStatus = "all"/>
         <VideoCard videoCardStatus = "all"/>
         <VideoCard videoCardStatus = "all"/>
         <VideoCard videoCardStatus = "all"/>


   </div>
    )
}


export default Home;