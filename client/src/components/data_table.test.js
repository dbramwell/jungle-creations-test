import React from 'react'
import DataTable from './data_table'
import { mount } from 'enzyme'
import configureStore from 'redux-mock-store'
import ReactDOM from 'react-dom'

const initialState = {builds: {'@pagination': {count: '5'}, builds: [{state: 'passed'}]}}
const mockStore = configureStore()
let store,app

beforeEach(() => {
  store = mockStore(initialState)
})

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<DataTable store={store} />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('shows the number of builds', () => {
  let app = mount(<DataTable store={store}/>)
  expect(app.find('tr td').at(0).text()).toBe('5')
})

it('shows the current status', () => {
  let app = mount(<DataTable store={store}/>)
  expect(app.find('tr td').at(1).text()).toBe('passed')
})
