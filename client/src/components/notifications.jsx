
/*
notifications view
created by: Anni on FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the search view has a status bar located at the very-top across the full width of the view
search view has Navigation Bar located at the very-top in the center of the view
the search view has a Input Box with text e located at the very-top in the center of the view
the search will appear on focus with state is set
the edit profile view has a back icon located at the very-top left of the view which on click will trigger the back() action
the edit profile view has a search icon located at the very-top left of the view which on click will trigger the search() action
the edit profile view has a notification icon located at the bottom right of the view which on click will trigger the notification() action
the history view has a back icon located at the very-top left of the view which on click will trigger the back() action
the history view has a search icon located at the very-top left of the view which on click will trigger the search() action
the history view has a notification icon located at the bottom right of the view which on click will trigger the notification() action
the signup view has a back icon located at the very-top left of the view which on click will trigger the back() action
the signup view has a search icon located at the very-top left of the view which on click will trigger the search() action
the signup view has a notification icon located at the bottom right of the view which on click will trigger the notification() action
the back action view has a back icon located at the very-top left of the view which on click will trigger the back() action
the back action view has a search icon located at the very-top left of the view which on click will trigger the search() action
the back action view has a notification icon located at the bottom right of the view which on click will trigger the notification() action
the live view has a back icon located at the very-top left of the view which on click will trigger the back() action
the live view has a search icon located at the very-top left of the view which on click will trigger the search() action
the live view has a notification icon located at the bottom right of the view which on click will trigger the notification() action
the signup view has a back icon located at the very-top left of the view which on click will trigger the back() action
the signup view has a search icon located at the very-top left of the view which on click will trigger the search() action
the signup view has a notification icon located at the bottom right of the view which on click will trigger the notification() action
the notifications view has a back icon located at the very-top left of the view which on click will trigger the back() action
the notifications view has a search icon located at the very-top left of the view which on click will trigger the search() action
the notifications view has a notification icon located at the bottom right of the view which on click will trigger the notification() action
the search view has a back icon located at the very-top left of the view which on click will trigger the back() action
the search view has a search icon located at the very-top left of the view which on click will trigger the search() action
the search view has a notification icon located at the bottom right of the view which on click will trigger the notification() action

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Navbar, NavItem, NavbarBrand } from 'reactstrap';
        
        
        import { follow_action, follow_action, follow_action }  from '../actions/notificationsActions.js'; 

        import { get_notifications_data }  from '../actions/notificationsActions.js'; 
        
       
        class notificationsView extends React.Component {

            state = {
                 show_loading_indicator: false,
                
            }
    
            
            // follow event
            follow = (value) => {
                const { follow_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        follow_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // follow event
            follow = (value) => {
                const { follow_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        follow_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // follow event
            follow = (value) => {
                const { follow_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        follow_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }    
            
        get_notifications_data = () => {

            return (
                <Col>
                <!-- ToDo: Refine template loop for get_notifications_data -->
                </Col>
            )
        }
        

            componentDidMount = () => {
                const { get_notifications_data } = this.props
               
                
            }
    
        render() {
        
         const { show_loading_indicator } = this.state
        const { data } = this.props

            return (
                <Row>

                {!data.error_message &&
                    show_loading_indicator === true ? <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i> : 
                    <Col md={12}>

                        <Navbar color="light" light expand="md"> 
    <NavbarBrand><!-- todo: add text for navigation title --></NavbarBrand> 
</Navbar> 

                        {render_get_notifications_data()}
   
   
                    </Col> 
                     } 
                </Row>
            )   
        }
    }
                   
    function mapStateToProps(state) {
            return {
                    authentication: state.authentication,
                    data: state.notifications
                
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({ follow_action, follow_action, follow_action get_notifications_data }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(notificationsView);
    
        