import dotenv from 'dotenv';

// apply some configuration to dotenv
dotenv.config();

// access .env file keys to get values by process.env
export const {APP_PORT , OTP_SECRET , SMS_TOKEN , SMS_ID , SMS_PHONE_NUMBER , DB_URL , REFRESH_SECRET , ACCESS_SECRET , SERVER_URL} = process.env;