import * as yup from 'yup'

const signupSchema = yup.object().shape({
    username: yup
        .string()
        .trim()
        .required('Username is required field')
        .min(6, 'Username should have at least 6 characters')
        .max(30, 'Username should have at most 30 characters'),
    password: yup
        .string()
        .trim()
        .required('Password is required field')
        .min(6, 'Username should have at least 6 characters')
        .max(30, 'Username should have at most 30 characters'),
    role: yup
        .string()
        .trim(),
    term: yup
        .boolean()
        .required("The terms and conditions must be accepted.")
        .oneOf([true], "The terms and conditions must be accepted.")
})

export default signupSchema
