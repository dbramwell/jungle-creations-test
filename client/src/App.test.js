import React from 'react'
import App from './App'
import { shallow } from 'enzyme'
import configureStore from 'redux-mock-store'
import ReactDOM from 'react-dom'

const initialState = {}
const mockStore = configureStore()
let store,app

it('renders without crashing', () => {
  store = mockStore(initialState)
  const div = document.createElement('div');
  ReactDOM.render(<App store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
