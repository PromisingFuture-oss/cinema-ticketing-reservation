'use client'
import React from 'react'
import Link from 'next/link'
import { signUpSchema } from '@/lib/validationSchema'
import axios from '@/lib/axios'
import { useFormik } from 'formik';
import toast from 'react-hot-toast'

const SignupForm = () => {

    const onSubmit = async (values, actions) => {
        try {
            const response = await axios.post('/api/signup', values);
            if (response.status !== 200) {
                toast.error('Connection Error!', {
                    style: {
                      border: '2px solid #DC3545',
                      padding: '16px',
                      color: '#000000',
                    },
                });
                actions.resetForm();
            } else {
                toast.success('Account Created Successfully!', {
                    style: {
                      border: '2px solid #22c55e',
                      padding: '16px',
                      color: '#000000',
                    },
                });
                actions.resetForm();
            }
        }catch(error) {
            return (toast.error('Network Error!', {
                style: {
                  border: '2px solid #DC3545',
                  padding: '16px',
                  color: '#000000',
                },
            }),

            actions.resetForm());
        }

    }
    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirm: "",
        },
        validationSchema: signUpSchema, onSubmit,
    });
    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='flex flex-col items-center shadow-2xl rounded-xl w-110 py-6'>
                <p className='mb-5 text-2xl font-semibold'>Signup</p>
                <form action="#" method='POST' onSubmit={handleSubmit}>
                    <div className='flex flex-col'>
                        <div className='gap-2 flex flex-col mb-3'>
                            <input type='text'
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='name'
                            placeholder='Full Name'
                            className={`text-field ${errors.name && touched.name ? "border-2 border-danger focus:outline-none" : ""}`} />
                            {errors.name && touched.name && <p className='error-text'>{errors.name}</p>}

                            <input type='email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='email'
                            placeholder='Email'
                            className={`text-field ${errors.email && touched.email ? "border-2 border-danger focus:outline-none" : ""}`} />
                            {errors.email && touched.email && <p className='error-text'>{errors.email}</p>}

                            <input type='password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='password'
                            placeholder='Password'
                            className={`text-field ${errors.password && touched.password ? "border-2 border-danger focus:outline-none" : ""}`} />
                            {errors.password && touched.password && <p className='error-text'>{errors.password}</p>}

                            <input type='password'
                            value={values.confirm}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='confirm'
                            placeholder='Confirm'
                            className={`text-field ${errors.confirm && touched.confirm ? "border-2 border-danger focus:outline-none" : ""}`} />
                            {errors.confirm && touched.confirm && <p className='error-text'>{errors.confirm}</p>}
                        </div>
                        <button className='bg-cyan-500 rounded-md py-2.5 mb-2 text-white cursor-pointer'>Sign Up</button>
                        <p className='text-sm text-center'>already have an account? <Link href="/auth/login" className='text-cyan-500'>Login</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignupForm
