const multer = require('multer');

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../frontend/src/assets/images");
    },
    filename: (req, file, cb) => {
        cb(null, Math.round(new Date() / 1000) + "---" + file.originalname)
    },
});

const upload = multer({ storage: fileStorage});

module.exports = { upload };