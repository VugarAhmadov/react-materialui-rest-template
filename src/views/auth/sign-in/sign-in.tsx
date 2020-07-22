/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { CssBaseline, Container, Button, Icon } from '@material-ui/core';
// import { Spinner } from 'components';
import { t } from 'i18n';
import { useAuth } from 'context/AuthContext';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Formik, Field } from 'formik';
import { TextField } from 'formik-material-ui';
// import { useNotifications } from 'context/NotificationsContext';
import { useStyle } from './sign-in.style';
import { SigninSchema } from './validationSchema';

export const SignIn: React.FC = () => {
    const classes = useStyle();
    const { email } = useAuth();
    // const { notify } = useNotifications();

    const initialValues = {
        password: '',
        email: email || '',
    };

    const onSubmit = (formData): void => {
        console.log('SigninForm', formData);
        //Write login code below
        // logIn({
        //     variables: {
        //         credentials: {
        //             email: formData.email,
        //             password: formData.password,
        //         },
        //     },
        // });

        //Then call complete

        // const user = jwtDecode(accessToken);
        //     saveAuthData({ accessToken, user });
        //     closeModal();

        //     notify({
        //         type: 'success',
        //         message: 'Welcome again!',
        //     });
    };

    return (
        <Container component="main" maxWidth="xs" className={classes.container}>
            <CssBaseline />
            <div className={classes.paper}>
                <div className={classes.logoContainer}>
                    <img src={require('assets/login-logo.png')} className={classes.logo} alt="Logo" />
                </div>
                {email && <h3 className={classes.passwordMessage}>{t('auth:passwordSent')}</h3>}
                <Formik initialValues={initialValues} validationSchema={SigninSchema} onSubmit={onSubmit}>
                    {({ handleSubmit }): any => {
                        return (
                            <form onSubmit={handleSubmit} className={classes.form}>
                                <Field
                                    component={TextField}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    margin="normal"
                                    autoComplete="off"
                                    autoFocus
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Icon className={classes.inputIcon}>mail_outline</Icon>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                <Field
                                    component={TextField}
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    margin="normal"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <Icon className={classes.inputIcon}>lock_outline</Icon>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                                {/* <Grid container>
                  <Grid item xs>
                    <Button className={classes.navButton} onClick={() => openForgotPass()}>
                      Forgot password?
                    </Button>
                  </Grid>
                </Grid> */}
                                <Button
                                    fullWidth
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.submit}
                                >
                                    Login
                                    {/* {loading && (
                                        <Spinner
                                            style={{ height: '18px', width: '18px', marginLeft: '10px' }}
                                            spinnerStyle={{ color: 'white', width: '100%' }}
                                        />
                                    )} */}
                                </Button>
                            </form>
                        );
                    }}
                </Formik>
            </div>
        </Container>
    );
};
