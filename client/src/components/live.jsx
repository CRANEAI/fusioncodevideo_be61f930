
/*
live view
created by: Anni on FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the signup view has a status bar located at the very-top across the full width of the view
signup view has Label located at the top left of the view, text needs identified
signup view has Label located at the top left of the view, text needs identified
signup view has Label located at the top left of the view, text needs identified
signup view has Label located at the mid-top left of the view, text needs identified
signup view has Label located at the mid-top left of the view, text needs identified
signup view has Label located at the main area left of the view, text needs identified
the signup view has a Pager located at the main area left of the view, correct text needs defined
signup view has Label located at the bottom center of the view, text needs identified
signup view has Label located at the bottom center of the view, text needs identified

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
				{/* <!-- TODO: Create unit test for \iup action --> */}
				<Button 
                        className="btn btn-lg btn-block " 
                        onClick={() => this.\iup()}>\iup</Button> 

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
    
        