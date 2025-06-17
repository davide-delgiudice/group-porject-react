import axios from "axios";

import { useEffect, useState } from "react";

const PublisherSection = () => {

    const [videogames, setVideogames] = useState([])

    const fetchVideogames = () => {
        axios.get('http://127.0.0.1:3000/api/videogames/').then((resp) => {
            setVideogames(resp.data.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchVideogames();
    }, []);

    const publisher = "Sony Interactive Entertainment"

    return (
        <div className="container my-5">
            <div className="row">
                <h2 className="text-light">Best Publishers &#8628;</h2>
                <h3 className="text-light my-3">{publisher}</h3>
                {videogames.filter((videogame) => videogame.publisher.name === publisher)
                    .map((videogame) => (
                        <div key={`publisherSection-${videogame.id}`} className="col-12 col-md-4">
                            <div className="card">
                                <img src={videogame.image} alt={videogame.name} />
                            </div>
                            <div className="mt-2 mb-4 d-flex justify-content-between">
                                <p className="text-light publisher-videogame-text">{videogame.name}</p>
                                <p className="text-light fw-bold">{videogame.price}€</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default PublisherSection