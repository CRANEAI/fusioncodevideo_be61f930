import React from 'react';
import PropTypes from 'prop-types';
import {
  Container, Content, Form, Item, Label, Input, Text, Button, View,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import Loading from './Loading';
import Messages from './Messages';
import { translate } from '../../i18n';
import Header from './Header';
import Spacer from './Spacer';

class Login extends React.Component {
  static propTypes = {
    member: PropTypes.shape({
      email: PropTypes.string,
    }),
    locale: PropTypes.string,
    error: PropTypes.string,
    success: PropTypes.string,
    loading: PropTypes.bool.isRequired,
    onFormSubmit: PropTypes.func.isRequired,
  }

  static defaultProps = {
    error: null,
    success: null,
    locale: null,
    member: {},
  }

  constructor(props) {
    super(props);
    this.state = {
      email: (props.member && props.member.email) ? props.member.email : '',
      password: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSubmitFaux = this.handleSubmitFaux.bind(this);
  }

  handleChange = (name, val) => {
    this.setState({
      [name]: val,
    });
  }

  handleSubmit = () => {
    const { onFormSubmit } = this.props;
    onFormSubmit(this.state)
      .then(() => Actions.posts())
      .catch(e => console.log(`Error: ${e}`));
  }

  handleSubmitFaux = () => {
    Actions.posts()
  }

  render() {
    const {
      loading,
      error,
      success,
      locale,
    } = this.props;
    const { email } = this.state;

    if (loading) return <Loading />;

    return (
      <Container>
        <Content>
          <View innerpad>

          <Spacer size={100} />
          
            <Header
              title="Sign In"
            />
            { success ? <Messages type="success" message={success} /> : null }
            { error ? <Messages message={error} /> : null }
          </View>

          <Form>
            <Item stackedLabel>
              <Label>
                {translate('Email', locale)}
              </Label>
              <Input
                autoCapitalize="none"
                value={email}
                keyboardType="email-address"
                onChangeText={v => this.handleChange('email', v)}
              />
            </Item>
            <Item stackedLabel>
              <Label>
                {translate('Password', locale)}
              </Label>
              <Input
                secureTextEntry
                onChangeText={v => this.handleChange('password', v)}
              />
            </Item>

            <Spacer size={50} />

            <View innerpad>
              <Button block onPress={this.handleSubmit}>
                <Text>
                  {translate('Login', locale)}
                </Text>
              </Button>

              {/*<Button block onPress={this.handleSubmitFaux}>
                <Text>
                  {translate('Redirect', locale)}
                </Text>
    </Button>*/}
            </View>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Login;
