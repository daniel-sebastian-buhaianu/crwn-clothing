import { useState } from 'react';
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import Button from '../button/button.component';
import './sign-in-form.styles.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

function SignInForm() {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  return (
    <div className='sign-up-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleInputChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleInputChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <Button
            type='button'
            onClick={signInWithGoogle}
            buttonType={'google'}
          >
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  }
  async function handleFormSubmit(event) {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      alert('Signed In');
    } catch (error) {
      alert('Error');
      console.log(error);
    }
  }
  function resetFormFields() {
    setFormFields(defaultFormFields);
  }
  async function signInWithGoogle() {
    await signInWithGooglePopup();
    alert('Signed In');
  }
}

export default SignInForm;
