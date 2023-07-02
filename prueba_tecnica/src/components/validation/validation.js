const validation = (userData) => {
    const errors = {}

    if(!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(userData.email)){
        errors.email = 'Incorrect email'
    }
    if(!userData.email){
        errors.email = 'Emty email'
    }
    if(userData.email.length > 35){
        errors.email = 'To long, try it to make less then 35'
    }

    if(!/.\*d+.*/.test(userData.password)){
        errors.password = 'Password must have at least one number'
    }

    if(userData.password.length < 6 || userData.password.length > 10 ){
        errors.password = 'Password must be between 6 and 10 characters'
    }

    return errors
}

export default validation