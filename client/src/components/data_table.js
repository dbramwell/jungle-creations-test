import React, { Component } from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class DataTable extends Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <th>Number of builds:</th>
            <td>{this.props.builds['@pagination'].count}</td>
          </tr>
          <tr>
            <th>Current Status:</th>
            <td>{this.props.builds.builds[0].state}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    builds: state.builds
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTable)
