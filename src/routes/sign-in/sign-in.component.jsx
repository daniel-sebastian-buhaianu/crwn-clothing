import { Fragment } from 'react';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';

function SignIn() {
  return (
    <Fragment>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with google popup</button>
    </Fragment>
  );
  async function logGoogleUser() {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log('userDocRef', userDocRef);
  }
}

export default SignIn;
