
import React, {Component} from 'react';
import { Platform, StyleSheet, Image, DeviceEventEmitter } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View } from 'native-base';
var ImagePicker = require('react-native-image-picker');

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
      image_background_path: null,
      image_foreground: null,
      image_foreground_path: null,
      image_merge: null,
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

    var pickOptions = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'Images'
      }
    };

    ImagePicker.showImagePicker(pickOptions, (response) => {
      console.log('Response = ', response);
    
      if (response.didCancel) {
        console.log('User Cancelled Image Picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User Tapped Custom Button: ', response.customButton);
      }
      else {        
        if (imageType === 'background') {
          this.setState({          
            image_background : { uri: response.uri },
            image_background_path : response.path
          });
        }
        else {
          this.setState({          
            image_foreground : { uri: response.uri },
            image_foreground_path : response.path
          });
        }
      }
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

  mergeImages(imageBackgroundPath, imageForegroundPath)
  {
    console.log('imageBackgroundPath: ', imageBackgroundPath);
    console.log('imageForegroundPath', imageForegroundPath);
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

          {this.state.image_merge ? this.renderImage(this.state.image_merge) : <Text>Merge</Text>}

          {this.state.image_foreground ? this.renderImage(this.state.image_foreground) : <Text>Image not loaded</Text>}         
        </View>
        <Footer>
          <FooterTab>
            <Button full onPress={() => this.pickImage('background')}>
              <Text>Select Background Image</Text>
            </Button>
            <Button full onPress={() => this.pickImage('foreground')}>
              <Text>Select Foreground Image</Text>
            </Button>
            <Button full onPress={() => this.mergeImages(this.state.image_background_path, this.state.image_foreground_path)}>
            <Text>Merge Images</Text>
            </Button>
            <Button full onPress={() => this.getMessage()}>
            <Text>{this.state.message? this.state.message: 'Get NativePlatform Message'}</Text>
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
