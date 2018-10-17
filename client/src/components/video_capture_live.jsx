
/*
video capture live view
created by: Anni on FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

video capture live view has Video Capture Live located at the main area 
video capture live view has Video Capture Live located at the main area 
video capture live view has Video Capture Live located at the main area 
the video capture live view has a status bar located at the very-top across the full width of the view
video capture live view has Label located at the mid-bottom left of the view, text needs identified
video capture live view has Label located at the mid-bottom left of the view, text needs identified
video capture live view has Label located at the bottom left of the view, text needs identified
view has actions which trigger on events, view should should error messages and display activity indicator when processing
the live view has a like icon located at the mid-bottom center of the view which on click will trigger the like() action
the live view has a add icon located at the very-top center of the view which on click will trigger the add() action
the signup view has a like icon located at the mid-bottom center of the view which on click will trigger the like() action
the signup view has a add icon located at the very-top center of the view which on click will trigger the add() action
the back action view has a like icon located at the mid-bottom center of the view which on click will trigger the like() action
the back action view has a add icon located at the very-top center of the view which on click will trigger the add() action
the edit profile view has a like icon located at the mid-bottom center of the view which on click will trigger the like() action
the edit profile view has a add icon located at the very-top center of the view which on click will trigger the add() action

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col   } from 'reactstrap';
        
        
        import {  }  from '../actions/video_capture_liveActions.js'; 

        
        
       
        class videocaptureliveView extends React.Component {

            state = {
                
                stream.hostAddress : '', 
stream.applicationName : '', 
stream.username : '', 
stream.password : '', 
stream.streamName : '', 
stream.sdkLicenseKey : '', 
author : '', 
video_source : '', 
video_format : '', 
camera_mode : '', 
like_counts : '', 

            }
    
            
        handleChange(e) {
            this.setState({
                [e.target.name]: e.target.value
            })
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
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(videocaptureliveView);
    
        