const multer = require("multer");
const path = require("path");
const { nextTick } = require("process");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,"../uploads"));
    },
    filename: function (req, file, cb) {
      const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, uniquePrefix + '-' + file.originalname)
    }
  })
  
  function fileFilter (req, file, cb) {

    if(file.mimetype==="image/jpeg" || file.mimetype==="image/png"){        
        cb(null, true)
    }
    else{

      cb(new Error("FileType not supported"), false)
    }
  }



  module.exports = multer({
    storage,
    fileFilter
})