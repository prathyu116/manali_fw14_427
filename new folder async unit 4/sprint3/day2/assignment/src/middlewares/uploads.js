const multer = require("multer");
const path = require("path");
const req = require("express/lib/request");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, "../uploads"));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null,  uniqueSuffix + '-' + file.originalname)
    }
})

const upload = multer({ storage: storage })

const fileFilter = (req, res, callback) =>{

    if(file.mimetype === image/jpeg || file.mimetype === image/png) {
        callback(null, true);
    } else {
        callback(null, false);

    }
   
}
  

const options = multer({
    storage,
    fileFilter,
    limits: {
        fileSize: 1024 * 1024 * 5
    }
})

const uploads = multer(options);

module.exports = uploads;