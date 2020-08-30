import React, {Component} from 'react';
import {
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  TextInput,
  StyleSheet,
} from 'react-native';
import styles from '../../components/StyleSheets/styles';
import data from '../../Data/dataArrays';

export default class DiscoverP extends Component {
  state = {
    text: '',
    category: data,
  };

  renderCategory = ({item}) => {
    return (
      <TouchableOpacity>
        <View style={styles.container}>
          <Image style={styles.photo} source={{uri: item.photo_url}} />

          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  searchFilter = (text) => {
    const newData = data.filter((item) => {
      const listItem = `${item.title.toLowerCase()}`;

      return listItem.indexOf(text.toLowerCase()) > -1;
    });

    this.setState({
      category: newData,
    });
  };
  renderHeader = () => {
    const {text} = this.state;
    return (
      <View>
        <View style={{backgroundColor: 'black', top: 0}} />
        <SafeAreaView>
          <View>

            <View style={styles.searchBut}>
              <TextInput
                style={styles.input}
                onChangeText={(text) => {
                  this.setState({
                    text,
                  });

                  this.searchFilter(text);
                }}
                value={text}
                placeholder="Search..."
              />
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  };
  render() {
    return (
      <View style={{backgroundColor: '#f5f3f3'}}>
        <FlatList
          vertical
          showsVerticalScrollIndicator={false}
          numColumns={2}
          renderItem={this.renderCategory}
          keyExtractor={(item) => item.recipeId}
          data={this.state.category}
          ListHeaderComponent={this.renderHeader()}
        />
      </View>
    );
  }
}
