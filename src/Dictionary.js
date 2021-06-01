import React from "react"

export default function Dictionary() {

function handleSubmit(event){
    event.preventDefault();
}
    return (
    <div className="Dictionary">
    <form onSubmit={handleSubmit}> 
    <input type= "Search" />
    </form>
    </div>
);



}