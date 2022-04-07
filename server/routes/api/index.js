const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        name: "aplicacioncompleta",
        version: "1.0.0",
        description: "Esta es una api para el desarrollo web y mobile con todo lo necesario para una aplicacion completa",
        modules:[{
            bodyParser: "https://www.npmjs.com/package/body-parser",
            compression: "https://www.npmjs.com/package/compression",
            connectMongo: "https://www.npmjs.com/package/connect-mongo",
            dotenv: "https://www.npmjs.com/package/dotenv",
            errorhandler: "https://www.npmjs.com/package/error-handler",
            express: "https://www.npmjs.com/package/express",
            expressFlash: "https://www.npmjs.com/package/express-flash",
            expressHandlebars: "https://www.npmjs.com/package/express-handlebars",
            expressSession: "https://www.npmjs.com/package/express-session",
            lusca: "https://www.npmjs.com/package/lusca",
            mongoose: "https://www.npmjs.com/package/mongoose",
            morgan: "https://www.npmjs.com/package/morgan",
            nodemon:"https://www.npmjs.com/package/nodemon",
        }]
    })
})



module.exports = router;