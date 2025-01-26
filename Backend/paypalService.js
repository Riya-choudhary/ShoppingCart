// paypalService.js
const paypal = require('@paypal/checkout-server-sdk');
const Environment = paypal.core.SandboxEnvironment;
const Client = paypal.core.PayPalHttpClient;

const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

const environment = new Environment(clientId, clientSecret);
const client = new Client(environment);

module.exports = { client };
