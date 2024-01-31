import crypto from 'crypto';
import { OTP_SECRET } from '../config';

class HashService
{
    hashOtp(data)
    {
        // we can gave the secret otp using crypto.randomBytes(64).toString() for more security

        // in this method first we have to give it a hashing algorithm , then we gave it secret key for hashing , then we apply data and at last we give it a type of format in which we have to hash by default its a buffer
        return crypto.createHmac('sha256' , OTP_SECRET).update(data).digest('hex')
    }
}

export default new HashService();