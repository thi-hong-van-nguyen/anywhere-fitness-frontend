import { useState, useEffect } from 'react'
import * as yup from 'yup'

export const useForm = (initialValues, initialErrors, schema) => {
    const [formValues, setFormValues] = useState(initialValues)
    const [errors, setErrors] = useState(initialErrors)
    const [isDisabled, setIsDisabled] = useState(false)

    const validation = (name, value) => {
        yup.reach(schema, name)
            .validate(value)
            .then(() => setErrors({ ...errors, [name]: '' }))
            .catch(err => setErrors({ ...errors, [name]: err.errors[0] }))
    }

    useEffect(() => {
        schema.isValid(formValues)
            .then(valid => setIsDisabled(!valid))
    }, [formValues])

    const change = e => {
        const { name, value, checked, type } = e.target
        const valueToUse = type === 'checkbox' ? checked : value
        validation(name, valueToUse)
        setFormValues({ ...formValues, [name]: valueToUse })
    }


    return [formValues, errors, change, isDisabled]
}
