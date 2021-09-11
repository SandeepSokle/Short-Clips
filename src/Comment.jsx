

import {useState} from "react"

import "./CSS/Comment.css"
let Comment = ()=>{

    let [comment,setComment] = useState("");

    return(<div className = "commentContainer" >

<ul class="list-group list-group-flush mb-3 listComment">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">And a fifth one</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">And a fifth one</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">And a fifth one</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">And a fifth one</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">And a fifth one</li>
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">And a fifth one</li>
  
</ul>
        <div class="input-group inputComment mt-3">
  <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" onChange = {(e)=>{
    //   console.log(e.target.value);
        setComment(e.target.value);

  }}/>
  <button class="btn btn-outline-primary fs-5 " type="button" id="button-addon2">Post</button>
    </div>
</div>)
}


export default Comment;