import React, { useEffect, useState } from 'react'
import { Text } from 'react-native'
import { FetchCollection } from '../API/FirebaseAPI';

const Testing = () => {
    const [fetchedData, setFetchedData] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await FetchCollection();
            setFetchedData(response);
            setSortedData(response); // Initialize sortedData with fetchedData
        } catch (error) {
            // console.error('Error fetching data:', error);
        }
    };

    // console.log(fetchedData);

    return (
        <Text>Testing</Text>
    )
}

export default Testing