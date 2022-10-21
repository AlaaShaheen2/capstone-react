// import axios from 'axios';

const GET_DATA = 'DISNEY_TRIBE/srs/redux/FETCH_DATA';
const FILTER = 'DISNEY_TRIBE/redux/FILTER';

const url = 'https://api.disneyapi.dev/characters';
const chars = [];

const getData = () => async (dispatch) => {
  const response = await axios.get(`${url}`);
  return dispatch({ type: GET_DATA, payload: response.data.data });
};

const charsFilter = (search) => ({ type: FILTER, payload: search });

const charactersReducer = (state = chars, action) => {
  switch (action.type) {
    case FILTER: {
      return state.filter((character) => {
        const name = character.name.toLowerCase();
        return name.includes(action.payload.toLowerCase());
      });
    }
    case GET_DATA:
      return action.payload.map((character) => ({
        ...character,
        id: character._id, // eslint-disable-line
        key: character._id, // eslint-disable-line
        name: character.name,
        image: character.imageUrl,
        movies: character.films,
        shows: character.tvShows,
      }));
    default:
      return state;
  }
};

export { getData, charsFilter };
export default charactersReducer;
