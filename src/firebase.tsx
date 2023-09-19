import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyD8FvvCBaTorJ9WoJphErJnAVrxWQpNGtg',
    authDomain: 'bho-app-2bed6.firebaseapp.com',
    projectId: 'bho-app-2bed6',
    storageBucket: 'bho-app-2bed6.appspot.com',
    messagingSenderId: '889063801295',
    appId: '1:889063801295:web:527d24784f8a3ce82c92ba',
    measurementId: 'G-6W48B308Y6',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
