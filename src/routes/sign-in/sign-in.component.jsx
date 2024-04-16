import { Fragment } from 'react';
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase/firebase.utils';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

function SignIn() {
  return (
    <Fragment>
      <h1>Sign In Page</h1>
      <button onClick={handleSignInWithGooglePopup}>
        Sign in with google popup
      </button>
      <SignUpForm />
    </Fragment>
  );
  async function handleSignInWithGooglePopup() {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log('userDocRef', userDocRef);
  }
}

export default SignIn;
