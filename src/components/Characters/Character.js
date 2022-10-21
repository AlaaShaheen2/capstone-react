import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Character = () => {
  const character = useParams();
  const info = useSelector((state) => state.characters);
  const charInfo = info.filter((char) => +char.id === +character.id);

  return (
    <div className="info-container">
      {charInfo.map((char, index) => (
        <div className="info" key={index.legth * 5 + 1}>
          <div className="char-img">
            <img src={char.image} alt={char.name} />
          </div>
          <div className="char-name">
            <h4>
              <span>Name:</span>
              {'  '}
              {(char.name[0] === '.' || char.name[0] === "'")
                ? char.name.replace(/[.']/g, '')
                : char.name}
            </h4>
          </div>
          <ul className="char-movies">
            <h4>Movies: </h4>
            {(!char.movies.length) ? (
              <p>
                $
                {char.name}
                {' '}
                do not have Movies.
              </p>
            )
              : char.movies.map((movie) => (
                <li key={index.legth * 5 + 1}>
                  {movie}
                  .
                </li>
              ))}
          </ul>
          <ul>
            <h4>Tv Shows: </h4>
            {(!char.shows.length) ? (
              <p>
                {' '}
                $
                {char.name}
                {' '}
                do not have TV Shows.
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
