import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Character from '../components/Characters/Characters';
import store from '../redux/configureStore';

describe('Testing Characters:', () => {
  it('Should render all characters', () => {
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
