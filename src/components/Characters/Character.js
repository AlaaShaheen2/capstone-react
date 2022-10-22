import './Character.css';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Character = () => {
  const character = useParams();
  const info = useSelector((state) => state.characters);
  const charInfo = info.filter((char) => +char.id === +character.id);

  return (
    <div className="info-container flex">
      {charInfo.map((char, index) => (
        <div className="info flex" key={index.legth * 5 + 1}>
          <div className="info-top flex">
            <div className="char-img">
              <img src={char.image} alt={char.name} className="char-img" />
            </div>
            <div className="char-name">
              <p>
                {(char.name[0] === '.' || char.name[0] === "'")
                  ? char.name.replace(/[.']/g, '')
                  : char.name}
              </p>
            </div>
          </div>
          <ul className="char-movies">
            <p>Movies: </p>
            {(!char.movies.length) ? (
              <p>
                {`${char.name} `}
                does not have Movies.
              </p>
            )
              : char.movies.map((movie) => (
                <li key={index.legth * 5 + 1}>
                  {movie}
                  .
                </li>
              ))}
          </ul>
          <ul className="tv-shows">
            <p>Tv Shows: </p>
            {(!char.shows.length) ? (
              <p>
                {`${char.name} `}
                does not have TV Shows.
              </p>
            )
              : char.shows.map((show) => <li key={index.legth * 5 + 1}>{show}</li>)}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Character;
