import loginBg from '../assets/loginBg.jpg';
import { wrapper } from '../styles/auth-styles';
import { Link } from 'react-router-dom';
import { Field, Form, Formik, ErrorMessage } from 'formik';


export const RegisterPage = () => {


  return (
    <div className={wrapper.auth__container}>
      <div className={wrapper.auth__side_container}>
        <div className={wrapper.auth__form_container}>
          <h1 className={wrapper.auth__form_title}>Register</h1>

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
                <Form className={wrapper.auth__form} onSubmit={ handleSubmit }>
                  <label className={wrapper.auth__form_label}>Name:</label>
                  <Field 
                    type="text" 
                    className={wrapper.auth__form_input} 
                    name="name"
                  />
                  
                  <label className={wrapper.auth__form_label}>Email:</label>
                  <Field 
                    type="email" 
                    className={wrapper.auth__form_input} 
                    name="email"
                  />

                  <label className={wrapper.auth__form_label}>Password:</label>
                  <Field 
                    type="password" 
                    className={wrapper.auth__form_input} 
                    name="password"
                  />

                  <Link className={wrapper.auth__form_link} to="/auth/login">
                    Do you have an account?
                  </Link>

                  <button type="submit" className={wrapper.auth__form_submit}>
                    Submit
                  </button>
                </Form>

              )
            }

          </Formik>
        </div>
      </div>

      <img src={loginBg} className={wrapper.auth__image} />


    </div>
  );
};
