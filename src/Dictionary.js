import React, {useState}from "react"
import axios from "axios";
export default function Dictionary() {
let [Keyword, setKeyword] = useState("");

function handleSubmit(event){
    event.preventDefault();
   
}

function updateChange (event){
setKeyword(event.target.value);

function handleResponse(response){
    console.log(response.data[0]);
}
//https://dictionaryapi.dev/
let url=`https://api.dictionaryapi.dev/api/v2/entries/en_US/${Keyword}`;
axios.get(url).then(handleResponse);
}
    return (
    <div className="Dictionary">
    <form onSubmit={handleSubmit}> 
    <input type= "Search" onChange={updateChange}/>
    </form>
    </div>
);

    }


