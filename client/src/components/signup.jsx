
/*
signup view
created by: Anni on FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the signup view has a status bar located at the very-top across the full width of the view
signup view has Label located at the top left of the view, text needs identified
signup view has Label located at the top left of the view, text needs identified
signup view has Label located at the top left of the view, text needs identified
signup view has Label located at the mid-top left of the view, text needs identified
the signup view has a Pager located at the mid-top left of the view, correct text needs defined
signup view has Label located at the bottom center of the view, text needs identified

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Button } from 'reactstrap';
        
        
        import { sign_in_action, sign_up_action, postSignup }  from '../actions/signupActions.js'; 

        
        
       
        class signupView extends React.Component {

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
            // sign_up event
            sign_up = (value) => {
                const { sign_up_action } = this.props
                        e.preventDefault()

                        let sign_up_data      =  {};
				sign_up_data.email   = this.state.email 
				sign_up_data.password   = this.state.password 


                        //Dispatch action mapped to redux
                        sign_up_action(sign_up_data)
                        
                        
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

                        				<Button className="btn "><!-- --></Button> 

			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for sign_in action --> */}
				<Button 
                        className="btn btn-lg btn-block " 
                        onClick={() => this.sign_in()}>sign in</Button> 

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
                    data: state.signup
                
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({ sign_in_action, sign_up_action, postSignup  }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(signupView);
    
        