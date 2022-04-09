import React from 'react'
import { View, Text, TextInput, Pressable, StyleSheet, TouchableOpacity } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Validator from 'email-validator'

const SignupForm = () => {
    const SignupFormSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('An email is required'),
        username: Yup.string().required('A username is required').min(3, 'Username must be at least 3 characters long'),
        password: Yup.string().required('A password is required').min(6, 'Password must be at least 6 characters long'),
    })

    return (
        <View style={styles.wrapper}>
            <Formik initialValues={{ email: '', username: '', password: '' }}
                          onSubmit={(values) => {
                                console.log(values)
                                //actions.setSubmitting(false)
                          }}
                          validationSchema={SignupFormSchema}
                          validateOnMount={true}
            >
                {({ handleChange, handleBlur, handleSubmit, values, errors, isValid }) => (
                    <>
                        <View style={[styles.inputField,
                                                {
                                                    borderColor: values.email.length < 1 || Validator.validate(values.email)
                                                                        ? '#ccc'
                                                                        : 'red'
                                                }
                                             ]}
                        >
                            <TextInput placeholder='Email'
                                              placeholderTextColor='#444'
                                              autoCapitalize='none'
                                              keyboardType='email-address'
                                              autoFocus={true}
                                              onChangeText={handleChange('email')}
                                              onBlur={handleBlur('email')}
                                              value={values.email}
                            />
                        </View>
                        <View style={[styles.inputField,
                                                {
                                                    borderColor: values.username.length < 1 || values.username.length >= 3
                                                                        ? '#ccc'
                                                                        : 'red'
                                                }
                                             ]}
                        >
                            <TextInput placeholder='Username'
                                                placeholderTextColor='#444'
                                                autoCapitalize='none'
                                                textContentType='username'
                                                onChangeText={handleChange('username')}
                                                onBlur={handleBlur('username')}
                                                value={values.username}
                            />
                        </View>
                        <View style={[styles.inputField,
                                                {
                                                    borderColor: values.password.length < 1 || values.password.length >= 6
                                                                        ? '#ccc'
                                                                        : 'red'
                                                }
                                                ]}
                        >
                            <TextInput placeholder='Password'
                                                placeholderTextColor='#444'
                                                autoCapitalize='none'
                                                secureTextEntry={true}
                                                textContentType='password'
                                                onChangeText={handleChange('password')}
                                                onBlur={handleBlur('password')}
                                                value={values.password}
                            />
                        </View>
                        <Pressable titleSize={20}
                                            style={[styles.button, 
                                                            {       
                                                                backgroundColor: isValid ? '#0096F6' : '#9ACAF7',
                                                            }
                                                        ]}
                                            onPress={handleSubmit}
                        >
                            <Text style={styles.buttonText}>Sign up :</Text>
                        </Pressable>
                        <View style={styles.signUpContainer}>
                            <Text style={styles.signUpText}>Already have an account?</Text>
                            <TouchableOpacity>
                                <Text style={styles.signUpLink}>Sign in</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </Formik>
        </View>
    )
}

export default SignupForm

const styles = StyleSheet.create({
    wrapper: {
        marginTop: 80,
    },

    inputField: {
        borderRadius: 4,
        padding: 12,
        backgroundColor: '#FAFAFA',
        marginBottom: 10,
        borderWidth: 1,
    },

    signUpContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        marginTop: 50,
    },

    button: {
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: 42,
        borderRadius: 4,
        marginTop: 50,
    },

    buttonText: {
        fontWeight: '600',
        color: '#fff',
        fontSize: 20,
    },
})