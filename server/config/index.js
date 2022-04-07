module.exports = {
    PORT: process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 3000,
    HOST: process.env.HOST || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    SESSION_SECRET: process.env.SESSION_SECRET || 'ESTAESUNAVARIABLESECRETA',
    MONGODB_URI: process.env.HOST || 'mongodb://localhost/aplicacioncompleta'
}