import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const PublisherSection = () => {

    const [videogames, setVideogames] = useState([])

    const fetchVideogames = () => {
        axios.get('http://127.0.0.1:3000/api/videogames/').then((resp) => {
            setVideogames(resp.data);
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        fetchVideogames();
    }, []);

    const sony = "Sony Interactive Entertainment"
    const nintendo = "Nintendo"
    const ea = "Electronic Arts"
    const ubisoft = "Ubisoft"
    const bethesda = "Bethesda Softworks"
    const square = "Square Enix"
    const capcom = "Capcom"

    return (
        <div className="container my-5">
            <div className="row">
                <h2 className="text-light">Best Publishers &#11167;</h2>
                <h4 className="text-light my-3">{sony}</h4>
                {videogames.filter((videogame) => videogame.publisher.name === sony).slice(0, 3)
                    .map((videogame) => (
                        <div key={`publisherSection-${videogame.id}`} className="col-12 col-md-4">
                            <Link className="card" to={`/videogames/${videogame.id}`}>
                                <img src={videogame.image} alt={videogame.name} />
                            </Link>
                            <div className="mt-2 mb-4 d-flex justify-content-between">
                                <p className="text-light publisher-videogame-text">{videogame.name}</p>
                                <p className="text-light fw-bold">{videogame.price}&euro;</p>
                            </div>
                        </div>
                    ))}
                <h4 className="text-light my-3">{nintendo}</h4>
                {videogames.filter((videogame) => videogame.publisher.name === nintendo).slice(0, 3)
                    .map((videogame) => (
                        <div key={`publisherSection-${videogame.id}`} className="col-12 col-md-4">
                            <Link className="card" to={`/videogames/${videogame.id}`}>
                                <img src={videogame.image} alt={videogame.name} />
                            </Link>
                            <div className="mt-2 mb-4 d-flex justify-content-between">
                                <p className="text-light publisher-videogame-text">{videogame.name}</p>
                                <p className="text-light fw-bold">{videogame.price}&euro;</p>
                            </div>
                        </div>
                    ))}
                <h4 className="text-light my-3">{ea}</h4>
                {videogames.filter((videogame) => videogame.publisher.name === ea).slice(0, 3)
                    .map((videogame) => (
                        <div key={`publisherSection-${videogame.id}`} className="col-12 col-md-4">
                            <Link className="card" to={`/videogames/${videogame.id}`}>
                                <img src={videogame.image} alt={videogame.name} />
                            </Link>
                            <div className="mt-2 mb-4 d-flex justify-content-between">
                                <p className="text-light publisher-videogame-text">{videogame.name}</p>
                                <p className="text-light fw-bold">{videogame.price}&euro;</p>
                            </div>
                        </div>
                    ))}
                <h4 className="text-light my-3">{ubisoft}</h4>
                {videogames.filter((videogame) => videogame.publisher.name === ubisoft).slice(0, 3)
                    .map((videogame) => (
                        <div key={`publisherSection-${videogame.id}`} className="col-12 col-md-4">
                            <Link className="card" to={`/videogames/${videogame.id}`}>
                                <img src={videogame.image} alt={videogame.name} />
                            </Link>
                            <div className="mt-2 mb-4 d-flex justify-content-between">
                                <p className="text-light publisher-videogame-text">{videogame.name}</p>
                                <p className="text-light fw-bold">{videogame.price}&euro;</p>
                            </div>
                        </div>
                    ))}
                <h4 className="text-light my-3">{bethesda}</h4>
                {videogames.filter((videogame) => videogame.publisher.name === bethesda).slice(0, 3)
                    .map((videogame) => (
                        <div key={`publisherSection-${videogame.id}`} className="col-12 col-md-4">
                            <Link className="card" to={`/videogames/${videogame.id}`}>
                                <img src={videogame.image} alt={videogame.name} />
                            </Link>
                            <div className="mt-2 mb-4 d-flex justify-content-between">
                                <p className="text-light publisher-videogame-text">{videogame.name}</p>
                                <p className="text-light fw-bold">{videogame.price}&euro;</p>
                            </div>
                        </div>
                    ))}
                <h4 className="text-light my-3">{square}</h4>
                {videogames.filter((videogame) => videogame.publisher.name === square).slice(0, 3)
                    .map((videogame) => (
                        <div key={`publisherSection-${videogame.id}`} className="col-12 col-md-4">
                            <Link className="card" to={`/videogames/${videogame.id}`}>
                                <img src={videogame.image} alt={videogame.name} />
                            </Link>
                            <div className="mt-2 mb-4 d-flex justify-content-between">
                                <p className="text-light publisher-videogame-text">{videogame.name}</p>
                                <p className="text-light fw-bold">{videogame.price}&euro;</p>
                            </div>
                        </div>
                    ))}
                <h4 className="text-light my-3">{capcom}</h4>
                {videogames.filter((videogame) => videogame.publisher.name === capcom).slice(0, 3)
                    .map((videogame) => (
                        <div key={`publisherSection-${videogame.id}`} className="col-12 col-md-4">
                            <Link className="card" to={`/videogames/${videogame.id}`}>
                                <img src={videogame.image} alt={videogame.name} />
                            </Link>
                            <div className="mt-2 mb-4 d-flex justify-content-between">
                                <p className="text-light publisher-videogame-text">{videogame.name}</p>
                                <p className="text-light fw-bold">{videogame.price}&euro;</p>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    )
}

export default PublisherSection