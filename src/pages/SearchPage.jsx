import React from 'react';
import HomePage from './HomePage';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";

const SearchPage = () => {

    const [videogames, setVideogames] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredVideogames, setFilteredVideogames] = useState(videogames);

    useEffect(() => {
        axios.get("http://localhost:3000/api/videogames/").then((response) => {
            setVideogames(response.data.data);
            console.log(response.data.data);
        })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    useEffect(() => {
        if (search === "") {
            setFilteredVideogames(videogames);
        } else {
            const filterArray = videogames.filter((videogame) =>
                videogame.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilteredVideogames(filterArray);
        }
    }, [search, videogames]);

    return (
        <>
            <div>
                <div className="container">
                    <h1>pagina di ricerca</h1>
                    <Link className="btn btn-primary mb-4" to="/" >torna a Homepage</Link>
                    <div className="row">
                        <div className="col-12">
                            <form>
                                <div className="form-group">
                                    <input type="text" className="form-control mb-1" placeholder='cerca' value={search} onChange={(e) => { setSearch(e.target.value) }} />
                                    <button className="btn btn-main text-bg-danger" type='submit' >
                                        Ricerca
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="">
                            {filteredVideogames.map((videogame) => (
                                <div key={`videogame-${videogame.id}`} className="card my-4">
                                    <div className="card-body">
                                        <div className="card-title fw-bold">{videogame.name}</div>
                                        <div className="card-text">{`${videogame.price}€`}</div>
                                        <div className="card-text">{videogame.publisher.name}</div>
                                        <div className="card-text">{videogame.genres[0].name}</div>
                                        <div className="card-text">
                                            {videogame.platforms.map((v) => (
                                                <span className="mr-2">{v.name}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SearchPage
