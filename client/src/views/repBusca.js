import React, { useState, useEffect } from "react";
//import Datatable from "../components/datatable";
import "./home.css"
//import Cards from './../components/cards'
//import Datatable from "./components/datatable";
require ("es6-promise").polyfill();
require("isomorphic-fetch");


export default function RepBusca(){
   // const [error, setError] = useState(null);
    //const [isLoaded, setIsLoaded] = useState(false);

    const [republicas, setRepublicas] = useState([]);  //items, setItems
    const [q, setQ] = useState("");
    //const [searchColumns, setSearchColumns] = useState([""])

    const [searchParam] = useState(["capital", "name"]);
    const [filterParam, setFilterParam] = useState(["All"]);
    const [filterParam2, setFilterParam2] = useState(["All"]);

    useEffect(() => {
        fetch("https://restcountries.com/v2/all")
        .then((response) => response.json())
        .then(json => setRepublicas(json));
    }, []);


    function search(republicas){
        //const columns = republicas[0] && Object.keys(republicas[0]);
        return republicas.filter((republica) =>{
            if(republica.region === filterParam){
                return searchParam.some((newRepublica) => {
                    return (
                        republica[newRepublica].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
                    );
                });
                
            } else if (filterParam === "All"){
                return searchParam.some((newRepublica) => {
                    return (
                        republica[newRepublica].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
                    );
                });
            }

            if (republica.subregion === filterParam2){
                return searchParam.some((newRepublica) => {
                    return (
                        republica[newRepublica].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
                    );
                });
            }
            
        });
    }

    return(
        <div>
            <div className="search=wrapper">
                <input 
                    type="search" 
                    name="search-form" 
                    id="search-form"
                    classname="search-input"
                    placeholder="search for..."
                    value={q}
                    onChange = {(e) => setQ(e.target.value)}
                />
            </div>
            
            <div className="select">
            <select
                onChange={(e) => {
                    setFilterParam(e.target.value);
                }}
                className="custom-select"
                aria-label="Filter Countries By Countries"
            >
                <option value="All">Filter By Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
            </div>


        <div className="select">
            <select
                onChange={(e) => {
                setFilterParam2(e.target.value);
                }}
                className="custom-select"
                aria-label="Filter Countries By Subregion"
            >
                <option value="All">Filter By Subregion</option>
                <option value="Northern Africa">Northern Africa</option>
                <option value="Middle Africa">Middle Africa</option>
                <option value="Western Africa">Western Africa</option>
            </select>
        </div>

            <ul className="card-grid">
                    {search(republicas).map((republica) => (
                        <li>
                            <article className="card" key={republica.id}>
                                <div className="card-image">
                                    <img src={republica.flag} alt={republica.name} />
                                </div>
                                <div className="card-content">
                                    <h2 className="card-name">{republica.name}</h2>
                                    <ol className="card-list">
                                        <li>
                                            population:{" "}
                                            <span>{republica.population}</span>
                                        </li>
                                        <li>
                                            Region: <span>{republica.region}</span>
                                        </li>
                                        <li>
                                            Capital: <span>{republica.capital}</span>
                                        </li>
                                    </ol>
                                </div>
                            </article>
                        </li>
                    ))}
                </ul>
            </div>
    );
}








/*export default function RepBusca(){
    const [data, setData] = useState([])
    const [filterParam, setFilterParam] = useState(["All"]);
    const [q, setQ] = useState("")
    //const [searchColumns, setSearchColumns] = useState([""])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
        .then(response => response.json())
        .then(json => setData(json));
    }, []);


    function search(republicas){
        const columns = republicas[0] && Object.keys(republicas[0]);
        return republicas.filter((republica) => 
            columns.some((column) => republica[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1)    
        );
    }

    return(
        <div>
            <div>
                <input type="text" value={q} onChange = {(e) => setQ(e.target.value)}/>
            </div>
            <div>
                
            </div>
            <div>
            <Datatable data={search(data)} />
            </div>
        </div>
    );
}*/
