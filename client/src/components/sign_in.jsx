
/*
sign in view
created by: Anni on FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the reset password view has a status bar located at the very-top across the full width of the view
reset password view has Label located at the top left of the view, text needs identified
reset password view has a Input located at the top left of the view with text email
reset password view has a Label located at the top left of the view with text ryan@ryan.com
reset password view has a Input located at the mid-top left of the view with text password
reset password view has a Label located at the bottom center of the view with text don't have an account?

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Input, InputGroup, InputGroupText, Button } from 'reactstrap';
        
        
        import { sign_in_action, login_action }  from '../actions/sign_inActions.js'; 

        
        
       
        class signinView extends React.Component {

            state = {
                 show_loading_indicator: false,
                email : '', 
password : '', 

            }
    
            
            // sign_in event
            sign_in = (value) => {
                const { sign_in_action } = this.props
                        e.preventDefault()

                        let sign_in_data      =  {};
				sign_in_data.email   = this.state.email 
				sign_in_data.password   = this.state.password 


                        //Dispatch action mapped to redux
                        sign_in_action(sign_in_data)
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // login event
            login = (value) => {
                const { login_action } = this.props
                        e.preventDefault()

                        let login_data      =  {};
				login_data.email   = this.state.email 
				login_data.password   = this.state.password 


                        //Dispatch action mapped to redux
                        login_action(login_data)
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
        handleChange(e) {
            this.setState({
                [e.target.name]: e.target.value
            })
        }    
            

            componentDidMount = () => {
                
               
                
            }
    
        render() {
        
         const { show_loading_indicator } = this.state
        const { data } = this.props

            return (
                <Row>

                {!data.error_message &&
                    show_loading_indicator === true ? <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i> : 
                    <Col md={12}>

                        				{/*<!-- TODO: Confirm label text --> */}

			</Col>

			<Col md={12}>
				<InputGroup>					<Input 
                                        className="form-group " 
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                        name="email"
                                        placeholder="email" />				</InputGroup>			</Col>

			<Col md={12}>
				<p> ryan@ryan.com </p>
			</Col>

			<Col md={12}>
				<InputGroup>					<Input 
                                        className="form-group " 
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        name="password"
                                        placeholder="password" />				</InputGroup>			</Col>

			<Col md={12}>
				<p> don't have an account? </p>
			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for sign_in action --> */}
				<Button 
                        className="btn btn-lg btn-block " 
                        onClick={() => this.sign_in()}>sign in</Button> 

			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for mgmmrw action --> */}
				<Button 
                        className="btn btn-lg btn-block " 
                        onClick={() => this.mgmmrw()}>mgmmrw</Button> 

			</Col>


                           
   
                    </Col> 
                     } 
                </Row>
            )   
        }
    }
                   
    function mapStateToProps(state) {
            return {
                    authentication: state.authentication,
                    data: state.sign_in
                
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({ sign_in_action, login_action  }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(signinView);
    
        