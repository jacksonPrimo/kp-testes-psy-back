const admin = require('firebase-admin');

const serviceAccount = require('./secretKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
module.exports = admin;
