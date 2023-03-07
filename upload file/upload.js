const multer = require("multer")
const path = require('path')

const storage = multer.diskStorage(
    {
        destination : function(req , file , cb) {
            if(file.fieldname === 'resume_upload')
            {
                cb(null , './uploads/resume');
            }
            else if(file.fieldname === 'image_upload')
            {
                cb(null , './uploads/image');
            }
        } ,
        filename : function(req , file , cb) {
            const extname = path.extname(file.originalname);
            const uniqueKey = Date.now() + extname;
            cb(null ,  uniqueKey);
        }
    }
    )

    // req.filename = storage.filename

const upload = multer({storage : storage});
module.exports = upload