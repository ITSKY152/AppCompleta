/**
 * Module dependencies.
 */
const bodyParser = require('body-parser');
const compression = require('compression');
const dotenv = require("dotenv")
const express = require('express');
const { engine } = require('express-handlebars');
const errorHandler = require('errorhandler');
const flash = require('express-flash');
const lusca = require('lusca');
const MongoStore = require('connect-mongo')
const morgan = require('morgan');
const session = require('express-session');
/**
 * Create Express server.
 */
const app = express();
/**
 * Load environment variables from .env file.
 */
if (app.get('env').trim() === 'development') {
    dotenv.config({ path: '.env.dev' });
} else {
    dotenv.config({ path: '.env' });
}
/**
 * Global Variables.
 */
const { PORT, HOST, SESSION_SECRET, MONGODB_URI } = require('./config');
/**
 * Database connection.
 */
const database = require('./database');
database.connect();
/**
 * Express configuration.
 */
app.set('port', PORT);
app.set('host', HOST);
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', __dirname + '/views');
app.use(morgan('dev'));
app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1209600000 },
    store: MongoStore.create({ mongoUrl: MONGODB_URI })
}));
app.use(lusca.xframe('SAMEORIGIN'));
app.use(lusca.xssProtection(true));
app.disable('x-powered-by');
/**
 * App Routes.
 */
app.use("/", require("./routes"));
/**
 * Error Handler.
 */
if (app.get('env').trim() === 'development') {
    app.use(errorHandler());
} else {
    app.use((err, req, res) => {
        console.error(err);
        res.status(500).send('Server Error');
    });
}
/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
    console.log(`App is running on http://localhost:${app.get('port')} in ${app.get('env')} mode`);
    console.log(`Press Ctrl-C to quit.`);
});