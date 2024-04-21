import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
  StatusBar,
  FlatList,
  TextInput,
} from 'react-native';
import statesData from '../assets/HomeCard';
import TestData from '../assets/test1';

function CardBoards({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortedData, setSortedData] = useState(TestData);

  const handleSearch = (text) => {
    const filteredData = TestData.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setSortedData(filteredData);
    setSearchQuery(text);
  };

  return (
    <SafeAreaView style={style.SafeAreacontainer}>
      <View style={style.searchContainer}>
        <TextInput
          style={style.searchInput}
          placeholder="Search by Board name"
          value={searchQuery}
          onChangeText={handleSearch}
        />
      </View>
      <FlatList
        data={sortedData}
        renderItem={({ item, index }) => (
          <View>
            <View key={index}>
              <View style={style.container}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={item.imageUrl} style={style.imgStyle} />
                  <View style={style.contentStyle}>
                    <Text style={style.titleStyle}>{item.name}</Text>
                    <Text style={style.dateStyle}>Date - {item.date}</Text>
                  </View>
                </View>

                <TouchableHighlight
                  style={style.touchableStyle}
                  onPress={() => navigation.navigate('Check Result', item)}>
                  <Text style={{ color: 'white' }}>Open</Text>
                </TouchableHighlight>
              </View>

              <View
                style={{
                  borderBottomWidth: 1,
                  borderBottomColor: '#666',
                }}></View>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  SafeAreacontainer: {
    flex: 1,
  },
  searchContainer: {
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 50,
    paddingHorizontal: 10,
  },
  touchableStyle: {
    backgroundColor: 'purple',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    padding: 10,
    height: 40,
  },
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    paddingLeft: 15,
    paddingRight: 15,
    position: 'relative',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgStyle: {
    width: 75,
    height: 75,
    borderRadius: 50,
  },
  titleStyle: {
    color: '#111',
    fontWeight: '900',
    fontSize: 20,
  },
  dateStyle: {
    color: '#111',
    fontSize: 15,
  },
  contentStyle: {
    justifyContent: 'center',
    marginLeft: 15,
  },
});

export default CardBoards;
