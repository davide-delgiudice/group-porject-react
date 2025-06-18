import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {

    const location = useLocation();
    const [videogames, setVideogames] = useState([]);
    const query = location.state?.search || "";


    useEffect(() => {
        if (query) {
            axios.get(`http://127.0.0.1:3000/api/videogames/search?q=${encodeURIComponent(query)}`).then((response) => {
                setVideogames(response.data);
                console.log(response.data);
            })
                .catch((err) => {
                    console.log(err);
                })
        }
    }, [query]);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="">
                            {videogames.map((videogame) => (
                                <Link key={`videogame-${videogame.id}`} to={`/videogames/${videogame.id}`}>
                                    <div className="card-instant">
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
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default SearchPage
