import { useState, useEffect } from "react";
import Hero from "../components/Hero";
import RecentGames from "../components/RecentGames";
import PublisherSection from "../components/PublisherSection";
import axios from "axios";

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
      <RecentGames />
      <PublisherSection />
      {/* <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="">
              {videogames.map((videogame) => (
                <div key={videogame.id} className="card my-4">
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
      </div> */}
    </>
  );
};

export default HomePage;
