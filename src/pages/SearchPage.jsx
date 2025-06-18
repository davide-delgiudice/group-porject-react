import React from 'react';
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
                    <h1 className="page-title">pagina di ricerca</h1>
                    <form className="search-form" onSubmit={e => e.preventDefault()}>
                        <input
                            type="text"
                            className="search-input"
                            placeholder="cerca"
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                        />
                        <button className="btn-search" type="submit">Ricerca</button>
                    </form>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="">
                            {filteredVideogames.map((videogame) => (
                                <div key={`videogame-${videogame.id}`} className="card-instant">
                                    <img
                                        src={videogame.image}
                                        alt={videogame.name}
                                        className="card-instant-img"
                                    />
                                    <div className="card-instant-body">
                                        <div className="card-instant-title">{videogame.name}</div>
                                        <div className="card-instant-price">{videogame.price}€</div>
                                        <div className="card-instant-publisher">{videogame.publisher.name}</div>
                                        <div className="card-instant-badges">
                                            <span className="badge-genre">{videogame.genres[0]?.name}</span>
                                            {videogame.platforms.map((v, idx) => (
                                                <span key={idx} className="badge-platform">{v.name}</span>
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
