import * as yup from 'yup'

export const signUpSchema = yup.object().shape({
    name: yup.string()
    .trim('Cannot contain white space')
    .required("Field cannot be empty")
    .transform(value => value.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ")),
    email: yup.string()
    .email("Please enter a valid email or username")
    .required("Please enter a valid email or username"),
    password: yup.string()
    .min(8,"Password must contain 8 characters")
    .required("Please enter a valid password"),
    confirm: yup.string()
    .oneOf([yup.ref('password'), null], "Password does not match!")
    .required("Please enter a valid password"),
})

export const signInSchema = yup.object().shape({
    email: yup.string()
    .required("Please enter a valid email or username"),
    password: yup.string()
    .required("Please enter a valid password"),
})
