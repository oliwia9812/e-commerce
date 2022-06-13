export const ValidateForm = ({name, email, message}) => {

    let errors = {}

    if(name.trim().length < 3) {
       errors.name = 'Name is required'
    }

    if(email.trim().length < 5) {
        errors.email = 'Email is required'
     } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email address is invalid'
     }

     if(message.trim().length < 10) {
        errors.message = 'Message is required'
     } 

     return errors;
}


export const ValidateEmail = email => {
    let errors = {}

    if(!email.trim()) {
        errors.email = 'Email is required'
     } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = 'Email address is invalid'
     }

     return errors;
}

