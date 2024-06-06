import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { FIREBASE_API_KEY } from '@env';

const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "resultappfirebase.firebaseapp.com",
    projectId: "resultappfirebase",
    storageBucket: "resultappfirebase.appspot.com",
    messagingSenderId: "990825774369",
    appId: "1:990825774369:web:21c2d9a3d653f8a1b81260"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db };