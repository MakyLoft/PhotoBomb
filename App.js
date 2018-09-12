/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, Alert} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

import AndroidBridge from './AndroidBridge.js';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  constructor() {
    super();
    this.state = {
      image: null
    };
  }

  pickSingle() {
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
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return this.renderVideo(image);
    }

    AndroidBridge.showToast("Image Loaded Successfully", 10);
    
    return <Image style={{width: 400, height: 400, resizeMode: 'contain'}} source={image} />
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.image ? this.renderImage(this.state.image) : null}

        <TouchableOpacity onPress={() => this.pickSingle()} style={styles.button}>
          <Text style={styles.text}>Tab to select image</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
