import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  FlatList,
  TextInput,
  ActivityIndicator, // Added ActivityIndicator import
  Linking
} from 'react-native';
import newGif from '../assets/images/new.gif';
import { FetchCollection } from '../API/FirebaseAPI';

function CardBoards({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [fetchedData, setFetchedData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await FetchCollection();
      setFetchedData(response);
      setSortedData(response); // Initialize sortedData with fetchedData
      setIsLoading(false); // Set loading state to false once data is fetched
    } catch (error) {
      // Handle error
    }
  };

  const handleSearch = (text) => {
    const filteredData = fetchedData.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setSortedData(filteredData);
    setSearchQuery(text);
  };

  return (
    <SafeAreaView style={style.safeAreacontainer}>
      {/* Display loading indicator when isLoading is true */}
      {isLoading ? (
        <View style={style.loadingContainer}>
          <ActivityIndicator size="large" color="#2979ff" />
        </View>
      ) : (
        <>
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
            ListEmptyComponent={() => (
              searchQuery !== '' && sortedData.length === 0 ? (
                <View style={style.noResultContainer}>
                  <Text style={style.noResultText}>Not available</Text>
                  <Text style={style.noResultText}>Please tell me what you're looking for!</Text>
                  <TouchableOpacity
                    style={style.buttonContainer}
                    onPress={() => {
                      Linking.openURL('mailto:vipankumar7607@gmail.com?subject=Query');
                    }}
                  >
                    <Text style={style.buttonText}>Send your query!❤️</Text>
                  </TouchableOpacity>
                </View>
              ) : null
            )}
            renderItem={({ item, index }) => (
              <View>
                <View key={index}>
                  <View style={style.container}>
                    <View style={{ flexDirection: 'row' }}>
                      <Image source={{ uri: item.imageUrl }} style={style.imgStyle} />
                      <View style={style.contentStyle}>
                        <View style={style.titleRow}>
                          <Text style={style.titleStyle}>{item.name}</Text>
                          {item.isNew ? <Image source={newGif} style={style.newGif} /> : <Text></Text>}
                        </View>
                        <Text style={style.dateStyle}>Date - {item.releaseDate}</Text>
                      </View>
                    </View>
                    <TouchableHighlight
                      style={style.touchableStyle}
                      onPress={() => navigation.navigate('Check Result', item)}
                    >
                      <Text style={{ color: 'white' }}>Open</Text>
                    </TouchableHighlight>
                  </View>
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderBottomColor: '#666',
                    }}
                  ></View>
                </View>
              </View>
            )}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  safeAreacontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderWidth: 1,
    borderColor: '#2979ff',
    borderRadius: 50,
    paddingHorizontal: 10,
  },
  touchableStyle: {
    backgroundColor: '#e91e63',
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
  titleRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
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
  noResultContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  noResultText: {
    fontSize: 18,
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  buttonContainer: {
    backgroundColor: 'blue',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  loadingContainer: { // New style for loading indicator container
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CardBoards;
