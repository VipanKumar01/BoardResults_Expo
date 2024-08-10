import React, { useEffect, useState, useCallback } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  TextInput,
  ActivityIndicator,
  Linking,
  Animated,
  useWindowDimensions,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import newGif from '../assets/images/new.gif';
import { FetchCollection } from '../API/FirebaseAPI';
import { debounce } from 'lodash';

const COLORS = {
  primary: '#2979ff',
  background: '#f0f0f0',
  card: '#FFFFFF',
  text: '#333333',
  subText: '#666666',
};

function CardBoards({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [fetchedData, setFetchedData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async (refresh = false) => {
    if (refresh) setIsRefreshing(true);
    setError(null);
    try {
      const response = await FetchCollection();
      setFetchedData(response);
      setSortedData(response);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data. Please try again.');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const handleSearch = useCallback(
    debounce((text) => {
      const filteredData = fetchedData.filter((item) =>
        item.name.toLowerCase().includes(text.toLowerCase())
      );
      setSortedData(filteredData);
    }, 300),
    [fetchedData]
  );

  const onSearchChange = (text) => {
    setSearchQuery(text);
    handleSearch(text);
  };

  const renderCard = ({ item }) => (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate('Check Result', item)}
      activeOpacity={0.7}
    >
      <View style={styles.cardContent}>
        <Image source={{ uri: item.imageUrl }} style={styles.imgStyle} />
        <View style={styles.contentStyle}>
          <View style={styles.titleRow}>
            <Text style={styles.titleStyle}>{item.name}</Text>
            {item.isNew && <Image source={newGif} style={styles.newGif} />}
          </View>
          <Text style={styles.dateStyle}>Date - {item.releaseDate}</Text>
        </View>
      </View>
      <View style={styles.openButton}>
        <Text style={styles.openButtonText}>Open</Text>
        <Ionicons name="arrow-forward" size={16} color={COLORS.card} />
      </View>
    </TouchableOpacity>
  );

  const ListEmptyComponent = () => (
    searchQuery !== '' && sortedData.length === 0 ? (
      <View style={styles.noResultContainer}>
        <Text style={styles.noResultText}>Not available</Text>
        <Text style={styles.noResultText}>Please tell me what you're looking for!</Text>
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => {
            Linking.openURL('mailto:vipankumar7607@gmail.com?subject=Query');
          }}
        >
          <Text style={styles.buttonText}>Send your query!❤️</Text>
        </TouchableOpacity>
      </View>
    ) : null
  );

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={COLORS.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity style={styles.retryButton} onPress={() => fetchData()}>
          <Text style={styles.retryButtonText}>Retry</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color={COLORS.subText} style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by Board name"
          value={searchQuery}
          onChangeText={onSearchChange}
        />
        {searchQuery !== '' && (
          <TouchableOpacity onPress={() => onSearchChange('')}>
            <Ionicons name="close-circle" size={20} color={COLORS.subText} />
          </TouchableOpacity>
        )}
      </View>
      <FlatList
        data={sortedData}
        renderItem={renderCard}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        ListEmptyComponent={ListEmptyComponent}
        numColumns={width > 600 ? 2 : 1}
        refreshing={isRefreshing}
        onRefresh={() => fetchData(true)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaContainer: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.card,
    borderRadius: 25,
    margin: 10,
    paddingHorizontal: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  listContainer: {
    padding: 10,
  },
  cardContainer: {
    backgroundColor: COLORS.card,
    borderRadius: 15,
    marginBottom: 15,
    overflow: 'hidden',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    flex: 1,
    margin: 5,
  },
  cardContent: {
    flexDirection: 'row',
    padding: 15,
  },
  imgStyle: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
  },
  contentStyle: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.text,
    marginRight: 10,
  },
  newGif: {
    width: 30,
    height: 15,
  },
  dateStyle: {
    fontSize: 14,
    color: COLORS.subText,
  },
  openButton: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  openButtonText: {
    color: COLORS.card,
    fontWeight: 'bold',
    marginRight: 5,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    backgroundColor: COLORS.primary,
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  buttonText: {
    color: COLORS.card,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  retryButtonText: {
    color: COLORS.card,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CardBoards;