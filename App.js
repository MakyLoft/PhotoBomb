
import React, {Component} from 'react';
import { Platform, StyleSheet, Image, DeviceEventEmitter } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

//NativeBridge
import {NativeModules} from 'react-native';
var NativeBridge = NativeModules.NativeBridge;
//NativeBridge

type Props = {};

export default class App extends Component<Props> {

  constructor() {
    super();
    this.state = {
      image_background: null,
      image_foreground: null,
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

  pickImage(imageType) {
    ImagePicker.openPicker({
    }).then(image => {
      console.log('Image:', image);
      if(imageType === 'background') {
        this.setState({
          image_background: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
        });
      }
      else {
        this.setState({
          image_foreground: {uri: image.path, width: image.width, height: image.height, mime: image.mime},
        });
      }
    }).catch(e => {
      console.log(e);
      Alert.alert(e.message ? e.message : e);
    });
  }

  renderImage(image) {
    NativeBridge.showToast("Image Loaded Successfully", 1);
    
    return <Image style={{width: 200, height: 200, resizeMode: 'contain'}} source={image} />
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
          {this.state.image_background ? this.renderImage(this.state.image_background) : <Text>Image not loaded</Text>}
          {this.state.image_foreground ? this.renderImage(this.state.image_foreground) : <Text>Image not loaded</Text>}
        </View>
        <Footer>
          <FooterTab>
            <Button full onPress={() => this.pickImage('background')}>
              <Text>Press to select background image</Text>
            </Button>
            <Button full onPress={() => this.pickImage('foreground')}>
              <Text>Press to select foreground image</Text>
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
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});
