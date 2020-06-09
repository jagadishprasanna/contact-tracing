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

 export const createUser = functions.https.onRequest((req, res) => {
   // Format the phone number to remove dashes and parens
  const phone = String(req.body.phone).replace(/[^\d]/g, "");

  // Create a new user account using that phone number
  admin.auth().createUser({ uid: phone })
    .then((user: any) => res.send(user))
    .catch((err: any) => res.status(422).send({ error: err }));
  
    
 });

 const db = admin.firestore();

 export const createEvents = functions.https.onRequest((req, res) => {
  db.collection('cities').add({
    name: 'Tokyo',
    country: 'Japan'
  }).then((ref:any) => {
    console.log('Added document with ID: ', ref.id);
    res.status(200).send(ref);
  });
  
});
