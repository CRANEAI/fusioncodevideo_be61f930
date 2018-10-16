
/*
back_action view
created by: Anni on FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the search view has a status bar located at the very-top across the full width of the view
search view has Navigation Bar located at the very-top in the center of the view
the search view has a Input Box with text e located at the very-top in the center of the view
the search will appear on focus with state is set
the live view has a back icon located at the very-top left of the view which on click will trigger the back() action
the live view has a search icon located at the very-top left of the view which on click will trigger the search() action
the live view has a notification icon located at the bottom right of the view which on click will trigger the notification() action
the signup view has a back icon located at the very-top left of the view which on click will trigger the back() action
the signup view has a search icon located at the very-top left of the view which on click will trigger the search() action
the signup view has a notification icon located at the bottom right of the view which on click will trigger the notification() action
the signup view has a back icon located at the very-top left of the view which on click will trigger the back() action
the signup view has a search icon located at the very-top left of the view which on click will trigger the search() action
the signup view has a notification icon located at the bottom right of the view which on click will trigger the notification() action
the composite view has a back icon located at the very-top left of the view which on click will trigger the back() action
the composite view has a search icon located at the very-top left of the view which on click will trigger the search() action
the composite view has a notification icon located at the bottom right of the view which on click will trigger the notification() action
the search view has a back icon located at the very-top left of the view which on click will trigger the back() action
the search view has a search icon located at the very-top left of the view which on click will trigger the search() action
the search view has a notification icon located at the bottom right of the view which on click will trigger the notification() action

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Navbar, NavItem, NavbarBrand } from 'reactstrap';
        
        
        import {  }  from '../actions/back_actionActions.js'; 

        
        
       
        class back_actionView extends React.Component {

            state = {
                
                
            }
    
                
            

            componentDidMount = () => {
                
               
                
            }
    
        render() {
        
        
        const { data } = this.props

            return (
                <Row>

                 
                    <Col md={12}>

                        <Navbar color="light" light expand="md"> 
    <NavbarBrand><!-- todo: add text for navigation title --></NavbarBrand> 
</Navbar> 

                           
   
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
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(back_actionView);
    
        