
/*
live view
created by: Anni on FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the edit profile view has a status bar located at the very-top across the full width of the view
edit profile view has Label located at the top center of the view, text needs identified
edit profile view has Label located at the top center of the view, text needs identified
edit profile view has Label located at the mid-top center of the view, text needs identified
edit profile view has Label located at the mid-top center of the view, text needs identified
edit profile view has Label located at the mid-top left of the view, text needs identified
edit profile view has Label located at the mid-top left of the view, text needs identified
edit profile view has Label located at the mid-top center of the view, text needs identified
edit profile view has Label located at the mid-top center of the view, text needs identified
the live view has a home icon located at the bottom left of the view which on click will trigger the home() action
the live view has a profile icon located at the bottom right of the view which on click will trigger the profile() action
the signup view has a home icon located at the bottom left of the view which on click will trigger the home() action
the signup view has a profile icon located at the bottom right of the view which on click will trigger the profile() action

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Button } from 'reactstrap';
        
        
        import {  }  from '../actions/liveActions.js'; 

        
        
       
        class liveView extends React.Component {

            state = {
                
                
            }
    
                
            

            componentDidMount = () => {
                
               
                
            }
    
        render() {
        
        
        const { data } = this.props

            return (
                <Row>

                 
                    <Col md={12}>

                        				{/*<!-- TODO: Confirm label text --> */}

			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for /_edit_profile_\ action --> */}
				<Button 
                        className="btn btn-lg btn-block " 
                        onClick={() => this./_edit_profile_\()}>/ edit profile \</Button> 

			</Col>

			<Col md={12}>
				{/* <!-- TODO: Create unit test for r_‘ action --> */}
				<Button 
                        className="btn btn-lg btn-block " 
                        onClick={() => this.r_‘()}>r ‘</Button> 

			</Col>


                           
   
                    </Col> 
                     
                </Row>
            )   
        }
    }
                   
    function mapStateToProps(state) {
            
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({   }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(liveView);
    
        