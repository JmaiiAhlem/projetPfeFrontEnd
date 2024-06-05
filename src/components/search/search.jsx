
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
 import "./search.css";

 const Search= () => { 
     const [dates, setDates] = useState([]); 
     const [searchTerm, setSearchTerm] = useState([]); 
      useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/")
        .then ((reponse) => reponse.json())
        .then ((json) => setDates(json));
      },[]);
 console.log(dates);
  const handleSearchTerm = (e) =>{
   let value = e.target.value; 
    setSearchTerm(value);
};
return(
    <>
    <div className="search">
  <input 
    type="text" 
    name="searchBar" 
    id="searchBar"
    placeholder="recherche"
    onChange={handleSearchTerm}
  />
</div>

<div className="search_results">
  {dates.filter((val) => {
    return val.title.includes(searchTerm); 
  }).map((val) => {
    return (
      <div className="search_result" key={val.id}> 
        {val.title}
      </div>
    );
  })}
</div>
    </>
)
}
 export default Search;