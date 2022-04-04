import * as Yup from 'yup';

export const registerValidations = Yup.object({
	name:    Yup.string().max(15, 'The max of characters is 15').required('Required'),
	email:    Yup.string().max(25, 'The max of characters is 15').email().required('Required'),
	password: Yup.string().min(6, 'The password must be minimum 6 characters').required('Required'),
});

export const loginValidations = Yup.object({
	email:    Yup.string().max(35, 'The max of characters is 15').required('Required'),
	password: Yup.string().min(6, 'The password must be minimum 6 characters').required('Required'),
	password2: Yup.string().min(6, 'The password must be minimum 6 characters').required('Required').oneOf([Yup.ref('password')], 'password must match'),

});