import './Characters.css';
import { Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getData, charsFilter } from '../../redux/Characters/Characters';

const Characters = () => {
  const displayChars = useSelector((state) => state.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!displayChars.length) dispatch(getData());
  });

  const [searchItem, setSearchItem] = useState('');

  const handleSearch = (e) => {
    if (e.searchItem === '' || e.searchItem === ' ') {
      dispatch(getData().sort());
    }
    dispatch(charsFilter(searchItem));
    setSearchItem(e.target.value);
  };

  return (
    <div className="container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Filter..."
          onChange={handleSearch}
          value={searchItem}
        />
      </div>

      <div className="cards-container">
        {displayChars.sort().map((character, index) => (
          <div className={(index % 2 === 1) ? 'odd-bg card' : 'card'} key={character.key}>
            <Link to={{ pathname: `/${character.id}` }} className="info-link">
              <div className="card-img">
                <img className="character-img" src={character.image} alt={character.name} />
              </div>
              <p className="character-name">
                {(character.name[0] === '.' || character.name[0] === "'")
                  ? character.name.replace(/[.']/g, '')
                  : character.name.substring(0, 23)}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Characters;
