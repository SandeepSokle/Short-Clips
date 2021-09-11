




import { useContext, useEffect } from "react";
import {useHistory,Link } from "react-router-dom"
 import { userContext } from "./App";

import HomeIcon from '@material-ui/icons/Home';
import SearchSharpIcon from '@material-ui/icons/SearchSharp';
import CloudUploadSharpIcon from '@material-ui/icons/CloudUploadSharp';

import "./CSS/Navbar.css"
let Navbar = ()=>{

let user = useContext(userContext);
const history = useHistory()

useEffect(()=>{
    if(!user){
       history.push("/login");
    }
},[user])

    return(<div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to = "/">Short Clips</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

<div className = "col-4"></div>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item me-3">
          <Link class="navbar-brand" to = "/"><HomeIcon></HomeIcon></Link>
        </li>
         <li class="nav-item  me-3">
          <Link class="nav-link active" aria-current="page" to = "/search"><SearchSharpIcon></SearchSharpIcon></Link>
        </li>
         <li class="nav-item  me-3">
            <Link class="nav-link active" aria-current="page" to = "/upload"><CloudUploadSharpIcon></CloudUploadSharpIcon></Link>
        </li>
        <li class="nav-item  me-3">
          <Link to = "/posts/mypost" class="nav-link ">Posts</Link>
        </li>
                <li class="nav-item  me-3" >
         <Link to = "/posts/mylikes" class="nav-link ">Likes</Link>
        </li>
                <li class="nav-item  me-3" >
          <Link to = "/about" class="nav-link ">About</Link>
        </li>
      </ul>
    </div>

  </div>

{
    user ? <form  class="d-flex profile me-3">

        <img className = "image me-2" src= {user.photoURL} alt="profile image" />
        <Link to = {`/profile/${user.displayName}`}>
        <button class="btn btn-success profileBtn" type="submit">Profile</button>
        </Link>
      </form> : <form class="d-flex profile  me-3">
        <Link to = "/login"> <button class="btn btn-success profileBtn" type="submit">Login</button> </Link>
      </form>
}
</nav>
    </div>)
}


export default Navbar;