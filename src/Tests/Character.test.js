import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Character from '../components/Characters/Character';
import store from '../redux/configureStore';

describe('Testing Character:', () => {
  it('Should render individual character information', () => {
    const tree = render(
      <React.StrictMode>
        <Provider store={store}>
          <Router>
            <Character />
          </Router>
        </Provider>
      </React.StrictMode>,
    );
    expect(tree).toMatchSnapshot();
  });
});
