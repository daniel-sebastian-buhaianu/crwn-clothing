import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDYZ02EqZPMmSxE9_QXPjGgT6GQlj2Pp_M',
  authDomain: 'crwn-clothing-db-c83fb.firebaseapp.com',
  projectId: 'crwn-clothing-db-c83fb',
  storageBucket: 'crwn-clothing-db-c83fb.appspot.com',
  messagingSenderId: '224731563689',
  appId: '1:224731563689:web:769cc2dfc277b9ed6ecbb8',
};
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};
