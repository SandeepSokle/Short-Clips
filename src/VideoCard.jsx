




import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CommentIcon from '@material-ui/icons/Comment';
import MusicVideoIcon from '@material-ui/icons/MusicVideo';
import ShareIcon from '@material-ui/icons/Share';
import { useContext, useState ,useEffect } from 'react';
import "./CSS/VideoCard.css"
import { Link ,useHistory } from 'react-router-dom';
import { userContext } from './App';
import Comment from "./Comment";

let VideoCard = ()=>{
    let [like,setLike] = useState(false);
    let [isComment,setIsComment] = useState(false);
    let [isPopUp, setIsPopUp] = useState(false);


    let user = useContext(userContext);
    const history = useHistory();

    useEffect(() => {
        if(isPopUp){
            setTimeout(() => {
                setIsPopUp(false);
            }, 2000);
        }
        
    });

useEffect(()=>{
    if(!user){
       history.push("/login");
    }
},[user]);


    return(<div className = "videoContainer">

         {/* <video className = "video" src="http://localhost:3000/samuraiPizzacat.webm" controls></video> */}


 {/* <video className = "video" src="http://localhost:3000/shiv.mp4" controls></video> */}


    <video className = "video" src="http://localhost:3000/DubstepBird.mp4" controls></video>

    <div onClick = {()=>{
        like ? setLike(false) :setLike(true);

    }
    }>
{
    like ? <FavoriteIcon  className = "likeBtn fs-1"></FavoriteIcon> : 
    <FavoriteBorderIcon className = "likeBtn fs-1"></FavoriteBorderIcon>
}
    </div>
              
<CommentIcon className = "CmntBtn fs-1" onClick = {()=>{
    isComment ? setIsComment(false) : setIsComment(true);
}}></CommentIcon>

{/* //////////////share Button */}
<ShareIcon className = "shareBtn fs-1" onClick = {()=>{
    console.log(window.location.href);
    const el = document.createElement('input');
  el.value = window.location.href;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
    setIsPopUp(true);

}}></ShareIcon>

{
    isPopUp ? <div className = "popupContainer fs-2">URL Copied, You can share Now</div> : ""
}

 { user?
<Link to =  {`/profile/${user.displayName}`} className = "videoProfile fs-4">
    <img className = "videoProfileImg me-2 mt-1" src= {user.photoURL} alt="profile image" />
     <p>{user.displayName}</p>   

</Link>: ""
}

    {
        isComment ? <Comment/> : ""
    }

    <div className = "songName"><MusicVideoIcon></MusicVideoIcon> Song Name</div>
    <div className = "lastComment">Last Comment</div>
    </div>)
}


export default VideoCard;