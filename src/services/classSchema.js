import * as yup from 'yup'

export const classSchema = yup.object().shape({
    class_type: yup
        .string()
        .trim()
        .required('class type is required'),
    class_location: yup
        .string()
        .trim()
        .required('location is required'),
    class_date: yup
        .string()
        .trim()
        .required('date is required'),
    class_time: yup
        .string()
        .trim()
        .required('time is required'),
    class_duration: yup
        .number()
        .required('class duration is required'),
    intensity_level: yup
        .string()
        .oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'], 'Please choose intensity level')

})
