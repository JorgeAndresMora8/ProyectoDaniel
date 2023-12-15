import bcrypt from "bcrypt"

const salt = 10; 

export async function hashPassword(password){ 
    let newPassword
    await bcrypt.hash(password, salt).then((hash) => { 
        newPassword = hash
    })
    return newPassword
}

export async function comparePassword(password, passwordHashed){ 
    let result 
    await bcrypt.compare(password, passwordHashed).then(function(bool){ 
        result = bool
    })

    return result
}
