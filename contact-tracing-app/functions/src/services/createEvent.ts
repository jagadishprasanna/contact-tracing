import * as functions from 'firebase-functions';


// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//


let admin = require("firebase-admin");

const serviceAccount = require("../src/config/service_account");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://anonym-bc63e.firebaseio.com"
});

 export const createEvents = functions.https.onRequest((req, res) => {
   res.status(200).send("Creted Event");  
 });
