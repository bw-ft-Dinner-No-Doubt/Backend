module.exports = {
    validateDiner
}

function validateDiner(diner){
    let errors = [];

    if(!diner.username || diner.username.length < 2){
        errors.push('please include a username with at least 2 characters')
    }
    if(!diner.password || diner.password.length < 4){
        errors.push('please include a password with at least 4 characters')
    }

    return {
        isSuccessful: errors.length > 0 ? false : true,
        errors
    }
}