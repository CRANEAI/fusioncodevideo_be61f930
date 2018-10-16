
/*
signup view
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
        
        
        import { sign_in_action, sign_up_action }  from '../actions/signupActions.js'; 

        
        
       
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

                        <Navbar color="light" light expand="md"> 
    <NavbarBrand><!-- todo: add text for navigation title --></NavbarBrand> 
</Navbar> 

                           
   
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
            return bindActionCreators({ sign_in_action, sign_up_action  }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(signupView);
    
        