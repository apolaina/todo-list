import { createContext } from 'react';
import { FirebaseApp, initializeApp } from 'firebase/app';
import { firebaseConfig } from './environments';

export const firebaseApp = initializeApp(firebaseConfig);

export const FirebaseContext = createContext<FirebaseApp>(firebaseApp);