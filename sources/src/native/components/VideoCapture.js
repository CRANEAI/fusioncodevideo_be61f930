import React from 'react';
import { AppRegistry, Dimensions, View, Alert, StyleSheet, Image, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import {
  Container, Content, Text, Item, Label, Input, Button
} from 'native-base';
import Spacer from './Spacer';
import Loading from './Loading';
const Permissions = require('react-native-permissions');
import BroadcastView from 'react-native-wowza-gocoder';
import config from '../../../wowzaConfig';
const {width, height} = Dimensions.get('window');

class VideoCapture extends React.Component {
  static propTypes = {
    error: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      topicChat: '',
      broadcasting:false,
      muted:false,
      flashEnabled:false,
      frontCamera:false,
      recordingTime: '00:00:00',
      recordButtonImage: require('../../../assets/Rec.png'),
      permissionGranted:true
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitQuick = this.handleSubmitQuick.bind(this);
  }

  componentDidMount(){
    
    console.log("woot")
    console.log("permission", Permissions)
    console.log("----------------------")

    console.log(Permissions.microphonePermissionStatus())
    console.log(Permissions.cameraPermissionStatus())
    
    
    //this._requestPermissions()
    /*
    Permissions.checkMultiplePermissions(['camera', 'microphone']).then((response) =>{

      const permissionGranted = (response.camera === "authorized" && response.microphone === "authorized");
      if(!permissionGranted){
        this._requestPermissions()
      }

      this.setState({
        permissionGranted:permissionGranted
      })
    })
    */
  }

  _requestPermissions() {
    let cameraPermission = false;
    let microphonePermission = false;
    Permissions.requestPermission('camera').then(response => {
      if(response === 'authorized'){
        cameraPermission = true
      }
      Permissions.requestPermission('microphone').then(resp => {
        if (resp === 'authorized'){
          microphonePermission = true
        }
        if(!(cameraPermission && microphonePermission)){
          Alert.alert(
              'Broadcast Live',
              'In order to broadcast We need access to your camera, microphone',
              [
                {text: 'Cancel', onPress: null },
                {text: 'Yes', onPress: Permissions.openSettings}
              ]
          )
        }
        this.setState({
          permissionGranted:(cameraPermission && microphonePermission)
        })
      })
    })
  }

  handleChange = (name, val) => {
    this.setState({
      [name]: val,
    });
  }

  handleSubmit = () => {
    const { onFormSubmit } = this.props;
    onFormSubmit(this.state)
      .then(() => Actions.login())
      .catch(e => console.log(`Error: ${e}`));
  }

  
  handleSubmitQuick = () => {
    const { onFormSubmit } = this.props;
    Actions.login()
  }

  handleStartBroadcast = () => {
    console.log("WOOT!!")
    console.log(  this.state.broadcasting )
    this.setState({
      broadcasting: !this.state.broadcasting
    })
  }

  _didStartBroadcast = () =>{
    this.setState({
      recordButtonImage: require('../../../assets/Stop.png')
    });
  }


  _broadcastDidFailToStart = (error) =>{
    console.log('Failed to broadcast: ', error);
  }

  _broadcastStatusDidChange = (status) => {
    console.log(' ', status);
  }

  _broadcastDidReceiveEvent = (event) =>{
    console.log(' ', event);
  }

  _broadcastDidReceiveError = (error) =>{
    console.log(' ', error);
  }

  _broadcastVideoFrameEncoded = (time) => {
    this.setState({recordingTime: this._formatCurrentTime(time.encoded)}, () => {
      console.log(this.state.recordingTime);
    });
  }

  _didStopBroadcast = () => {
    this.setState({
      recordButtonImage: require('../../../assets/Rec.png')
    });
  }

  _formatCurrentTime(currentTime) {
    let time = Number(currentTime);
    var h = Math.floor(time / 3600);
    var m = Math.floor(time % 3600 / 60);
    var s = Math.floor(time % 3600 % 60);
    return ((h > 0 ? h + ":" + (m < 10 ? "0" : "") : "00:") + (m > 0?m:"00") + ":" + (s < 10 ? "0" : "") + s);
  }


  render() {
    const { loading, error } = this.props;

    if (loading) return <Loading />;
    
    if(!this.state.permissionGranted){
      return(<View style={{backgroundColor:'black'}}>
          </View>
        )
    }
    return (
  <Container>
    <Content style={{backgroundColor:'black'}} contentContainerStyle={{ flex: 1 }}>>
      
    <BroadcastView style={styles.contentArea}
                       hostAddress={config.hostAddress}
                       applicationName={config.applicationName}
                       sdkLicenseKey={config.sdkLicenseKey}
                       broadcastName={config.streamName}
                       username={config.username}
                       password={config.password}
                       backgroundMode={false}
                       sizePreset={2}
                       broadcasting={this.state.broadcasting}
                       muted={this.state.muted}
                       flashOn={this.state.flashEnabled}
                       frontCamera={this.state.frontCamera}
                       onBroadcastStart={this._didStartBroadcast}
                       onBroadcastFail={this._broadcastDidFailToStart}
                       onBroadcastStatusChange={this._broadcastStatusDidChange}
                       onBroadcastEventReceive={this._broadcastDidReceiveEvent}
                       onBroadcastErrorReceive={this._broadcastDidReceiveError}
                       onBroadcastVideoEncoded={this._broadcastVideoFrameEncoded}
                       onBroadcastStop={this._didStopBroadcast}
        >
        </BroadcastView>
      
      <Item stackedLabel>
              <Label>
                Topic Chat
              </Label>
              <Input
                autoCapitalize="none"
                onChangeText={v => this.handleChange('topicChat', v)}
              />
            </Item>

        <Text style={styles.recordingTimerLabel}>
          {this.state.recordingTime}
        </Text>
        <View style={styles.cameraControls}>
          <TouchableOpacity onPress={() => {this.setState({frontCamera: !this.state.frontCamera})}}>
            <Image source={require('../../../assets/Flip.png')}></Image>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.setState({broadcasting: !this.state.broadcasting})}}>
          <Image source={this.state.recordButtonImage} style={styles.cameraControlsButton}></Image>
        </TouchableOpacity>
          <TouchableOpacity onPress={() => {this.setState({flashEnabled: !this.state.flashEnabled})}}>
            <Image source={require('../../../assets/Torch.png')} style={styles.cameraControlsButton}></Image>
          </TouchableOpacity>
        </View>

      
     
    </Content>
  </Container>
    )
  }
}

export default VideoCapture;
