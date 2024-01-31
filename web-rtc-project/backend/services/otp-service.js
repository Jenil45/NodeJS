import crypto from 'crypto';
import { SMS_ID , SMS_TOKEN , SMS_PHONE_NUMBER } from '../config';
import client from 'twilio';
import hashService from './hash-service';

const twilio = client(SMS_ID , SMS_TOKEN , {
    lazyLoading:true
})

class OtpService
{
    generateOtp()
    {
        // in crypto.randomInt() we have to give it range , we have to generate 4 digit otp so we gave range according to it
        const otp = crypto.randomInt(1000 , 9999);

        return otp;
    }

    async sendOtpSms(phone , otp)
    {
        return await twilio.messages.create({
            to : phone ,
            from : SMS_PHONE_NUMBER ,
            body : `Your webRTC otp is ${otp}`,
        });
    }

    verifyOtp(hashedOtp , data)
    {
        let computedHash = hashService.hashOtp(data);

        return computedHash === hashedOtp;
    }
}

export default new OtpService();