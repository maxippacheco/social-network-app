import loginBg from '../assets/loginBg.jpg';
import { auth_wrapper } from '../styles/auth-styles';
import { Link, Navigate } from 'react-router-dom';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { handleRegister } from '../actions/auth';
import { CustomInput } from '../components/input/CustomInput';


export const RegisterPage = () => {

  const dispatch: any = useDispatch();

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

              return <Navigate to='/login' />
            }}
            // validationSchema={}
          >
            {
              ({ handleSubmit }) => (
                <Form className={auth_wrapper.auth__form} onSubmit={ handleSubmit }>
                  
                  <CustomInput
                    label='Name:' 
                    type="text" 
                    name="name"
                    autoComplete= 'off'
                    labelClassName={auth_wrapper.auth__form_label}
                    inputClassName={auth_wrapper.auth__form_input}
                  />

                  <CustomInput
                    label='Username:' 
                    type="text" 
                    name="username"
                    autoComplete= 'off'
                    labelClassName={auth_wrapper.auth__form_label}
                    inputClassName={auth_wrapper.auth__form_input}
                  />

                  <CustomInput
                    label='Email:' 
                    type="email" 
                    name="email"
                    autoComplete= 'off'
                    labelClassName={auth_wrapper.auth__form_label}
                    inputClassName={auth_wrapper.auth__form_input}
                  />
                  
                  <CustomInput
                    label='Password:' 
                    type="password" 
                    name="password"
                    autoComplete= 'off'
                    labelClassName={auth_wrapper.auth__form_label}
                    inputClassName={auth_wrapper.auth__form_input}
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
