
/*
search view
created by: Anni on FusionCode

//----------------------------------------------------------------------------------------------------------
// Component Requirements
//----------------------------------------------------------------------------------------------------------

the search view has a status bar located at the very-top across the full width of the view
search view has Navigation Bar located at the very-top in the center of the view
the search view has a Input Box with text e located at the very-top in the center of the view
the search will appear on focus with state is set
the search view has a back icon located at the very-top left of the view which on click will trigger the back() action
the search view has a search icon located at the very-top left of the view which on click will trigger the search() action
the search view has a notification icon located at the bottom right of the view which on click will trigger the notification() action

*/
        
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col , Navbar, NavItem, NavbarBrand } from 'reactstrap';
        
        
        import { close,_action, close,_action, close,_action, close,_action, close,_action, close,_action, close_action, close_action, close_action, close_action, close_action, close_action }  from '../actions/searchActions.js'; 

        
        
       
        class searchView extends React.Component {

            state = {
                 show_loading_indicator: false,
                
            }
    
            
            // help event
            help = () => {
                
                 help = () => {
                    <!-- ToDo: define what help will do in the help component --> 
                 })
                    
              }
            // close, event
            close, = (value) => {
                const { close,_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        close,_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close, event
            close, = (value) => {
                const { close,_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        close,_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close, event
            close, = (value) => {
                const { close,_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        close,_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close, event
            close, = (value) => {
                const { close,_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        close,_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close, event
            close, = (value) => {
                const { close,_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        close,_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close, event
            close, = (value) => {
                const { close,_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        close,_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close event
            close = (value) => {
                const { close_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        close_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close event
            close = (value) => {
                const { close_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        close_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close event
            close = (value) => {
                const { close_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        close_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close event
            close = (value) => {
                const { close_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        close_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close event
            close = (value) => {
                const { close_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        close_action()
                        
                        
                        // Change state of activity indicator
                        this.setState({
                            show_loading_indicator: true
                        })
                        
              }
            // close event
            close = (value) => {
                const { close_action } = this.props
                        e.preventDefault()

                        

                        //Dispatch action mapped to redux
                        close_action()
                        
                        
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
                    data: state.search
                
            }
        }
    
        function mapDispatchToProps(dispatch) {
            return bindActionCreators({ close,_action, close,_action, close,_action, close,_action, close,_action, close,_action, close_action, close_action, close_action, close_action, close_action, close_action  }, dispatch);
        }
    
   
        export default connect(mapStateToProps, mapDispatchToProps)(searchView);
    
        