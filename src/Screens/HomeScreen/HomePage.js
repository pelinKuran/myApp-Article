import React, {Component} from 'react';
import NavigationContainer from 'react-navigation';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
  Button,
} from 'react-native';
import styles from '../../components/StyleSheets/styles';
import data from '../../Data/dataArrays';
import {createStackNavigator} from 'react-navigation-stack';
import scrollDeneme from '../Article/scrollDeneme';
export default class HomePage extends Component {
  state = {
    text: '',
    category: data,
  };
  renderCategory = ({item}) => {
    return (
      <View>
        <TouchableOpacity>
          <View style={styles.container}>
            <Image style={styles.photo} source={{uri: item.photo_url}} />
            <Text style={styles.title}>News</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  renderHeader = () => {
    const {text} = this.state;
    createStackNavigator({
      Article: scrollDeneme,
    });
    return (
      <View>
        <View style={{backgroundColor: 'black', top: 0}} />

        <TouchableOpacity>
          <View style={styles.bigContainer}>
            <Image
              source={require('../../components/imagesToUse/Blur.jpg')}
              style={styles.photox}
            />
            <Button
              style={[styles.title, {color: 'black', fontSize: 18}]}
              title="Article Title"
              onPress={() => this.props.navigation.navigate('Article')}
            />
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    return (
      <View style={{backgroundColor: '#f5f3f3'}}>
        <SafeAreaView>
          <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            renderItem={this.renderCategory}
            keyExtractor={(item) => item.recipeId}
            data={this.state.category}
            ListHeaderComponent={this.renderHeader()}
          />
        </SafeAreaView>
      </View>
    );
  }
}
