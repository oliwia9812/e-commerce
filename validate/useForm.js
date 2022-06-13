import { useEffect, useState } from "react";

export const useForm = (callback, validate) => {

    const [ formValues, setFormValues ] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [ errors, setErrors ] = useState({});
    const [ isSubmitting, setIsSubmitting ] = useState(false);
   
    const handleChange = e => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(formValues));
        setIsSubmitting(true);
    }

    useEffect(()=>{
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }

    },[errors])

    return { handleChange, handleSubmit, errors, formValues }
}

export const useEmail = (callback, validate) => {

    const [ email, setEmail ] = useState('');
    const [ errors, setErrors ] = useState({});
    const [ isSubmitting, setIsSubmitting ] = useState(false);

    const handleChange = e => {
        setEmail(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(email));
        setIsSubmitting(true);
    }

    useEffect(() => {
        if (Object.keys(errors).length === 0 && isSubmitting) {
            callback();
        }

    }, [errors]);

    return {email, handleChange, handleSubmit, errors}
}