import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';

import loginBg from '../assets/loginBg.jpg';

import { wrapper } from '../styles/auth-styles';
import { loginValidations } from '../validations/validations';


export const LoginPage = () => {    

  // TODO:RESPONSIVE

  return (
	  <div className={ wrapper.auth__container }>
      <img src={ loginBg } className={ wrapper.auth__image } />

      <div className={ wrapper.auth__side_container }>
        <div className={ wrapper.auth__form_container }>
          <h1 className={ wrapper.auth__form_title }>Login</h1>
          <Formik
            initialValues={{
              name: '',
              password: '',
              password2: ''
            }}
            onSubmit={ ( values ) => console.log( values ) }
            validationSchema={ loginValidations }
          >
            {
              ({ handleSubmit }) => (
                <Form className={ wrapper.auth__form } onSubmit={ handleSubmit }>
                  <label className={ wrapper.auth__form_label }>Name:</label>
                  <Field 
                    type="text" 
                    className={ wrapper.auth__form_input } 
                    name="name"
                  />

                  <label className={ wrapper.auth__form_label }>Password:</label>
                  <Field 
                    type="password" 
                    className={ wrapper.auth__form_input } 
                    name="password"
                  />

                  <label className={ wrapper.auth__form_label }>Confirm Password:</label>
                  <Field 
                    type="password" 
                    className={ wrapper.auth__form_input } 
                    name="password2"
                  />

                  <Link className={ wrapper.auth__form_link } to='/auth/register'>Don't you have an account?</Link>

                  <button type="submit" className={ wrapper.auth__form_submit }>Submit</button>
                </Form>

              )
            }

          </Formik>
        </div>

      </div>
    </div>
  )
}
