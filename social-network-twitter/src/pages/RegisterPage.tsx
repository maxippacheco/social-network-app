import loginBg from '../assets/loginBg.jpg';
import { auth_wrapper } from '../styles/auth-styles';
import { Link } from 'react-router-dom';
import { Field, Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { handleRegister } from '../actions/auth';


export const RegisterPage = () => {

  const dispatch = useDispatch();

  return (
    <div className={auth_wrapper.auth__container}>
      <div className={auth_wrapper.auth__side_container}>
        <div className={auth_wrapper.auth__form_container}>
          <h1 className={auth_wrapper.auth__form_title}>Register</h1>

          <Formik
            initialValues={{
              name: '',
              username: '',
              email: '',
              password: ''
            }}
            onSubmit={ async({ username, name, password, email }) => {
              dispatch( handleRegister({ username, name, password, email }) );
            }}
            // validationSchema={}
          >
            {
              ({ handleSubmit }) => (
                <Form className={auth_wrapper.auth__form} onSubmit={ handleSubmit }>
                  {/* TODO: IMPLEMENT MY CUSTOM LABEL */}
                  <label className={auth_wrapper.auth__form_label}>Name:</label>
                  <Field 
                    type="name" 
                    className={auth_wrapper.auth__form_input} 
                    name="name"
                    autoComplete="off"
                  />
                  <label className={auth_wrapper.auth__form_label}>Username:</label>
                  <Field 
                    type="text" 
                    className={auth_wrapper.auth__form_input} 
                    name="username"
                    autoComplete="off"
                  />
                  
                  <label className={auth_wrapper.auth__form_label}>Email:</label>
                  <Field 
                    type="email" 
                    className={auth_wrapper.auth__form_input} 
                    name="email"
                    autoComplete="off"
                  />

                  <label className={auth_wrapper.auth__form_label}>Password:</label>
                  <Field 
                    type="password" 
                    className={auth_wrapper.auth__form_input} 
                    name="password"
                    autoComplete="off"
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

      <img src={ loginBg } className={ auth_wrapper.auth__image } />


    </div>
  );
};
