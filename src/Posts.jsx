import VideoCard from "./VideoCard";



import "./CSS/Posts.css"
import { useParams } from "react-router-dom";
let Posts = ()=>{

let {id} = useParams();
console.log(id);

    return(<div className = "postsContainer">

        <VideoCard videoCardStatus = {id} />
        <VideoCard videoCardStatus = {id} />
        <VideoCard videoCardStatus = {id} />
        <VideoCard videoCardStatus = {id} />
        <VideoCard videoCardStatus = {id} />
    </div>)
}


export default Posts;