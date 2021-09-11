import { useEffect, useState } from "react";



import "./CSS/Upload.css";
let Upload = ()=>{
    const [selectedFile, setSelectedFile] = useState(undefined);
	const [isFilePicked, setIsFilePicked] = useState(false);

useEffect(()=>{
    if(selectedFile != undefined){
        setIsFilePicked(true);
    }else{
        setIsFilePicked(false);

    }
},[selectedFile])

console.log(selectedFile);
console.log(isFilePicked);

return(<div className = "uploadContainer">
         <input type="file" name="video" id="video" className = "mb-4" title = "video" onChange = {(e)=>{
            // console.log(e.target.files[0]);
            setSelectedFile(e.target.files[0]);
        }} />


        <button className = "submitBtn_upload mt-4" type="submit" onClick = {
            (e)=>{
                if(isFilePicked){
                    console.log("Submitted");
                }else{
                   console.log("Not Submitted");
                }
            }
        }>Submit</button>



            
            </div>)
}


export default Upload;