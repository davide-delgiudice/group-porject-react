import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const SearchPage = () => {

    const location = useLocation();
    const [videogames, setVideogames] = useState([]);
    const query = location.state?.search;


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
            <div className="btn-group m-3" role="group" aria-label="Basic checkbox toggle button group">
                <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off" />
                <label className="btn btn-outline-primary custom-btn-pc" htmlFor="btncheck1">PC</label>

                <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off" />
                <label className="btn btn-outline-primary custom-btn-playstation" htmlFor="btncheck2">PlayStation</label>

                <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off" />
                <label className="btn btn-outline-primary custom-btn-xbox" htmlFor="btncheck3">Xbox</label>

                <input type="checkbox" className="btn-check" id="btncheck4" autoComplete="off" />
                <label className="btn btn-outline-primary custom-btn-nintendo" htmlFor="btncheck4">Nintendo</label>
            </div>

            <div className="container">
                <div className="row">

                    <div className="container">
                        <div className="row">
                            {videogames.map((videogame) => (
                                <div key={`videogame-${videogame.id}`} className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                    <Link to={`/videogames/${videogame.id}`}>
                                        <div className="card-instant">
                                            <img
                                                src={`http://localhost:3000/images/videogames/${videogame.image}`}
                                                alt={videogame.name}
                                                className="card-instant-img"
                                            />
                                            <div className="card-instant-body">
                                                <div className="card-instant-title">{videogame.name}</div>
                                                <div className="card-instant-price">{videogame.price}€</div>
                                                <div className="card-instant-publisher">{videogame.publisher?.name || "Editore sconosciuto"}</div>
                                                <div className="card-instant-badges">
                                                    <span className="badge-genre">{videogame.genres?.[0]?.name || "Genere non disponibile"}</span>
                                                    {videogame.platforms?.map((v, idx) => (
                                                        <span key={idx} className="badge-platform">{v.name}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
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
