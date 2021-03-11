import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


exports.newDone = functions.firestore
  .document('users/{userId}/done')
  .onCreate((snap, context) => {
    const newValue = snap.data();
    // ejemplo de obtención de datos
    const name = newValue.name;


  });
