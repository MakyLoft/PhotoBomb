
import React, {Component} from 'react';
import { Platform, StyleSheet, Image } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, View } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';

import AndroidBridge from './AndroidBridge.js';

type Props = {};

export default class App extends Component<Props> {

  constructor() {
    super();
    this.state = {
      image: null
    };
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
    AndroidBridge.showToast("Image Loaded Successfully", 10);
    
    return <Image style={{width: 400, height: 400, resizeMode: 'contain'}} source={image} />
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
