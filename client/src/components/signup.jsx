/*
signup view
created by: Anni on FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------



*/

import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import { Row, Col } from "reactstrap"

import { sign_up_action } from "../actions/signupActions.js"

class signupView extends React.Component {
  state = {
    show_loading_indicator: false
  }

  // sign_up event
  sign_up = value => {
    const { sign_up_action } = this.props
    e.preventDefault()

    //Dispatch action mapped to redux
    sign_up_action()

    // Change state of activity indicator
    this.setState({
      show_loading_indicator: true
    })
  }

  componentDidMount = () => {}

  render() {
    const { show_loading_indicator } = this.state
    const { data } = this.props

    return (
      <Row>
        {!data.error_message && show_loading_indicator === true ? (
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw" />
        ) : (
          <Col md={12} />
        )}
      </Row>
    )
  }
}

function mapStateToProps(state) {
  return {
    authentication: state.authentication,
    data: state.signup
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ sign_up_action }, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(signupView)
