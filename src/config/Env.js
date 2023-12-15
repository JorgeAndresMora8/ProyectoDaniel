import {config} from "dotenv"
config()

export const DB_LOCAL_DEVELOP = process.env.DB_LOCAL_DEVELOP
export const DB_CLOUD_DEVELOP = process.env.DB_CLOUD_DEVELOP
export const SECRET_WORD = process.env.SECRET_WORD
export const DB_PASSWORD = process.env.DB_PASSWORD
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL