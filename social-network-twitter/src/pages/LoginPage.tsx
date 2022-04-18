import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';

import loginBg from '../assets/loginBg.jpg';
import { CustomInput } from '../components/input/CustomInput';

import { auth_wrapper } from '../styles/auth-styles';
import { loginValidations } from '../validations/validations';
import { useDispatch } from 'react-redux';
import { handleGoogleLogin, handleLogin } from '../actions/auth';
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login';


const clientID = import.meta.env.VITE_GOOGLE_CLIENT_ID as string;


export const LoginPage = () => {    

  // TODO:RESPONSIVE

  const dispatch = useDispatch();

  const googleResponse = ( response: GoogleLoginResponse | any ) => {

    dispatch(handleGoogleLogin(response.tokenObj.id_token));

  }

  return (
	  <div className={ auth_wrapper.auth__container }>
      <img src={ loginBg } className={ auth_wrapper.auth__image } />

      <div className={ auth_wrapper.auth__side_container }>
        <div className={ auth_wrapper.auth__form_container }>
          <h1 className={ auth_wrapper.auth__form_title }>Login</h1>
          <Formik
            initialValues={{
              email: '',
              password: '',
              password2: ''
            }}
            onSubmit={ ( { email, password, password2 } ) => {
              dispatch( handleLogin({  email, password1: password, password2 }) );
              console.log({ email, password, password2});
              
            }}
            validationSchema={ () => loginValidations }
          >
            {
              ({ handleSubmit }) => (

                // Do abstractation
                <Form className={ auth_wrapper.auth__form } onSubmit={ handleSubmit }>
                  <CustomInput 
                    label='Email:'
                    name='email'
                    type='text'
                    autoComplete= 'off'
                    labelClassName={auth_wrapper.auth__form_label}
                    inputClassName={auth_wrapper.auth__form_input}
                  />

                  <CustomInput 
                    label='Password:'
                    name='password'
                    type='password'
                    autoComplete= 'off'
                    labelClassName={auth_wrapper.auth__form_label}
                    inputClassName={auth_wrapper.auth__form_input}
                  />

                  <CustomInput
                    label='Confirm Password:' 
                    type="password" 
                    name="password2"
                    autoComplete= 'off'
                    labelClassName={auth_wrapper.auth__form_label}
                    inputClassName={auth_wrapper.auth__form_input}
                  />
                  
                  <Link className={ auth_wrapper.auth__form_link } to='/auth/register'>Don't you have an account?</Link>


                  <button type="submit" className={ auth_wrapper.auth__form_submit }>Submit</button>
                  
                  <GoogleLogin 
                    // disabled={ false }
                    className='mt-5 w-3/5 p-3 rounded-lg flex items-center justify-center bg-red-500'
                    // TODO: Put it in a variable
                    clientId={ clientID }
                    buttonText='Login'
                    // style={{ backgroundColor: '#4285f4' }}
                    onSuccess={ googleResponse }
                    onFailure={ googleResponse }
                    cookiePolicy='single_host_origin'
                  />
                </Form>

              )
            }

          </Formik>
        </div>

      </div>
    </div>
  )
}
