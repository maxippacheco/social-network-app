import loginBg from '../assets/loginBg.jpg';
import { auth_wrapper } from '../styles/auth-styles';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';


export const RegisterPage = () => {


  return (
    <div className={auth_wrapper.auth__container}>
      <div className={auth_wrapper.auth__side_container}>
        <div className={auth_wrapper.auth__form_container}>
          <h1 className={auth_wrapper.auth__form_title}>Register</h1>

          <Formik
            initialValues={{
              name: '',
              email: '',
              password: ''
            }}
            onSubmit={ ( values ) => console.log( values )}
            // validationSchema={}
          >
            {
              ({ handleSubmit, errors }) => (
                <Form className={auth_wrapper.auth__form} onSubmit={ handleSubmit }>
                  <label className={auth_wrapper.auth__form_label}>Name:</label>
                  <Field 
                    type="text" 
                    className={auth_wrapper.auth__form_input} 
                    name="name"
                  />
                  
                  <label className={auth_wrapper.auth__form_label}>Email:</label>
                  <Field 
                    type="email" 
                    className={auth_wrapper.auth__form_input} 
                    name="email"
                  />

                  <label className={auth_wrapper.auth__form_label}>Password:</label>
                  <Field 
                    type="password" 
                    className={auth_wrapper.auth__form_input} 
                    name="password"
                  />

                  <Link className={auth_wrapper.auth__form_link} to="/auth/login">
                    Do you have an account?
                  </Link>

                  <button type="submit" className={auth_wrapper.auth__form_submit}>
                    Submit
                  </button>
                </Form>

              )
            }

          </Formik>
        </div>
      </div>

      <img src={loginBg} className={auth_wrapper.auth__image} />


    </div>
  );
};
