/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ImageBackground,
  StatusBar,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';

export default class ArticleInside extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.box1} />
        <Text style={[styles.logo, {opacity: 1}]}> Article Name</Text>
        <View style={styles.box2} />
        <Text style={styles.logoDescription}>Author</Text>
        <View style={styles.box3} />
        <Text style={styles.timeStyle}>mm.dd.yy</Text>
        <View style={styles.card}>
          <Text style={styles.metin}>
            {'  '} Unique Door No Easily Fill Your En tire Property Tax Using
            AppUnique Door No Easily Fill Your En tire Property Tax
            {'\n'}
            {'  '}Using AppUnique Door No Easily Fill Your En tire Property Tax
            Using AppUnique Door No Easily Fill Your En tire Property Tax Using
            AppUnique Door No Easily Fill Your En tire Property Tax Using
            AppUnique Door No Easily Fill Your En tire Property Tax Using
            AppUnique Door No Easily Fill Your En tire Property
            {'\n'}
            {'  '}3Tax Using AppUnique Door No Easily Fill Your En tire Property
            Tax Using AppUnique Door No Easily Fill Your En tire Property Tax
            Using AppUnique Door No Easily Fill Your En tire Property Tax Using
            AppUnique Door No Easily Fill Your En tire Property Tax Using
            AppUnique Door No Easily Fill Your En tire Property Tax Using App
            {'\n'}
            {'  '}3Tax Using AppUnique Door No Easily Fill Your En tire Property
            Tax Using AppUnique Door No Easily Fill Your En tire Property Tax
            Using AppUnique Door No Easily Fill Your En tire Property Tax Using
            AppUnique Door No Easily Fill Your En tire Property Tax Using
            AppUnique Door No Easily Fill Your En tire Property Tax Using App
            {'\n'}
            {'  '}3Tax Using AppUnique Door No Easily Fill Your En tire Property
            Tax Using AppUnique Door No Easily Fill Your En tire Property Tax
            Using AppUnique Door No Easily Fill Your En tire Property Tax Using
            AppUnique Door No Easily Fill Your En tire Property Tax Using
            AppUnique Door No Easily Fill Your En tire Property Tax Using App
            {'\n'}
            {'  '}3Tax Using AppUnique Door No Easily Fill Your En tire Property
            Tax Using AppUnique Door No Easily Fill Your En tire Property Tax
            Using AppUnique Door No Easily Fill Your En tire Property Tax Using
            AppUnique Door No Easily Fill Your En tire Property Tax Using
            AppUnique Door No Easily Fill Your En tire Property Tax Using App
            {'\n'}
            {'  '}3Tax Using AppUnique Door No Easily Fill Your En tire Property
            Tax Using AppUnique Door No Easily Fill Your En tire Property Tax
            Using AppUnique Door No Easily Fill Your En tire Property Tax Using
            AppUnique Door No Easily Fill Your En tire Property Tax Using
            AppUnique Door No Easily Fill Your En tire Property Tax Using App
          </Text>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  card: {
    borderRadius: 20,
    marginTop: '25%',
    backgroundColor: '#efefef',

  },
  box1: {
    marginTop: '20%',
    backgroundColor: '#4d533c',
    height: 45,
    opacity: 0.9,
    width: '70%',
    zIndex: 0,
    borderRadius:3,
  },
  box2: {
    //marginTop: '2%',
    backgroundColor: '#4d533c',
    height: 35,
    opacity: 0.7,

    width: '40%',
    zIndex: 0,
  },
  box3: {

    backgroundColor: '#4d533c',
    height: 15,
    opacity: 0.7,
    width: '30%',
    zIndex: 0,

  },
  logo: {
    marginTop: '20%',
    position: 'absolute',
    fontSize: 40,
    fontWeight: 'bold',
    //  color: '#f2f2f2',
    color: '#efefef',
    zIndex: 1,
  },
  logoDescription: {
    position: 'absolute',
    marginBottom: '3%',
    color: '#efefef',
    fontSize: 25,
    paddingLeft: 10,
    fontWeight: 'bold',
    marginTop: '32%',
  },
  timeStyle: {
    position: 'absolute',
    fontSize: 16,
    color: '#efefef',
    lineHeight: 20,
    paddingLeft: 10,
    marginTop: '39%',
  },
  metin: {
    fontSize: 15,
    padding: 20,
    paddingBottom:0,
    color: 'black',
    fontFamily: 'helvetica',
    lineHeight: 30,
    textAlign: 'justify',
  },
  loginAreaExp: {
    fontSize: 20,
    color: '#7e868f',
  },
});
