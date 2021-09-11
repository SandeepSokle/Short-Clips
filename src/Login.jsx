


import { useContext, useEffect } from "react";
import { Redirect } from "react-router";
import { userContext } from "./App";
import { auth, firestore, signInWithGoogle } from "./firebase";




let Login = (props)=>{

    let usr = useContext(userContext);
    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{

            if(user){
                let {displayName, email,photoURL,uid} = user;
                
                let docRef = firestore.collection("users").doc(uid);

                let documnet = await docRef.get();

                if(!documnet.exists){
                    docRef.set({
                        displayName,
                        email,
                        photoURL,
                        "likes" : 0,
                        "comment" : [],
                        posts : [],
                    })
                }else{
                    // console.log(documnet.data().likes);
                }

               

                props.setUser({displayName,email,photoURL,uid});

            }else{
                props.setUser(user);
            }
        })
    },[usr]);


    return(
        <div>
            {usr ? <Redirect to = "/"></Redirect> : ""}
    <button onClick = {signInWithGoogle}>
        Login With Google
    </button>

        </div>
    ) 
    
}

export default Login;