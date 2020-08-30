import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';

import ArticleInside from './articleInside';
const HEADER_MAX_HEIGHT = 250;
const HEADER_MIN_HEIGHT = Platform.OS === 'ios' ? 50 : 73;
const HEADER_SCROLL_DISTANCE = 210;

export default class scrollDeneme extends Component {
  render() {
    return (
      <SafeAreaView style={{backgroundColor: 'black'}}>
        <TouchableOpacity
          style={{flex: 1}}
          onPress={() => this.props.navigation.goBack()}>
          <Text>Geri</Text>
        </TouchableOpacity>
        <ImageBackground
          style={styles.backgroundImage}
          source={require('../../components/imagesToUse/tabure.jpeg')}>
          <ArticleInside style={{zIndex: 1}} />
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    left: 0,
    right: 0,
    width: null,
    height: '100%',
    resizeMode: 'cover',
    zIndex: 0,
  },

  scrollViewContent: {
    // iOS uses content inset, which acts like padding.
    paddingTop: Platform.OS !== 'ios' ? HEADER_MAX_HEIGHT : 0,
  },
});
