import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  SafeAreaView,
  StatusBar,
  FlatList,
} from 'react-native';
import statesData from '../assets/HomeCard';

function CardBoards({ navigation }) {
  return (
    <SafeAreaView style={style.SafeAreacontainer}>
      <FlatList
        data={statesData}
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

                <TouchableHighlight style={style.touchableStyle} onPress={() => navigation.navigate('ChooseBoardScreen', item.resultWebsiteLink)}>
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
    marginTop: StatusBar.currentHeight || 0,
  },
  touchableStyle: {
    backgroundColor: 'purple',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: 'green',
    padding: 10,
    height: 40,
  },
  container: {
    backgroundColor: '#ddd',
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
  touchableStyle: {
    backgroundColor: 'purple',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: 'green',
    padding: 10,
    height: 40,
  },
});
export default CardBoards;
