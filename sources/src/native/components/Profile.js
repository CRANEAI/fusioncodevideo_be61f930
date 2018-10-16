import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import {
  Container, Content, List, ListItem, Body, Left, Text, Icon, Button, Segment, Thumbnail
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Header from './Header';

const Profile = ({ member, logout }) => (
  <Container>
    <Content>
      <List>
    
            <View style={{ alignItems: "center" }}>
              <Content padder>

              <Thumbnail source={{uri: "https://facebook.github.io/react-native/docs/assets/favicon.png"}} />

                <Text>
                {member.firstName}
                </Text>

                <Button block onPress={logout}>
                  <Text>
                    Edit Profile
                  </Text>
                </Button>

                <Segment>
                  <Button first>
                    <Text>Friends</Text>
                  </Button>
                  <Button>
                    <Text>Following</Text>
                  </Button>
                  <Button last active>
                    <Text>Fans</Text>
                  </Button>
              </Segment>
             

                <Button block onPress={logout}>
                  <Text>
                    Logout
                  </Text>
                </Button>
                
              </Content>
       
            </View>
        </List>
    </Content>
  </Container>
);

Profile.propTypes = {
  member: PropTypes.shape({}),
  logout: PropTypes.func.isRequired,
};

Profile.defaultProps = {
  member: {},
};

export default Profile;
