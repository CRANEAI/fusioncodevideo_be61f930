
/*
sign_in view
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
        
        
        import { login_action }  from '../actions/sign_inActions.js'; 

        
        
       
        class sign_inView extends React.Component {

            state = {
                 show_loading_indicator: false,
                
            }
    
            
            // login event
            login = (value) => {
                const { login_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        login_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
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
                    data: state.sign_in
                
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({ login_action  }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(sign_inView);
    
        