import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Text, Form, Item, Label, Input, Button,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Messages from './Messages';
import Header from './Header';
import Spacer from './Spacer';

class SignUp extends React.Component {
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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      password2: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitQuick = this.handleSubmitQuick.bind(this);
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
    Actions.posts()
  }
  
  render() {
    const { loading, error } = this.props;

    if (loading) return <Loading />;

    return (
      <Container>
        <Content padder>


        <Spacer size={100} />

          <Header
            title="Sign Up"
          />

          {error && <Messages message={error} />}

          <Form>
            <Item stackedLabel>
              <Label>
                Name
              </Label>
              <Input onChangeText={v => this.handleChange('firstName', v)} />
            </Item>


            <Item stackedLabel>
              <Label>
                Email
              </Label>
              <Input
                autoCapitalize="none"
                keyboardType="email-address"
                onChangeText={v => this.handleChange('email', v)}
              />
            </Item>

            <Item stackedLabel>
              <Label>
                Password
              </Label>
              <Input secureTextEntry onChangeText={v => this.handleChange('password', v)} />
            </Item>


            <Spacer size={50} />

            <Button block onPress={this.handleSubmit}>
              <Text>
                Sign Up
              </Text>
            </Button>

         
            <Button block onPress={this.handleSubmitQuick}>
              <Text>
                quick
              </Text>
            </Button>
            

          </Form>
        </Content>
      </Container>
    );
  }
}

export default SignUp;
