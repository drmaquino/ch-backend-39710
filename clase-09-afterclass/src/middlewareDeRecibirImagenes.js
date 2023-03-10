import multer from 'multer'

async function subirALaNube(rutaArchivo) {
    console.log(`subido a la nube en la ruta: ${rutaArchivo}!!`)
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './imagenes')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + '-' + file.originalname)
    }
})
const upload = multer({ storage })

const multerMid = upload.single('imagen')

export function middlewareDeRecibirImagenes(req, res, next) {
    multerMid(req, res, async () => {
        await subirALaNube(req.file.path)
        next()
    })
}