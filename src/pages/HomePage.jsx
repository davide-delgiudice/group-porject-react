import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import axios from "axios";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [videogames, setVideogames] = useState([]);
  console.log(videogames);

  useEffect(() => {
    axios.get("http://localhost:3000/api/videogames/").then((response) => {
      setVideogames(response.data.data);
    });
  }, []);

  return (
    <>
      <Hero />

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="">
              {videogames.map((videogame) => (
                <Link className="text-decoration-none" to={`/videogames/${videogame.id}`}>
                  <div key={videogame.id} className="card my-4">
                    <div className="card-body">
                      <div className="card-title fw-bold">{videogame.name}</div>
                      <div className="card-text">{`${videogame.price}`}&euro;</div>
                      <div className="card-text">{videogame.publisher.name}</div>
                      <div className="card-text">{videogame.genres[0].name}</div>
                      <div className="card-text">
                        {videogame.platforms.map((platform) => (
                          <span className="mr-2">{platform.name} </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default HomePage;
