import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const FetchCollection = async () => {
    try {
        const collectionRef = collection(db, "boards"); // Assuming "boards" is your collection name
        const querySnapshot = await getDocs(collectionRef);

        const documents = [];
        querySnapshot.forEach((doc) => {
            if (doc.exists()) {
                const data = doc.data();
                documents.push({ id: doc.id, ...data });
            }
        });

        // console.log('Collection data:', documents);
        return documents; // Return the collection data if needed
    } catch (error) {
        // console.error('Error fetching collection:', error);
    }
};