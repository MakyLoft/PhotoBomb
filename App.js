
import React, {Component} from 'react';
import { Platform, StyleSheet, Image, DeviceEventEmitter } from 'react-native';

import { 
  Container, 
  Header, 
  Title, 
  Content, 
  Footer, 
  FooterTab, 
  Button, 
  Left, 
  Right, 
  Body, 
  Icon, 
  Text, 
  View, 
  Toast,
  Root 
} from 'native-base';

import { StackNavigator } from "react-navigation";
import ImagePicker from 'react-native-image-crop-picker';

import NativeBridge from './NativeBridge.js';

class App extends Component {

  constructor() {
    super();
    this.state = {
      image: null,
      message: ""
    };
  }

  componentWillMount() {
    DeviceEventEmitter.addListener('showMessage', this.showMessage);
  }

  showMessage()
  {
    console.log("showMessage");
  }

  pickImage() {
    ImagePicker.openPicker({
    }).then(image => {
      console.log('Image:', image);
      this.setState({
        image: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
      });
    }).catch(e => {
      console.log(e);
      Alert.alert(e.message ? e.message : e);
    });
  }

  renderImage(image) {
    NativeBridge.showToast("Image Loaded Successfully", 10);
    
    return <Image style={{width: 400, height: 400, resizeMode: 'contain'}} source={image} />
  }

  getMessage()
  {
    NativeBridge.getMessage(
      (newMessage) => {
        this.setState({message : newMessage});
      }
    );
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
        <View style={styles.container}>
          {this.state.image ? this.renderImage(this.state.image) : <Text>Image not loaded</Text>}
        </View>
        <Footer>
          <FooterTab>
            <Button full onPress={() => this.pickImage()}>
              <Text>Press to select image</Text>
            </Button>
            <Button full onPress={() => this.getMessage()}>
            <Text>{this.state.message? this.state.message: 'Get a message from NativePlatform'}</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

const AppNavigator = StackNavigator(
  {
    App: { screen: App },
  },
  {
    headerMode: "none"
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;