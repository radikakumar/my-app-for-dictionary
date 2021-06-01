import React, {useState}from "react"

export default function Dictionary() {
let [Keyword, setKeyword] = useState("");

function handleSubmit(event){
    event.preventDefault();
    alert(`Searching for ${Keyword}`);
}

function updateChange (event){
setKeyword(event.target.value);
}
    return (
    <div className="Dictionary">
    <form onSubmit={handleSubmit}> 
    <input type= "Search" onChange={updateChange}/>
    </form>
    </div>
);

    }


