'use client'
import Link from 'next/link'
import { useState } from 'react';
import { useFormik } from 'formik';
import { signIn } from 'next-auth/react';
import { useRouter } from "next/navigation";
import { signInSchema } from '@/lib/validationSchema';
import toast from 'react-hot-toast';

const LoginForm = () => {
    const router = useRouter();
    const [isValid,  setIsValid] = useState(true);

    const onSubmit = async (values) => {
        const result = await signIn('credentials', {
            redirect: false,
            email: values.email,
            password: values.password,
        });
        if (result?.error) {
            setIsValid(false);
        } else {
            toast.success('Login successfully!');
            setTimeout(() => {
                router.push('/home');
            }, 1500);
        }
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: signInSchema, onSubmit,
    });

    return (
        <div className='h-screen flex items-center justify-center'>
            <div className='flex flex-col items-center shadow-2xl rounded-xl py-3'>
                <p className='mb-5 text-2xl font-semibold'>Login</p>
                <form action="#" method='POST' onSubmit={handleSubmit}>
                    <div className='flex flex-col px-5'>
                        <div className='gap-2 flex flex-col mb-3'>
                            <input
                            type='text'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='email'
                            placeholder='Email / Username'
                            className={`text-field ${ !isValid || (errors.email && touched.email) ? "border-2 border-danger focus:outline-none" : ""}`} />
                            { isValid ? "" : (<p className='error-text'>Invalid username or password</p>)}
                            {errors.email && touched.email && <p className='error-text'>{errors.email}</p>}

                            <input
                            type='password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name='password'
                            placeholder='Password'
                            autoComplete='off'
                            className={`text-field ${ !isValid || (errors.password && touched.password) ? "border-2 border-danger focus:outline-none" : ""}`} />
                            {errors.password && touched.password && <p className='error-text'>{errors.password}</p>}
                        </div>
                        <button className='bg-cyan-500 rounded-md py-2.5 mb-2 text-white cursor-pointer'>Login</button>
                        <p className='text-sm text-center'>don't have an account? <Link href="/auth/signup" className='text-cyan-500'>Signup</Link></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm
