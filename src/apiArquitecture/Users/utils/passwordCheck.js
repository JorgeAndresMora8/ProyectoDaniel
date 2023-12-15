import bcrypt from "bcrypt"

export const checkPassword = async (password, hashedPassword) => { 

    const isCorrect = await bcrypt.compare(password, hashedPassword)
    if(!isCorrect) throw new Error("Incorrect password")
}