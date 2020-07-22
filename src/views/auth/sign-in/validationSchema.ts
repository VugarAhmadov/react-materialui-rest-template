import * as Yup from 'yup';

export const SigninSchema = Yup.object().shape({
    password: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
});
