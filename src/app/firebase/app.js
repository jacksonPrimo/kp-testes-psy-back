const admin = require('firebase-admin');

// const serviceAccount = require('./secretKey.json');
const secretKey = require('./secretKey.json');
const serviceAccount = {
  "type": process.env.type || secretKey.type,
  "project_id": process.env.project_id || secretKey.project_id,
  "private_key_id": process.env.private_key_id || secretKey.private_key,
  "private_key": process.env.private_key || secretKey.private_key,
  "client_email": process.env.client_email || secretKey.client_email,
  "client_id": process.env.client_id || secretKey.client_id,
  "auth_uri": process.env.auth_uri || secretKey.auth_uri,
  "token_uri": process.env.token_uri || secretKey.token_uri,
  "auth_provider_x509_cert_url": process.env.auth_provider_x509_cert_url || secretKey.auth_provider_x509_cert_url,
  "client_x509_cert_url": process.env.client_x509_cert_url || secretKey.client_x509_cert_url,
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
module.exports = admin;
