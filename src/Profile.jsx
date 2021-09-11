

import { useContext, useEffect } from "react";
import {  Link, useHistory,useParams } from "react-router-dom";
import { userContext } from "./App";
import { auth } from "./firebase";

import "./CSS/Profile.css"

let Profile = ()=>{
    const history = useHistory()
    let {id} = useParams();
    console.log("ParamsData:"+id);
    let value = useContext(userContext);
    useEffect(() => {
        if(!value){
            history.push('/login')
        }
    }, [value])

    console.log(value,history)

   
    return (
        <div className = "profileContainer">
            {
                value && 
                <>
                <div className = "profileImgContainer">
                    <img className = "profileImage" src= {value.photoURL} alt="profie image" />
                    <h1 className = "mb-5 fs-1">{value.displayName}</h1>
                    </div>
                    <div>Gmail : {value.email}</div>
                    <div>Follower : 0</div>
                    <div>Following : 0 </div>
                    <div >Posts : 0  <Link to = {`/posts/${value.displayName}`}>Check</Link> </div>
                    <div>Friends : 0</div>
                    
                    <div className = "logoutBtn">
                    {
                        id === value.displayName ? <button  className = "fs-3 mt-4 me-4" onClick = {()=>{
                        auth.signOut();
                    }}>Logout</button> : <Link to = "/messanger"><button className = "fs-3 mt-4 ms-4">Message</button></Link>

                    }

                    
                    </div>
                </>
            } 
        </div>
    )
}


export default Profile;