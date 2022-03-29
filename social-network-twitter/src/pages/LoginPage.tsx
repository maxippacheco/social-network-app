import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';

import loginBg from '../assets/loginBg.jpg';
import { CustomInput } from '../components/input/CustomInput';

import { auth_wrapper } from '../styles/auth-styles';
import { loginValidations } from '../validations/validations';
import { useDispatch } from 'react-redux';
import { handleLogin } from '../actions/auth';


export const LoginPage = () => {    

  // TODO:RESPONSIVE

  const dispatch = useDispatch();

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
                  />

                  <CustomInput 
                    label='Password:'
                    name='password'
                    type='password'
                    autoComplete= 'off'
                  />

                  <CustomInput
                    label='Confirm Password:' 
                    type="password" 
                    name="password2"
                    autoComplete= 'off'
                  />

                  <Link className={ auth_wrapper.auth__form_link } to='/auth/register'>Don't you have an account?</Link>

                  <button type="submit" className={ auth_wrapper.auth__form_submit }>Submit</button>
                </Form>

              )
            }

          </Formik>
        </div>

      </div>
    </div>
  )
}
