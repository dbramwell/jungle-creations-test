import React, { Component } from 'react'
import './App.css'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import fetchBuilds from './actions/fetch_builds'
import DataTable from './components/data_table'

class App extends Component {

  showDataTable() {
    if (this.props.builds) return <DataTable/>
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={'https://travis-ci.com/images/logos/TravisCI-Full-Color.png'} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the build radiator for David Bramwell's Jungle Creations Assessment</h1>
          <button onClick={this.props.fetchBuilds}>Click here to refresh data</button>
        </header>
        {this.showDataTable()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    builds: state.builds
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchBuilds
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
